-- select product_id, store, and price
-- note that product_id is the only column that actually exists in the original table
-- you can generate the columns that you need up front in the SELECT segment, even if some of 
-- those columns don't yet exist
SELECT product_id,
  store,
  price
FROM Products -- from the products table
  UNPIVOT (price FOR store in (store1, store2, store3)) AS T -- UNPIVOT carries out the opposite 
  -- operation to PIVOT by rotating columns of a table-valued expression into column values.
  -- the pivot statement is used to convert table rows into columns, while the UNPIVOT operator
  -- converts columns back to rows.
  -- here, T is the alias for the UNPIVOT table, although I'm not sure it's being used. Maybe the 
  -- alias is a formality.
  -- price is the column being UNPIVOTED into.
  -- this can be useful when you have multiple columns that contain similar data, like what we 
  -- have here with columns store1, store2, and store3.
  -- by using this UNPIVOT, we get a conglomerate column called store which will contain the items 
  -- inside the in () segment as its items, and the price column will contain the original value 
  -- for that particular store at that particular id.