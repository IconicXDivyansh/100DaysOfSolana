import { address, createSolanaRpc, devnet } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

// Token-2022 program address. Other accounts interact with it constantly,
// so it has a steady stream of devnet transactions to read.
const targetAddress = address("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");

const signatures = await rpc
  .getSignaturesForAddress(targetAddress, { limit: 5 })
  .send();

console.log(`\nLast 5 transactions for ${targetAddress}:\n`);

for (const tx of signatures) {
  const time = tx.blockTime
    ? new Date(Number(tx.blockTime) * 1000).toLocaleString()
    : "unknown";

  console.log(`Signature : ${tx.signature}`);
  console.log(`Slot      : ${tx.slot}`);
  console.log(`Time      : ${time}`);
  console.log(`Status    : ${tx.err ? "Failed" : "Success"}`);
  console.log("---");
}
