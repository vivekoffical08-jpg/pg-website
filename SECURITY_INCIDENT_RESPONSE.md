# Nandini Luxury Co-Living — Security Incident Response Playbook

This playbook provides actionable, step-by-step procedures for mitigating security incidents identified by the defensive agent.

---

## 1. Incident Severity Matrix

| Severity | Definition | Response Target | Example |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | Immediate threat to credentials, domain control, or client trust. | Immediate (< 1 hour) | Exposed production private key, active token leak. |
| **HIGH** | Coordinated attack probes, scanner reconnaissance, high CVEs. | Same day (< 8 hours) | Repeated `.env` / `.git` probing, malicious IP scans. |
| **MEDIUM** | Missing defensive headers, moderate dependency advisory. | Within 48 hours | Missing Content-Security-Policy or Framing headers. |
| **LOW / INFO**| Hardening suggestions, informational telemetry. | Next sprint | Minor version upgrades, local HTTP dev notifications. |

---

## 2. Playbook A: Accidental Secret or API Token Leak

1. **Identification:** The secret scanner flags a high-entropy string or API key pattern in `security-agent/reports/` or live alerts.
2. **Containment:**
   - Immediately access the respective provider console (e.g. AWS, Stripe, GitHub, Google Maps).
   - **Revoke / Invalidate** the active key.
   - Generate a replacement key and store it only in environment variables or deployment secret stores (never in git).
3. **Remediation:**
   - Remove the key from the source file.
   - If committed to Git, rewrite history or rotate the key immediately.
4. **Verification:**
   - Run `python security-agent/agent/main.py scan --secrets` to verify clean output.

---

## 3. Playbook B: Automated Attack Probes & Scanner Bots

1. **Identification:** Telemetry logs report multiple 404 scans on sensitive paths (`/.env`, `/.git/config`, `/wp-admin`) or scanner User-Agents (`Nikto`, `sqlmap`).
2. **Evaluation:**
   - Remember: This is a **static SPA website** hosted on CDN/edge. Probes for PHP, WordPress, SQL, or Node.js backend files will receive a 404 and cannot execute code on the client.
3. **Mitigation (Cloudflare Free WAF):**
   - If an IP is persistently abusive (> 50 requests/min), generate a block rule:
     ```powershell
     python -c "from security_agent.response.remediation import DefensiveRemediationEngine; from security_agent.agent.config import SecurityConfig; from security_agent.database.db import SecurityDatabase; re = DefensiveRemediationEngine(SecurityConfig.load(), SecurityDatabase()); print(re.generate_cloudflare_rule('198.51.100.45', 'Abusive .env scanner'))"
     ```
   - Paste the expression into **Cloudflare Dashboard > Security > WAF > Custom Rules (Free tier allows up to 5 custom rules)**.
   - Action: **Block** or **Managed Challenge**.

---

## 4. Playbook C: File Integrity Drift / Unauthorized File Changes

1. **Identification:** `FileIntegrityMonitor` detects a modified, deleted, or unregistered file in the project directory.
2. **Investigation:**
   - Check `git status` and `git diff <file>` to inspect the changes.
   - If changes correspond to an authorized developer task:
     ```powershell
     python security-agent/agent/main.py baseline
     ```
   - If changes are suspicious or untracked:
     - Quarantine the untracked file safely without deleting it:
       ```powershell
       python -c "from security_agent.response.remediation import DefensiveRemediationEngine; from security_agent.agent.config import SecurityConfig; from security_agent.database.db import SecurityDatabase; re = DefensiveRemediationEngine(SecurityConfig.load(), SecurityDatabase()); print(re.quarantine_file('suspicious_file.js'))"
       ```
     - Revert tracked files using `git checkout -- <file>`.

---

## 5. Playbook D: Critical npm Dependency Vulnerability

1. **Identification:** Dependency audit flags a high or critical CVE in `package.json` packages.
2. **Analysis:**
   - Run `npm audit` to determine whether the affected package is included in client bundles (`dist/`) or is purely a build-time dev dependency.
3. **Remediation:**
   - Execute `npm audit fix` for safe semver upgrades.
   - Run `npm run build` to confirm the production build completes cleanly.
   - Run `python security-agent/agent/main.py scan --deps` to verify the alert is resolved.
