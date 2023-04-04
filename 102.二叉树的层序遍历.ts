/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const query: TreeNode[] = [];
  const res: number[][] = [];
  if (root !== null) query.push(root);
  while (query.length) {
    const resOfLayer: number[] = [];
    const lengthOfLayer: number = query.length;
    for (let i = 0; i < lengthOfLayer; i++) {
      const curNode = query.shift();
      resOfLayer.push(curNode.val);
      curNode.left && query.push(curNode.left);
      curNode.right && query.push(curNode.right);
    }
    res.push(resOfLayer);
  }

  return res;
}
// @lc code=end
