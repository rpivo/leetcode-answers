-- the same as customerr-who-visited-but-did-not-make-any-transactions-3.sql, 
-- except replacing ON v.visit_id = t.visit_id with USING(visit_id).
SELECT customer_id,
  count(v.visit_id) AS count_no_trans
FROM Visits v
  LEFT JOIN Transactions t USING(visit_id)
WHERE t.visit_id IS NULL
GROUP BY customer_id;
