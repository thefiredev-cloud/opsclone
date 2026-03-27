# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest  | ✅ |
| < 1.0   | ❌ |

## Reporting a Vulnerability

**Do not report security vulnerabilities through GitHub Issues.**

To report a vulnerability, email **security@thefiredev.com** with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Any suggested mitigations

We will respond within **48 hours** and work with you to understand and address the issue.

## Disclosure Policy

- We follow coordinated disclosure
- We ask for 90 days to remediate before public disclosure
- We will credit researchers in our security advisories (unless you prefer to remain anonymous)

## Scope

In scope:
- API endpoints
- Authentication and authorization
- Data exposure or leakage
- SQL/NoSQL injection
- XSS, CSRF
- Insecure direct object references

Out of scope:
- Social engineering
- Physical attacks
- Denial of service attacks

## Security Practices

- All API keys encrypted at rest (AES-256)
- TLS 1.3 for all communications
- SOC 2 Type II (in progress)
- Regular dependency audits via `npm audit`
- Secrets scanning in CI/CD pipeline
