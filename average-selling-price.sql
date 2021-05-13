-- selected product_id from u as the first column in the result table
select u.product_id,
  -- the result will be rounded to two decimal places.
  -- somehow, mssql is able to pull prices and units out of their respective tables.
  -- price comes from the Prices table.
  -- units comes from the UnitsSold table.
  -- maybe this is just how joins work. maybe unique columns are able to be used without having to
  -- provide an aliased table name prefix before each column.
  -- we presumably multiply price and units by 1.0 to convert the integer to a floating point
  -- number.
  -- This is the price and the units for each u.product_id.
  -- we get the sum of price and the sum of units for the given product_id, and multiply that by
  -- 1.0.
  -- we divide this by the sum of units for the given product_id, which will give us the average
  -- price.
  -- we alias this result column as average_price.
  round(sum(price * units * 1.0) / sum(units), 2) as average_price
  -- alias table UnitsSold as u
FROM UnitsSold u
  -- we join this table with the Prices table, aliased as p.
  -- these tables are joined on their respective product_id columns.
  JOIN Prices p ON u.product_id = p.product_id
  -- they are also joined on the purchase_date column from the UnitsSold table, where 
  -- purchase_date is between the start_date and end_date columns from the Prices table.
  and u.purchase_date between p.start_date and p.end_date
  -- group the end result by the product_id from the UnitsSold table.
GROUP BY u.product_id
