-- select rows id and name
SELECT id, name
-- from table Students. also alias this table as s
FROM Students s
-- WHERE EXISTS and WHERE NOT EXISTS are both subqueries.
-- WHERE NOT EXISTS selects from another table and filters by null values.
WHERE NOT EXISTS (
  -- select the id row
  SELECT id
  -- from the table Departments
  FROM Departments
  -- join Departments.id on s.department_id
  WHERE id = s.department_id
)