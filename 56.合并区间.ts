/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort(([a], [c]) => a - c);
  let i = 1;
  while (i < intervals.length) {
    const [a, b] = intervals[i - 1];
    const [c, d] = intervals[i];

    if (c <= b) intervals.splice(i - 1, 2, [a, Math.max(b, d)]);
    else i++;
  }
  return intervals;
}
// @lc code=end
