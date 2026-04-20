import { address, createSolanaRpc, devnet } from "@solana/kit";
const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const walletAddress = "D8P2JTry1rZ5SwMixRvnsiVNbezqLaoN4RJ58UE4fPxH"; // Replace with your generated wallet address
console.log('The generated Wallet Address is:', walletAddress);

console.log("— Go to https://faucet.solana.com/ and airdrop SOL to this generated wallet address —");
console.log("— Then run this script again with the same address to check the balance —");

// To check a specific address you’ve already funded, replace the line below:
const { value: balance } = await rpc.getBalance(address(walletAddress)).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);

