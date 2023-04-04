/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let i of nums) {
    if (set.has(i)) return true;
    set.add(i);
  }
  return false;
}
// @lc code=end
