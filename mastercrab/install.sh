#!/usr/bin/env bash
set -euo pipefail

# ── Banner ───────────────────────────────────────────────────────────────────

cat <<'BANNER'

  ╔══════════════════════════════════════════════════╗
  ║                                                  ║
  ║   🦀  M A S T E R C R A B                       ║
  ║                                                  ║
  ║   GDPR-compliant AI Agent Runtime                ║
  ║   powered by NemoClaw & OpenClaw                 ║
  ║                                                  ║
  ║   v0.1.0                                         ║
  ║                                                  ║
  ╚══════════════════════════════════════════════════╝

BANNER

MASTERCRAB_HOME="${MASTERCRAB_HOME:-$HOME/.mastercrab}"
MASTERCRAB_REPO="https://github.com/openclaw/mastercrab"

# ── Helpers ──────────────────────────────────────────────────────────────────

red()   { printf '\033[0;31m%s\033[0m\n' "$*"; }
green() { printf '\033[0;32m%s\033[0m\n' "$*"; }
yellow(){ printf '\033[0;33m%s\033[0m\n' "$*"; }
bold()  { printf '\033[1m%s\033[0m\n' "$*"; }

fail() { red "✗ $*"; exit 1; }

# ── Prerequisites ────────────────────────────────────────────────────────────

bold "Checking prerequisites..."
echo ""

# OS check
if [[ "$(uname -s)" != "Linux" ]]; then
  yellow "⚠  MasterCrab is designed for Linux (Ubuntu 22.04+)."
  yellow "   Detected: $(uname -s). Proceeding anyway — some features may not work."
fi

# Docker
if command -v docker &>/dev/null; then
  DOCKER_VERSION=$(docker --version | grep -oP '\d+\.\d+' | head -1)
  green "✓ Docker ${DOCKER_VERSION}"
else
  fail "Docker is required but not installed. Install: https://docs.docker.com/engine/install/"
fi

# Node.js
if command -v node &>/dev/null; then
  NODE_FULL=$(node -v)
  NODE_MAJOR=$(echo "$NODE_FULL" | sed 's/v//' | cut -d. -f1)
  if [ "$NODE_MAJOR" -lt 20 ]; then
    fail "Node.js 20+ is required (found ${NODE_FULL}). Install: https://nodejs.org/"
  fi
  green "✓ Node.js ${NODE_FULL}"
else
  fail "Node.js is required but not installed. Install: https://nodejs.org/"
fi

# npm
if command -v npm &>/dev/null; then
  green "✓ npm $(npm -v)"
else
  fail "npm is required but not installed."
fi

echo ""

# ── Install NemoClaw CLI ────────────────────────────────────────────────────

bold "Installing NemoClaw CLI..."

if command -v nemoclaw &>/dev/null; then
  green "✓ NemoClaw already installed ($(nemoclaw --version 2>/dev/null || echo 'unknown'))"
else
  npm install -g @nvidia/nemoclaw
  green "✓ NemoClaw CLI installed"
fi

echo ""

# ── Set up MasterCrab home ──────────────────────────────────────────────────

bold "Setting up MasterCrab home at ${MASTERCRAB_HOME}..."

mkdir -p "$MASTERCRAB_HOME"/{workspace,logs,sessions,config}

# Download GDPR-compliant config files
CONFIGS_URL="${MASTERCRAB_REPO}/raw/main/mastercrab/config"

if [ ! -f "$MASTERCRAB_HOME/openclaw.json" ]; then
  curl -fsSL "${CONFIGS_URL}/openclaw.json" -o "$MASTERCRAB_HOME/openclaw.json" 2>/dev/null || {
    yellow "⚠  Could not download openclaw.json — using bundled fallback"
    cat > "$MASTERCRAB_HOME/openclaw.json" <<'EOF'
{
  "$schema": "openclaw-config-v1",
  "gateway": {
    "bind": "loopback",
    "port": 18789,
    "auth": { "token": "${MASTERCRAB_GATEWAY_TOKEN}" }
  },
  "agents": {
    "defaults": {
      "workspace": "~/.mastercrab/workspace",
      "confirm_actions": true,
      "sandbox": true,
      "model": "nvidia/nemotron-3-super-120b"
    }
  },
  "session": { "dmScope": "per-channel-peer", "retention_days": 30 },
  "compliance": {
    "gdpr": {
      "enabled": true,
      "data_residency": "EU",
      "auto_deletion_days": 30,
      "right_to_erasure": true,
      "right_to_export": true
    }
  },
  "audit": { "enabled": true, "level": "detailed", "retention_days": 90, "format": "jsonl" },
  "sandbox": { "cpu_limit": "2", "memory_limit": "2048m", "timeout": 300 }
}
EOF
  }
  green "✓ GDPR config installed"
fi

if [ ! -f "$MASTERCRAB_HOME/network-policy.yaml" ]; then
  curl -fsSL "${CONFIGS_URL}/network-policy.yaml" -o "$MASTERCRAB_HOME/network-policy.yaml" 2>/dev/null || {
    yellow "⚠  Could not download network-policy.yaml — will be configured during onboard"
  }
  green "✓ Network policy installed"
fi

if [ ! -f "$MASTERCRAB_HOME/.env" ]; then
  cat > "$MASTERCRAB_HOME/.env" <<'EOF'
# MasterCrab Configuration
NVIDIA_API_KEY=
MASTERCRAB_GATEWAY_TOKEN=
ADMIN_PORT=18800
EOF
  yellow "⚠  Edit $MASTERCRAB_HOME/.env with your API keys"
fi

echo ""

# ── Create sandbox with GDPR defaults ──────────────────────────────────────

bold "Creating GDPR-compliant sandbox..."

nemoclaw onboard \
  --config "$MASTERCRAB_HOME/openclaw.json" \
  --data-residency EU \
  --sandbox true 2>/dev/null || {
    yellow "⚠  NemoClaw onboard skipped (run 'mastercrab onboard' manually if needed)"
  }

echo ""

# ── Summary ─────────────────────────────────────────────────────────────────

cat <<EOF

$(bold "═══════════════════════════════════════════════════")
$(green "  ✓ MasterCrab installation complete!")
$(bold "═══════════════════════════════════════════════════")

  Home directory:  ${MASTERCRAB_HOME}
  Config file:     ${MASTERCRAB_HOME}/openclaw.json
  Network policy:  ${MASTERCRAB_HOME}/network-policy.yaml
  Environment:     ${MASTERCRAB_HOME}/.env

$(bold "Next steps:")

  1. Add your NVIDIA API key:
     $(yellow "nano ${MASTERCRAB_HOME}/.env")

  2. Run the onboarding wizard:
     $(green "mastercrab onboard")

  3. Start MasterCrab:
     $(green "mastercrab start")

  4. Connect to your agent:
     $(green "mastercrab connect assistant")

  5. Open the admin panel:
     $(green "mastercrab admin")

$(bold "Documentation:")  https://docs.mastercrab.de
$(bold "Support:")        support@mastercrab.de

EOF
