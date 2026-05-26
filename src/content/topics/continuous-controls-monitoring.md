---
title: "Continuous Controls Monitoring & Compliance Drift Detection"
maturity: emerging
ml_types:
  - "Semi-Supervised Learning"
departments:
  - "GRC & TPRM"
  - "Security Operations (SOC & Incident Response)"
factors:
  business_impact: 8
  cost_efficiency: 7
  implementation_ease: 5
  capability_fit: 7
  data_readiness: 5
factor_notes:
  business_impact:
    - "+ Audit becomes a continuous state instead of a periodic event"
    - "+ Compliance drift caught the day it happens, not at audit time"
  cost_efficiency:
    - "+ Reuses existing telemetry (config, IAM, ticketing)"
    - "- Multi-control orchestration tooling is still custom work"
  implementation_ease:
    - "- Each control needs its own evidence collector"
    - "- Cross-team data ownership is the real blocker"
  capability_fit:
    - "+ Anomaly detection on control evidence is a solid fit"
    - "+ Pairs naturally with LLM-based control assessment"
  data_readiness:
    - "+ Most evidence sources are already monitored for other reasons"
    - "- Control-to-evidence mapping is often manual today"
references: []
connections:
  - to: "llm-control-assessment"
    relation: before
    note: "The control library extracted by LLM assessment becomes the baseline that drift detection monitors."
---

Continuous controls monitoring: learn normal control / evidence patterns
and alert on anomalies or compliance drift. The control library defines
*what* to monitor; the model decides *when* the evidence has materially
changed. Lives between GRC (who owns the controls) and SOC (who has the
data plumbing).

## Use Cases

- Alert when control evidence stops being produced for a sensitive system.
- Detect when ticket volumes or response times drift outside expected ranges.
- Compare current vs prior audit periods automatically.
- Surface controls where evidence quality is silently degrading.

## Notes

A topic that genuinely spans GRC and SecOps — it's why the box on the map
straddles two departments. Buy-in from both sides is the prerequisite, not
the tooling.
