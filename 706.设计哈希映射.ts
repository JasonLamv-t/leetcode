/*
 * @lc app=leetcode.cn id=706 lang=typescript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
class MyHashMap {
  mapping: object = {};

  constructor() {}

  put(key: number, value: number): void {
    this.mapping[key] = value;
  }

  get(key: number): number {
    return this.mapping[key] === undefined ? -1 : this.mapping[key];
  }

  remove(key: number): void {
    delete this.mapping[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
