/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, idx) => sum + (!(idx % 2) ? cur : 0), 0);
}
// @lc code=end
