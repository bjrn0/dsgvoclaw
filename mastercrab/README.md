# 🦀 MasterCrab

**GDPR-compliant AI Agent Runtime – powered by NemoClaw & OpenClaw**

MasterCrab wraps NVIDIA NemoClaw to provide a pre-configured, GDPR-ready AI agent runtime for German and EU businesses. One-command install, sandboxed execution, 52+ skills, 22+ channels.

---

## Features

- **Sandboxed Execution** — CPU/memory-limited containers with deny-all network defaults
- **GDPR Compliance** — EU data residency, 30-day auto-deletion, right to erasure & export
- **52+ Skills** — Email, calendar, coding, research, summarization, and more
- **22+ Channels** — WhatsApp, Telegram, Slack, Teams, Discord, Web UI, and beyond
- **Admin Panel** — Browser-based dashboard for channels, skills, network policy, and audit logs
- **NVIDIA Nemotron Inference** — Powered by Nemotron 3 Super 120B for enterprise-grade reasoning

## Requirements

| Requirement       | Minimum              |
|-------------------|----------------------|
| OS                | Ubuntu 22.04+        |
| Container Runtime | Docker 24+           |
| CPU               | 4 vCPUs              |
| RAM               | 8 GB                 |
| GPU               | Not required          |
| Node.js           | 20.0.0+              |

## Quick Start

```bash
# 1. Install MasterCrab
curl -fsSL https://install.mastercrab.de | bash

# 2. Run the onboarding wizard
mastercrab onboard

# 3. Connect to your agent
mastercrab <name> connect
```

## Configuration

All configuration lives in the `config/` directory:

| File                  | Purpose                                    |
|-----------------------|--------------------------------------------|
| `openclaw.json`       | Gateway, agents, channels, compliance      |
| `.env.example`        | Environment variables template             |
| `network-policy.yaml` | Sandbox network egress/ingress rules       |

Copy `.env.example` to `.env` and fill in your API keys before starting.

## Admin Panel

MasterCrab ships with a self-contained admin panel accessible at:

```
http://localhost:18800
```

Start it with:

```bash
mastercrab admin
```

The panel provides a dashboard for monitoring sandbox status, managing channels, editing network policies, toggling skills, and reviewing audit logs.

## Skills

MasterCrab includes curated skill presets organized by category:

| Category        | Examples                                      |
|-----------------|-----------------------------------------------|
| Communication   | Email (IMAP/SMTP), Slack, Discord, Teams      |
| Productivity    | Notion, Trello, Calendar, Reminders           |
| Development     | GitHub PRs/Issues/CI, Coding Agent, Git       |
| Research        | URL/PDF/Video Summarization, Web Search       |
| Infrastructure  | Healthcheck, Session Logs, System Monitoring  |

Load the German business preset:

```bash
mastercrab skills load business-de
```

## Security

MasterCrab enforces four sandbox layers:

1. **Network** — Deny-all egress by default. Only explicitly allowed hosts (NVIDIA API, npm registry, ClawHub) can be reached. Unknown hosts are flagged in the admin console.
2. **Filesystem** — Agent access is restricted to `~/.mastercrab/workspace`. No access to host filesystem.
3. **Process** — CPU limited to 2 cores, memory capped at 2048 MB, 5-minute execution timeout.
4. **Inference** — All LLM calls are routed through the gateway with full audit logging and token-level accounting.

See `docs/SOC2-CONTROLS.md` and `docs/GDPR-COMPLIANCE.md` for detailed compliance mapping.

## License

Apache-2.0
