---
title: "Cloud Misconfiguration Detection & Auto-remediation"
maturity: emerging
ml_types:
  - "Semi-Supervised Learning"
departments:
  - "Security Engineering & Data Security"
factors:
  business_impact: 8
  cost_efficiency: 7
  implementation_ease: 6
  capability_fit: 7
  data_readiness: 6
factor_notes:
  business_impact:
    - "+ Catches drift between scanner runs"
    - "+ Auto-remediation PRs cut MTTR drastically"
  cost_efficiency:
    - "+ Custodian is free; cloud API costs are modest"
    - "- LLM-generated remediation reviews add token cost"
  implementation_ease:
    - "+ Custodian YAML is approachable"
    - "- Multi-cloud, multi-account complicates baseline learning"
  capability_fit:
    - "+ Semi-supervised baselines fit periodic config snapshots"
    - "+ GenAI is good at writing remediation PRs"
  data_readiness:
    - "+ Cloud audit logs available out of the box"
    - "- Establishing the 'good' baseline takes a few cycles"
references:
  - url: "https://github.com/cloud-custodian/cloud-custodian"
    description: "YAML rules engine for AWS, Azure, and GCP that detects and remediates resource configuration drift. Demonstrates the deterministic policy layer that a semi-supervised AI baseline complements — AI surfaces what's off-baseline, Custodian fixes it."
connections:
  - to: "iac-policy-as-code-copilot"
    relation: parallel
    note: "Drift findings give the copilot a concrete misconfiguration to translate into a policy rule."
---

Detect cloud misconfigurations and risky configuration drift using
semi-supervised baselines on cloud audit logs, then automatically generate
safe remediation PRs and runbooks via GenAI — with mandatory human approval
before execution.

## Use Cases

- Surface configuration drift in multi-account AWS organisations.
- Detect new public-facing resources, then auto-generate a remediation PR.
- Compare drift against the threat model to prioritise which to fix first.
- Continuously tune detection rules using observed false-positive feedback.

## Notes

Auto-remediation always needs a human approval gate. The cost of a wrong
auto-fix in production is much higher than the cost of slower remediation.
Treat the AI as a fast first-drafter, not an autonomous fixer.
