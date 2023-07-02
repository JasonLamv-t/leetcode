/*
 * @lc app=leetcode.cn id=292 lang=typescript
 *
 * [292] Nim 游戏
 */

// @lc code=start
function canWinNim(n: number): boolean {
  return !(n % 4 === 0);
};
// @lc code=end

/**
 * 
 * win condition
 * left 1-3 rocks in the end 
 * 
 * e.g. my turn
 * 
 * n = 2, m win
 * n = 3, m win
 * n = 4, m1-3, o3-1, o win
 * n = 5, m1, n4, o1-3, n3-1, m win
 * n = 6, m2, n4, o1-3, n3-1, m win
 * n = 7, m3, m win
 * n = 8, m1-3, n7-5
 * 
 * 
 * 
 */