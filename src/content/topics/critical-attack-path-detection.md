---
title: "Critical Attack Path Detection & Prioritization"
maturity: emerging
ml_types:
  - "Semi-Supervised Learning"
departments:
  - "Infrastructure & Cloud Security"
factors:
  business_impact: 9
  cost_efficiency: 6
  implementation_ease: 5
  capability_fit: 8
  data_readiness: 6
factor_notes:
  business_impact:
    - "+ Surfaces the few paths actually worth fixing"
    - "+ Replaces gut-feel prioritisation with a data model"
  cost_efficiency:
    - "- Graph DB + ingest pipeline carries ongoing cost"
    - "+ Open-source stack (Cartography + Neo4j) keeps licences low"
  implementation_ease:
    - "- Cloud inventory ingestion is non-trivial"
    - "- Multi-account, multi-cloud setups multiply work"
  capability_fit:
    - "+ Graph reachability + weak-label scoring is well-suited"
    - "+ Output is a small, actionable list"
  data_readiness:
    - "+ Cloud APIs expose the needed data"
    - "- Identity / permission edges are often messy"
references:
  - url: "https://github.com/cartography-cncf/cartography"
    description: "Python application that aggregates assets from 30+ cloud and SaaS platforms into a Neo4j graph. Provides the asset graph that semi-supervised attack-path analysis needs — without a graph this approach has nothing to traverse."
connections:
  - to: "iac-policy-as-code-copilot"
    relation: after
    note: "High-risk paths are translated into specific IaC / IAM policy rules that break the path."
  - to: "proactive-threat-hunting"
    relation: parallel
    note: "Hunting hypotheses can be validated against the graph; graph findings can seed hunts."
---

Model cloud assets, identities, and permissions as a graph to identify
reachable attack paths, then rank the highest-risk paths and recommend the
smallest set of changes (IAM, network, or configuration) needed to break
them.

## Use Cases

- Surface the top-10 most exploitable paths from the public internet to crown jewels.
- Compare two states of the cloud (before / after a change) and flag new paths.
- Feed validated attack hypotheses from threat modeling into the graph for prioritization.
- Recommend the smallest IAM change that breaks the most paths.

## Notes

Output quality is bounded by how complete and current the asset graph is.
Stale identity data or missing cloud accounts produce confidently wrong
recommendations.
