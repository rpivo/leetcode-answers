SELECT u.name,
  SUM(t.amount) as balance
FROM Users as u
  LEFT JOIN Transactions as t on u.account = t.account
GROUP BY u.name
HAVING SUM(t.amount) > 10000;
