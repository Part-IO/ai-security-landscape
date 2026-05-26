---
title: "GenAI for Threat Modeling"
maturity: emerging
ml_types:
  - "Large Language Models"
departments:
  - "Security Engineering & Data Security"
  - "AppSec & Product Security"
factors:
  business_impact: 8
  cost_efficiency: 6
  implementation_ease: 7
  capability_fit: 9
  data_readiness: 6
factor_notes:
  business_impact:
    - "+ Replaces manual STRIDE workshops"
    - "+ Threat models stay in sync with architecture"
  cost_efficiency:
    - "- LLM token costs scale with architecture size"
    - "+ No specialised tooling licences needed"
  implementation_ease:
    - "+ Works against existing architecture docs & IaC"
    - "- Output quality depends on input quality"
  capability_fit:
    - "+ LLMs reason well over structured docs"
    - "+ Structured (STRIDE / OTM) output is achievable"
  data_readiness:
    - "+ Architecture diagrams & IaC usually exist"
    - "- Inputs are often scattered or stale"
references:
  - url: "https://github.com/iriusrisk/iriusrisk-cli"
    description: "Python CLI that exposes IriusRisk threat modelling through the Model Context Protocol. Lets an AI assistant in an IDE analyse a codebase and produce STRIDE threat models in Open Threat Model format — a concrete reference for the GenAI TM integration pattern."
connections:
  - to: "smart-vulnerability-triage"
    relation: after
    note: "Threat model context (assets, threats, mitigations) guides SAST prioritization & false-positive reduction."
  - to: "iac-policy-as-code-copilot"
    relation: after
    note: "Threat model risk findings are translated into automated infrastructure policies."
  - to: "critical-attack-path-detection"
    relation: after
    note: "Threat model attack hypotheses are validated against real cloud asset data."
---

Use an LLM to draft STRIDE-based threat models — threat lists, attack trees,
and mitigations — directly from architecture diagrams, infrastructure-as-code,
and requirements documents. Threat models become a living artifact that stays
in sync with each architectural change rather than rotting after the initial
design review.

## Use Cases

- Bootstrap a STRIDE model for a new service from its design doc + IaC.
- Re-run threat modelling after each architectural change and diff the results.
- Generate mitigation recommendations linked to existing controls.
- Hand the resulting model to downstream AI pipelines (SAST triage, attack-path
  validation, IaC policy generation) as authoritative context.

## Notes

LLM quality depends heavily on the architecture inputs. Best results come
from combining structured inputs (IaC, OpenAPI specs) with narrative design
docs. Always require human review before treating output as authoritative.
