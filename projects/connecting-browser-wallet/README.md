# Browser wallet connection

The [Day 004](../../days/day-004/README.md) browser app discovers Solana wallets,
connects to one, and displays a public address and devnet SOL balance.

## Setup and run

Use Node.js compatible with the installed Vite version, pnpm, and a browser
with a Solana wallet extension such as Phantom.

From this directory:

```sh
pnpm install
pnpm dev
```

Open the URL printed by Vite. Choose a wallet and approve the connection when
prompted. The app shows the first account returned by the wallet.

## Files and dependencies

- [index.html](index.html): page structure and inline styles.
- [main.ts](main.ts): wallet discovery, connection, devnet lookup, and disconnection.
- `@wallet-standard/app`: registered wallet discovery.
- `@solana/kit`: the RPC client and balance query.
- Vite: serves the app and transforms its TypeScript for the browser.

## Network and key handling

The RPC is fixed to `https://api.devnet.solana.com`. Switching the wallet's
network does not change that endpoint. Use the same public address on devnet
when comparing balances or requesting test funds.

The app does not create a keypair, export private keys, sign transactions, or
send SOL. Wallet connection supplies public account information; the balance
query is a separate read from the network.

## Current behavior

Balance is loaded on connection and formatted with nine decimal places. There
is no automatic refresh. The app listens for newly registered wallets, but not
for account changes or wallet-initiated disconnections.

Evidence: [Day 4 screenshot](../../days/day-004/day-4.png).
