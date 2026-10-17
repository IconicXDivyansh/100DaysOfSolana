# Day 006 — Share your experiences on DEV

- Date: 2026-10-17
- Challenge: [MLH Day 6](https://www.mlh.com/events/100-days-of-solana/challenges/019dc049-b917-205c-0ee6-cec0a173b1c2)
- Exercise: published write-up; no new application code.

## Goal

Explain on-chain identity to a Web2 developer, using the first week's wallet work
as the example.

## Setup and run

Published on DEV Community:

[Entering Into the Web3 World...](https://dev.to/stuperfyxd/entering-into-the-web3-world-28il)

## What I learned

Writing it down made the week one idea sharper: a Solana identity is a keypair
I generate, not an account a company assigns.

- The public key is the address. It can be shared, the way a public SSH key can.
- The private key is the proof of ownership. Losing it means losing the account,
  because there is no admin reset.
- The address in the post is a Base58-encoded Ed25519 public key. Base58 leaves
  out characters that are easy to mix up, such as `0` and `O`.
- The same keypair is what later holds balances, signs program calls, and
  carries public history. The Day 4 browser wallet holds that key and returns
  a signature; the app never receives the private key.

## Problems and fixes

No code to debug. The useful check was whether a Web2 comparison (SSH keys,
AWS IAM) actually explained the idea instead of only renaming it.

## Evidence

- Post: [Entering Into the Web3 World...](https://dev.to/stuperfyxd/entering-into-the-web3-world-28il)
- Author: Divyansh Pingle (`stuperfyxd`)
- Published: 2026-10-17
- Tags used on the post: `#100daysofsolana`, `#blockchain`, `#web3`, `#mlh`

## Reflection

The one-line version I want to keep: in Web2, a company hands out an identity
and keeps the keys. On Solana, I generate the keys, and the identity follows.

## Completion

- [x] DEV post published
- [x] Notes and shareable evidence recorded
- [x] Progress tracker updated
