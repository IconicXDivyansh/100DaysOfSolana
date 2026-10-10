# Browser wallets

First explored in [Day 004](../days/day-004/README.md) using the
[browser wallet project](../projects/connecting-browser-wallet/README.md).

## Separate responsibilities

| Component | Job in this project |
| --- | --- |
| Wallet extension | Holds the user's keys and handles connection permission |
| Wallet Standard registry | Exposes registered wallets and their supported features |
| Browser app | Requests a connection and displays the returned account address |
| Solana RPC | Returns the balance for that address on the chosen network |

Wallet Standard defines shared interfaces so an app can discover compatible
wallets without a separate discovery implementation for each brand.
[Wallet Standard source](https://github.com/wallet-standard/wallet-standard)

## Connection and signing

Connecting shares public account information with the app. Signing a message
or transaction is a different request. An app does not receive private key
material merely by connecting, and connection alone does not authorize a SOL
transfer. [Phantom connection documentation](https://docs.phantom.com/solana/establishing-a-connection)

The Day 4 code uses `standard:connect` and optionally `standard:disconnect`.
It does not call a signing feature. The same signer idea from Day 2 still
applies later: a wallet can provide signing capabilities while keeping its
keys outside the app.

## Network and balance

The RPC endpoint determines which network is queried. The Day 4 endpoint is
devnet, regardless of the network selected in the wallet's own interface.
A successful connection may display zero SOL if that address is unfunded on
devnet.

Balance reads require a public address, not a signature. `getBalance` returns
lamports; convert for display using the [SOL and lamports notes](sol-and-lamports.md).
[Solana balance API](https://solana.com/docs/rpc/http/getbalance)

## Connection state versus a live display

Discovering a wallet, connecting to an account, reading its balance, and reacting
to later changes are separate parts of an app. The current project performs
one read on connection. Refreshing balances and responding to account changes
need additional logic; registering a wallet listener does not implement them.
