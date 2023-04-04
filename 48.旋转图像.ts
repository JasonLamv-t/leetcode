/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  matrix.reverse();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }
}
// @lc code=end
