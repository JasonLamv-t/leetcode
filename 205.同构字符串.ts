/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const letterMapping = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    if (letterMapping.has(s[i])) {
      if (letterMapping.get(s[i]) !== t[i]) return false;
    } else {
      if ([...letterMapping.values()].includes(t[i])) return false;
      else letterMapping.set(s[i], t[i]);
    }
  }
  return true;
}
// @lc code=end
