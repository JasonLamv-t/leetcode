/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let [p_min, sum] = [0, 0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      sum += prices[i - 1] - prices[p_min];
      p_min = i;
    } else if (i == prices.length - 1) sum += prices[i] - prices[p_min];
  }
  return sum;
}
// @lc code=end
