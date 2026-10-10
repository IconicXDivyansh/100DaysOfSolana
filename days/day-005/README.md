# Day 005 — Explore different wallet types

- Date: 2026-10-10
- Challenge: [MLH Day 5](https://www.mlh.com/events/100-days-of-solana/challenges/019dbeae-700d-7f32-5456-99fd11f92b4d)
- Exercise: hands-on wallet setup, transfers, and comparison; no new code project.

## Goal

Compare CLI, browser extension, and mobile wallets through setup and use, then
consider how key storage, recovery, and signing convenience affect my choice.

## Setup and practical work

I set up all three wallet types and tested these transfer routes:

```text
Mobile wallet → browser extension wallet → CLI wallet
```

The transfer amounts, addresses, and network were not recorded in these notes.
I am keeping this entry as a written reflection without screenshots or receipts.

For CLI setup, the key generation command is:

```sh
solana-keygen new
```

The configured keypair path can be checked without displaying its secret:

```sh
solana config get
```

## What I learned

### Which wallet was fastest to set up?

The CLI was fastest for me. Once the tools were installed, generating a keypair
required one command. Its simple file-based workflow also suits development.

### Which felt safest?

The CLI file wallet felt least safe because the signing key is stored directly
on my internet-connected computer. More precisely, a program that can read the
file can obtain the key; file permissions and process isolation matter, so it
is not automatically readable by every program or exposed publicly online.

The browser wallet's password added a protective layer. The mobile wallet's
biometric option felt reassuring. Those are my impressions, not a universal
ranking: device security, implementation, backups, and transaction review also
matter. Biometrics protect local access; they do not make a wallet cold or
replace its recovery method.

I have not tried a hardware wallet. Its isolation of signing keys is appealing,
but it is not immune to a stolen recovery phrase or a malicious transaction
that I approve.

### Where is the private key stored?

| Wallet | Storage I can describe |
| --- | --- |
| CLI file wallet | Usually `~/.config/solana/id.json`; the configured path may differ |
| Browser extension | Wallet-managed storage within the browser profile, with password protection; I have not identified its exact local storage location |
| Mobile | Wallet-managed app storage on the phone; the exact location and use of OS-backed secure storage depend on the wallet and platform and were not inspected |

The CLI default path is documented by [Solana](https://solana.com/developers/cookbook/development/load-keypair-from-file).
Password and biometric protections are described in [Phantom's security guide](https://help.phantom.com/articles/49409417837843).
Neither the key file contents nor a recovery phrase belongs in these notes.

### If my laptop were destroyed, which wallets could I recover?

Recovery depends on what survives, not simply on the wallet category.

- **CLI:** a separate keypair backup can restore access. If the wallet was
  generated from a recovery phrase, the correct phrase and any required
  passphrase and derivation settings can recreate its key. An address alone
  cannot do that.
- **Browser extension:** restore using the wallet's recovery method. A local
  unlock password alone does not restore the keys on a replacement computer.
- **Mobile:** if the phone survives, it remains available. If it is lost too,
  recovery needs the wallet's backup or supported recovery method.
- **Hardware:** if the device survives, it still holds its keys. If lost or
  destroyed, restoration depends on its recovery backup and any passphrase used.
- **Multisig:** enough authorized signers must remain available to meet the
  approval threshold. Multisig is an authorization arrangement, not a single
  replacement seed phrase for everyone.

I did not test hardware or multisig recovery, and this entry does not claim
that my backups have been verified.

### What would I use to sign 500 test transactions in a script?

A dedicated devnet keypair loaded by the script. The CLI file-wallet workflow
is convenient for automation without approving hundreds of extension popups.
The same CLI tools can support other signing methods; using the CLI does not
always mean using a plaintext key file.

### What would I choose for holding $10,000 in SOL?

My preference would be a hardware wallet rather than my development file
wallet. I would still need a recoverable backup and careful verification of
what I sign. Keeping the key off the laptop reduces one risk; it does not
remove all risks. [Ledger's hardware-wallet explanation](https://www.ledger.com/academy/topics/ledgersolutions/how-ledger-hardware-wallets-work)

## Problems and fixes

No specific setup or transfer errors were recorded. The main corrections to my
initial answers were that CLI wallets can also be recovered with backups, and
that passwords, biometrics, and hardware isolation address different risks.

## Evidence

Written comparison and the completed transfer routes above. No proof attachment
is planned for this day.

## Reflection

There is no single wallet that is best for every task. I prefer the CLI workflow
for repeatable testing, browser or mobile wallets for interactive use, and
hardware key isolation for a valuable holding. Hardware and multisig are
concepts I considered rather than setups I tested today.

The remaining useful exercise is to verify my recovery plan without sharing
secrets: confirm that the needed backup exists separately from the device it
would restore.

## Completion

- [x] CLI, browser extension, and mobile wallets set up
- [x] Mobile-to-extension and extension-to-CLI transfers tested
- [x] Comparison questions and learning notes recorded
- [x] Progress tracker updated

## References

- [MLH wallet comparison challenge](https://www.mlh.com/events/100-days-of-solana/challenges/019dbeae-700d-7f32-5456-99fd11f92b4d)
- [Solana CLI reference](https://solana.com/docs/references/solana-cli)
- [Phantom recovery and local access protections](https://help.phantom.com/articles/49409417837843)
- [Hardware wallets and malicious approvals](https://www.ledger.com/academy/how-crypto-gets-stolen-and-how-to-avoid-it)
- [Squads recovery planning and signer thresholds](https://docs.squads.so/main/getting-started/quickstart-guide)
