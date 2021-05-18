-- the format() function can be used to format dates or times.
-- the first argument is the value to be formatted.
-- the second argument is the format pattern.
-- this page has a list of format patterns:
-- https://www.sqlshack.com/a-comprehensive-guide-to-the-sql-format-function/
-- this will convert a date value to the format Tuesday, May 18, 2021
SELECT format(day, 'D') AS day
FROM Days
