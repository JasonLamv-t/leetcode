/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let res: string = '';
  for (let i = 0.5; i < s.length; i += 0.5) {
    let p_s = Math.floor(i - 0.5);
    let p_e = Math.ceil(i + 0.5);
    while (s[p_s] === s[p_e] && s[p_s] && s[p_e]) {
      if (s.slice(p_s, p_e + 1).length > res.length)
        res = s.slice(p_s, p_e + 1);
      p_s--;
      p_e++;
    }
  }

  return res || s[0];
}
// @lc code=end
