# Azure Cosmos DB Emulator Github Action

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
