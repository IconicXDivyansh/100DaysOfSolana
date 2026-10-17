# Devnet dashboard

Browser page for [Day 010](../../days/day-010/README.md). It reads any devnet
address's SOL balance and five newest transaction signatures.

## Setup and run

```sh
pnpm install
pnpm dev
```

Open the local URL Vite prints. The address field starts with the Token-2022
program address. Choose **Fetch Data**, then try another devnet address.

The page uses `@solana/kit` against `https://api.devnet.solana.com`. Vite
bundles that package for the browser. The RPC calls match the Day 8 balance
script and the Day 9 signature script.
