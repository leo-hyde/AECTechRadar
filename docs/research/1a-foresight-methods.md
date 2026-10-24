# Foresight earns trust through transparency, not prediction

## In plain English (read this first)

**What this report is.** "Foresight" means the methods professionals use to
look ahead at technology: scanning for early signs of change, asking experts
in structured ways, rating how mature a technology is, and counting patents
and research papers. I reviewed what the research says about these methods,
so we can choose how the radar should work.

**What it found, in five points.**
1. No method predicts well far ahead. Forecasts more than ten years out came
   true only about one time in seven.
2. Foresight pays off when it is tied to a named decision and repeated on a
   regular cycle. It fails most often because nobody uses it.
3. The popular tools (technology radars, hype cycles, Wardley maps) are
   useful ways of talking, but nobody has tested whether they work.
4. The best-tested habits come from forecasting research: write down dated
   predictions and check them later; ask experts in a structured way; combine
   several people's views; and start from what usually happens.
5. So our rings should be open, sourced judgements for a stated user and
   decision, never predictions.

**How far to trust it.** The research tool couldn't open web pages, so I read
every source through search summaries only, not the full text. The section
"How this was researched and its limits" lists the claims most in need of
checking. Many full texts are now saved in the private repository
`leo-hyde/AECTechRadar-sources`, so we can check them.

### Decisions for Leo
Each has my recommendation. The numbered proposals they refer to are in "What
this means for us", near the end.

1. **What gets a ring?** Technologies only (proposal 1); companies only (as
   now); or both, with company rings meaning "how sound is this supplier?"
   *My recommendation: technologies only. Each company gets a factual
   profile, and supplier soundness becomes one of the rating dimensions
   (proposal 3). Confidence: medium.*
2. **Which lenses do we publish?** A lens is the type of user a judgement is
   made for. Keep one default lens ("a large UK construction firm, over the
   next 1–3 years"), or publish several? Should lenses shaped around a client
   stay private?
   *My recommendation: one public default lens for now. Any lens shaped
   around a real client stays private, since this repository is public.*
3. **Public forecasts with a score?** Are you comfortable publishing dated
   predictions with a stated likelihood, which may be visibly wrong? This is
   the strongest way to learn, and also a risk to your reputation.
   *My recommendation: write them for one round but keep them private,
   then decide on publishing once you've seen them. This is my suggestion,
   not something the research tested.*
4. **A second rater and an expert panel?** Who could rate a sample of items
   independently, or join a small expert panel, and could their names be
   public?
   *My recommendation: you act as second rater to start. Name anyone else
   only with their consent. Only you can answer who else.*
5. **How often, against the budget?** Is a new edition twice a year, with
   items flagged as out of date after 6 and 12 months, affordable? Or is once
   a year more realistic?
   *My recommendation: once a year to start, but show the "out of date" flags
   from day one, so readers can see what's old. Move to twice a year if the
   budget allows.*
6. **Counts of patents and research papers?** Is it worth building these,
   given how few patents construction firms file? Or should we rely on
   evidence of real use and public reports?
   *My recommendation: not now. Rely on evidence of real use and public
   reports, and revisit if a category turns out to be patent-heavy.*

### Words used in this report
- **Horizon scanning:** searching widely and regularly for early signs of change.
- **Weak signal:** an early, unclear hint that something may be changing.
- **Technology radar / rings:** a published list that places each technology
  in a ring: adopt, trial, assess or hold.
- **Readiness levels (TRL, ARL, CRI):** scales for how mature something is.
  TRL rates the technology (1 to 9); ARL rates how ready the market is to
  adopt it; CRI rates how ready it is commercially.
- **Hype cycle:** Gartner's chart of excitement about a technology rising,
  crashing, then levelling off.
- **Wardley map:** a strategy chart that places each part of a product by how
  mature and standard it has become.
- **Scenario planning:** imagining several possible futures to test plans
  against.
- **Delphi:** anonymous rounds in which experts give a view, see the group's
  answers, and revise. **Policy Delphi** reports the disagreements instead of
  forcing agreement.
- **Structured elicitation (IDEA, SHELF, Cooke's method):** step-by-step ways
  of getting careful estimates from a small panel of experts.
- **Brier score:** a score for how good a set of probability forecasts was,
  once the answers are known. Lower is better.
- **Base rate / reference class / outside view:** starting from how similar
  past cases turned out, before adjusting for this one.
- **Ordinal scale:** a ranking (low, medium, high) where the gaps between
  steps aren't equal, so averaging the steps is misleading.
- **Sensitivity / specificity:** how many of the things that mattered were
  flagged / how many of the things that didn't matter were correctly left out.
- **False alarm:** something flagged that turned out not to matter.
- **Bibliometrics / tech mining:** counting and analysing research papers and
  patents to spot rising topics.
- **CREDES:** a checklist for reporting how a Delphi study was done.
- **LLM:** a large language model, the kind of AI behind tools like Claude.
- **Lens:** the type of user (and their decision) that a judgement is made for.
- **Gold set:** claims Leo has checked by hand, used as an answer key to score
  AI research.
- **Edition:** one dated round of reviewing the radar.
- **Signpost:** an event you could see happen that would change a rating.

## The full report

Professionals do technology foresight with a small set of methods. They scan widely for signs of change, ask experts in structured ways, map technologies by maturity, and mine patents and papers. The strongest finding across all of them is about use, not method. Foresight pays off only when it is tied to named decisions and a regular cycle. It fails most often because nobody uses it, not because the method was wrong ([Fraunhofer Publica](https://publica.fraunhofer.de/handle/publica/251044); [HC 703](https://publications.parliament.uk/pa/cm201314/cmselect/cmsctech/703/703.pdf)). Measured accuracy is modest. The few audits that exist find that roughly two-thirds of flagged items turn out to matter. They also find that forecasts more than ten years out come true only about one time in seven ([University of Birmingham](https://research.birmingham.ac.uk/files/17448534/SmithCookPackerS026646231000036Xa.pdf); [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S004016252500527X); [stafforini.com](https://stafforini.com/works/fye-2013-examination-factors-affecting/)). The popular tools rest on practitioner opinion, not tested evidence. That covers technology radars, hype cycles, Wardley maps and trend frameworks. The best-tested practices come from forecasting research. They are: score your forecasts against what happened, structure expert input, combine several judges, and start from base rates. For AEC Tech Radar, this means four things. Treat rings as transparent, sourced judgements for a stated user and decision. Never present them as predictions. Rate on a few separate dimensions rather than one number. Build in the checks (second raters, dated forecasts, a reporting checklist) that most foresight programmes skip.

## How this was researched and its limits

This report synthesises five sets of research notes compiled on 24 October 2026. The research tool could not open web pages directly; fetches failed with network errors. So **every source was read only through search-result summaries, abstracts, repository records or secondary write-ups, not full texts**. Numbers are "as reported in the summary". Where the notes flagged a claim as unverified or seen second-hand, this report says so.

The report uses three labels so you can tell evidence from opinion:

- **(E) Evidence**: a measured result, peer-reviewed study, systematic review or formal evaluation. "E-lite" marks interview-based or descriptive reviews.
- **(P) Practitioner view**: a programme's description of its own method, a framework's claims, or an author's argument.
- **(I) Our inference**: our reasoning from the evidence, not something a source states.

These claims matter most and most need checking against the full text before anyone relies on them in public:

1. **Rohrbeck & Kum (2018)** on foresight and firm performance. The sample size is reported as 70, 83 or 200. "33% more profitable, 200% higher growth" comes from a press release, and sources disagree on whether "200%" means growth or market value.
2. **The UK horizon-scanning accuracy study** (Smith, Cook & Packer): 71% sensitivity, 73% specificity. The title and year (about 2010) were inferred, not seen.
3. **NISTEP Delphi realisation rates** (64–71% overall; transport 25–39%): seen only in the abstract of a 2025 paper.
4. **Fye et al. (2013) success rates** (14% for 11–30-year forecasts): from a secondary summary, though a second paper repeats the 14%.
5. **Colson & Cooke (2017)** out-of-sample figures: the summary was garbled.
6. **How Thoughtworks builds its Radar** (about 21 senior technologists, about 367 proposals, about 100 blips per edition): mostly from a LinkedIn post and podcast summary about three years old. The Thoughtworks site could not be opened.
7. **Hype-cycle critiques** from Mullany (a blog) and *The Economist* (only seen second-hand; title, date and URL unverified).
8. **The OECD's April 2026 horizon-scanning guide** (129 exercises): only the abstract was visible. It is the single most valuable source to read in full.
9. Several citations come from the researchers' background knowledge and are **unverified**. These are GAO's four characteristics of a good readiness assessment, Thoughtworks' "too complex to blip" label, Voros's futures cone (2003), Hemming et al.'s IDEA guide (2018) and the ARENA Commercial Readiness Index PDF address.

The evidence base has three wider limits. Most measured accuracy data come from health, conservation, defence and national Delphi surveys, not construction. Almost nothing measures *misses*, meaning things that mattered but were never flagged. And no study was found that evaluates technology radars, Wardley maps or AI-built market maps.

## Fifteen methods at a glance

| Method | What it's for | Good practice | What goes wrong | Strength of evidence |
|---|---|---|---|---|
| **Horizon scanning** (systematic search for early signs of change) | Spotting emerging issues early, across a wide field | Scope first; scan broad sources; cluster signals in group workshops; pick a few (e.g. 3 of ~20); short outputs on a regular cycle; tie to a decision-maker | No link to decisions; "echo chamber"; loose terms; methods not reported | **Moderate-low (E).** Small audits find about 70% of flagged items matter and 20–30% are false alarms; misses rarely measured |
| **Weak signals** (early, ambiguous hints of change) | Avoiding strategic surprise | Record what was seen apart from what it might mean (Hiltunen); act in proportion to the evidence (Ansoff) | Overload; bias filters; looking in the wrong place; detecting but not acting | **Low.** Concept still unclear (E, review); action evidence is case stories (P) |
| **Technology radar** (rings: adopt/trial/assess/hold) | Publishing a reasoned, opinionated position on technologies | Named panel; written reasons; regular editions; clear ring definitions | Ring meanings differ between users; items fade silently; another firm's context gets copied | **None found (P).** No evaluation of radars exists |
| **Readiness levels** (TRL 1–9 and extensions) | Rating technical maturity at a point in time | Independent assessors; state what is being rated; add adoption or commercial scales (CRI, ARL) as a profile | Rates a component, not its fit to a system or market; doing maths on ordinal scales | **Moderate for problems (E):** practitioner surveys; little on predictive value |
| **Hype cycle** (Gartner) | Describing swings in expectations | Use as vocabulary only | Few technologies follow the curve; positions are unfalsifiable; "time to plateau" untested | **Weak/negative (E):** tests find inconsistencies |
| **Wardley maps** (value chain against an evolution axis) | Situational awareness and strategy talk | Treat stage placement as a judgement, with evidence cues | "Evolution" read as inevitable; axes correlated | **None found (P).** Only practitioner critiques |
| **Scenario planning** | Testing assumptions against several plausible futures | Full process; link each scenario to decisions and signposts | Improves understanding but not decisions directly; "too future-focused" firms underperform | **Moderate for thinking (E):** experiments show less bias; outcome evidence is correlational |
| **Delphi** (anonymous expert rounds with feedback) | Pooling expert judgement | Clear panel selection; feedback with reasons; define consensus; report with CREDES | Weak validation; attrition; false consensus; big surveys hard to defend | **Moderate (E):** beats simple averages and open discussion, not other structured methods |
| **Structured elicitation** (IDEA, Cooke, SHELF) | Calibrated estimates from a small panel | Private estimate, discussion, revised private estimate; test experts on known questions | Needs facilitation and seed questions; out-of-sample gains smaller | **Moderate-good (E):** performance weighting won 32 of 33 studies in-sample |
| **Scored forecasting** (tournaments, Brier scores) | Making judgement accountable | Resolvable questions with dates; probabilities; aggregate and track forecasters | Only tested on short horizons; scores comparable only on the same questions | **Good (E)** for questions resolving within about a year |
| **Reference-class forecasting** (the "outside view") | Cost and time estimates from comparable past cases | Find a good reference class; adjust from the base rate | Choosing the class; limits still debated | **Moderate (E/P):** mandated for UK transport; validity questioned |
| **Patent analysis** | Mapping technical activity and players | WIPO landscape guidelines; flag publication lag; read counts as activity, not value | 18-month lag looks like a decline; value skew; construction patents little | **Moderate (E)** on biases; little on predictive value |
| **Publication analysis** (bibliometrics, "tech mining") | Detecting emerging research topics | Several indicators; validate retrospectively | Unstable in small fields; measures momentum | **Moderate (E)** in big fields; untested for AEC |
| **Other indicators** (funding, GitHub, search trends) | Fast signals of attention | Triangulate; cite public reports | Selection bias; fake stars; sampling noise; paid-data licences | **Low-moderate (E)** on biases; none on predictive value |
| **LLM-assisted classification** | Sorting and summarising at scale | Coarse categories only; human check of samples; report agreement | Fine-grained labels collapse; LLM judges disagree | **Moderate (E)** that fine accuracy is poor |

## Foresight pays only when someone is bound to use it

The best outcome-level study links foresight to company performance. Rohrbeck & Kum rated firms' "future preparedness" in 2008, meaning the maturity of their foresight against their need for it. They then followed performance to 2015. Preparedness was "a powerful predictor" of becoming an industry outperformer, with higher profitability and market-value growth (E) ([Aarhus repository PDF](https://pure.au.dk/ws/files/179651094/Rohrbeck_Corporate_foresight.pdf)). The press release gives **33% higher profitability and 200% higher growth** for "vigilant" firms ([Aarhus BSS](https://bss.au.dk/en/insights/business-2/2018/corporate-foresight-improves-company-performance)). But the sample size is reported as 70, 83 or 200 ([Futures Platform](https://futuresplatform.com/blog/roi-of-strategic-foresight); [Rohrbeck keynote](https://warwick.ac.uk/fac/soc/wbs/subjects/orms/ormsevents/scenario2018/presentations/1.keynote_corporate_foresight_-_ren_rohrbeck_-_compressed.pdf)). The study is observational, so well-run firms may simply do both (I). One detail matters for us. Firms classed as **"neurotic"**, with heavy foresight activity but poor fit to need, did worst on market value. More foresight is not automatically better ([Aarhus BSS](https://bss.au.dk/en/insights/business-2/2018/corporate-foresight-improves-company-performance)).

Survey and case research points the same way. A survey of more than 200 European firms found three success factors. These are systematisation, **"bindingness to strategic decisions"** and company-wide participation (E-lite) ([Fraunhofer Publica](https://publica.fraunhofer.de/handle/publica/251044)). Lichtenthaler studied technology intelligence in 25–26 multinationals. He describes a cycle that ends with communicating to decision-makers. Its more mature "generations" are defined by close alignment with strategy (E-lite, case studies) ([Inderscience](https://www.inderscience.com/filter.php?aid=11563); [Redalyc](https://www.redalyc.org/journal/4991/499165584006/499165584006.pdf)). Vecchiato & Roveda found firms that saw drivers of change coming and still failed to manage the effects or their own response. Anticipation is necessary but not enough ([Polimi repository](https://re.public.polimi.it/handle/11311/580762)).

Government evidence is the clearest. The UK Day Review (2013) said the UK "does not lack the resources to conduct horizon scanning". What it needed were better structures "for directing work and making use of the end product". The House of Commons Science and Technology Committee (2014) went further. It criticised split units, loosely defined terms and the lack of outside views; its chair called the set-up "little more than an echo chamber" (E, parliamentary inquiry) ([HC 703](https://publications.parliament.uk/pa/cm201314/cmselect/cmsctech/703/703.pdf)). A recent GO-Science review was based on 15 interviews with government futures leads. It names the enablers as **senior sponsorship, alignment with priorities and sustained engagement with policy teams** (E-lite) ([GOV.UK](https://www.gov.uk/government/publications/a-practical-review-of-horizon-scanning-approaches-tools-and-techniques)). The 1990s UK Technology Foresight programme shaped research-council priorities but had "limited" impact elsewhere in government ([Georgia Tech repository](https://repository.gatech.edu/server/api/core/bitstreams/182ce2be-acd7-40a6-ae28-413a5bcfc673/content)).

Evaluators have drawn the logical conclusion. Georghiou & Keenan's standard framework judges national foresight on rationale, process and impact, including changed behaviour. It does not judge on prediction accuracy. They add that foresight is only one influence on any decision (E-lite) ([Manchester](https://research.manchester.ac.uk/en/publications/evaluation-of-national-foresight-activities-assessing-rationale-p/)). Quality-criteria work separates two things. "Internal validity" is how well the mapping process was done. "External validity" is the resulting map ([Univ. Turku](https://research.utu.fi/converis/portal/detail/Publication/2783508?lang=en_US)). Transparency is a core standard ([IZT](https://www.izt.de/en/publications/standards-and-quality-criteria-of-future-research/)). Siemens' "Pictures of the Future" programme says openly that its aim is continuous engagement with the future, not accurate forecasts (P) ([wissenschaft.de](https://wissenschaft.de/artikel/zukunfts-bilder-made-by-siemens)).

## Accuracy audits find roughly two-thirds right, and far less at long range

A few programmes have checked their own record. Their results are consistent enough to be useful, though every sample is small.

**Horizon scanning.** The UK National Horizon Scanning Centre's predictions of health-technology impact were checked against expert judgement 3–5 years later. They showed **71% sensitivity** (share of truly important technologies flagged), with a very wide confidence interval of 36–92%. **Specificity was 73%** (share of unimportant ones correctly not flagged). The authors said no earlier quantitative evaluation existed (E) ([University of Birmingham](https://research.birmingham.ac.uk/files/17448534/SmithCookPackerS026646231000036Xa.pdf)). The first global conservation horizon scan (2009) was reviewed ten years on. Of its 15 issues, **5 had major impact, 6 moderate, 1 low and 3 never emerged** (E) ([Cambridge repository](https://www.repository.cam.ac.uk/handle/1810/288778)). That is about 73% "mattered" and 20% false alarms; this is our arithmetic, and the scan's own authors judged impact (I). Spain's RedETS identified 338 technologies from 2016 to 2023. **31% later had full health-technology assessments**, all flagged three years ahead. This is a preliminary conference abstract, and it measures uptake, not correctness ([PMC11719199](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11719199/)).

**National Delphi surveys.** Japan has run technology Delphi surveys about every five years since 1971, and that continuity made audits possible ([NISTEP NR025](https://nistep.repo.nii.ac.jp/record/4320/files/NISTEP-NR025-FullE.pdf)). Topics that were fully or partly realised ran at **66% (1971), 64% (1976) and 71% (1981)**. **Transport was lowest every time: 25%, 31% and 39%**. NISTEP stopped these self-checks after 2001 (E, abstract only) ([ScienceDirect 2025](https://www.sciencedirect.com/science/article/abs/pii/S004016252500527X)). About 20% of topics in a later survey had their expected date pushed back 2–3 years ([NISTEP STT038E](https://nistep.repo.nii.ac.jp/record/6504/files/NISTEP-STT038E-71.pdf)).

**Long-range technology forecasts.** Fye et al. tested nine attributes of technology forecasts. Only the method and the time horizon mattered. Quantitative methods were more precise on timing; expert forecasts were better on whether something happens (E) ([IDEAS/RePEc](https://ideas.repec.org/a/eee/tefoso/v80y2013i6p1222-1231.html)). In their dataset, success within ±30% of the stated horizon was about **38–39% for short and medium horizons and 14% for 11–30 years** ([stafforini.com summary](https://stafforini.com/works/fye-2013-examination-factors-affecting/); [arXiv 1807.08339](https://arxiv.org/pdf/1807.08339)). Albright reviewed the 100 innovations predicted in Kahn & Wiener's *The Year 2000* (1967). About 45% were "good and timely". **Computing and communications forecasts were about 80% right; other fields 50% or less.** Albright puts this down to cost and performance trends already visible in 1967 (E) ([Nokia Bell Labs](https://www.nokia.com/bell-labs/publications-and-media/publications/what-can-past-technology-forecasts-tell-us-about-the-future)). Kott & Perconti found 1990s military forecasts for 2020 about 76% accurate. Again, information technologies did better than physical ones (E) ([IDEAS/RePEc](https://ideas.repec.org/a/eee/tefoso/v137y2018icp272-279.html)). Their scoring was looser than Fye's, so the figures don't compare directly (I).

**Expert judgement in general.** Tetlock's study of about 28,000 political predictions found the average expert barely beat chance and lost to simple extrapolation. "Foxes" (eclectic thinkers) did better than confident "hedgehogs" (E, via secondary reviews) ([Cato Unbound](https://www.cato-unbound.org/print-issue/323); [ETF.com](https://www.etf.com/sections/index-investor-corner/swedroe-foxes-more-right-hedgehogs)).

What this adds up to (I): long-running, expert-led programmes get roughly two-thirds of their calls right. Misses are almost never measured. Accuracy falls steeply beyond about ten years. And forecasts about physical systems and slow adoption do worst. Construction is physical, regulated and slow to turn over, like transport, the worst sector in Japan's audits. That is an analogy, not evidence, but it suggests AEC calls will be harder than software calls. The practical lesson is that accuracy cannot be the main quality test for a radar. Process quality, transparency and traceability can be checked now. Accuracy can only be checked years later, if anyone keeps records.

## Horizon scanning programmes share one simple cycle

Established programmes follow a common pattern (P). They scope the question, scan broad sources, filter, cluster signals into "insights" in group workshops, prioritise a few, and publish short outputs on a cycle. Policy Horizons Canada starts by listing the common assumptions about an issue, so they can be tested later. It combines related weak signals into **one-page "insights"** ([Horizons Module 3](https://horizons.service.canada.ca/en/our-work/learning-materials/foresight-training-manual-module-3-scanning/index.shtml)). The EU Policy Lab has scanners post "signs of new" to a shared platform. Monthly workshops link them into "signals of change", and impact workshops pick **the 3 most important out of about 20**. A newsletter goes out three times a year ([EU Policy Lab](https://policy-lab.ec.europa.eu/stories/spotting-future-how-horizon-scanning-can-help-shape-eu-policy-2024-01-19_en)). In health, the EuroScan stages run identification, filtration, prioritisation, assessment, dissemination and updating ([Hines et al. figure](https://www.researchgate.net/figure/Common-stages-of-horizon-scanning-from-the-EuroScan-network-9-This-figure-is-licensed_fig1_333410258)). The stage names are partly from background knowledge. The UK's NIHR Innovation Observatory produced 693 technology briefings in 2017–2021 that fed directly into NICE appraisals. This is a working example of scanning wired into a decision process ([PMC12450546](https://pmc.ncbi.nlm.nih.gov/articles/PMC12450546/)). The OECD's April 2026 guide draws on **129 scanning exercises (2020–2025)**. It flags the difficulty of interpreting early signals and calls for stronger standards ([OECD](https://www.oecd.org/en/publications/building-capacity-in-technology-horizon-scanning_b4f0d383-en.html)).

Reviews say the method can be reliable "when performed appropriately". They name refining prioritisation criteria, managing uncertainty and improving dissemination as open problems (E, systematic review of about 100 articles) ([BMJ Open, Hines et al. 2019](https://bmjopen.bmj.com/content/9/5/e026764)). Reporting is weak. No reporting guideline for horizon scanning existed until 2025 ([PMC12768792](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12768792/)). When the NIHR team tested its new checklist on 17 of its own reports, **20 of 35 items were covered in under half of them** (E) ([JMIR](https://doi.org/10.2196/88253); [medRxiv](https://www.medrxiv.org/content/10.1101/2025.10.23.25338620v1.full)). If a leading programme leaves out most method details, a small radar will too unless it uses a checklist (I).

**Weak signals** are the raw material. Ansoff (1975) introduced the idea after the 1970s oil crisis surprised firms that already had forecasting systems. The problem was acting, not forecasting (P) ([CMR](https://cmr.berkeley.edu/1975/02/18-2-managing-strategic-surprise-by-response-to-weak-signals)). Hiltunen (2008) split a "future sign" into three parts. There is the **signal** (what was seen and how visible it is), the **issue** (the underlying change) and the **interpretation** (how someone read it) (P) ([JFS, Kuusi & Hiltunen](https://jfsdigital.org/articles-and-essays/2011-2/vol-16-no-1-september/articles/the-signification-process-of-the-future-sign)). Day & Schoemaker popularised "peripheral vision". Their cases include Shell's Brent Spar and Monsanto, which scanned widely yet missed shifts in stakeholder values. They also warn that over-focusing on the edges means missing the core (P) ([Wharton](https://knowledge.wharton.upenn.edu/podcast/knowledge-at-wharton-podcast/podcast-george-day-keeping-an-eye-on-distant-events-that-can-make-or-break-your-company/)). A 2022 systematic review found the concept still lacks clarity, with little research on how signals are *analysed* ([Strathprints](https://strathprints.strath.ac.uk/81235/)). A 2025 thesis concluded "it does not seem that machines can enhance weak signal detection" ([Strathclyde](https://stax.strath.ac.uk/concern/theses/zk51vh359?locale=en)).

Popular organising frameworks are useful structure, not tested method (P). These include STEEP/PESTLE (social, technological, economic, environmental, political, plus legal), Three Horizons and Voros's futures cone (citation unverified) ([Analysis Function](https://analysisfunction.civilservice.gov.uk/blog/horizon-scanning-and-futures-thinking-tools-for-government-analysts); [Wikipedia: Three Horizons](https://en.wikipedia.org/wiki/Three_Horizons)). No evaluation of them was found.

## Radars, readiness scales and hype curves are vocabularies, not measurements

**Technology radars.** The Thoughtworks Radar calls itself "an opinionated guide to technology frontiers" (P) ([Vol. 27](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2022/10/tr_technology_radar_vol_27_en.pdf)). It is a published opinion, not a measurement. A senior panel of about 21 technologists meets twice a year. It votes on proposals gathered from across the company, aiming for about 100 "blips" (items) per edition ([Vol. 32](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2025/04/tr_technology_radar_vol_32_en.pdf); [Abi Noda, LinkedIn](https://www.linkedin.com/pulse/how-thoughtworks-tech-radar-created-abi-noda-dznzc), second-hand and about three years old). **Adopt** means Thoughtworks feels strongly the industry should use it. **Trial** means worth pursuing but less proven. **Assess** means worth exploring to understand the effect. **Hold** is the nearest to "don't start anything new with this" ([Vol. 33](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2025/11/tr_technology_radar_vol_33_en.pdf)). Items that haven't moved recently **fade off to save space, which Thoughtworks says is not a verdict** ([FAQ](https://www.thoughtworks.com/en-us/radar/faq), summary). Many organisations copy the format, for example Zalando with open-source code ([Zalando](https://opensource.zalando.com/tech-radar/)). Ring meanings drift between adopters; one public radar has an open issue asking "What are the rings?" ([red-gate issue](https://github.com/red-gate/Tech-Radar/issues/5)). **No evaluation of radars' accuracy or usefulness was found.** Two inferences follow (I). Rings carry the context of whoever set them: Thoughtworks' rings are for software delivery teams. And a radar needs a "last reviewed" date per item, or readers will read silence as a verdict.

**Readiness levels.** The technology readiness level (TRL) scale began at NASA in 1974 and became nine levels around 1990 ([ScienceDirect 2015](https://www.sciencedirect.com/science/article/abs/pii/S127096381500214X)). It now anchors EU funding: TRL 1 is "basic principles observed" and TRL 9 is "actual system proven in operational environment" ([H2020 Annex G](https://ec.europa.eu/research/participants/data/ref/h2020/other/wp/2018-2020/annexes/h2020-wp1820-annex-ga_en.pdf)). It also anchors US practice through GAO's 2020 guide ([GAO-20-48G](https://www.gao.gov/assets/710/706680.pdf), summary only). TRL rates one technology element at one moment. It does not rate fit to a system, a market or a buyer. Olechowski et al. interviewed practitioners in 7 organisations and surveyed more than 100 systems engineers. They found 15 problems, grouped under system complexity, planning and review, and validity of assessment. Users ranked the integration problems as most critical (E) ([Wiley](https://incose.onlinelibrary.wiley.com/doi/10.1002/sys.21533)). Extensions try to rate adoption. Australia's Commercial Readiness Index has six levels, from "hypothetical commercial proposition" to "bankable asset class", backed by indicators such as regulation and supply chain ([Wikipedia: CRI](https://en.wikipedia.org/wiki/Commercial_readiness_index)). The US Department of Energy's Adoption Readiness Level grades 17 dimensions in four risk areas. DOE says **the real value is seeing which dimensions are barriers**, not the single score (P) ([DOE ARL](https://www.energy.gov/technologytransitions/adoption-readiness-levels-arl-complement-trl)). Combining ordinal scales (ranked levels whose gaps are not equal) with arithmetic, as the System Readiness Level does, can mislead and produce "readiness reversals" (P, from interested parties) ([Kujawski](https://ndia.dtic.mil/wp-content/uploads/2010/systemengr/ThursdayTrack7_10745Kujawski.pdf); [GWU dissertation](https://scholarspace.library.gwu.edu/concern/gw_etds/n583xv02m)). In construction research, "readiness" is used loosely. It can mean technology maturity, staff attitudes (the Technology Readiness Index) or a firm's AI readiness ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0263786306001335); [Springer](https://link.springer.com/chapter/10.1007/978-3-031-77197-2_2)).

**Hype cycles.** Gartner's curve (Jackie Fenn, 1995) runs from trigger to "peak of inflated expectations", "trough of disillusionment", and on to a "plateau of productivity". Analysts estimate the time to reach the plateau ([Linden & Fenn 2003](http://www.ask-force.org/web/Discourse/Linden-HypeCycle-2003.pdf)). Dedehayir & Steinert tested it against Gartner's own data, found inconsistencies, and suggested standard life-cycle models capture hype better (E) ([IDEAS/RePEc](https://ideas.repec.org/a/eee/tefoso/v108y2016icp28-41.html)). In news coverage, MP3 and Bluetooth showed the shape, while DVD and Blu-ray did not (E) ([ResearchGate](https://www.researchgate.net/publication/224366848_Empirically_detecting_the_Hype_Cycle_with_the_life_cycle_indicators_An_exploratory_analysis_of_three_technologies)). Mullany reviewed 2000–2016 charts. He found few technologies followed an identifiable cycle, about 20% became obsolete before reaching the mainstream, and some major technologies were spotted late or never (P, blog) ([ipspace.net](https://blog.ipspace.net/2020/06/lessons-learned-20-years-hype-cycles/)). A reported *Economist* analysis says perhaps a fifth of breakthroughs follow the full cycle. That is seen only second-hand and is unverified ([Beantin](https://beantin.net/the-hidden-curves-of-the-gartner-hype-cycle/)). One AEC study mapped 11 digital technologies against hype curves and found Swedish AEC lags them ([Construction Innovation 2021](https://www.emerald.com/insight/content/doi/10.1108/CI-01-2020-0002/full/html)).

**Wardley maps** place the parts of a value chain on an evolution axis: genesis, custom-built, product, commodity. They come with "climatic patterns" and about 40 "doctrine" principles, under an open licence (P) ([Cynefin.io](https://cynefin.io/wiki/Wardley_mapping); [learnwardleymapping.com](https://archive.learnwardleymapping.com/)). **No peer-reviewed evaluation was found.** Critics note that "evolution" wrongly suggests a one-way path, and that a map is only as sound as its stage judgements (P) ([Matt Edgar](https://blog.mattedgar.com/2017/08/13/what-do-wardley-maps-really-map-a-settler-writes); [Honest PM](https://honestpm.substack.com/p/wardley-mapping-the-evolution-axis)).

## Structured, scored judgement beats loose consensus

**Scenario planning** came out of Shell in the 1970s and was written up by Pierre Wack in 1985. Its purpose was to change executives' mental models, not to predict ([Wikipedia: Pierre Wack](https://en.wikipedia.org/wiki/Pierre_Wack)). Shell's rise in the oil-price shocks is the story practitioners cite. It is self-reported and carries hindsight bias (P). The experimental evidence is modest but real. In a study with 252 management students, scenario planning reduced framing bias and improved decision quality more than standard planning tools (E) ([IDEAS/RePEc](https://ideas.repec.org/a/eee/tefoso/v80y2013i4p801-814.html)). In field experiments on real transport-infrastructure investments, experts revised their judgements after seeing scenarios. Their confidence did not consistently rise or fall (E) ([MIT DSpace](https://dspace.mit.edu/handle/1721.1/96020)). Wright, Bradfield & Cairns argue the standard method improves understanding and challenges thinking, but does not directly improve decisions unless an explicit evaluation step is added (P, academic critique) ([Strathprints](https://strathprints.strath.ac.uk/id/eprint/44829)).

**Delphi** runs anonymous rounds in which experts see the group's answers and revise their own. Rowe & Wright's review found it beat simple averages in 12 of 16 comparisons and open group discussion in 5 of 8. It showed **no consistent edge over other structured methods**, and the studies were few and often lab-based (E) ([Penn repository](https://repository.upenn.edu/marketing_papers/60)). Sackman's RAND critique called conventional Delphi "unreliable and scientifically unvalidated" (P) ([RAND R-1283](https://www.rand.org/pubs/reports/R1283.html)). Variants address known problems. Policy Delphi seeks the strongest opposing views rather than consensus ([IGI Global](https://www.igi-global.com/chapter/delphi-technique-use-considerations-applications/62401)). Real-time Delphi drops rounds to cut delay and drop-out ([Wikipedia](https://en.wikipedia.org/wiki/Real-time_Delphi)). The CREDES guideline sets out what a Delphi report must state: why Delphi was chosen, how the panel was selected, and how consensus was defined ([EQUATOR](https://www.equator-network.org/reporting-guidelines/credes/)). Construction Delphi studies exist, but they rank adoption factors rather than make dated forecasts ([DOAJ](https://doaj.org/article/145d24dfdd014bc481c82cb0d5255ca2); [ITcon](https://itcon.org/paper/2022/6)).

**Structured elicitation** has moved beyond plain consensus. The IDEA protocol runs Investigate, Discuss, Estimate, Aggregate. Experts give private estimates with reasons, discuss them anonymously, revise privately, and the results are combined by formula ([Imperial Spiral](https://spiral.imperial.ac.uk/entities/publication/05316d50-a10c-450c-a014-196ce091eac7)). Cooke's classical model first tests experts on "seed" questions with known answers, then weights their views by how well calibrated they were ([RFF](https://www.rff.org/publications/journal-articles/expert-elicitation-using-the-classical-model-to-validate-experts-judgments/)). Across 33 studies, performance weighting beat equal weighting **in 32 in-sample**, and in 26 on the authors' out-of-sample index. The out-of-sample edge is smaller and its details need checking (E) ([IDEAS/RePEc](https://ideas.repec.org/a/eee/reensy/v163y2017icp109-120.html)). SHELF uses facilitated discussion to reach an agreed distribution; about 4–8 experts is reportedly best (secondary) ([arXiv 2001.11365](https://arxiv.org/pdf/2001.11365); [preprints.org](https://www.preprints.org/manuscript/202508.0638/v1)).

**Scored forecasting** has the strongest evidence of any judgement method. In the IARPA-funded Good Judgment Project, probability training, teaming and grouping top performers all improved accuracy, scored by Brier score (E) ([APS Observer](https://www.psychologicalscience.org/publications/observer/obsonline/predicting-uncertain-events-on-a-global-scale.html)). The Brier score is the mean squared error of probability forecasts; always saying 50% scores 0.25. A 2024–25 reanalysis questions how large the training and teaming effects really are (E) ([APS](https://www.psychologicalscience.org/journals/psychological-science/09567976241266481/)). Well-aggregated polls matched or beat prediction markets ([Penn Today](https://penntoday.upenn.edu/news/penn-scientists-show-prediction-polls-can-outdo-prediction-markets)). Brier scores are comparable only on the same questions ([Metaculus notebook](https://forum.effectivealtruism.org/posts/e9htD7txe8RDdcehm/exploring-metaculus-s-ai-track-record)). All of this evidence comes from questions that resolve within about a year (I).

**Reference-class forecasting** predicts a project's outcome from the spread of comparable past projects. It has been mandatory for some UK transport projects since 2003 ([Flyvbjerg 2006](https://journals.sagepub.com/doi/10.1177/875697280603700302)). Its validity and limits are still debated ([Cranfield](https://dspace.lib.cranfield.ac.uk/server/api/core/bitstreams/076d9c29-659d-4bfd-9b1b-e0019ea9ad20/content)). For a technology radar, the transferable idea is the base rate (I). Before judging that a construction technology will spread fast, ask how fast comparable ones actually spread.

## Data indicators each carry a construction-specific bias

**Patents** are the most structured open source of technology activity. WIPO publishes step-by-step guidelines for patent landscape reports ([WIPO](https://tind.wipo.int/record/28858)). Patent applications are usually published about 18 months after filing. That makes the last year or two of any trend chart look like a false decline (E) ([WIPO PCT Review 2024](https://wipo.int/edocs/pubdocs/en/wipo-pub-901-2024-en-patent-cooperation-treaty-yearly-review-2024.pdf)). Counts are not value. Patent value is extremely skewed; in one survey, the median European patent was worth about a tenth of the mean, and citations plus three other indicators explained **only 2.7% of the variation in value** (E) ([CEPR DP6848](https://cepr.org/publications/dp6848)). Construction spends **under 1% of revenue on R&D** (a McKinsey 2017 figure quoted second-hand). By usual measures it shows "very low identifiable innovation", and such comparisons are "inherently biased against construction" ([MCAA](https://www.mcaa.org/?p=39348); [UTS paper](https://opus.cloud1.lib.uts.edu.au/bitstream/10453/17172/1/2010000779OK.pdf)). Patents will mainly capture equipment and product makers, not contractors or software start-ups (I). A commercial dashboard reported a 52% quarter-on-quarter fall in construction-robotics patent filings ([World Construction Network](https://www.worldconstructionnetwork.com/data-insights/patent-activity-robotics-construction-industry)). A swing like that is probably publication lag, not a trend (I).

**Publications.** Rotolo, Hicks & Martin define an emerging technology by five attributes: radical novelty, fast growth, coherence, prominent impact, and uncertainty ([arXiv 1503.00673](https://arxiv.org/abs/1503.00673)). Emergence-detection models built on millions of papers have been validated against later growth and major awards. One predictor met the US intelligence research agency's FUSE benchmarks in 6 of 9 fields (E) ([RePEc](https://ideas.repec.org/a/eee/respol/v43y2014i8p1450-1467.html); [PMC7491740](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7491740/)). A niche field like AEC technology will give small, noisy clusters. So scores should be prompts for review, not forecasts (I).

**Other indicators** are fast but biased. Crunchbase is largely self-reported, and larger rounds are more likely to be recorded ([OECD](https://www.oecd.org/en/publications/using-crunchbase-for-economic-and-managerial-research_6c418d60-en.html); [Emergent Mind](https://www.emergentmind.com/open-problems/quantify-missing-crunchbase-observations)). Construction-tech funding totals from Cemex Ventures come from a corporate venture arm using its own definitions, which change between editions ([World Cement](https://www.worldcement.com/europe-cis/30012025/)). About six million suspected fake GitHub stars have been identified (E) ([ICSE 2026](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests)). Google Trends values vary by day and download, most of all for low-volume terms (E) ([EDML 2020](https://imada.sdu.dk/Research/EDML/2020/EDML20_paper_5.pdf)). No evidence was found that any of these predicts adoption.

**Large language models (LLMs)**, the AI systems behind tools like Claude, do well at coarse sorting and poorly at fine sorting. On patent classification, one model scored about 80% at the broadest category level but **0.3% on the exact code** (E) ([IPBench](https://arxiv.org/pdf/2504.15524)). In LLM topic modelling of research abstracts, only 43–59 of 100 got a valid topic under expert checking ([arXiv 2411.02943](https://arxiv.org/pdf/2411.02943)). LLMs used as judges disagree with each other ([arXiv 2502.07352](https://arxiv.org/pdf/2502.07352)). No study measured how accurately LLMs classify *companies*, or how often LLM-built market maps contain invented facts.

**Construction foresight itself** is mostly normative (setting targets) rather than exploratory, and it is organised around technology themes, not firms (I). The UK's Construction 2025 set targets of 33% lower cost and 50% faster delivery. By 2017, the body responsible "was not monitoring the targets it laid down" ([Construction Index](https://www.theconstructionindex.co.uk/news/view/industry-targets-are-not-being-measured)). The WEF/BCG series built its views from roundtables and workshops ([WEF](https://www.weforum.org/press/2018/06/building-the-future-of-construction/)). Arup's "Drivers of Change" uses STEEP-organised trend cards whose method is not public ([Arup](https://www.arup.com/publications/research/section/drivers-of-change)). A firm-level, sourced radar fills a gap these documents leave. But no one has tested such a thing (I).

## Conclusion

The research changes the question. "Which method predicts best?" has no good answer at the horizons that matter for construction. Long-range accuracy is poor, and only a few methods have ever been audited. The better question is how to make judgements traceable, comparable and correctable. Here the evidence is clearer. Separate what was observed from what it means. Write down who judged, using which rubric, for which decision. Structure and combine several judges rather than relying on one. Date every claim. Make some calls resolvable so they can be scored later. The programmes that stopped checking themselves (Japan's NISTEP after 2001, the UK's Construction 2025 targets) lost the ability to learn. A small public radar that keeps its records can do something most well-funded programmes don't.

## What this means for us

Each proposal states what we'd do, why, what we'd reject, and a confidence level.

1. **Track technologies as the rated unit, with companies as evidence for them.**
   - *Proposal:* Add a technologies layer, such as "reality capture" or "construction robotics". Each company file links to one or more technologies. Rings attach to a technology for a given lens. A company gets a separate, factual profile (product, maturity, deployments) rather than its own ring.
   - *Why:* Radars, readiness scales and every construction foresight document found rate technologies or themes, not firms ([Thoughtworks](https://www.thoughtworks.com/insights/blog/how-we-create-technology-radar); [ECTP](https://www.ectp.org/news-events-newsletters/news/news-detail/ectp-has-issued-it-strategic-research-innovation-agenda-sria-for-2021-2027)). A firm's ring mixes up "is this technology ready?" with "is this vendor sound?".
   - *Reject:* Rings on companies only; tracking drivers (STEEP) at this stage.
   - *Confidence: medium.* It is consistent with practice, but no study compares firm maps with technology maps.

2. **Make the sourced claim the unit of evidence, and keep observation apart from interpretation.**
   - *Proposal:* Each claim records the source, a quote, the publication date, the date we checked it, our confidence, and a separate "what this suggests" field. The fields follow Hiltunen's signal, issue and interpretation.
   - *Why:* Weak-signal theory and quality criteria stress this separation and transparency ([JFS](https://jfsdigital.org/articles-and-essays/2011-2/vol-16-no-1-september/articles/the-signification-process-of-the-future-sign); [IZT](https://www.izt.de/en/publications/standards-and-quality-criteria-of-future-research/)). Even leading scanners omit method detail ([JMIR](https://doi.org/10.2196/88253)).
   - *Reject:* Free-text summaries that mix fact and judgement.
   - *Confidence: high.* It is well supported and cheap to do.

3. **Rate on a few separate dimensions, then give a ring per lens as the verdict.**
   - *Proposal:* Use three or four coarse ordinal dimensions, each with written evidence cues:
     - technical maturity (a simplified TRL band);
     - adoption evidence (named deployments, in the spirit of ARL);
     - supplier maturity;
     - fit to the lens.

     The ring is a reasoned judgement drawn from that profile. It is never calculated by averaging.
   - *Why:* TRL rates technology, not fit or adoption ([Wiley](https://incose.onlinelibrary.wiley.com/doi/10.1002/sys.21533)). DOE says the barrier profile matters more than a single score ([DOE](https://www.energy.gov/technologytransitions/adoption-readiness-levels-arl-complement-trl)). Arithmetic on ordinal scales misleads ([Kujawski](https://ndia.dtic.mil/wp-content/uploads/2010/systemengr/ThursdayTrack7_10745Kujawski.pdf)).
   - *Reject:* A single numeric score; full TRL 1–9 assessments, which we can't do from public sources.
   - *Confidence: medium.* The principle is well supported; the exact dimensions are our design.

4. **Don't use hype cycles.**
   - *Proposal:* Don't place items on a hype curve. Optionally, record an "attention versus evidence" gap: lots of press and funding but few verified deployments.
   - *Why:* Tests find most technologies don't follow the curve, and positions are unfalsifiable ([RePEc](https://ideas.repec.org/a/eee/tefoso/v108y2016icp28-41.html); [ResearchGate](https://www.researchgate.net/publication/224366848_Empirically_detecting_the_Hype_Cycle_with_the_life_cycle_indicators_An_exploratory_analysis_of_three_technologies)).
   - *Reject:* Hype-curve positions; "time to plateau" estimates.
   - *Confidence: high.* The evidence is consistently negative.

5. **State a time horizon in each lens, and keep ratings within five years.**
   - *Proposal:* A ring means "for this lens, over the next 1–3 years" (or another stated horizon of up to 5 years). Anything longer is labelled exploratory and gets no ring.
   - *Why:* Long-range forecasts came true about 14% of the time, against about 38% for shorter ones ([RePEc](https://ideas.repec.org/a/eee/tefoso/v80y2013i6p1222-1231.html); [stafforini.com](https://stafforini.com/works/fye-2013-examination-factors-affecting/)). Physical and slow-adoption fields do worst ([Nokia Bell Labs](https://www.nokia.com/bell-labs/publications-and-media/publications/what-can-past-technology-forecasts-tell-us-about-the-future); [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S004016252500527X)).
   - *Reject:* 10-year rings.
   - *Confidence: medium-high.* The direction is clear; the exact cut-off is our choice.

6. **Set a refresh cycle and visible staleness rules.**
   - *Proposal:*
     - Review every category twice a year, with a dated "edition".
     - Show every item's last-reviewed date.
     - Flag claims older than 12 months as "due for re-check".
     - Show a ring not reviewed for over 6 months as "stale" rather than hiding it.
     - Never drop an item silently; record why it left.
   - *Why:* Thoughtworks and the EU Policy Lab work on regular cycles. Thoughtworks' silent fading is ambiguous ([FAQ](https://www.thoughtworks.com/en-us/radar/faq); [EU Policy Lab](https://policy-lab.ec.europa.eu/stories/spotting-future-how-horizon-scanning-can-help-shape-eu-policy-2024-01-19_en)). Programmes that stopped monitoring lost the ability to learn ([Construction Index](https://www.theconstructionindex.co.uk/news/view/industry-targets-are-not-being-measured)).
   - *Reject:* Continuous, undated edits; fading without a record.
   - *Confidence: medium.* The need is well supported; the 6- and 12-month numbers are our judgement, sized to the budget.

7. **Make ratings repeatable: a rubric, a second rater, and dated forecasts.**
   - *Proposal:*
     - Write a versioned rubric with evidence cues for each ring and dimension.
     - Have a second rater (Leo or an invited reviewer) independently re-rate a sample each edition, and record agreement and disagreements.
     - Attach one dated, resolvable forecast to each Trial and Assess item, with a probability. For example: "By June 2028, at least 3 of the top 10 UK contractors will publicly report using X on live projects: 60%". Score these with the Brier score when they resolve.
   - *Why:* Scored, aggregated forecasting is the best-evidenced way to improve judgement ([APS Observer](https://www.psychologicalscience.org/publications/observer/obsonline/predicting-uncertain-events-on-a-global-scale.html)). Unscored experts barely beat chance ([Cato Unbound](https://www.cato-unbound.org/print-issue/323)). Japan's audits only happened because records were kept ([NISTEP](https://nistep.repo.nii.ac.jp/record/4320/files/NISTEP-NR025-FullE.pdf)).
   - *Reject:* Unexplained single-person rings; vague forecasts that can't resolve.
   - *Confidence: medium.* The evidence is strong for short-horizon questions, untested for this use, and public scoring carries reputational risk.

8. **Score AI research runs against the gold set, and limit AI to drafting.**
   - *Proposal:*
     - Measure each run against Leo's checked claims. Track the share of claims supported by their quoted source, the number of invented or wrong web addresses, wrong dates, and any category errors.
     - Publish the agreement rate.
     - Let AI propose broad categories and draft claims. It never sets rings.
   - *Why:* LLMs collapse on fine-grained classification ([IPBench](https://arxiv.org/pdf/2504.15524)). LLM topic labels were valid for under 60% of abstracts ([arXiv](https://arxiv.org/pdf/2411.02943)). LLM judges disagree with each other ([arXiv](https://arxiv.org/pdf/2502.07352)). No study measures hallucination in market maps, so we must measure it ourselves.
   - *Reject:* AI-set rings; trusting a model to grade itself.
   - *Confidence: high.* This matches both the evidence and the project's own rules.

9. **Use small, structured expert input instead of a large Delphi.**
   - *Proposal:* Once a year, or per category, invite 4–8 practitioners to an IDEA-style round: a private estimate with reasons, an anonymised discussion, then a revised private estimate. Report disagreements Policy-Delphi style rather than forcing consensus. Follow CREDES-style reporting. Publish panel names only with consent and never name clients.
   - *Why:* Structured methods beat open discussion and simple averages ([Penn](https://repository.upenn.edu/marketing_papers/60)). IDEA and SHELF suit small panels ([Imperial Spiral](https://spiral.imperial.ac.uk/entities/publication/05316d50-a10c-450c-a014-196ce091eac7); [preprints.org](https://www.preprints.org/manuscript/202508.0638/v1)). Large consensus Delphis have a weak validation record ([RAND](https://www.rand.org/pubs/reports/R1283.html)).
   - *Reject:* Large multi-round Delphi surveys; informal "ask a few people".
   - *Confidence: low-medium.* The method is sound, but recruiting and facilitating cost time we may not have.

10. **Use open data indicators as context, never as scores.**
    - *Proposal:* Where cheap, add dated counts from open sources with links. Possible sources are open patent databases (e.g. PatentsView, Lens.org, Google Patents) and open publication indexes (e.g. OpenAlex); their terms of use are not yet checked. Add public funding announcements and headline figures from public reports. Grey out the last 18–30 months of patent data. Don't use GitHub stars or Google Trends for niche AEC terms. Never publish paid-database exports.
    - *Why:* Publication lag ([WIPO](https://wipo.int/edocs/pubdocs/en/wipo-pub-901-2024-en-patent-cooperation-treaty-yearly-review-2024.pdf)), skewed value ([CEPR](https://cepr.org/publications/dp6848)), construction's low patenting ([UTS](https://opus.cloud1.lib.uts.edu.au/bitstream/10453/17172/1/2010000779OK.pdf)), fake stars ([ICSE](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests)) and Trends noise ([EDML](https://imada.sdu.dk/Research/EDML/2020/EDML20_paper_5.pdf)).
    - *Reject:* Indicator-driven rings; quarter-on-quarter trend claims.
    - *Confidence: medium.* The biases are well evidenced; open-source terms are unverified.

11. **Bind every rating to a lens's decision, with "what would change our mind" signposts.**
    - *Proposal:* Each lens names its decisions (for example "pilot or not this year"), its horizon and its risk appetite. Each ring states which decision it informs. It also lists one or two signposts: observable events that would move it up or down.
    - *Why:* "Bindingness" to decisions is the most consistent success factor ([Fraunhofer](https://publica.fraunhofer.de/handle/publica/251044); [GOV.UK](https://www.gov.uk/government/publications/a-practical-review-of-horizon-scanning-approaches-tools-and-techniques)). Scenario work helps decisions only with an explicit linking step ([Strathprints](https://strathprints.strath.ac.uk/id/eprint/44829)).
    - *Reject:* Generic, context-free rings.
    - *Confidence: high on the principle, medium on the design.*

12. **Keep a light signals log, prioritised in batches.**
    - *Proposal:* Log signals in the claim format. Each edition, cluster them into a few one-page "insights", and promote about 3 of about 20 into the technology layer.
    - *Why:* This copies Policy Horizons and the EU Policy Lab ([Horizons](https://horizons.service.canada.ca/en/our-work/learning-materials/foresight-training-manual-module-3-scanning/index.shtml); [EU Policy Lab](https://policy-lab.ec.europa.eu/stories/spotting-future-how-horizon-scanning-can-help-shape-eu-policy-2024-01-19_en)). Measured hit rates suggest about 20–30% of flagged items will be false alarms ([Cambridge](https://www.repository.cam.ac.uk/handle/1810/288778)).
    - *Reject:* Open-ended scanning without prioritisation; machine-learning weak-signal detection ([Strathclyde](https://stax.strath.ac.uk/concern/theses/zk51vh359?locale=en)).
    - *Confidence: low-medium.* It is useful but the first thing to cut if the budget is tight.

13. **Publish a methods note and a per-edition reporting checklist.**
    - *Proposal:* Each edition states:
      - scope and lenses;
      - sources searched, with dates;
      - search limits (summaries only, until full-page capture exists);
      - who rated, and the rubric version;
      - agreement rates and gold-set scores;
      - what changed and why;
      - known gaps and conflicts of interest.
    - *Why:* The NIHR checklist work and CREDES show what goes unreported ([JMIR](https://doi.org/10.2196/88253); [EQUATOR](https://www.equator-network.org/reporting-guidelines/credes/)). Process validity is the testable quality ([Univ. Turku](https://research.utu.fi/converis/portal/detail/Publication/2783508?lang=en_US)).
    - *Reject:* Undocumented editions.
    - *Confidence: high.* It is cheap and directly evidenced.

14. **What not to do.**
    - Don't claim predictive accuracy.
    - Don't average ordinal scales.
    - Don't use hype curves or Wardley evolution stages as findings.
    - Don't copy Thoughtworks' ring meanings without restating them for construction.
    - Don't let items fade silently.
    - Don't read short-term patent swings as trends.
    - Don't publish paid data.
    - Don't let AI set ratings.
    - Don't over-scan beyond what a lens's decisions need: the "neurotic" firms in Rohrbeck & Kum show more activity is not better ([Aarhus BSS](https://bss.au.dk/en/insights/business-2/2018/corporate-foresight-improves-company-performance)).
    - *Confidence: medium-high.* Each item traces to evidence above.

### Decisions for Leo

The six decisions, each with my recommendation, are at the top of this
report under "In plain English".
