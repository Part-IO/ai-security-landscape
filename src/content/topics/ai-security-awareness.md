---
title: "AI-supported Security Awareness, Guidance & Training"
maturity: emerging
ml_types:
  - "Large Language Models"
departments:
  - "Business Resilience & Security Awareness"
factors:
  business_impact: 6
  cost_efficiency: 7
  implementation_ease: 8
  capability_fit: 8
  data_readiness: 7
factor_notes:
  business_impact:
    - "+ Personalised content beats generic e-learning"
    - "- Behaviour change is slow and hard to measure"
  cost_efficiency:
    - "+ Content generation scales without consultancy fees"
    - "- LLM-generated training still needs human review"
  implementation_ease:
    - "+ Existing LMS / training platforms accept generated content"
    - "+ No specialised infrastructure required"
  capability_fit:
    - "+ Tone-adaptive copy is an LLM strength"
    - "+ Plain-language summaries are easy to produce"
  data_readiness:
    - "+ Past phishing results & policies provide grounding"
    - "- HR / org context often siloed away from security"
references: []
connections:
  - to: "phishing-susceptibility"
    relation: before
    note: "Susceptibility predictions decide who gets which awareness content next."
---

Use LLMs to automatically generate role-based security awareness content,
phishing simulation scenarios, and plain-language policy summaries.
Personalise by department, risk profile, and past simulation outcomes so
training effort goes where it matters.

## Use Cases

- Tailored phishing emails for upcoming simulations (role + locale-aware).
- Plain-language summaries of new internal policies, per audience.
- Just-in-time nudges based on observed risky behaviour.
- Generated content for training modules, security newsletters, internal Q&A.

## Notes

Generated awareness content is easy to produce in bulk — quality and tone
review still need a human. Avoid the trap of high-volume, low-relevance
training that trains people to ignore security messages.
