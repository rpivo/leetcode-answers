-- select the employee_id and department_id columns from Employee.
-- before we select these columns, we first create a new result column that we 
-- will then use to select from.
-- In this temp table, we first select everything: employee_id, department_id,
-- and primary_flag.
-- The use of OVER() here is likely a dead giveaway that this is a window 
-- function.
-- The window function is: COUNT(employee_id) OVER(PARTITION BY employee_id) C
-- The primary purpose of this window function is to PARTITION BY each
-- employee_id and count the number of times each employee_id appears. We 
-- store these results in C.
-- Note that the over-arching temp table that was selected for this was called 
-- T, but that T never gets used. We only wanted C.
-- Once we have C, we can say WHERE C = 1, meaning that we want to select the 
-- employee_id's that only appear once.
-- We also want to get the employee_id's where PRIMARY_FLAG is 'Y'
SELECT employee_id,
  department_id
FROM (
    SELECT *,
      COUNT(employee_id) OVER(PARTITION BY employee_id) C
    FROM Employee
  ) T
WHERE C = 1
  OR PRIMARY_FLAG = 'Y';
