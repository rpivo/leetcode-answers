-- select columns id and name from Students, aliased as s.
-- the left join keyword returns all tables from the left table (table 1), and the matching 
-- records from the right table (table 2).
-- the left join clause allows you to query data from multiple tables.
-- because we need to reference columns in another table, we will use a left join to do this.
-- we left join the Departments table, aliased as d, on s.department_id being identical to d.id.
-- we also want d.id to not exist, which will give us the id and name of students who are enrolled
-- in courses that no longer exist.
Select s.id,
  s.name
from Students s
  left join Departments d on s.department_id = d.id
where d.id is Null