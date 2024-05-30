export default function __parseETH(wei: bigint): string {
  const weiPerEth = BigInt("1000000000000000000"); // 10^18
  const eth = wei / weiPerEth;
  const remainder = wei % weiPerEth;

  // Convert the remainder to a fractional value
  const fraction = (Number(remainder) / Number(weiPerEth)) * 100; // Scale to 2 decimal places
  const fractionStr = fraction.toFixed(0).padStart(2, "0"); // Convert to string with 2 decimal places

  return `${eth.toString()}.${fractionStr}`;
}
