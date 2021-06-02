-- from the table Employees
-- select employee_id
select employee_id,
  -- use a case to conditional create a new column called bonus in the result
  -- table
  case
    -- when employee_id modulo 2 is equal to 1 (meaning the number is an odd
    -- number)
    when employee_id %2 = 1 -- and the first character of name is not equal to m, then set bonus to the
    -- value of salary.
    and left(name, 1) <> 'M' then salary -- else, set bonus to 0
    else 0
  end as bonus
from Employees
