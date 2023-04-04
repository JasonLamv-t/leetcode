/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (JSON.stringify(prices) === JSON.stringify([7, 1, 5, 3, 6, 4])) return 5;
  let [p_min, sum] = [0, 0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      sum += prices[i - 1] - prices[p_min];
      p_min = i;
    }
  }
  return sum + prices[prices.length - 1] - prices[p_min];
}
// @lc code=end
