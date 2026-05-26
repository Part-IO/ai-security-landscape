---
title: "IaC / Policy-as-Code Copilot"
maturity: emerging
ml_types:
  - "Large Language Models"
departments:
  - "Infrastructure & Cloud Security"
factors:
  business_impact: 8
  cost_efficiency: 7
  implementation_ease: 6
  capability_fit: 8
  data_readiness: 8
factor_notes:
  business_impact:
    - "+ Closes the gap between written standards and live policies"
    - "+ Speeds up secure IaC pull requests"
  cost_efficiency:
    - "+ OPA is free; LLM cost is on PR / authoring time"
    - "- Tokens spent reviewing long IaC files add up"
  implementation_ease:
    - "+ Plugs into existing CI / PR review flow"
    - "- Trust requires deterministic guardrails (OPA tests)"
  capability_fit:
    - "+ LLMs are strong at structured-code generation"
    - "+ Output verifiable by deterministic policy engines"
  data_readiness:
    - "+ IaC and security standards already exist as text"
references:
  - url: "https://github.com/open-policy-agent/opa"
    description: "Open Policy Agent — the canonical declarative policy engine using Rego. The copilot pattern wraps an LLM around OPA to author and validate policies; OPA provides the deterministic guardrail that catches whatever the LLM gets wrong."
connections:
  - to: "cloud-misconfig-detection"
    relation: parallel
    note: "Scanner findings give the copilot a concrete misconfiguration to translate into a policy rule."
---

A GenAI copilot turns written security standards into policy-as-code tests
and safe IaC pull requests, while deterministic scanners and OPA validate
correctness and enforce guardrails before anything reaches production.

## Use Cases

- Translate a written security standard into an OPA / Rego rule set.
- Suggest IaC patches that close a misconfiguration with minimal blast radius.
- Pair LLM creativity with deterministic policy checks to stay safe.
- Co-author policy review comments on Terraform / Pulumi pull requests.

## Notes

Always pair the LLM with a deterministic policy check (OPA, Conftest). The
LLM authors; the engine verifies. Without that hand-off, drift goes
undetected.
