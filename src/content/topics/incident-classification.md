---
title: "Incident Classification & Next-Best-Action Recommendation"
maturity: emerging
ml_types:
  - "Supervised Learning"
departments:
  - "Security Operations (SOC & Incident Response)"
factors:
  business_impact: 7
  cost_efficiency: 7
  implementation_ease: 5
  capability_fit: 7
  data_readiness: 4
factor_notes:
  business_impact:
    - "+ Faster routing → shorter mean time to triage"
    - "+ Recommendations help newer analysts"
  cost_efficiency:
    - "+ Classical ML — low inference cost"
    - "- Retraining cycle takes time and effort"
  implementation_ease:
    - "- Needs historical labelled incidents with outcomes"
    - "- Integration with SIEM / case management is non-trivial"
  capability_fit:
    - "+ Classification + ranking is classical-ML territory"
    - "- 'Next best action' depends on org context"
  data_readiness:
    - "- Historical incident labels are often inconsistent"
    - "- Outcome data (what actually worked) is rarely captured"
references: []
connections:
  - to: "alert-noise-reduction"
    relation: before
    note: "Cleaner alert stream produces less noisy training labels for the classifier."
---

Use supervised models to classify incidents (severity, type, routing) and
rank the next best response action based on historical triage and resolution
outcomes. The classifier becomes the first SOC filter — analysts work on
the cases the model can't confidently handle.

## Use Cases

- Auto-assign incidents to the right SOC tier or team.
- Suggest the runbook most likely to resolve an incident type.
- Detect duplicate incidents arriving from multiple sensors.
- Flag incidents that look like prior near-miss patterns.

## Notes

Quality is gated by label quality. Many SOCs have years of incident tickets
but inconsistent categorisation — start by cleaning labels for the top 5–10
incident types before training.
