# 100 Days of Solana

My learning journal and projects while following [MLH's 100 Days of Solana challenges](https://www.mlh.com/events/100-days-of-solana/challenges).

Completed days: **4 / 100**. Latest entry: [Day 004 — Connect a browser wallet](days/day-004/README.md).
See [the progress tracker](PROGRESS.md) for daily notes and evidence.

## Repository layout

```text
100-days-solana/
├── README.md                # Overview and learning roadmap
├── PROGRESS.md              # Completed days and evidence
├── days/
│   ├── day-001/             # Wallet generation and devnet funding
│   ├── day-002/             # Persistent wallet and signer concepts
│   ├── day-003/             # SOL and lamport balance comparison
│   └── day-004/             # Browser wallet connection and balance
├── projects/
│   ├── README.md            # Project guidelines
│   ├── generating-keypair-and-getting-a-devnet-sol/
│   ├── persistenting-keys-in-file/
│   └── connecting-browser-wallet/
├── notes/
│   ├── README.md            # Reusable explanations and troubleshooting
│   ├── sol-and-lamports.md  # Units, conversions, and precision
│   └── browser-wallets.md   # Discovery, permissions, and RPC reads
├── templates/
│   └── day.md               # Copy this when starting a new day
└── .gitignore
```

Create day folders as you go, using three digits: `day-001` through `day-100`.
Keep small, independent experiments beside that day's README. When a challenge
extends an existing application or program, keep its code in `projects/` and link
to it from the daily entry. Git commits preserve how that project evolves.

## Learning roadmap

These are my suggested groupings of the current challenge order, not official
MLH section names. Check the [live curriculum](https://www.mlh.com/events/100-days-of-solana/challenges)
for each day's instructions.

| Days | Focus |
| --- | --- |
| 001–007 | Wallet identity and balances |
| 008–014 | RPC reads and dashboards |
| 015–021 | Transactions and transfers |
| 022–028 | Account inspection and decoding |
| 029–035 | Tokens and incentives |
| 036–042 | Token extensions |
| 043–049 | NFTs and metadata |
| 050–056 | Combining Token-2022 features |
| 057–063 | Anchor programs and tests |
| 064–070 | Program-derived addresses |
| 071–077 | Cross-program invocations |
| 078–084 | Program security |
| 085–091 | Deployment and frontend integration |
| 092–098 | AI agents and MCP |
| 099–100 | Capstone and reflection |

## Daily routine

1. Open the next challenge and create its day folder from [the template](templates/day.md).
2. Build the exercise, recording the commands needed to reproduce it.
3. Discuss the day's goal and learnings, then record what worked and any unanswered questions.
4. Save shareable evidence, such as a screenshot or public devnet transaction link.
5. Update [the progress tracker](PROGRESS.md). Review changes before committing or pushing.

Example commit: `day 001: generate a wallet and verify devnet funding`.
Writing and sharing challenges count as learning days too; link their drafts or
published posts from the daily entry.

## Dependencies and local data

Start without a root package manager workspace. Give each runnable experiment or
project its own setup instructions and package manifest. Commit its dependency
lockfile. Add a shared workspace later only if multiple projects need shared code.

Use devnet or a local validator for learning exercises. Store local wallet files
under a `wallets/` directory, which is ignored by Git. Keep private keys, seed
phrases, API tokens, and environment secrets out of notes and screenshots.
Public addresses, mint addresses, program IDs, and transaction signatures can be
recorded with their network label.

If a project needs environment variables, add its own `.env.example` containing
placeholder values and document how to copy it to `.env`.
