# Day 02 Learnings

Let's look at differences b/w KeyPair and Wallet:

StorageRaw data often saved as a byte array in a .json file.A secure vault that encrypts and protects the private key.RoleThe mathematical identity on the blockchain.The tool used to interact with that identity.


| Feature     | **KeyPair**                                                     | **Wallet**                                                               |
| :------------ | :---------------------------------------------------------------- | :------------------------------------------------------------------------- |
| What it is  | A pair of matching cryptographic keys (Public + Private)        | A software interface (like Phantom or a script) that manages those keys. |
| Public Key  | Your address used to recieve funds                              | The display that shows your address and balance.                         |
| Private Key | The secret key (password) used to authorize / sign transactions | The signer that uses the secret key to "approve" actions.                |
| Storage     | Raw data often saved as a byte array in a .json file            | A secure vault that encrypts and decrypts and protects private key       |
| Role        | The mathematical identity on blockchain                         | The tool used to interact with that identity.                            |

The problem of "Persistence":
In day 1 code we were manually generating the keyPair. The private Key was in memory as long as the script was running, the moment we exited the script, it was no longer alive and hence, every single time we were running, script it produced different public address, because there was no persistence.

It's like single use bank account number that every single time, you need to have a new bank account number in order to send money. But that's not how it works, you have a single persistent bank account number that you use for sending & recieving all the transactions.

Likewise, in Solana too, we will need a persistent public key (address) that we can re-use.

So, the day-02's code is all about persisting the generated KeyPair, that can be re-used again.

Breakdown of the code -

1. The Packages
   **@solana/kit**: The modern Swiss Army knife for Solana. It handles connection to the network (rpc), cryptographic math (keypairs), and transaction authorization (signers).
   **node:fs/promises**: A built-in Node.js tool used to read and write files to your hard drive (like your wallet.json) using modern async/await syntax.
2. Line by Line Execution


   | Code Line                         | What it does ?                                                                            |   |   |
   | :---------------------------------- | ------------------------------------------------------------------------------------------- | --- | --- |
   | const WALLET_FILE = "wallet.json" | Defines the filename where your private key will live.                                    |   |   |
   | const rpc = createSolanaRpc(...)  | Creates a "phone line" to Solana's**Devnet** (the playground/test network).<br />         |   |   |
   | **Inside `try` block**            | **Scenario: You already have a wallet file.**                                             |   |   |
   | `readFile(WALLET_FILE, "utf-8")`  | Reads the text from your disk.                                                            |   |   |
   | new Uint8Array(data.secretKey)    | `Converts the saved list of numbers back into raw binary "bytes."`                        |   |   |
   | createKeyPairSignerFromBytes(...) | Reconstructs your**Signer** (Identity) so the script can act as you.                      |   |   |
   | `Inside catch block`              | **Scenario: First time running (no file found).**                                         |   |   |
   | generateKeyPair(true)             | `Generates a brand new, random Public/Private keypair.`                                   |   |   |
   | crypto.subtle.exportKey(...)      | `Extracts the raw "secret" data from the key so it can be saved.`                         |   |   |
   | new Uint8Array(64)                | Creates a blank 64-byte container for the Solana-standard key format.                     |   |   |
   | writeFile(WALLET_FILE, ...)       | Saves those 64 bytes to your hard drive as a JSON file.                                   |   |   |
   | The Final Steps                   | Checking the Network                                                                      |   |   |
   | rpc.getBalance(wallet.address)    | Asks the Solana network: "How much money does this address have?"                         |   |   |
   | Number(balance) / 1_000_000_000   | Converts**Lamports** (tiny fractions) into **SOL** . (1 SOL = 1 billion Lamports).        |   |   |
   | if (balanceInSol === 0)           | `Checks if you're broke! If so, it gives you the link to the "Faucet" for free test SOL.` |   |   |
