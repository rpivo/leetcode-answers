-- select the customer_id from table Visits aliased as v. This will be the 
-- first column in the result table.
-- The second column will be called count_no_trans.
-- Each row for this column will be the count of each visit_id from table v, 
-- under certain conditions.
-- To get these conditions, we need to left join table Transactions aliased as 
-- t on visit_id.
-- note that we can also use USING(visit_id) here.
-- we need to narrow this join by the rows where visit_id does not exist in 
-- table t.
-- We can imagine this as table v with rows removed where the visit_id does 
-- not exist in table t.
-- With these remaining rows, we want to get the count of the visit_ids as 
-- count_no_trans, grouped by their respective customer_id.
SELECT customer_id,
  count(v.visit_id) AS count_no_trans
FROM Visits v
  LEFT JOIN Transactions t ON v.visit_id = t.visit_id
WHERE t.visit_id IS NULL
GROUP BY customer_id;
