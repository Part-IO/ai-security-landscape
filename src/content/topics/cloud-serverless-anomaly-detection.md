---
title: "Cloud & Serverless Anomaly Detection"
maturity: established
ml_types:
  - "Unsupervised Learning"
departments:
  - "Infrastructure & Cloud Security"
hero_image:
  src: "../../assets/topics/cloud-serverless-anomaly-detection/anomaly-pipeline.png"
  alt: "Pipeline: Telemetry from VMs, servers, containers, databases and application servers flows into cloud storage, becomes a dataset, feeds an ML model, then real-time integration triggers alerting and response."
  caption: "Generic data flow for an anomaly-detection pipeline on cloud workloads."
factors:
  business_impact: 7
  cost_efficiency: 6
  implementation_ease: 6
  capability_fit: 7
  data_readiness: 7
factor_notes:
  business_impact:
    - "+ Catches what static rules miss in fast-changing serverless estates"
    - "+ Surfaces unknown-unknowns at the platform layer"
  cost_efficiency:
    - "+ Cloud-native detectors reuse telemetry already collected for billing / observability"
    - "- The real cost driver is SOC time on false positives, not the models themselves"
    - "- Self-built pipelines add log storage, streaming and feature-engineering cost"
  implementation_ease:
    - "+ Commercial cloud-native detectors are essentially drop-in"
    - "- Multi-cloud feature unification (CloudTrail vs. Azure Activity vs. GCP Audit) is non-trivial"
    - "- Threshold tuning per environment is an ongoing chore"
  capability_fit:
    - "+ Unsupervised is the right tool for unknown-unknowns"
    - "- High false-positive rate without contextual filtering (asset criticality, time-of-day baselines, allow-listed automation)"
  data_readiness:
    - "+ CloudTrail / Azure Activity Logs / GCP Audit Logs are ready-made event streams"
    - "+ Lambda / Cloud Functions metrics already streamed for SRE"
    - "- Raw logs ≠ features; feature engineering still required for self-built models"
references:
  - url: "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"
    description: "AWS GuardDuty. Managed threat-detection service running ML-based anomaly detection on CloudTrail, VPC Flow Logs and DNS logs since 2017. The canonical commercial example of this topic on AWS."
  - url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction"
    description: "Microsoft Defender for Cloud. The same pattern on Azure: behavioural baselines on Activity Logs, resource configuration changes and workload telemetry, with built-in alert routing."
  - url: "https://cloud.google.com/security-command-center/docs/concepts-security-command-center-overview"
    description: "Google Security Command Center. Anomaly and misconfiguration detection across GCP audit logs and asset inventory; Event Threat Detection is the ML-driven component."
  - url: "https://falco.org/"
    description: "Falco (CNCF). Open-source runtime detection for containers and serverless workloads. The go-to building block when commercial detectors are off the table."
  - url: "https://github.com/yzhao062/pyod"
    description: "PyOD. Python library with 60+ unsupervised anomaly-detection algorithms. The toolkit you'd reach for to prototype custom detection on cloud telemetry (Isolation Forest, autoencoders, LOF)."
connections:
  - to: "alert-noise-reduction"
    relation: after
    note: "Anomaly events feed downstream noise-reduction before reaching SOC alerts."
  - to: "proactive-threat-hunting"
    relation: after
    note: "Anomaly clusters give threat hunters their initial hypotheses to investigate."
  - to: "critical-attack-path-detection"
    relation: after
    note: "Individual anomaly events become nodes in the attack-path graph that prioritises the actual blast radius."
  - to: "user-behavior-analytics"
    relation: parallel
    note: "Same unsupervised techniques applied to user actions instead of infrastructure events. Complementary signal sources for the SOC."
---

Apply unsupervised models (Isolation Forest, Local Outlier Factor,
autoencoders) to cloud audit logs, serverless invocation metrics and
configuration changes to surface what falls outside the normal pattern.
The techniques are cheap and well-understood; no labelled training data
is needed. On all three hyperscalers this capability is available as a
managed service, which is where most teams should start.

## Concrete example: an anomalous Lambda invocation

The diagram above shows the generic pipeline. Worked through on a real
serverless workload it looks like this.

1. **Sources.** `AWS Lambda`, `ECS` containers, RDS, EC2 and an
   application server emit telemetry: CloudTrail API calls, CloudWatch
   invocation metrics, VPC Flow Logs.
2. **Cloud Storage.** Events land in S3 (and/or stream through
   Kinesis / EventBridge for real-time paths).
3. **Dataset.** Feature engineering produces a per-invocation row:
   `function_name`, `duration_ms`, `memory_used`, `caller_identity`,
   `source_ip`, `output_bytes`, `hour_of_day`.
4. **ML model.** An Isolation Forest is trained on 30 days of
   historical invocations per function, learning each function's
   normal envelope.
5. **Real-time integration.** Every new invocation is scored live.
6. **Alerting & response.** Alerts above a threshold are routed via
   SNS into the SIEM, where they open a SOC ticket.

**Concrete incident.** The Lambda `process-orders` normally runs
~250 ms, processes 5 records, returns ~5 KB. One invocation runs for
8 seconds, returns 12 MB and is triggered by a service-account
identity that has never invoked this function before. Isolation Forest
scores it at 0.87. The SOC investigates and finds a leaked CI/CD token
being used to exfiltrate order data, a class of misuse that no static
rule was watching for.

## How to read the cost & implementation scores

The scores assume **commercial cloud-native detectors** (GuardDuty,
Defender for Cloud, Security Command Center) as the realistic deployment
path. Building this pipeline from scratch on PyOD + custom feature
engineering is feasible but rarely worth it. The main cost in either
case is not the model, it is the SOC time spent triaging false
positives.

## When this is the wrong tool

- **Very small cloud footprints** (< a few thousand events/day per
  resource type). Too little signal for the model to learn from.
- **Permanently unstable environments** where everything is always
  changing. The baseline never converges and every event looks
  anomalous.
- **Compliance-driven detection** where you need an auditable rule for
  every alert. Unsupervised models give you a score, not an explanation;
  pair them with rule-based detections rather than replacing them.
