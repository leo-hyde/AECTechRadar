#!/usr/bin/env python3
"""Check the research files and build the combined data the site and AI tools read.

Reads   companies/*.md, categories/*.md, analyses/*.md
        (each: a YAML "front matter" block between --- lines, then Markdown text)
Writes  data/radar.json  the whole radar as one JSON file (for AI tools and scripts)
        data/radar.js    the same, as a script the page loads (works when opened
                         straight from disk, where browsers block reading JSON files)
        llms.txt         a plain index of everything, for AI tools (llmstxt.org)

    python3 tools/build.py          check, then rebuild the files above
    python3 tools/build.py --check  check only; fail if the built files are out of date

Needs PyYAML (pip3 install pyyaml). Any problem is printed with the file name,
and nothing is written until every file passes.
"""
import datetime
import json
import os
import re
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://leo-hyde.github.io/aec-tech-radar"
REPO = "https://github.com/leo-hyde/aec-tech-radar"

# The allowed values. Their meanings are in docs/METHOD.md: change both together.
RINGS = ["adopt", "trial", "assess", "hold"]
AI_ROLES = ["core", "embedded", "enabler"]
STATUSES = ["active", "being-acquired", "acquired", "closed"]
COMPANY_TYPES = ["incumbent", "scale-up", "startup"]
VERIFICATION = ["ai-draft", "checked"]
LAYERS = ["foundation", "design", "plan", "build", "operate"]
SOURCE_KINDS = ["company", "news", "analysis", "database"]
ANALYSIS_KINDS = ["report", "list", "article", "opinion", "data"]

COMPANY_FIELDS = {
    "name": str, "summary": str, "website": (str, type(None)), "hq": str,
    "founded": (int, type(None)), "type": str, "status": str, "categories": list,
    "ai_role": str, "ring": (str, type(None)), "ring_note": str,
    "verification": str, "last_checked": datetime.date, "sources": list,
}
CATEGORY_FIELDS = {"name": str, "layer": str, "order": int, "question": str}
ANALYSIS_FIELDS = {
    "title": str, "publisher": str, "date": (str, datetime.date), "url": str, "kind": str,
    "independence": str, "last_checked": datetime.date,
}


def read_entry(path):
    """Split a file into its front matter (a dict) and its Markdown body."""
    with open(path, encoding="utf-8") as f:
        text = f.read()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    if not m:
        raise ValueError("must start with a --- front matter block ---")
    meta = yaml.safe_load(m.group(1)) or {}
    if not isinstance(meta, dict):
        raise ValueError("front matter must be a set of 'field: value' lines")
    return meta, m.group(2).strip()


def check_fields(meta, fields, problems):
    for name, kind in fields.items():
        if name not in meta:
            problems.append(f"missing field '{name}'")
        elif not isinstance(meta[name], kind):
            problems.append(f"'{name}' has the wrong type ({type(meta[name]).__name__})")
    for name in meta:
        if name not in fields:
            problems.append(f"unknown field '{name}' (typo?)")


def check_choice(meta, name, allowed, problems, optional=False):
    value = meta.get(name)
    if optional and value is None:
        return
    if value not in allowed:
        problems.append(f"'{name}' is {value!r}; allowed: {', '.join(allowed)}")


def check_url(url, where, problems):
    if not isinstance(url, str) or not re.match(r"^https://[^\s]+$", url):
        problems.append(f"{where}: web address must start with https:// ({url!r})")


def load_collection(folder):
    """Every .md file in a folder (except README.md), as (id, meta, body, problems)."""
    out = []
    path = os.path.join(ROOT, folder)
    for name in sorted(os.listdir(path)):
        if not name.endswith(".md") or name == "README.md":
            continue
        entry_id = name[:-3]
        problems = []
        if not re.match(r"^[a-z0-9]+(-[a-z0-9]+)*$", entry_id):
            problems.append("file name must be lower-case words joined by hyphens")
        try:
            meta, body = read_entry(os.path.join(path, name))
        except (ValueError, yaml.YAMLError) as e:
            meta, body = {}, ""
            mark = getattr(e, "problem_mark", None)
            where = f" (line {mark.line + 2})" if mark else ""   # +2: 0-based, after the first ---
            hint = " Tip: put text containing ': ' in double quotes." if "mapping values" in str(e) else ""
            problems.append(str(e).splitlines()[0] + where + "." + hint)
        out.append((entry_id, meta, body, problems))
    return out


def build():
    """Check everything. Returns (data, problems): problems is a list of strings."""
    all_problems = []
    categories, companies, analyses = [], [], []

    for cid, meta, body, problems in load_collection("categories"):
        if meta:
            check_fields(meta, CATEGORY_FIELDS, problems)
            check_choice(meta, "layer", LAYERS, problems)
        categories.append(dict(meta, id=cid, body=body, file=f"categories/{cid}.md"))
        all_problems += [f"categories/{cid}.md: {p}" for p in problems]
    category_ids = {c["id"] for c in categories}

    for cid, meta, body, problems in load_collection("companies"):
        if meta:
            check_fields(meta, COMPANY_FIELDS, problems)
            check_choice(meta, "type", COMPANY_TYPES, problems)
            check_choice(meta, "status", STATUSES, problems)
            check_choice(meta, "ai_role", AI_ROLES, problems)
            check_choice(meta, "ring", RINGS, problems, optional=True)
            check_choice(meta, "verification", VERIFICATION, problems)
            if meta.get("ring") is None and meta.get("status") != "closed":
                problems.append("only a closed company may have no ring")
            if meta.get("website") is not None:
                check_url(meta.get("website"), "website", problems)
            for cat in meta.get("categories") or []:
                if cat not in category_ids:
                    problems.append(f"unknown category '{cat}' (see categories/)")
            if not meta.get("categories"):
                problems.append("needs at least one category")
            sources = meta.get("sources") or []
            if len(sources) < 2:
                problems.append("needs at least two sources")
            for i, s in enumerate(sources, 1):
                if not isinstance(s, dict):
                    problems.append(f"source {i} must be a set of fields")
                    continue
                for k in ("title", "url", "publisher", "kind", "supports"):
                    if not s.get(k):
                        problems.append(f"source {i} is missing '{k}'")
                check_url(s.get("url"), f"source {i}", problems)
                check_choice(s, "kind", SOURCE_KINDS, problems)
            if not any(isinstance(s, dict) and s.get("kind") != "company" for s in sources):
                problems.append("needs at least one source not written by the company itself")
        companies.append(dict(meta, id=cid, body=body, file=f"companies/{cid}.md"))
        all_problems += [f"companies/{cid}.md: {p}" for p in problems]

    for aid, meta, body, problems in load_collection("analyses"):
        if meta:
            check_fields(meta, ANALYSIS_FIELDS, problems)
            check_choice(meta, "kind", ANALYSIS_KINDS, problems)
            check_url(meta.get("url"), "url", problems)
        analyses.append(dict(meta, id=aid, body=body, file=f"analyses/{aid}.md"))
        all_problems += [f"analyses/{aid}.md: {p}" for p in problems]

    categories.sort(key=lambda c: (LAYERS.index(c.get("layer", "foundation"))
                                   if c.get("layer") in LAYERS else 0, c.get("order", 0)))
    companies.sort(key=lambda c: str(c.get("name", "")).lower())
    analyses.sort(key=lambda a: str(a.get("date", "")), reverse=True)

    checked = [c.get("last_checked") for c in companies + analyses]
    checked = [d for d in checked if isinstance(d, datetime.date)]
    data = {
        "about": "AEC Tech Radar: a research map of construction (AEC) technology firms. "
                 "Entries marked verification: ai-draft were researched by an AI and not yet "
                 "checked by a person; check the sources before relying on them.",
        "site": SITE, "repo": REPO,
        "data_as_of": max(checked).isoformat() if checked else None,
        "rings": RINGS, "ai_roles": AI_ROLES, "layers": LAYERS,
        "categories": categories, "companies": companies, "analyses": analyses,
    }
    return data, all_problems


def render_llms_txt(data):
    """The llms.txt index: a short intro, then links to every file's raw Markdown."""
    lines = [
        "# AEC Tech Radar", "",
        "> A research map of construction, engineering and architecture (AEC) technology "
        "firms, with sources for every fact. Entries marked ai-draft were researched by an AI "
        "and not yet checked by a person: check the sources before relying on them.", "",
        f"Everything in one file: {SITE}/data/radar.json",
        f"How the research is done and what the fields mean: {SITE}/docs/METHOD.md", "",
        "## Categories", "",
    ]
    for c in data["categories"]:
        lines.append(f"- [{c['name']}]({SITE}/{c['file']}): {c.get('question', '')}")
    lines += ["", "## Companies", ""]
    for c in data["companies"]:
        lines.append(f"- [{c['name']}]({SITE}/{c['file']}): {c.get('summary', '')} "
                     f"(ring: {c.get('ring') or 'none'}; {c.get('verification')})")
    lines += ["", "## Other people's analysis", ""]
    for a in data["analyses"]:
        lines.append(f"- [{a['title']}]({SITE}/{a['file']}): {a.get('publisher')}, {a.get('date')}")
    return "\n".join(lines) + "\n"


def outputs(data):
    as_json = json.dumps(data, indent=1, ensure_ascii=False, default=str) + "\n"
    return {
        "data/radar.json": as_json,
        "data/radar.js": "// Built by tools/build.py from the .md files: don't edit by hand.\n"
                         "window.RADAR = " + as_json.rstrip("\n") + ";\n",
        "llms.txt": render_llms_txt(data),
    }


def main(argv):
    data, problems = build()
    if problems:
        print(f"{len(problems)} problem(s) found, nothing written:")
        for p in problems:
            print("  - " + p)
        return 1
    stale = []
    for rel, text in outputs(data).items():
        path = os.path.join(ROOT, rel)
        old = open(path, encoding="utf-8").read() if os.path.exists(path) else None
        if old != text:
            stale.append(rel)
            if "--check" not in argv:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(text)
    counts = (f"{len(data['companies'])} companies, {len(data['categories'])} categories, "
              f"{len(data['analyses'])} analyses")
    if "--check" in argv:
        if stale:
            print(f"All files pass ({counts}), but these are out of date: {', '.join(stale)}. "
                  "Run: python3 tools/build.py")
            return 1
        print(f"All files pass and built files are up to date ({counts}).")
    else:
        print(f"All files pass ({counts}). " +
              (f"Rebuilt: {', '.join(stale)}." if stale else "Built files were already up to date."))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
