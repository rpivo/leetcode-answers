WITH SUM_T AS (
  SELECT customer_id,
    SUM(revenue) as s
  FROM Customers c
  WHERE year = 2021
  GROUP BY customer_id
)
SELECT customer_id
FROM SUM_T c
WHERE s > 0;