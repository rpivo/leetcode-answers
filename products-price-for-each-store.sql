-- For this query, we are going to use two custom variables, @cols and @query.
-- NVARCHAR is a data type that accepts any character of length N.
-- MAX is the maximum length that can be used for NVARCHAR, which is 4000.
-- So, we have two declared variables here:
-- @cols is of type NVARCHAR with MAX length (4000)
-- @query is of type NVARCHAR with MAX length (4000)
-- we're going to set the @cols variable to a query.
-- STRING_AGG concatenates the values of string expressions and places separator values between
-- them.
-- SELECT STRING_AGG(store, ',') should generate a string with each value in the store column 
-- separated by a comma
-- We populate the STRING_AGG with result from another select statement.
-- For this statement, we select each distinct row from the store column in Products
-- We also alias this result table as T.
-- The @query variable is set to a string that is itself a query that uses the @cols variable as a 
-- dynamic value nested in the query.
-- For the string query:
-- Select everything from the result table of another select.
-- That Select is:
-- Selected product_id, store_ price from Products.
-- Alias this result table as T1.
-- PIVOT rotates a table-valued expression by turning the unique values from one column in the 
-- expression into multiple columns in the output.
-- For this pivot:
-- For each store in the @cols STRING_AGG variable, we get the maximum price value that exists for 
-- that store.
-- We also alias that last result as T2.
DECLARE @cols AS NVARCHAR(MAX),
  @query AS NVARCHAR(MAX);
SET @cols = (
    SELECT STRING_AGG(store, ',')
    FROM (
        SELECT DISTINCT store
        FROM Products
      ) T
  );
SET @query = 'SELECT *
FROM (
       SELECT product_id,store,price FROM Products
     )T1
PIVOT
(MAX(price) FOR store IN (
                           ' + @cols + '
                         ) 
)T2';
EXECUTE(@query);
