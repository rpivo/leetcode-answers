-- select column sell_date
SELECT sell_date,
  -- get the count of each distinct product aliased as num_sold and group by
  -- "1"

  -- GROUP BY 1 means to group by the first column regardless of what it's
  -- called.

  -- So, this is grouping everything by sell_date.
  COUNT(DISTINCT product) as num_sold,
  -- created a concatenated string of each distinct product, aliased as
  -- products.
  GROUP_CONCAT(DISTINCT product) as products
-- select all the above from Activities.
FROM Activities
-- group everything by sell_date.
GROUP BY 1
