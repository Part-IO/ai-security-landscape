---
title: "Proactive Threat Hunting with Behavioral Anomaly Detection"
maturity: emerging
ml_types:
  - "Semi-Supervised Learning"
departments:
  - "Security Operations (SOC & Incident Response)"
factors:
  business_impact: 7
  cost_efficiency: 5
  implementation_ease: 4
  capability_fit: 7
  data_readiness: 4
factor_notes:
  business_impact:
    - "+ Surfaces threats rule-based detection misses"
    - "+ Scales coverage when analysts can't hunt 24/7"
  cost_efficiency:
    - "- Streaming-grade compute + storage are expensive"
    - "- Model retraining is non-trivial ongoing work"
  implementation_ease:
    - "- Needs unified telemetry across endpoint + network + cloud"
    - "- Hunting platform + ML expertise both required"
  capability_fit:
    - "+ Weak labels (known attack patterns) are a good fit"
    - "+ Anomaly + signature hybrids work well together"
  data_readiness:
    - "- Telemetry quality varies across sensors"
    - "- Normalisation across sources takes serious work"
references:
  - url: "https://github.com/OTRF/OSSEM"
    description: "Open Source Security Events Metadata — community-maintained data model and dictionaries for security event logs across Windows, Linux, macOS, and cloud platforms. Provides the normalised schema that behavioural models need to work across heterogeneous telemetry."
connections:
  - to: "cloud-serverless-anomaly-detection"
    relation: before
    note: "Anomaly streams from cloud/serverless feed the hunting workflow with candidate hypotheses."
  - to: "critical-attack-path-detection"
    relation: parallel
    note: "Hunt findings validate attack-path hypotheses; graph paths suggest where to hunt next."
---

Apply semi-supervised models to endpoint and network telemetry — using
known attack patterns as weak labels to surface hidden threats and
behavioural anomalies that rule-based detection misses. Enables
hypothesis-driven hunting without full analyst coverage.

## Use Cases

- Detect lateral movement patterns no signature catches.
- Spot rare process / parent-process combinations on endpoints.
- Surface unusual cloud API call sequences across accounts.
- Auto-generate hunt hypotheses for analysts to investigate.

## Notes

The hardest problem isn't the model — it's the data plumbing. A working
hunting setup requires consistent telemetry collection across the estate.
Solve that first, then add ML.
