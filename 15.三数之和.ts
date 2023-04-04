/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return result; // 三个数字的和不可能等于 0
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        do left += 1;
        while (nums[left] === nums[left - 1]);
        do right -= 1;
        while (nums[right] === nums[right + 1]);
      } else if (total < 0) left += 1;
      else right -= 1;
    }
  }
  return result;
}
// @lc code=end
