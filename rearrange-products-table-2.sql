-- The first select statement gets each row where the store1 column is not 
-- null. For each of these rows, we select the product_id as product_id, we 
-- create a new column called store and set its value to "store1", and we 
-- select the store1 value as price. We then do this for store2 and store3 as 
-- well. Then we sort primarily by the first column (product_id), and 
-- secondarily by the second column (store), ascending.
SELECT product_id,
  'store1' AS store,
  store1 AS price
FROM Products
WHERE store1 IS NOT NULL
UNION
SELECT product_id,
  'store2' AS store,
  store2 AS price
FROM Products
WHERE store2 IS NOT NULL
UNION
SELECT product_id,
  'store3' AS store,
  store3 AS price
FROM Products
WHERE store3 IS NOT NULL
ORDER BY 1,
  2 ASC;