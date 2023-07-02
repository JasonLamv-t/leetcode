/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let [protentialTarget, count]: [number, number] = [NaN, 0];
  nums.forEach(num => {
    if (count > nums.length / 2) return protentialTarget;
    else if (!count) {
      protentialTarget = num;
      count = 1;
    }
    else if (protentialTarget === num) count += 1;
    else count -= 1;
  })
  
  return protentialTarget;
};
// @lc code=end
