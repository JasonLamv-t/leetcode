/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let max_len: number = 0;
  nums.push(0);

  nums.reduce((len, curr) => {
    if (curr) len++;
    else if (len) {
      max_len = Math.max(len, max_len);
      len = 0;
    }

    return len;
  }, 0);
  return max_len;
}
// @lc code=end
