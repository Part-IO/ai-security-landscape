---
# --- HOW TO ADD A NEW TOPIC --------------------------------------------------
# 1. Copy this file and rename it to `your-topic-slug.md` (lowercase, dashes).
# 2. Fill in every field below. The build will fail if a field is missing.
# 3. Open a pull request. The maintainer will review and merge.
#
# Need help? See CONTRIBUTING.md in the repo root.
# -----------------------------------------------------------------------------

# Short, human-readable name. Shown on the map and as the page title.
title: "Example Topic Name"

# One of: established | emerging | experimental
#   established:  production-proven, broadly available tooling
#   emerging:     early adopters, working solutions exist
#   experimental: research / PoC stage
maturity: emerging

# Primary ML / AI approaches. At least one. List multiple if the topic spans
# approaches (e.g. ["Semi-Supervised Learning", "Reinforcement Learning"]).
# The position on the Y axis (Required Data Maturity) is derived from this list.
ml_types:
  - "Large Language Models"

# Primary security departments. At least one. List multiple if the topic spans
# departments. The box on the map will then stretch across them, and colour is
# taken from the FIRST department listed.
departments:
  - "Security Engineering & Data Security"

# Optional: hero image shown at the top of the topic page.
# Place the image under src/assets/topics/<slug>/<filename>, then reference it
# with a relative path from THIS file.
# hero_image:
#   src: "../../assets/topics/your-topic-slug/diagram.png"
#   alt: "Short description of what the image shows (for accessibility)."
#   caption: "Optional caption rendered under the image."

# Five factor scores, each 0 to 10. 10 is always GOOD.
factors:
  business_impact: 5
  cost_efficiency: 5
  implementation_ease: 5
  capability_fit: 5
  data_readiness: 5

# Optional: per-factor notes. Each note starts with "+ " (pro) or "- " (con).
# Keep them short, keywords not sentences.
factor_notes:
  business_impact:
    - "+ Eliminates a manual, repetitive process"
    - "- Limited upside for small teams"
  cost_efficiency:
    - "- High token usage on large inputs"
  implementation_ease:
    - "+ Drop-in for any IDE / pipeline"
  capability_fit:
    - "+ Well-matched to LLM strengths"
  data_readiness:
    - "+ Works on data you already have"

# Optional: links to representative open-source projects, papers, or vendor pages.
# Each entry: a URL and a 1-2 sentence description tying the project to THIS
# topic (what it is, and how it relates).
references:
  - url: "https://example.com"
    description: "What this project is and how it represents the approach this topic describes."

# Optional: related topics that build on or complement this one.
# Each entry needs `to:` (the slug = filename without .md) and may have:
#   note:     short description focused on what DATA is reused between topics
#   relation: temporal relationship
#     "after":    linked topic comes AFTER this one (this enables it). Default.
#     "before":   linked topic comes BEFORE this one (this depends on it).
#     "parallel": related but no temporal order.
# Declare a connection only ONCE. The other side is generated automatically.
connections:
  - to: "another-topic-slug"
    relation: after
    note: "Brief description of what data is reused between the two topics."
---

Write a short paragraph or two describing the use case. What problem does
it solve, what AI/ML technique is used, what value does it deliver? This
section is the main content of the detail page. Add headings below for
"Use Cases", "How it works", "Limitations", etc. as needed.

## Use Cases

- Concrete scenario 1
- Concrete scenario 2
