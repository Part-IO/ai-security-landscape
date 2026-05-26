---
title: "User Behavior Analytics & Insider Risk Detection"
maturity: emerging
ml_types:
  - "Unsupervised Learning"
departments:
  - "Business Resilience & Security Awareness"
factors:
  business_impact: 7
  cost_efficiency: 6
  implementation_ease: 5
  capability_fit: 6
  data_readiness: 4
factor_notes:
  business_impact:
    - "+ Catches insider risks rule-based detection misses"
    - "- Hard to demonstrate value until a real case lands"
  cost_efficiency:
    - "- Requires sustained data engineering investment"
    - "+ Reuses logs already collected elsewhere"
  implementation_ease:
    - "- Need consolidated user activity across IT systems"
    - "- Privacy / works-council approval is often the bottleneck"
  capability_fit:
    - "+ Unsupervised baselining of behaviour patterns is workable"
    - "- 'Insider intent' is fundamentally fuzzy"
  data_readiness:
    - "- Identity + access logs scattered across many systems"
    - "- HR / context data hard to integrate legally"
references:
  - url: "https://github.com/elastic/detection-rules"
    description: "Elastic's detection-as-code repository — usable as a starting point for behaviour-based rules. A UBA layer sits above this kind of rule set, learning what is normal for each user and tuning the baselines over time."
connections:
  - to: "phishing-susceptibility"
    relation: after
    note: "Behaviour signals (logins, file access, deviations) enrich the supervised susceptibility model."
---

Profile normal user behaviour to surface insider-risk anomalies — unusual
file access, off-hours activity, large data movement — without needing
labelled examples. Sits at the intersection of security, HR, and privacy,
which is what makes it both valuable and politically complex.

## Use Cases

- Detect when a leaving employee's data access pattern changes.
- Surface unusual cross-system access bursts.
- Identify accounts that quietly start behaving like another user.
- Spot dormant accounts that suddenly become active.

## Notes

The hardest problem isn't the model — it's governance. Most UBA initiatives
that fail do so because privacy, works-council, or legal teams weren't
involved early. Design the workflow around those constraints first.
