-- the first column of the result table will be customer_id from the Visits table.
-- for the second column, count every row from Visits using COUNT(*) and alias these as
-- count_no_trans. We will filter out rows by using the WHERE clause.
-- We get the rows where visit_id is NOT IN the result set from a new SELECT statement.
-- That new SELECT statement is:
-- Get the DISTINCT visit_id rows FROM Transactions.
-- Finally, we GROUP BY customer_id, which will group the resulting counts in the second column by
-- the customer_id. 
SELECT customer_id,
  COUNT(*) as count_no_trans
FROM Visits
WHERE visit_id NOT IN (
    SELECT DISTINCT visit_id
    FROM Transactions
  )
GROUP BY customer_id;