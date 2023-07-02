/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 */

// @lc code=start
function addDigits(num: number): number {
  return (num - 1) % 9 + 1;
};
// @lc code=end

/**
 * 28375
 * 25 (-18) 
 * 7
 * 
 * 
 * 9284728121
 * 44 (-36) 
 * 8
 * 
 */