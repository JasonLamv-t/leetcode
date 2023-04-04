/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  const total = nums.reduce((sum, cur) => sum + cur, 0);
  for (let [i, sum] = [0, 0]; i < nums.length; ++i) {
    if (sum === total - sum - nums[i]) return i;
    sum += nums[i];
  }
  return -1;
}
// @lc code=end
