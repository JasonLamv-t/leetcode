/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  if (val > 50) return nums.length;

  let len = 0;
  for (let i = 0; i < nums.length - len; ) {
    if (nums[i] === val) {
      len++;
      [nums[i], nums[nums.length - len]] = [nums[nums.length - len], nums[i]];
    } else i++;
  }
  return nums.length - len;
}
// @lc code=end
