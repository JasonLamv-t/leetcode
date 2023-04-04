/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length;
  let mid;
  let result: number[] = [];

  if (nums.length === 0 || nums[left] > target || nums[right] < target)
    return [-1, -1];

  while (left < right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid;
    else {
      result[0] = mid;
      break;
    }
  }
}
// @lc code=end
