-- WITH specifies a temporary named result set, known as a Common Table Expression (CTE).
-- A CTE allows you to define a temporary named result set that's available temporarily in the 
-- execution scope of a statement such as SELECT, INSERT, UPDATE, DELETE, MERGE.
-- The following shows the commone syntax for a CTE in SQL Server:
-- 
-- WITH expression_name[(column_name [,...])]
-- AS
-- (CTE definition)
-- SQL statement;
--
-- In this syntax:
-- First, specify the expression name (expression_name) to which you can refer later in the query.
-- Next, specify a list of comma-separated columns after the expression name. The number of columns
-- must be the same as the number of columns defined in the (CTE definition).
-- Note that the common table expression below does not have a list of comma-separated columns 
-- before the AS statement.
-- Then, use the AS keyword after the expression name or column list if the column list is
-- specified.
-- After, define a SELECT statement whose result set populates the common table expression.
-- Finally, refer to the common table expression in a query (SQL_statement) such as SELECT, 
-- INSERT, UPDATE, DELETE, MERGE.

-- The INNER JOIN keyword selects records that have matching values in both tables.
-- There are four basic types of joins in sql server: inner, outer, (left, right, full), self, and 
-- cross join.
-- When comparing INNER JOIN to LEFT JOIN, INNER JOIN will omit rows with null values for the 
-- columns that the tables were joined on, while LEFT JOIN will include these rows. While joining 
-- the second table to the current table, if the second table has null values for certain rows, 
-- those null values will appear in the LEFT JOIN. In an INNER JOIN, the row won't appear at all.

-- In the statement below, we use the WITH keyword to create a common table expression which is 
-- used later on in the query.
-- We name this common table expression SUMTX.
-- We populate SUMTX with a SELECT statement, which is:
-- Select the account column from table Transactions as T.
-- Select the amount column from table Transactions as T. SUM these rows by accounts in the 
-- account column. Alias this column AS balance.
-- Below the common table expression, we have the main SELECT statement, which is:
-- SELECT column balance from table SUMTX as T.
-- INNER JOIN table Users as U. Join these tables on their account rows.
-- Because we used INNER JOIN, don't include rows with null values.
-- Only include rows where balance is greater than 10000.
WITH SUMTX AS (
  SELECT T.account,
    SUM(T.amount) AS balance
  FROM Transactions T
  GROUP BY T.account
)
SELECT U.name,
  balance
from SUMTX T
  INNER JOIN Users U ON U.account = T.account
where balance > 10000