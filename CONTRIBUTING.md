# Contributing to OpsClone

Thank you for your interest in contributing to OpsClone. This document outlines our development process and standards.

## Development Setup

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- Git

### Local Setup

```bash
git clone https://github.com/thefiredev/opsclone.git
cd opsclone
npm install
cp .env.example .env
docker-compose up -d
npm run db:migrate
npm run dev
```

### Running Tests

```bash
npm test              # Run all tests
npm run test:unit     # Unit tests only
npm run test:e2e      # End-to-end tests
npm run test:coverage # Coverage report
```

## Contribution Guidelines

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Write tests for new functionality
4. Ensure all tests pass: `npm test`
5. Ensure linting passes: `npm run lint`
6. Commit with conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
7. Open a PR against `main` with a clear description

### Code Standards

- TypeScript strict mode — no `any` types
- 80% minimum test coverage for new code
- ESLint + Prettier (config included)
- All public functions must have JSDoc comments
- No hardcoded credentials or secrets

### Issue Reporting

Use GitHub Issues. Include:
- Steps to reproduce
- Expected vs. actual behavior
- Environment info (OS, Node version)
- Relevant logs

## Code of Conduct

Be professional. Be constructive. No harassment.

## License

By contributing, you agree your contributions will be licensed under the MIT License.

---

Questions? Join our [Discord](https://discord.gg/thefiredev) or email [dev@thefiredev.com](mailto:dev@thefiredev.com).
