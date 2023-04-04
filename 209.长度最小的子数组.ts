/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let res = (10 ^ 5) + 1;
  for (let s = 0, f = 0, term = 'f'; f < nums.length; ) {
    if (nums.slice(s, f).reduce((sum, cur) => sum + cur) >= target) {
      res = Math.min(res, f - s);
    }
  }
}
// @lc code=end
