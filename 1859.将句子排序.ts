/*
 * @lc app=leetcode.cn id=1859 lang=typescript
 *
 * [1859] 将句子排序
 */

// @lc code=start
function sortSentence(s: string): string {
  return s.split(' ')
    .sort((a: string, b: string) => Number(a[a.length - 1]) - Number(b[b.length - 1]))
    .map(word => word.slice(0, word.length -1))
    .join(' ');
};
// @lc code=end

