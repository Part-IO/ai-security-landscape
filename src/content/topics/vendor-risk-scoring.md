---
title: "AI-based Vendor Risk Scoring & Tiering"
maturity: emerging
ml_types:
  - "Supervised Learning"
departments:
  - "GRC & TPRM"
factors:
  business_impact: 7
  cost_efficiency: 7
  implementation_ease: 5
  capability_fit: 6
  data_readiness: 4
factor_notes:
  business_impact:
    - "+ Frees teams from questionnaire churn for low-risk vendors"
    - "+ Sharper focus on the few vendors that actually matter"
  cost_efficiency:
    - "+ Inference is cheap once the model is trained"
    - "- Data engineering effort dominates total cost"
  implementation_ease:
    - "- Need a clean history of assessments + outcomes"
    - "- External signal feeds (BitSight, SecurityScorecard) add complexity"
  capability_fit:
    - "+ Tiering / ranking is solid classical-ML territory"
    - "- Risk is not a stationary signal — concept drift bites"
  data_readiness:
    - "- Historical vendor data scattered across procurement / GRC tools"
    - "- Incident outcomes per vendor rarely captured"
references: []
connections:
  - to: "llm-control-assessment"
    relation: parallel
    note: "Reuses the same evidence pipeline — score vendor answers against your controls."
---

Train supervised models on historical vendor assessments, incident outcomes,
and observed signals (patching cadence, exposure data) to automatically
score and tier vendors. Effort shifts from questionnaire-fatigue on
low-risk vendors to deeper review on the few high-risk ones.

## Use Cases

- Auto-tier new vendors based on their profile + signals.
- Re-score existing vendors continuously instead of annually.
- Surface vendors whose risk has materially changed since the last review.
- Bootstrap TPRM at organisations without an existing assessment programme.

## Notes

The biggest barrier is data fragmentation: TPRM, procurement, security and
incident-response systems each hold a piece of the picture. The model
quality follows whoever's brave enough to integrate them.
