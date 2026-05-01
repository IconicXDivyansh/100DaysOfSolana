# Day-03 Learnings

SOL is the Human friendly currency that is used to display balance and on UIs. But it's actually not very good for machines as floating point arithmetics are involved which produces different result on different machines. In concensus mechanism like Solana where you transaction has to be validated by number of nodes the result should be exactly the same. That's why LAMPORTS (1 SOL = 10 ^ 9 Lamports), a basic unit of Solana are used. They don't have floating point arithmetic and are exactly the same for all validators ensuring that every node on network reach the exact same result for every calculation.  


- 1 SOL = 10^9 Lamports (1,000,000,000 Lamports)
- 1 Lamport = 10^-9 SOL



SOL is the solana's native token (currency) which is used to do all the things, it' just like paper money in real world but in digital format in Solana.


