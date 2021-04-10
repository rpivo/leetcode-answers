-- The difference with this query is that the left table is Warehouse, whereas in the other query, 
-- the left table was Products. In this case, it didn't matter which table was the left table.
SELECT name AS warehouse_name,
  SUM(units * Width * Length * Height) AS volume
FROM Warehouse
  LEFT JOIN Products ON Warehouse.product_id = Products.product_id
GROUP BY name
