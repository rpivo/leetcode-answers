-- select product_id as the first row
select product_id,
-- the max() function returns the maximum value in a set of values.
-- we are aliasing this next column as store1.
  max(
    -- when the value of store for the given product_id is "store1", then set
    -- the value of column store1 to the value of price for this row.
    case
      when store = "store1" then price
    end
  ) as "store1",
-- we are aliasing this next column as store2.
  max(
    -- when the value of store for the given product_id is "store2", then set
    -- the value of column store2 to the value of price for this row.
    case
      when store = "store2" then price
    end
  ) as "store2",
-- we are aliasing this next column as store3.
  max(
    -- when the value of store for the given product_id is "store3", then set
    -- the value of column store3 to the value of price for this row.
    case
      when store = "store3" then price
    end
  ) as "store3"
-- select all this from table Products
from Products
-- group the results by unique values in the product_id column.
group by product_id;
