"""Tests for tools/build.py's checks. Run: python3 -m unittest discover tools"""
import os
import shutil
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build  # noqa: E402

CATEGORY = """---
name: Robots
layer: build
order: 1
question: Which tasks can machines do?
---
Text.
"""

COMPANY = """---
name: Example Robots
summary: Makes robots.
website: https://example.com
hq: Leeds, UK
founded: 2020
type: startup
status: active
categories: [robots]
ai_role: core
ring: trial
ring_note: Worth a pilot.
verification: ai-draft
last_checked: 2026-10-23
sources:
  - title: Company page
    publisher: Example
    url: https://example.com/about
    kind: company
    supports: what it does
  - title: News story
    publisher: A newspaper
    url: https://news.example.org/story
    kind: news
    supports: founded 2020
---
## What it does
Robots.
"""


class BuildChecks(unittest.TestCase):
    def setUp(self):
        self.root = tempfile.mkdtemp()
        for folder in ("companies", "categories", "analyses"):
            os.mkdir(os.path.join(self.root, folder))
        self.write("categories/robots.md", CATEGORY)
        self.old_root, build.ROOT = build.ROOT, self.root

    def tearDown(self):
        build.ROOT = self.old_root
        shutil.rmtree(self.root)

    def write(self, rel, text):
        with open(os.path.join(self.root, rel), "w", encoding="utf-8") as f:
            f.write(text)

    def problems_for(self, company_text):
        self.write("companies/example-robots.md", company_text)
        return build.build()[1]

    def test_a_good_entry_passes(self):
        self.assertEqual(self.problems_for(COMPANY), [])

    def test_unknown_category_is_caught(self):
        problems = self.problems_for(COMPANY.replace("[robots]", "[drones]"))
        self.assertTrue(any("unknown category 'drones'" in p for p in problems), problems)

    def test_only_company_written_sources_are_caught(self):
        problems = self.problems_for(COMPANY.replace("kind: news", "kind: company"))
        self.assertTrue(any("not written by the company" in p for p in problems), problems)

    def test_one_source_is_not_enough(self):
        one = COMPANY.split("  - title: News story")[0] + "---\nText.\n"
        problems = self.problems_for(one)
        self.assertTrue(any("at least two sources" in p for p in problems), problems)

    def test_bad_ring_and_missing_field_are_caught(self):
        text = COMPANY.replace("ring: trial", "ring: maybe").replace("hq: Leeds, UK\n", "")
        problems = self.problems_for(text)
        self.assertTrue(any("'ring' is 'maybe'" in p for p in problems), problems)
        self.assertTrue(any("missing field 'hq'" in p for p in problems), problems)

    def test_non_https_link_is_caught(self):
        problems = self.problems_for(COMPANY.replace("https://news.example.org", "http://news.example.org"))
        self.assertTrue(any("must start with https://" in p for p in problems), problems)

    def test_unquoted_colon_gives_line_number_and_tip(self):
        problems = self.problems_for(COMPANY.replace("Worth a pilot.", "Note: worth a pilot."))
        self.assertTrue(any("line" in p and "double quotes" in p for p in problems), problems)

    def test_active_company_needs_a_ring(self):
        problems = self.problems_for(COMPANY.replace("ring: trial", "ring: null"))
        self.assertTrue(any("only a closed company" in p for p in problems), problems)


if __name__ == "__main__":
    unittest.main()
