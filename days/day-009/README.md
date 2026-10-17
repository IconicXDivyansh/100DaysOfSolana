# Day 009 — Fetch and display recent transactions

- Date: 2026-10-18
- Challenge: [MLH Day 9](https://www.mlh.com/events/100-days-of-solana/challenges/019dd348-5715-e9e0-b7e1-3a7751d816df)
- Network: Devnet
- Code: [Transaction history script](../../projects/generating-keypair-and-getting-a-devnet-sol/fetch-transactions.ts)

## Goal

Read the five newest transaction signatures for a public devnet address, and
print each signature, slot, time, and status.

## Setup and run

This uses the same project and RPC client as Day 8. The new call is
`getSignaturesForAddress` with `{ limit: 5 }`. The target is the Token-2022
program address, `TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`, because that
account has a steady stream of devnet activity.

From the project directory:

```sh
pnpm install
node fetch-transactions.ts
```

## What I learned

- Transaction history is another public read. The script sends an address and
  a limit. It does not need a private key.
- Each row is identified by a signature, a long Base58 string, rather than a
  database id. That signature is what Solana Explorer uses to open the
  transaction.
- `slot` is the batch number. A higher slot is more recent. These five landed
  in slots 512183028 through 512183035, a few slots apart.
- `blockTime` is a Unix timestamp in seconds. Multiplying by 1000 makes it a
  JavaScript date. The script prints "unknown" when `blockTime` is missing.
- `err` being empty means the transaction succeeded.

## Problems and fixes

Day 8's balance script does not fetch history, so this needed a new file.
The Kit method and the returned fields (`signature`, `slot`, `blockTime`,
`err`) matched the challenge starter, and the first run printed five
successful transactions.

## Evidence

Run on 2026-10-18 against devnet. Times are the machine's local clock.

```text
Last 5 transactions for TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb:

Signature : 48S25Zy86itYS1bviETpako7gFnvN5nF5w77pMXUbMuTagV3v4qaPnyAEp6u8yVAvNWXZrWLVNnp4yNF237s4nLN
Slot      : 512183035
Time      : 10/18/2026, 1:14:04 AM
Status    : Success
---
Signature : 2ETVrbQb9i4Ji7RaJA67zsJa4NHrfp9ortpckjjkjnYeVgM2cKFhThncFJMbJitatBmbmemRNsAD4PmYyeCpbdRZ
Slot      : 512183032
Time      : 10/18/2026, 1:14:04 AM
Status    : Success
---
Signature : 22FcjQVTvyxxi1cPdecofKHErELAwBF2kMXpwMhTVv4jGxv4Nnpg89nGaMQfW6HEqpZEozeL4NUiMTeYPBvnynVf
Slot      : 512183031
Time      : 10/18/2026, 1:14:03 AM
Status    : Success
---
Signature : 3JapH9LuhpRqHNKFRxhGhDmH57WuTToHF3LJzh51VDf9jCUEB6bYWLBKdBoBp7NhTb6ntzmLzdEuJGxWkVJRLakD
Slot      : 512183030
Time      : 10/18/2026, 1:14:03 AM
Status    : Success
---
Signature : 55FfrVUd6b6iLtgLbhsMo3SHW5jUnKB9Rv5ZmrttDfRaUtTTgTnUQdy9bFbAR3GGfAu6QvvQfk3y4sfyeUetyXLw
Slot      : 512183028
Time      : 10/18/2026, 1:14:03 AM
Status    : Success
---
```

Any of those signatures can be opened on [Solana Explorer (devnet)](https://explorer.solana.com/?cluster=devnet).

## Reflection

A balance answers "how much is here now." A signature list answers "what
happened recently." Both are reads against the same public devnet endpoint.
The limit matters: without it, a busy address can return a very long history.

## Completion

- [x] Five recent signatures fetched and checked
- [x] Terminal output recorded
- [x] Progress tracker updated
