---
title: "Phishing Susceptibility / Human Risk Prediction"
maturity: emerging
ml_types:
  - "Supervised Learning"
departments:
  - "Business Resilience & Security Awareness"
factors:
  business_impact: 7
  cost_efficiency: 8
  implementation_ease: 7
  capability_fit: 7
  data_readiness: 7
factor_notes:
  business_impact:
    - "+ Training time goes to the users who need it"
    - "- Doesn't address motivated insider threats"
  cost_efficiency:
    - "+ Classical ML on existing logs is inexpensive"
    - "+ Reuses tooling you already run for simulations"
  implementation_ease:
    - "+ GoPhish + Python is a known recipe"
    - "- Privacy / works-council clearance can be slow"
  capability_fit:
    - "+ Tabular features + outcome labels = ML's comfort zone"
    - "- Behaviour is noisy: predictions are probabilistic"
  data_readiness:
    - "+ GoPhish (or similar) produces clean training data"
    - "- Cross-feature data (role, tenure) needs HR integration"
references:
  - url: "https://github.com/gophish/gophish"
    description: "Open-source phishing campaign platform. Produces the click / report / role outcomes that a supervised model needs as labels — the data source most susceptibility predictors are built on top of."
connections:
  - to: "user-behavior-analytics"
    relation: before
    note: "Behaviour signals (logins, clicks, file access) enrich the supervised feature set."
  - to: "ai-security-awareness"
    relation: after
    note: "Susceptibility predictions decide who gets which targeted awareness content."
---

Use phishing simulation outcomes combined with user and context features
(role, department, past behaviour) to train supervised models that predict
who is most likely to fall for the next campaign — enabling personalised,
risk-based security awareness training at scale.

## Use Cases

- Identify users repeatedly at risk and assign targeted training.
- Prioritise simulation effort on the highest-risk groups.
- Detect organisational changes that shift risk profiles (e.g. new business unit).
- Feed predictions back into [AI security awareness](./ai-security-awareness/) content selection.

## Notes

Beware ethical and privacy concerns: predictions can affect employees'
careers if used punitively. Most successful programmes use the data for
training selection, not performance review.
