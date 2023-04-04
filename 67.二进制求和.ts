/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}
// @lc code=end
