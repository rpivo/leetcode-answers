SELECT *
FROM (
    SELECT product_id,
      SUM(store1) AS store1,
      SUM(store2) AS store2,
      SUM(store3) AS store3
    FROM (
        SELECT Products.*,
          CASE
            WHEN store = "store1" THEN price
          END AS store1,
          CASE
            WHEN store = "store2" THEN price
          END AS store2,
          CASE
            WHEN store = "store3" THEN price
          END AS store3
        FROM Products
      ) as p
    GROUP BY product_id
  ) as result;
