<div align="center">

# OpsClone

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/opsclone/ci.yml?branch=main&style=flat-square&color=00d4aa)](https://github.com/thefiredev/opsclone/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/opsclone?style=flat-square&color=00d4aa)](https://codecov.io/gh/thefiredev/opsclone)
[![Version](https://img.shields.io/npm/v/@thefiredev/opsclone?style=flat-square&color=00d4aa)](https://www.npmjs.com/package/@thefiredev/opsclone)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1234567890?style=flat-square&logo=discord&color=5865F2)](https://discord.gg/thefiredev)

**Clone any business in 48 hours.**

*Reverse-engineer any business's operating model. Outputs a turnkey replication playbook.*

[Landing Page](https://thefiredev.com/opsclone) · [Docs](https://docs.thefiredev.com/opsclone) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/opsclone/issues)

</div>

---

## What It Does

OpsClone is a 7-pipeline intelligence engine that reverse-engineers any business's operating model from public data. Input a company name or URL. Get a complete, actionable replication playbook in 48 hours.

**Used by:** Serial entrepreneurs, franchise evaluators, competitive intelligence teams, PE due diligence analysts.

---

## Key Value Props

| | |
|---|---|
| 🗺️ **7-Pipeline Collection** | Maps, LinkedIn, EDGAR, vendors, ads, tech stack, regulatory — automated |
| ⚡ **48-Hour Turnaround** | Full playbook generation, not just a report |
| 🎯 **Turnkey Output** | Step-by-step replication blueprint with cost estimates |
| 🔄 **Live Monitoring** | Watch competitors evolve in real time |
| 🔐 **Enterprise Security** | SOC 2 Type II, all data encrypted at rest and in transit |

---

## Features

### Intelligence Pipelines

- 🗺️ **Maps Pipeline** — Location analysis, foot traffic patterns, geographic competitive density
- 💼 **LinkedIn Pipeline** — Org chart reconstruction, hiring velocity, role mix, compensation signals
- 📊 **EDGAR Pipeline** — Financial structure, revenue estimates, burn rate, investor profile
- 🏭 **Vendor Pipeline** — Supply chain mapping, key supplier relationships, estimated COGS
- 📣 **Ads Pipeline** — Creative strategy, channel mix, spend estimates via Meta/Google ad libraries
- 💻 **Tech Stack Pipeline** — Infrastructure fingerprinting, SaaS tools, engineering headcount proxies
- ⚖️ **Regulatory Pipeline** — Licenses, permits, compliance requirements by jurisdiction

### Output Formats

- 📋 **Replication Playbook** — Step-by-step launch guide with timeline and budget
- 📈 **Financial Model** — Revenue, cost structure, unit economics estimates
- 🗂️ **Vendor Directory** — Sourced contacts with outreach templates
- 📅 **90-Day Launch Calendar** — Sequenced action plan
- 🔍 **Competitive Moat Analysis** — What makes this business hard to copy

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         OpsClone Engine                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Input: Company Name / URL / Domain                           │
│                          │                                      │
│              ┌───────────▼───────────┐                         │
│              │   Orchestration Layer  │                         │
│              │   (Pipeline Manager)   │                         │
│              └───────────┬───────────┘                         │
│                          │                                      │
│    ┌─────────────────────┼─────────────────────┐               │
│    │         │           │          │           │               │
│    ▼         ▼           ▼          ▼           ▼               │
│  Maps    LinkedIn      EDGAR     Vendors      Ads               │
│ Pipeline  Pipeline    Pipeline   Pipeline   Pipeline            │
│    │         │           │          │           │               │
│    └────┬────┘    ┌──────┘    ┌─────┘    ┌─────┘               │
│         │         │           │           │                     │
│    ┌────▼─────────▼───────────▼───────────▼────┐               │
│    │              Data Fusion Layer              │               │
│    │         (Normalization + Dedup)             │               │
│    └─────────────────────┬───────────────────── ┘               │
│                          │                                      │
│              ┌───────────▼───────────┐                         │
│              │     Analysis Engine    │                         │
│              │  (LLM + Rule Engine)   │                         │
│              └───────────┬───────────┘                         │
│                          │                                      │
│    ┌─────────────────────┼──────────────────────┐              │
│    │                     │                      │              │
│    ▼                     ▼                      ▼              │
│ Playbook            Financial              Vendor              │
│ Generator            Model                Directory            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql)](https://postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Docker](https://img.shields.io/badge/Docker-24-2496ED?style=flat-square&logo=docker)](https://docker.com/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)

---

## Quick Start

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- API keys: see `.env.example`

### Installation

```bash
git clone https://github.com/thefiredev/opsclone.git
cd opsclone
npm install
cp .env.example .env
# Add your API keys to .env
docker-compose up -d  # Start PostgreSQL + Redis
npm run db:migrate
npm run dev
```

### Run Your First Clone

```bash
# Via CLI
npx opsclone analyze --target "company-name.com" --output ./playbook

# Via API
curl -X POST https://api.thefiredev.com/opsclone/v1/analyze \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"target": "company-name.com", "pipelines": ["all"]}'
```

---

## API Reference

### `POST /v1/analyze`

Start a new business analysis job.

**Request**
```json
{
  "target": "string",          // Company name, URL, or domain
  "pipelines": ["string"],     // ["maps","linkedin","edgar","vendors","ads","tech","regulatory"] or ["all"]
  "output_format": "string",   // "playbook" | "report" | "json"
  "webhook_url": "string"      // Optional: receive results via webhook
}
```

**Response**
```json
{
  "job_id": "job_abc123",
  "status": "queued",
  "estimated_completion": "2024-01-15T14:00:00Z",
  "polling_url": "https://api.thefiredev.com/opsclone/v1/jobs/job_abc123"
}
```

### `GET /v1/jobs/:job_id`

Poll job status and retrieve results.

### `GET /v1/playbook/:job_id`

Download the completed playbook in PDF or JSON format.

**Full API docs:** [docs.thefiredev.com/opsclone/api](https://docs.thefiredev.com/opsclone/api)

---

## Pricing

| Plan | Price | Clones/mo | Features |
|------|-------|-----------|----------|
| Starter | $149/mo | 3 | All pipelines, PDF playbook |
| Growth | $499/mo | 15 | + API access, webhooks, financial model |
| Pro | $1,499/mo | Unlimited | + White-label, priority queue, dedicated support |

[Start free trial →](https://thefiredev.com/opsclone#pricing)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, code style, and PR guidelines.

## Security

Found a vulnerability? See [SECURITY.md](SECURITY.md) for responsible disclosure.

## License

MIT — see [LICENSE](LICENSE)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*The operating system for ambitious businesses.*

</div>
