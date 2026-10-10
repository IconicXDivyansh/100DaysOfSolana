# Wallet types and recovery

Introduced in [Day 005](../days/day-005/README.md).

Wallet interfaces, key custody, and approval rules are different dimensions.
A CLI can use a local key file or an external signer. A browser interface can
connect to a hardware device. Multisig describes whose approvals are required,
and its members can use different kinds of signing wallets.

## Storage and access

| Setup | Key storage and main consideration |
| --- | --- |
| CLI file wallet | Local keypair JSON; protect file access and keep a separate backup |
| Browser software wallet | Wallet-managed browser storage; local password protection does not replace recovery credentials |
| Mobile software wallet | Wallet-managed phone storage; biometric unlock is an access control, not a recovery backup |
| Hardware signer | Separate device performs signing; recovery credentials and transaction review still matter |
| Multisig | Authorized members approve actions under a configured threshold; enough members must retain signing access |

Exact browser and mobile storage details depend on the wallet, platform, and
version. Do not infer an exact file path from the wallet category.

## Recovery versus unlocking

An unlock password or biometric check grants access on a particular device.
A recovery phrase or other supported recovery method restores access when that
device is gone. Back up the credentials required for the wallet actually used;
not all wallets use the same recovery scheme.
[Phantom's explanation](https://help.phantom.com/articles/49409417837843)

For a CLI file wallet, preserving the keypair separately is sufficient to
preserve its signing identity. The default path is `~/.config/solana/id.json`,
but configuration can select another file.
[Solana local keypair guide](https://solana.com/developers/cookbook/development/load-keypair-from-file)

Multisig resilience depends on backups and the approval threshold. For example,
losing one signer in a 2-of-3 arrangement leaves two usable signers; losing two
can prevent approval. [Squads guidance](https://docs.squads.so/main/getting-started/quickstart-guide)

A hardware wallet reduces exposure of keys to the host computer. It cannot
protect funds from every harmful action its owner approves.
[Ledger's explanation of malicious approvals](https://www.ledger.com/academy/how-crypto-gets-stolen-and-how-to-avoid-it)

## Development choice

For repeated scripted devnet transactions, a dedicated test keypair is practical.
Keep it separate from keys protecting valuable holdings. Compare wallets by the
task, storage model, recovery plan, and approval workflow rather than treating
passwords or biometrics as a universal security ranking.
