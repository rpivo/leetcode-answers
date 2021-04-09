-- select the column unique_id, which is from EmployeeUNI, and select the column name, which is 
-- from Employees.
-- This will be order that the columns will appear in the new table.
-- We treat Employees as our left table, and alias it as e.
-- We left join EmployeeUNI and alias it as eu.
-- We join these tables with the id column in Employees equaling the id column in EmployeeUNI.
SELECT eu.unique_id,
  e.name
FROM Employees as e
  LEFT JOIN EmployeeUNI as eu ON e.id = eu.id;