-- cast() converts one data type into another.
-- in this case, we are converting the values from the order_date column in the Orders table
-- (aliased as o) into a varchar with length 7.
-- we alias this result as month. Note that we don't need to put "as" to alias it.
select cast(o.order_date as varchar(7)) month,
  -- for the second column in our result table, we will select the count of each order_id, aliased as
  -- order_count.
  -- because we've truncated the order_date values, this will effectively count up the number of
  -- order_ids that occur in the same month.
  count(order_id) order_count,
  -- for the third column in the result table, we will select the count of distinct customer_id
  -- values, aliased as customer_count.
  -- this will count the distinct customer_id values that occur in the given month.
  count(distinct customer_id) customer_count
-- all of the above is selected from the Orders table, aliased as o
from Orders o
-- filter results where the invoice value is greater than 20
where o.invoice > 20
-- group the results by the same casting that was done in the first select statement.
-- I would think that the first select would do the trick, but this sort of makes sense that we 
-- would have to group by this casting.
group by cast(o.order_date as varchar(7))
