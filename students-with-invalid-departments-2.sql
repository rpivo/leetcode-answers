SELECT s.id,
  s.name
FROM Students s
  LEFT JOIN Departments d on s.department_id = d.id
WHERE d.id IS NULL;