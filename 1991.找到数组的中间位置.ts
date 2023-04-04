/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
  const total = nums.reduce((sum, cur) => sum + cur, 0);
  for (let [i, sum] = [0, 0]; i < nums.length; ++i) {
    if (sum === total - sum - nums[i]) return i;
    sum += nums[i];
  }
  return -1;
}
// @lc code=end
