---
title: "SOAR Runbook Agents & Threat Intel Enrichment (MCP)"
maturity: emerging
ml_types:
  - "Large Language Models"
departments:
  - "Security Operations (SOC & Incident Response)"
factors:
  business_impact: 8
  cost_efficiency: 5
  implementation_ease: 4
  capability_fit: 7
  data_readiness: 6
factor_notes:
  business_impact:
    - "+ Cuts analyst time on enrichment and ticketing toil"
    - "+ Scales SOC across more alerts without more headcount"
  cost_efficiency:
    - "- Agent loops can consume many tokens per ticket"
    - "- Tool-calling and CTI API costs add up"
  implementation_ease:
    - "- MCP and agent frameworks are still maturing"
    - "- Each tool integration needs its own connector"
  capability_fit:
    - "+ LLMs handle unstructured reports & chat naturally"
    - "- High-impact actions require strict human approval"
  data_readiness:
    - "+ Tickets, alerts, and IOC feeds already exist"
    - "- Quality of free-text incident notes varies wildly"
references:
  - url: "https://github.com/modelcontextprotocol/servers"
    description: "Reference Model Context Protocol server implementations in multiple languages. MCP is the protocol layer that lets an LLM-driven SOAR orchestrator call out to enrichment APIs, ticketing systems, and CTI platforms in a controlled, tool-by-tool way."
connections:
  - to: "llm-control-assessment"
    relation: before
    note: "Compliance-extracted incident-response procedures become the playbooks the agents orchestrate."
  - to: "incident-classification"
    relation: parallel
    note: "Classifier output decides which runbook the orchestrator triggers next."
  - to: "alert-noise-reduction"
    relation: before
    note: "Noise-reduced alerts give the orchestrator a focused queue to work through."
---

GenAI agents orchestrate SOAR runbooks — enrichment, ticketing, containment —
via tool connectors using MCP. They automatically extract IOCs from
unstructured sources (reports, tickets, chats) and enrich them via CTI
platforms (MISP, OpenCTI) to accelerate triage and investigations, with
guardrails and human approval for any high-impact action.

## Use Cases

- Auto-enrich a ticket: pull WHOIS, malware family, prior incidents, similar tickets.
- Extract IOCs from free-text incident reports and push to the SIEM.
- Coordinate multi-tool workflows (EDR query → firewall change request → ticket update) under analyst supervision.

## Notes

Agent autonomy is the central design choice — too little and the SOC sees no
value, too much and a single hallucination triggers a production change.
Start with read-only enrichment, expand cautiously.
