--
-- @lc app=leetcode.cn id=176 lang=mysql
--
-- [176] 第二高的薪水
--

-- @lc code=start
# Write your MySQL query statement below
select max(salary) as SecondHighestSalary from Employee
where salary < (select max(salary) as HighestSalary from Employee)
-- @lc code=end

