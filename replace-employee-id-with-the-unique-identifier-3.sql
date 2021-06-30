-- same answer as replace-employee-id-with-the-unique-identifier-2, except that
-- Employees is the left table rather than the right table, and we're using a
-- LEFT JOIN instead of a RIGHT JOIN. It's essentially the same answer, but the
-- tables are reversed.
SELECT eu.unique_id,
  e.name
FROM Employees AS e
  LEFT JOIN EmployeeUNI AS eu ON e.id = eu.id;