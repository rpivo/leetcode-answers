-- we will first create a result table called a.
-- to create the result table a, we:
-- select the distinct rows in sell_date from table activities.
-- we also select the column product from activities.
-- once we have the result table a, we create a new result table.
-- to create the result table, we:
-- select sell_date from a.
-- select the count of product from a as num_sold.
-- select the string_agg of product from a, each separated by a comma.
-- these will be sorted alphabetically based on the product column from a.
-- with the final result table, we:
-- group by the sell_date from result table a,
-- and order by the sell_date from result table a.
select a.sell_date,
  count(a.product) num_sold,
  string_agg(a.product, ',') within group (
    order by a.product
  ) products
from (
    select distinct sell_date,
      product
    from activities
  ) a
group by a.sell_date
order by a.sell_date