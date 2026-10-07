import { resolve } from "node:path";
import { address, createSolanaRpc, devnet } from "@solana/kit";

process.loadEnvFile(resolve(import.meta.dirname, ".env"));

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"))
const WALLET_ADDRESS = process.env.WALLET_ADDRESS
if (!WALLET_ADDRESS) {
  throw new Error("Set WALLET_ADDRESS in the environment before checking the balance.")
}

console.log("Wallet address (from running create-wallet.ts): ", WALLET_ADDRESS)
console.log("\n--- Go to https://faucet.solana.com/ and airdrop SOL to this address ---");

const {value: balance} = await rpc.getBalance(address(WALLET_ADDRESS)).send()
const balanceInSol = Number(balance) / 1_000_000_000

console.log(`\nYour balance is ${balanceInSol} SOL`)