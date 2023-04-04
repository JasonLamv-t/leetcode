/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let j = 1;
      for (; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) break;
      }
      if (j == needle.length) return i;
    }
  }
  return -1;
}
// @lc code=end
