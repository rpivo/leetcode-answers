-- it looks like WITH will create a new table with the given name, product_vol 
-- in this case.
-- to create this table, we select product_id, and get the product of Width, 
-- Length, and Height as vol from the Products table.
WITH product_vol AS(
  SELECT product_id,
    Width * Length * Height as vol
  FROM Products
)
-- here is the mane select statement to create the result table.
-- we will alias the Warehouse table as w.
-- from this table, we select name as warehouse_name, and we get the sum of 
-- units from w times vol from product_vol as volume.
-- To do this, we need to left join product_vol aliased as v.
-- And I guess you can use USING(product_id) to join the two tables. This 
-- appears to be a shorthand for Warehouse.product_id = v.product_id.
SELECT w.name AS warehouse_name,
  SUM(w.units * v.vol) AS volume
FROM Warehouse w
  LEFT JOIN product_vol v USING(product_id)
-- group by the first column.
GROUP BY 1;
