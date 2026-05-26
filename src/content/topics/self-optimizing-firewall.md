---
title: "Self-Optimizing Firewall & Access Policies (Human-Approved)"
maturity: experimental
ml_types:
  - "Reinforcement Learning"
departments:
  - "Infrastructure & Cloud Security"
factors:
  business_impact: 5
  cost_efficiency: 4
  implementation_ease: 2
  capability_fit: 6
  data_readiness: 3
factor_notes:
  business_impact:
    - "+ Promise of self-tuning rule sets is high"
    - "- Real-world deployment lags the research significantly"
  cost_efficiency:
    - "- Simulation environments are expensive to build"
    - "- Continuous re-training is operationally heavy"
  implementation_ease:
    - "- Needs a faithful simulator of your network"
    - "- Human-in-the-loop gates limit actual autonomy"
  capability_fit:
    - "+ RL is well-suited to sequential policy decisions"
    - "- Reward shaping is a research problem on its own"
  data_readiness:
    - "- Production telemetry alone is insufficient for training"
    - "- Need labelled adversarial scenarios"
references:
  - url: "https://github.com/microsoft/CyberBattleSim"
    description: "Microsoft research platform with an OpenAI Gym interface for training RL agents on simulated lateral-movement attacks. The reference sandbox used to study how RL agents learn defensive policies without exposing them to live networks."
connections: []
---

Train a reinforcement-learning agent in a simulated network environment to
choose policy actions — block, allow, rate-limit, reorder rules — that
reduce attacks and false positives while preserving availability. Deploy
only with guardrails and human approval.

## Use Cases

- Research-stage exploration of adaptive firewall policy tuning.
- Adaptive WAF rule prioritisation under bursty attack conditions.
- Adaptive access policies for non-production environments.

## Notes

This is research-stage technology. The CSA Levels of Autonomy guidance and
recent incidents (Replit, Amazon Q) reinforce the point: AI in
production-touching policy decisions still requires a human gate. Most
value today is in the simulator, not the live network.
