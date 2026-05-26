---
title: "Cloud & Serverless Anomaly Detection"
maturity: established
ml_types:
  - "Unsupervised Learning"
departments:
  - "Infrastructure & Cloud Security"
factors:
  business_impact: 7
  cost_efficiency: 8
  implementation_ease: 7
  capability_fit: 7
  data_readiness: 7
factor_notes:
  business_impact:
    - "+ Catches what rules miss in unfamiliar territory"
    - "+ Especially valuable in fast-changing serverless estates"
  cost_efficiency:
    - "+ Mature open-source libraries (PyOD)"
    - "+ Streams already collected for billing or observability"
  implementation_ease:
    - "+ Anomaly libraries are off-the-shelf"
    - "- Threshold tuning per environment is ongoing"
  capability_fit:
    - "+ Unsupervised is the right tool for unknown-unknowns"
    - "- High false-positive rate without contextual filtering"
  data_readiness:
    - "+ CloudTrail / GCP Audit Logs / Azure Activity Logs are ready-made"
    - "+ Metrics streams already collected for SRE"
references:
  - url: "https://github.com/yzhao062/pyod"
    description: "Python library with 60+ unsupervised anomaly detection algorithms covering tabular, time-series, graph, and text data. The toolkit you'd pull off the shelf to baseline cloud telemetry — Isolation Forest, autoencoders, LOF — without building from scratch."
connections:
  - to: "alert-noise-reduction"
    relation: after
    note: "Anomaly events feed downstream noise-reduction before reaching SOC alerts."
  - to: "proactive-threat-hunting"
    relation: after
    note: "Anomaly clusters give threat hunters their initial hypotheses to investigate."
---

Apply unsupervised models to cloud audit logs, serverless metrics, and
configuration changes to surface what's outside the normal pattern.
Cheap, well-understood techniques (Isolation Forest, LOF, autoencoders)
give a fast baseline without labelled training data.

## Use Cases

- Detect unusual API call patterns from a service account.
- Surface lambda invocations with anomalous duration or output volumes.
- Flag spikes in IAM permission grants or role assumptions.
- Provide first-pass anomaly streams for hunting and triage workflows.

## Notes

False-positive rate is the operational problem. The model rarely fails —
the workflow around it does. Plan for contextual filtering layered on top
of raw model output.
