# Decentralised To-Do List DApp

**CN6035 — Mobile and Distributed Systems**  
**Student:** Vasanthakumar Balamurugan | **ID:** U2319460  
**University of East London**

---

## Overview

A blockchain-based to-do list DApp built on Ethereum. Users can create, complete, and delete personal tasks stored entirely on-chain via a Solidity smart contract. Identity is managed through MetaMask wallet addresses — no login, no centralised server, no third-party storage.

**Based on:** [dappuniversity/eth-todo-list](https://github.com/dappuniversity/eth-todo-list)

### Key Enhancements Over Original

| Feature | Original | This Version |
|---|---|---|
| Solidity version | ^0.5.0 | ^0.8.19 |
| Task deletion | ❌ | ✅ Soft-delete |
| Per-address isolation | ❌ Global mapping | ✅ Nested mapping |
| Front-end | Bootstrap 3, sync JS | Bootstrap 5, async/await |
| MetaMask provider | Legacy `web3.currentProvider` | EIP-1193 `window.ethereum` |
| Error handling | None | try/catch + toast UI |
| Automated tests | 2 tests | 6 tests |
| Code quality | None | Solhint + ESLint |
| TestNet | Ropsten (deprecated) | Sepolia (active) |

---

## Technology Stack

- **Smart Contract:** Solidity ^0.8.19
- **Framework:** Truffle v5.11
- **Local Blockchain:** Ganache
- **Wallet:** MetaMask
- **Web3 Library:** Web3.js v1.10
- **TestNet:** Sepolia (via Infura)
- **Front-end:** HTML5, Bootstrap 5, Vanilla JS
- **Testing:** Mocha + Chai
- **Linting:** Solhint (Solidity), ESLint (JavaScript)

---

## Quick Start

### 1. Prerequisites

```bash
node --version   # v18+
npm --version    # v9+
npm install -g truffle
```

Install [Ganache](https://trufflesuite.com/ganache/) and [MetaMask](https://metamask.io/).

### 2. Clone & Install

```bash
git clone https://github.com/bvk-u2319460/eth-todo-list-cn6035.git
cd eth-todo-list-cn6035
npm install
```

### 3. Start Ganache

Open Ganache GUI, create a new workspace, set port **7545** and network ID **5777**.

### 4. Configure MetaMask

- Add network: `http://127.0.0.1:7545` | Chain ID: `1337`
- Import an account using a private key from Ganache

### 5. Deploy & Run

```bash
truffle compile
truffle migrate --reset
npm run dev
# App available at http://localhost:3000
```

### 6. Run Tests

```bash
truffle test
```

### 7. Run Linter

```bash
npm run lint
```

---

## Sepolia Deployment

Create a `.env` file (**never commit this**):

```
MNEMONIC=your twelve word seed phrase here
INFURA_KEY=your_infura_project_id
```

Then:

```bash
npm run migrate:sep
```

---

## Project Structure

```
eth-todo-list-cn6035/
├── contracts/
│   └── TodoList.sol          # Enhanced smart contract
├── migrations/
│   └── 2_deploy_contracts.js
├── src/
│   ├── index.html            # Bootstrap 5 front-end
│   └── js/
│       └── app.js            # Web3 application logic
├── test/
│   └── TodoList.test.js      # 6-case Mocha/Chai suite
├── .solhint.json             # Solidity linting rules
├── .eslintrc.json            # JavaScript linting rules
├── .gitignore
├── bs-config.json            # lite-server config
├── package.json
├── truffle-config.js
└── README.md
```

---

## References

- Dapp University (2019). *eth-todo-list*. GitHub. https://github.com/dappuniversity/eth-todo-list
- Ethereum Foundation (2024). *Solidity Documentation v0.8.19*. https://docs.soliditylang.org
- Truffle Suite (2024). *Truffle Documentation*. https://trufflesuite.com/docs
- MetaMask (2024). *EIP-1193 Provider API*. https://docs.metamask.io

---

*Submitted for CN6035 — University of East London — April 2025*
