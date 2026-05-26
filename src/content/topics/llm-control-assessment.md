---
title: "LLM (RAG): Audit & Compliance Document Intelligence"
maturity: established
ml_types:
  - "Large Language Models"
departments:
  - "GRC & TPRM"
factors:
  business_impact: 9
  cost_efficiency: 7
  implementation_ease: 6
  capability_fit: 9
  data_readiness: 7
factor_notes:
  business_impact:
    - "+ Replaces weeks of manual evidence review"
    - "+ Speeds up audit readiness and customer questionnaires"
  cost_efficiency:
    - "+ Tokens scale with document volume, not auditors"
    - "- Vector store + embedding pipeline costs are ongoing"
  implementation_ease:
    - "+ Existing policy / control documents work as-is"
    - "- Multi-language & non-standard formats add friction"
  capability_fit:
    - "+ Semantic mapping is LLMs' strongest skill"
    - "+ RAG keeps answers grounded in the source documents"
  data_readiness:
    - "+ Most enterprises already have control + policy docs"
    - "- Formats are inconsistent across teams and frameworks"
references: []
connections:
  - to: "soar-runbook-agents-mcp"
    relation: after
    note: "Extracted incident-response procedures become the automated SOAR playbooks the agents run."
  - to: "continuous-controls-monitoring"
    relation: after
    note: "Extracted controls define the compliance baseline that drift detection watches over time."
  - to: "crisis-response-rl"
    relation: after
    note: "Compliance-defined response strategies feed the simulated crisis scenarios."
  - to: "vendor-risk-scoring"
    relation: parallel
    note: "Same evidence pipeline can score third-party answers against the company's own controls."
---

Use RAG-based LLMs to automatically extract obligations and controls from
audit documents, contracts, and vendor questionnaires. The model maps
findings to security frameworks (e.g. ISO 27001, NIST), summarises evidence,
and accelerates compliance assessments without manual document review.

## Use Cases

- Answer customer security questionnaires by mapping their questions to your existing policies.
- Pre-audit ISO 27001 / SOC 2 readiness: which controls have evidence, which don't?
- Cross-walk policies between frameworks (ISO 27001 ↔ NIST 800-53).
- Continuously re-check policy compliance as policies drift.

## Notes

The classic "verification fatigue" risk applies — operators stop checking the
LLM's output and accept it blindly. Build the workflow so the operator must
confirm matches, not reject them, to keep critical thinking in the loop.
