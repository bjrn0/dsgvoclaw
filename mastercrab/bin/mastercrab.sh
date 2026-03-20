#!/usr/bin/env bash
set -euo pipefail

MASTERCRAB_HOME="${MASTERCRAB_HOME:-$HOME/.mastercrab}"
MASTERCRAB_VERSION="0.1.0"
ADMIN_PORT="${ADMIN_PORT:-18800}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# ── Helpers ──────────────────────────────────────────────────────────────────

red()   { printf '\033[0;31m%s\033[0m\n' "$*"; }
green() { printf '\033[0;32m%s\033[0m\n' "$*"; }
bold()  { printf '\033[1m%s\033[0m\n' "$*"; }

require_cmd() {
  if ! command -v "$1" &>/dev/null; then
    red "Error: '$1' is required but not installed."
    echo "Please install $1 and try again."
    exit 1
  fi
}

require_nemoclaw() {
  if ! command -v nemoclaw &>/dev/null; then
    red "Error: NemoClaw CLI not found."
    echo "Run 'mastercrab onboard' first, or install manually:"
    echo "  npm install -g @nvidia/nemoclaw"
    exit 1
  fi
}

# ── Commands ─────────────────────────────────────────────────────────────────

cmd_onboard() {
  bold "🦀 MasterCrab Onboarding"
  echo ""

  # Check prerequisites
  echo "Checking prerequisites..."
  require_cmd docker
  require_cmd node
  require_cmd npm

  NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
  if [ "$NODE_VERSION" -lt 20 ]; then
    red "Error: Node.js 20+ is required (found v$(node -v))."
    exit 1
  fi
  green "✓ Docker, Node.js $NODE_VERSION, npm found"

  # Install NemoClaw if not present
  if ! command -v nemoclaw &>/dev/null; then
    echo "Installing NemoClaw CLI..."
    npm install -g @nvidia/nemoclaw
    green "✓ NemoClaw installed"
  else
    green "✓ NemoClaw already installed"
  fi

  # Set up MasterCrab home
  mkdir -p "$MASTERCRAB_HOME/workspace"
  mkdir -p "$MASTERCRAB_HOME/logs"
  mkdir -p "$MASTERCRAB_HOME/sessions"

  # Copy GDPR-compliant config
  if [ -f "$PROJECT_DIR/config/openclaw.json" ]; then
    cp "$PROJECT_DIR/config/openclaw.json" "$MASTERCRAB_HOME/openclaw.json"
    green "✓ GDPR config copied to $MASTERCRAB_HOME/"
  fi

  if [ -f "$PROJECT_DIR/config/network-policy.yaml" ]; then
    cp "$PROJECT_DIR/config/network-policy.yaml" "$MASTERCRAB_HOME/network-policy.yaml"
    green "✓ Network policy copied"
  fi

  if [ -f "$PROJECT_DIR/config/.env.example" ] && [ ! -f "$MASTERCRAB_HOME/.env" ]; then
    cp "$PROJECT_DIR/config/.env.example" "$MASTERCRAB_HOME/.env"
    echo "⚠  Edit $MASTERCRAB_HOME/.env with your API keys"
  fi

  # Run NemoClaw onboard with GDPR defaults
  echo ""
  echo "Running NemoClaw onboarding with GDPR defaults..."
  nemoclaw onboard \
    --config "$MASTERCRAB_HOME/openclaw.json" \
    --data-residency EU \
    --sandbox true

  echo ""
  green "✓ MasterCrab onboarding complete!"
  echo ""
  echo "Next steps:"
  echo "  1. Edit $MASTERCRAB_HOME/.env with your NVIDIA API key"
  echo "  2. Run: mastercrab start"
  echo "  3. Run: mastercrab admin"
}

cmd_start() {
  require_nemoclaw
  bold "🦀 Starting MasterCrab..."

  if [ -f "$MASTERCRAB_HOME/.env" ]; then
    set -a
    # shellcheck disable=SC1091
    source "$MASTERCRAB_HOME/.env"
    set +a
  fi

  nemoclaw start \
    --config "$MASTERCRAB_HOME/openclaw.json" \
    --sandbox true

  green "✓ MasterCrab is running"
}

cmd_stop() {
  require_nemoclaw
  bold "🦀 Stopping MasterCrab..."
  nemoclaw stop
  green "✓ MasterCrab stopped"
}

cmd_status() {
  require_nemoclaw
  bold "🦀 MasterCrab Status"
  echo ""
  nemoclaw status
}

cmd_admin() {
  bold "🦀 MasterCrab Admin Panel"
  echo "Starting admin panel on http://localhost:${ADMIN_PORT}"
  echo "Press Ctrl+C to stop"
  echo ""

  if [ -d "$PROJECT_DIR/admin" ]; then
    cd "$PROJECT_DIR/admin"
    python3 -m http.server "$ADMIN_PORT"
  else
    red "Error: Admin panel not found at $PROJECT_DIR/admin/"
    exit 1
  fi
}

cmd_connect() {
  require_nemoclaw
  local name="${1:-}"
  if [ -z "$name" ]; then
    red "Error: Please provide a sandbox name."
    echo "Usage: mastercrab connect <name>"
    exit 1
  fi

  bold "🦀 Connecting to $name..."
  nemoclaw "$name" connect
}

cmd_logs() {
  require_nemoclaw
  bold "🦀 MasterCrab Logs"
  nemoclaw logs --follow
}

cmd_help() {
  cat <<EOF
🦀 MasterCrab v${MASTERCRAB_VERSION}
GDPR-compliant AI Agent Runtime – powered by NemoClaw & OpenClaw

Usage:
  mastercrab <command> [arguments]

Commands:
  onboard          Set up MasterCrab (install NemoClaw, configure GDPR defaults)
  start            Start the MasterCrab sandbox
  stop             Stop the MasterCrab sandbox
  status           Show sandbox status
  admin            Open the admin panel (http://localhost:${ADMIN_PORT})
  connect <name>   Connect to a named agent
  logs             Stream sandbox logs
  help             Show this help message

Environment:
  MASTERCRAB_HOME  Config & data directory (default: ~/.mastercrab)
  ADMIN_PORT       Admin panel port (default: 18800)

Examples:
  mastercrab onboard              # First-time setup
  mastercrab start                # Start the runtime
  mastercrab connect assistant    # Chat with the 'assistant' agent
  mastercrab admin                # Open admin dashboard

EOF
}

# ── Main ─────────────────────────────────────────────────────────────────────

COMMAND="${1:-help}"
shift || true

case "$COMMAND" in
  onboard)       cmd_onboard "$@" ;;
  start)         cmd_start "$@" ;;
  stop)          cmd_stop "$@" ;;
  status)        cmd_status "$@" ;;
  admin)         cmd_admin "$@" ;;
  connect)       cmd_connect "$@" ;;
  logs)          cmd_logs "$@" ;;
  help|--help|-h) cmd_help ;;
  *)
    red "Unknown command: $COMMAND"
    echo ""
    cmd_help
    exit 1
    ;;
esac
