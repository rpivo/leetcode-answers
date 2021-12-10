-- select column user_id
SELECT user_id,
  -- select the maximum time_stamp for each user_id as last_stamp.
  MAX(time_stamp) AS last_stamp
-- select from logins
FROM Logins
-- where the year of time_stamp is 2020
WHERE YEAR(time_stamp) = 2020
-- group by user_id
GROUP BY user_id;
