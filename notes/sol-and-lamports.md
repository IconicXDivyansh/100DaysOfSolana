# SOL and lamports

First explored in [Day 003](../days/day-003/README.md).

## Conversion

```text
1 SOL = 1,000,000,000 lamports
SOL → lamports: multiply by 1,000,000,000
lamports → SOL: divide by 1,000,000,000
```

| SOL | Lamports |
| --- | --- |
| 1 | 1,000,000,000 |
| 2.5 | 2,500,000,000 |
| 0.000000001 | 1 |

SOL and lamports describe the same asset at different scales. Converting the
display does not transfer funds or change the balance.

## Reading balances

The `getBalance` RPC returns an account's lamport balance as an unsigned 64-bit
integer. Always check the unit of an API result before displaying or using it.
[Solana RPC documentation](https://solana.com/docs/rpc/http/getbalance)

## Precision in JavaScript

Keep calculations in integer lamports. JavaScript `Number` cannot represent
every integer above `9,007,199,254,740,991`; converting larger values to `Number`
can lose precision. Preserve `bigint` values when supplied by the SDK and use
integer arithmetic for exact amount calculations.
[MDN safe integer limit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

When formatting an integer balance using `bigint`, division gives the whole SOL
part and the remainder gives the fractional lamports. Format those separately
to avoid converting the entire balance to a floating-point number.

For user-entered decimal SOL, parse the decimal string into whole lamports and
reject precision beyond nine decimal places rather than silently rounding.

## Sources

- [MLH SOL and lamports exercise](https://www.mlh.com/events/100-days-of-solana/challenges/019db48b-d356-b721-760f-7618c0d1db74)
- [Day 3 screenshot](../days/day-003/day-3.png)
