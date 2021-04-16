-- the first column in the result table will be employee_id
-- the second column will be called team_size
-- COUNT(*) returns the number of rows in a specified table, and it preserves duplicate rows.
-- COUNT(*) simply returns the number of rows.
-- COUNT(*) counts each row separately and includes rows that have NULL values.
-- COUNT(*) preserves duplicate rows.
-- The OVER and PARTITION BY functions are both used to portion a results set according to 
-- specified criteria.
-- PARTITION BY divides the query result set into partitions.
-- PARTITION BY specifies the column by which the rowset is partitioned.
-- OVER with PARTITION BY is kind of like an inline GROUP BY statement.
-- Essentially what COUNT(*) OVER, and PARTITION BY are doing here is:
-- COUNT is getting every row.
-- OVER is basically an inline GROUP BY
-- We're grouping by PARTITION, and we are partitioning on each individual team_id.
-- So we end up a count of each row in a given team_id, which is the team_size.
SELECT employee_id,
  COUNT(*) OVER(PARTITION BY team_id) AS team_size
FROM employee;