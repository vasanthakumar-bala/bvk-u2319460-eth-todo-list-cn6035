// ============================================================
// ENHANCED VERSION — eth-todo-list-cn6035
// File:       truffle-config.js
// Student:    Vasanthakumar Balamurugan (U2319460)
//
// Configured networks:
//  - development : Ganache local blockchain (default port 7545)
//  - sepolia     : Ethereum Sepolia TestNet via Infura
//
// Requires a .env file (NEVER commit .env to GitHub):
//   MNEMONIC=your twelve word seed phrase
//   INFURA_KEY=your_infura_project_id
// ============================================================

require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {

    // ── Local Ganache ───────────────────────────────────────────────────
    development: {
      host:       '127.0.0.1',
      port:       7545,         // Default Ganache GUI port
      network_id: '*',          // Match any network id
    },

    // ── Sepolia TestNet ─────────────────────────────────────────────────
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`
      ),
      network_id: 11155111,     // Sepolia chain ID
      gas:        4_500_000,
      gasPrice:   10_000_000_000, // 10 gwei
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun:    true,
    },
  },

  // ── Mocha test runner ────────────────────────────────────────────────
  mocha: {
    timeout: 100_000,           // Allow time for TestNet transactions
  },

  // ── Solidity compiler ────────────────────────────────────────────────
  compilers: {
    solc: {
      version: '0.8.19',        // Must match pragma in TodoList.sol
      settings: {
        optimizer: {
          enabled: true,
          runs:    200,          // Optimise for average use
        },
      },
    },
  },
};
