/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let p_min = 0;
  let p_max = nums.length;
  while (true) {
    const p = Math.floor((p_min + p_max) / 2);

    if (nums[p] === target) return p;

    if (p_max - p_min < 2) {
      if (target < nums[p]) return p;
      else return p + 1;
    }

    if (nums[p] < target) p_min = p;
    else if (nums[p] > target) p_max = p;
  }
}
// @lc code=end

// [1,3,5] 4
