# Contributing

Thanks for considering a contribution! The most useful thing you can add is a
new topic to the landscape. You don't need to write any code or run a build —
a single Markdown file is enough.

## Add a new topic in five steps

1. **Fork the repository** on GitHub.
2. **Copy the template**:
   `src/content/topics/_template.md` → `src/content/topics/your-topic-slug.md`.
   Use a short, lowercase, dash-separated filename (e.g.
   `automated-dlp-labeling.md`). The filename becomes the topic's slug.
3. **Fill in the frontmatter** at the top of the file. Every field is
   explained inline in the template. Required fields:
   - `title`
   - `maturity` (`established` / `emerging` / `experimental`)
   - `ml_types` (at least one — see below)
   - `departments` (at least one — see below)
   - `factors` (five scores, each 0–10, see below)
4. **Write a short description** in Markdown below the frontmatter. 2–4
   sentences is plenty.
5. **Open a pull request**. The maintainer reviews it. CI checks the
   frontmatter against the schema (coming soon — for now the local build is
   the source of truth).

## Position on the map

You don't set X / Y coordinates. Position is derived from the lists you
provide in `departments` and `ml_types`.

**X axis — Scope of Business Exposure** (left to right), grouped into three
categories that the simplified view shows by default:

| Category | Departments |
|---|---|
| Technical Security | Infrastructure & Cloud Security · AppSec & Product Security |
| Process & System Security | Security Engineering & Data Security · Security Operations (SOC & Incident Response) |
| Organizational Security | GRC & TPRM · Business Resilience & Security Awareness |

**Y axis — Required Data Maturity** (bottom to top, data-lean → data-rich):

| ML / AI approach | Notes |
|---|---|
| Reinforcement Learning | Bottom of the axis |
| Unsupervised Learning | |
| Semi-Supervised Learning | |
| Supervised Learning | |
| Large Language Models | Top of the axis |

### Spanning multiple areas

List more than one entry in `departments` or `ml_types` if the topic
genuinely spans them. The map renders a box that stretches across the
listed areas — that is how hybrids and cross-cutting topics show up.

```yaml
departments:
  - "AppSec & Product Security"
  - "Security Engineering & Data Security"   # → box spans Technical + Process
ml_types:
  - "Semi-Supervised Learning"
  - "Reinforcement Learning"                  # → box stretches across two rows
```

The box colour is taken from the **first** department listed.

## Key factors (0–10, 10 is always good)

| Factor | What 10 means | What 0 means |
|---|---|---|
| `business_impact` | High strategic value if it works | Marginal value |
| `cost_efficiency` | Very affordable (setup + ongoing) | Expensive |
| `implementation_ease` | Drop-in for typical infrastructure | Months of integration work |
| `capability_fit` | AI/ML is a great fit for this task | Poor fit, low expected quality |
| `data_readiness` | Required data is already available and clean | Major data preparation needed |

These scores are subjective by design. Try to be realistic, not optimistic.

### Factor notes (optional but encouraged)

Add short keyword-style notes per factor that explain *why* you scored it
that way. Prefix each note with `+ ` (pro) or `- ` (con). Keep them
keyword-sized, not sentences.

```yaml
factor_notes:
  cost_efficiency:
    - "- High token usage for large architectures"
    - "+ No hosting cost if you bring your own LLM"
  capability_fit:
    - "+ Structured output ready"
    - "+ Strong code understanding"
```

The site renders these as `+` / `−` bullets under each bar — readers see
the trade-offs at a glance instead of guessing what's behind the number.

## References (Examples & References)

List representative projects, papers, or vendor pages. **Each reference needs
a short description that ties it to this topic.** A reader should click a
link with a clear expectation of what they'll find there and why it matters
for this use case.

```yaml
references:
  - url: "https://github.com/example/project"
    description: "What this project is, and how it represents the approach this topic describes."
```

If a topic has no public reference yet, leave the `references` block empty.

## Connections

If your topic builds on or complements an existing one, add it to the
`connections` block. Each entry needs:

- `to` — the slug (filename without `.md`) of the related topic.
- `relation` — `before` / `after` / `parallel`. Defaults to `after`.
- `note` — one sentence describing the relationship. Focus on **what data
  or output is reused** between the two topics.

```yaml
connections:
  - to: "genai-threat-modeling"
    relation: before
    note: "Threat model findings provide context for SAST prioritization."
```

### How temporal relations work

The `relation` describes the linked topic from **this topic's** perspective.

| You write | Meaning |
|---|---|
| `relation: after` (default) | The linked topic comes *after* this one — it consumes this topic's output. |
| `relation: before` | The linked topic comes *before* this one — its output is your input. |
| `relation: parallel` | Related but with no temporal ordering. |

### The bidirectional rule

**You only declare a connection once.** If topic A says
`{to: B, relation: after}`, then:

- On A's page, B appears under **"After finishing"**.
- On B's page, A automatically appears under **"Where to start?"** with the
  same `note`. The site flips the relation for the reverse view.

So pick whichever topic feels like the natural place to declare the link —
the other side is generated for you. The `note` should make sense in both
directions (focus on the data/output that's reused, not on who reuses it).

## Style notes

- Keep titles short and human-readable.
- Prefer linking to an open-source project, paper, or vendor page in `url:`.
- Avoid marketing language. Be specific about what the AI/ML does and what
  data it needs.

## Run the site locally (optional)

If you want to preview your change before opening a PR:

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

## Questions

Open a GitHub issue. Friendly questions and "is X in scope?" discussions are
always welcome.
