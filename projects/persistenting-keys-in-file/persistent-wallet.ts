import {
    createSolanaRpc,
    devnet,
    generateKeyPair,
    createKeyPairSignerFromBytes,
    createSignerFromKeyPair
} from "@solana/kit"

import {readFile, writeFile} from "node:fs/promises"

const WALLET_FILE = "wallet.json"
const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"))

async function loadOrCreateWallet(){
    try{
        // try to load an existing wallet
        const data = JSON.parse(await readFile(WALLET_FILE, "utf-8"))
        const secretBytes = new Uint8Array(data.secretKey)
        const wallet = await createKeyPairSignerFromBytes(secretBytes)
        console.log("Loaded existing wallet:", wallet.address)
        return wallet
    }
    catch{
        // no wallet found, create a new one
        // Pass `true` so the keys are extractable for persistence
        const keyPair = generateKeyPair(true)

        // export the public key (raw format works for public keys)
        const publicKeyBytes = new Uint8Array(
            await crypto.subtle.exportKey("raw", (await keyPair).publicKey)
        )

        // export the private key using pkcs8 format
        // Node.js does not support "raw" export for Ed25519 keys
        const pkcs8 = await crypto.subtle.exportKey("pkcs8", (await keyPair).privateKey)
        const privateKeyBytes = new Uint8Array(pkcs8).slice(-32)

        // Solana keyPair format : 64 Bytes (32 private + 32 public)
        const keyPairBytes = new Uint8Array(64)
        keyPairBytes.set(privateKeyBytes,0)
        keyPairBytes.set(publicKeyBytes,32)

        // write to file
        await writeFile(
            WALLET_FILE,
            JSON.stringify({secretKey: Array.from(keyPairBytes)})
        )

        const wallet = await createSignerFromKeyPair((await keyPair))
        console.log("Created new wallet:", wallet.address)
        console.log(`Saved to ${WALLET_FILE}`)
        return wallet
    }
}


const wallet = await loadOrCreateWallet()

// check balance
const {value: balance} = await rpc.getBalance(wallet.address).send()
const balanceInSOL = Number(balance) / 1_000_000_000

console.log(`\nAddress: ${wallet.address}`)
console.log(`Balance: ${balanceInSOL} SOL`)

if(balanceInSOL == 0){
    console.log(`\nThis wallet has no SOL. Visit https://faucet.solana.com/ and airdrop some to: \n`)
}

console.log(`\n${wallet.address}`)