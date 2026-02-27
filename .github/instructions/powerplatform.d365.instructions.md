---
description: 'Guidelines for working with Dynamics 365 CE solutions using Power Platform CLI, Solution Packager, VS Code and manual component customization.'
applyTo: '**/*.json'
---

# Power Platform & D365 CE Development Instructions

## General Instructions
- Always work within a dedicated publisher and solution container.
- Maintain only high‑confidence changes when modifying components.
- Ensure any component edited manually passes syntax validation before packing.
- Follow ALM best practices for unpack/pack/validation cycles.
- Provide clear comments or commit messages explaining why changes were made.

---

# 1. D365 CE Connection
- Use service principal–based connection or PAC CLI authentication.
- Validate the environment URL and ensure correct target (Dev/Test/Prod).
- Run authentication command:
  ```sh
  pac auth create --url https://<org>.crm.dynamics.com --applicationId <id> --clientSecret <secret> --tenant <tenantId>