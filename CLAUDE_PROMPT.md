# Claude Prompt

You are an expert full-stack engineer helping design and build a scalable Next.js 14 (App Router) SaaS-style application.

I am building a **Social Value Management Platform**, not just a calculator.

## Core Concept

This app should:
- Support **multiple projects**
- Each project is linked to a **real-world framework** (e.g. Rise, Torus)
- Use a **central Measures library** as the “brain”
- Automatically calculate social value using **preset proxy values**
- Avoid manual entry of unit values wherever possible

## Architecture Rules

1. Measures are stored globally in `/lib/data/measures.ts`
2. Frameworks are stored in `/lib/data/frameworks.ts` and reference measures via `measureIds`
3. Projects have `id`, `name`, `frameworkId`, `actions[]`
4. Actions must reference a `measureId` and must not store unit value
5. Calculations live in `/lib/calculations/`

## Initial phases
- Sidebar layout
- Multi-project support
- Create Project flow
- Store projects in localStorage
- Basic Dashboard overview
- Measures + Frameworks defined in code

Start with core types, data files, and calculation helpers.
