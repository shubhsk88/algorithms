var maxProfit = function (prices) {
  let maxTrade = 0;
  let minSoFar = Infinity;
  for (const price of prices) {
    minSoFar = Math.min(minSoFar, price);
    maxPrice = price - minSoFar;
    maxTrade = Math.max(maxTrade, maxPrice);
  }

  return maxTrade;
};
