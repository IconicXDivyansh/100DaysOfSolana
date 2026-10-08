# Persistent wallet

Code for [Day 002](../../days/day-002/README.md): create a devnet keypair, save it
locally, and restore the same wallet on later runs.

## Setup and run

Use pnpm and Node.js with support for running `.ts` files. From this directory:

```sh
pnpm install
node persistent-wallet.ts
```

The script uses `@solana/kit` and Node's file APIs. It prints the wallet address
and the balance read from the public devnet RPC endpoint.

## Wallet storage

`wallet.json` is resolved relative to the directory from which you run the
script. Keep running from this project directory to reuse the same wallet.
The file contains private key material in unencrypted JSON and is ignored by
Git. Keep it private and use this exercise's wallet only for devnet learning.

On the first run, fund the printed public address using the
[Solana faucet](https://faucet.solana.com/). Run the script again to load the
wallet and read its balance. Funding is manual; the script does not request it.

## Check persistence

Capture two separate runs showing the same public address. After funding, the
next run should display the funded devnet balance. Save screenshots with the
[Day 002 learning log](../../days/day-002/README.md).

## Follow-up

The current loading path catches all errors and creates a new wallet. Restrict
that fallback to a missing file so malformed or unreadable wallet files are
not silently replaced.
