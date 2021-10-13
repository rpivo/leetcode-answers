SELECT w.name as warehouse_name,
  SUM(p.width * p.length * p.height * w.units) as volume
from Products as p
  LEFT JOIN Warehouse as w on w.product_id = p.product_id
WHERE w.name IS NOT NULL
GROUP BY w.name;
