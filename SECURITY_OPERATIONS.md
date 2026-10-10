# Nandini Luxury Co-Living — Security Operations Guide (SecOps)

This document details day-to-day procedures for operating and maintaining the Nandini defensive security system with ₹0 operational overhead.

---

## 1. Environment Configuration

Copy `security-agent/.env.example` to `security-agent/.env`:

```ini
SECURITY_AGENT_ENABLED=true
AUTHORIZED_TARGET=http://localhost:5173
AUTHORIZED_DOMAINS=localhost,127.0.0.1,nandiniluxurycoliving.com

# Auto-Mitigation (False for strict human-in-the-loop)
AUTO_BLOCK_ENABLED=false
AUTO_RATE_LIMIT_ENABLED=false
REQUIRE_HUMAN_APPROVAL_FOR_CONTROLLED=true

# ₹0 Free Notifications (Optional)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# AI Provider (Default: "none" for built-in ₹0 deterministic analysis)
AI_PROVIDER=none
AI_API_KEY=
AI_MODEL=gemini-1.5-flash

# Dashboard Configuration
DASHBOARD_HOST=127.0.0.1
DASHBOARD_PORT=8080
```

---

## 2. Operational Workflows

### Workflow A: Pre-Deployment Audit
Before pushing changes to GitHub or deploying to Vercel/Cloudflare:
1. Verify website build:
   ```powershell
   npm run build
   ```
2. Run full security scan:
   ```powershell
   python security-agent/agent/main.py scan --all
   ```
3. Inspect `security-agent/reports/security_report_latest.md` or HTML dashboard. Ensure the score is 90+.
4. Update the cryptographic baseline:
   ```powershell
   python security-agent/agent/main.py baseline
   ```

### Workflow B: Weekly Automated Hardening Check
Run weekly via GitHub Actions or Windows Task Scheduler:
```powershell
python security-agent/agent/main.py scan --deps --secrets --fim
```
- If dependencies have new high/critical CVEs:
  - Run `npm audit` to view vulnerability remediation paths.
- If secrets are flagged:
  - Check the affected file. The agent masks secrets in output to prevent leaks.
  - Follow the Incident Response playbook to revoke the token.

### Workflow C: Ingesting Web Access Logs
When monitoring production access logs from Cloudflare or Nginx:
```powershell
python -c "from security_agent.monitoring.log_monitor import LogMonitor; from security_agent.database.db import SecurityDatabase; db = SecurityDatabase(); lm = LogMonitor(db); lm.process_file('path/to/access.log')"
```
Suspicious entries (SQLi, path traversal, scanner bots, `.env` probes) are automatically parsed, sanitized, classified, and stored in `security.db`.

---

## 3. Human Approval Procedures

When a controlled action (such as IP blocking or file quarantine) is suggested:
1. View pending approvals:
   ```powershell
   python security-agent/agent/main.py approvals list
   ```
2. Investigate the evidence attached to the request.
3. If confirmed malicious, approve:
   ```powershell
   python security-agent/agent/main.py approvals approve --id APP-xxxxxxxx
   ```
4. If benign or legitimate user traffic, reject:
   ```powershell
   python security-agent/agent/main.py approvals reject --id APP-xxxxxxxx
   ```

---

## 4. Zero-Cost Maintenance Principles

- **Local Storage:** SQLite database `security-agent/database/security.db` requires no server setup and negligible disk space (< 5 MB).
- **No Paid APIs:** The agent functions 100% autonomously without external API subscriptions.
- **Fail-Safe Operation:** If any scan fails or encounters network timeout, the website is never blocked or disrupted.
