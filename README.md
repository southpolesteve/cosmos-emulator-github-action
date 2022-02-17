# Azure Cosmos DB Emulator Github Action

The Azure Cosmost DB Emulator [is already installed on GitHub Actions Virtual Environments for Windows](https://github.com/actions/virtual-environments/tree/main/images/win), so this action only needs to start it.

## Getting Started

🚨🚨 This only works on windows 🚨🚨

Example usage:

```
jobs:
  check_pr:
    runs-on: windows-latest
    steps:
      - uses: southpolesteve/cosmos-emulator-github-action@v1
      - name: 'npm ci'
        run: npm ci
      - name: 'npm test'
        run: npm test
```
