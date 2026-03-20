# AGENTS.md — DSGVOClaw

DSGVOClaw is a GDPR/DSGVO-compliant AI employee platform built on the OpenClaw gateway framework. It provides German and EU businesses with an autonomous AI assistant that handles emails, calendar management, research, reporting, and administrative workflows — all running on self-hosted EU infrastructure.

## Architecture

- **Frontend:** Next.js 16 landing page (React 19, TypeScript, Tailwind CSS)
- **Backend:** OpenClaw gateway (`openclaw-gateway/`) — self-hosted AI agent runtime
- **Channels:** WhatsApp, Telegram, Slack, Teams, Discord, Web UI
- **LLM Providers:** Anthropic (Claude), OpenAI (GPT), Google (Gemini), local via Ollama
- **Data Storage:** Local filesystem — session logs (JSONL), agent memory (Markdown), audit logs

## Compliance

All data stays on-premise (EU data centers). The gateway enforces:
- **RBAC** with four roles (admin, analyst, user, audit)
- **Per-channel allowlists** and mention-gated group chats
- **Sandboxed execution** with CPU/memory limits
- **Detailed audit logging** (90-day retention)
- **Automated data retention** (30-day session cleanup via cron)
- **GDPR scripts** for data export (Art. 15) and erasure (Art. 17)

Configuration maps to SOC 2 Trust Services Criteria (CC6, CC7, CC8). See `docs/SOC2-CONTROLS.md` and `docs/GDPR-COMPLIANCE.md`.
