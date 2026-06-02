import { defineCollection, reference, z } from "astro:content";

// Order matters: index 0 sits at the BOTTOM of the Y axis (data-lean),
// index N at the TOP (data-rich). This matches the bottom-up explanation on
// the /about/data-maturity page and keeps the upward-pointing arrow consistent.
export const ML_TYPES = [
  "Reinforcement Learning",
  "Unsupervised Learning",
  "Semi-Supervised Learning",
  "Supervised Learning",
  "Large Language Models",
] as const;

export const DEPARTMENTS = [
  "Infrastructure & Cloud Security",
  "AppSec & Product Security",
  "Security Engineering & Data Security",
  "Security Operations (SOC & Incident Response)",
  "GRC & TPRM",
  "Business Resilience & Security Awareness",
] as const;

export const DEPARTMENT_CATEGORIES = [
  "Technical Security",
  "Process & System Security",
  "Organizational Security",
] as const;

export const DEPARTMENT_TO_CATEGORY: Record<(typeof DEPARTMENTS)[number], (typeof DEPARTMENT_CATEGORIES)[number]> = {
  "Infrastructure & Cloud Security": "Technical Security",
  "AppSec & Product Security": "Technical Security",
  "Security Engineering & Data Security": "Process & System Security",
  "Security Operations (SOC & Incident Response)": "Process & System Security",
  "GRC & TPRM": "Organizational Security",
  "Business Resilience & Security Awareness": "Organizational Security",
};

// Department colours — used both on the landscape map and in the
// related-topics diagram so that a topic's identity is consistent across
// the site.
export const DEPARTMENT_COLOR: Record<(typeof DEPARTMENTS)[number], string> = {
  "Infrastructure & Cloud Security": "#2c5fc7",
  "AppSec & Product Security": "#7ca5f0",
  "Security Engineering & Data Security": "#3e8c3e",
  "Security Operations (SOC & Incident Response)": "#85c785",
  "GRC & TPRM": "#d68b6c",
  "Business Resilience & Security Awareness": "#f4baa0",
};

export const MATURITY_LEVELS = ["established", "emerging", "experimental"] as const;

export const FACTOR_KEYS = [
  "business_impact",
  "cost_efficiency",
  "implementation_ease",
  "capability_fit",
  "data_readiness",
] as const;

export const FACTOR_LABELS: Record<(typeof FACTOR_KEYS)[number], string> = {
  business_impact: "Business Impact",
  cost_efficiency: "Cost Efficiency",
  implementation_ease: "Implementation Ease",
  capability_fit: "Capability Fit",
  data_readiness: "Data Readiness",
};

export const FACTOR_DESCRIPTIONS: Record<(typeof FACTOR_KEYS)[number], string> = {
  business_impact:
    "Strategic value if the use case succeeds. 10 = high impact, 0 = marginal.",
  cost_efficiency:
    "Combined setup and operational cost (tokens, compute, licenses). 10 = very affordable, 0 = expensive.",
  implementation_ease:
    "How easily this integrates into existing infrastructure. 10 = drop-in, 0 = months of work.",
  capability_fit:
    "How well current AI/ML matches the use case. 10 = great fit & quality, 0 = poor fit.",
  data_readiness:
    "How available and clean the required data is today. 10 = data ready, 0 = needs major preparation.",
};

const factorScale = z.number().int().min(0).max(10);

// Per-factor notes: each string starts with "+ " or "- " for pros/cons.
const factorNoteList = z.array(z.string()).default([]);

const topics = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    maturity: z.enum(MATURITY_LEVELS),
    ml_types: z.array(z.enum(ML_TYPES)).min(1),
    departments: z.array(z.enum(DEPARTMENTS)).min(1),
    hero_image: z
      .object({
        src: image(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
    factors: z.object({
      business_impact: factorScale,
      cost_efficiency: factorScale,
      implementation_ease: factorScale,
      capability_fit: factorScale,
      data_readiness: factorScale,
    }),
    factor_notes: z
      .object({
        business_impact: factorNoteList,
        cost_efficiency: factorNoteList,
        implementation_ease: factorNoteList,
        capability_fit: factorNoteList,
        data_readiness: factorNoteList,
      })
      .partial()
      .default({}),
    references: z
      .array(
        z.object({
          url: z.string().url(),
          description: z.string().optional(),
        }),
      )
      .default([]),
    connections: z
      .array(
        z.object({
          to: reference("topics"),
          note: z.string().optional(),
          relation: z.enum(["before", "after", "parallel"]).default("after"),
        }),
      )
      .default([]),
  }),
});

export const collections = { topics };
