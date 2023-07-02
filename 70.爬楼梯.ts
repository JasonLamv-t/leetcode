/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const C = (m: number, n: number): number => {
    // select n elements from m elements
    // m! / n!(m-n)!
    if (n === 0 || n === m) return 1;
    else if (n > m) return 0;
    return C(m - 1, n - 1) * m / n; // avoid large number overflow
  };

  const calculateAllSteps = (maxCountOfTwo: number): number => {
    let totalSteps = 0;
    for (let i = maxCountOfTwo; i >= 0; i--) totalSteps += C(n - i, i);
    return totalSteps;
  };

  const maxPossibleCountOfTwo = Math.floor(n / 2);
  return calculateAllSteps(maxPossibleCountOfTwo);
};
// @lc code=end

/**
 * 6
 * 1,1,1,1,1,1 // C(6, 0)
 * 1,1,1,1,2 // C(5, 1)
 * 1, 1, 2, 2; // C(4, 2)
 * 2,2,2 // C(3,3)
 */

