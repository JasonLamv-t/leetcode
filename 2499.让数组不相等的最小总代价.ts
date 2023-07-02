/*
 * @lc app=leetcode.cn id=2499 lang=typescript
 *
 * [2499] 让数组不相等的最小总代价
 */

// @lc code=start
function minimumTotalCost(nums1: number[], nums2: number[]): number {
  let [count, totalCost] = [0, 0];
  nums1.forEach((n1, id1) => {
    if (n1 === nums2[id1]) { 
      count += 1;
      totalCost += id1;
    }
    if (count > nums1.length / 2) return -1;
  })

  return totalCost;
};
// @lc code=end

