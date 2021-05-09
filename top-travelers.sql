-- we first need to get a result table from the users table.
-- we'll alias this result table as u.
-- from u, we select name.
-- coalesce() will take the first non-null option in a list.
-- for this list we have sum(r.distance) and 0.
-- if sum(r.distance) returns null, we will get 0.
-- to get sum(r.distance), we select the distance column from the result table r.
-- the result of this coalesce will be aliased as travelled_distance.
-- in order to get result table r with result table u, we need to do a join.
-- here we left join the result table from table rides as r.
-- we join these tables on id from result table u equaling user_id from result table r.
-- we then group these results by the name column from result table u.
-- we then order these results by the travelled_distance column in descending order.
-- if there are equal travelled_distance items, we order those by the name column.
select u.name,
  coalesce(sum(r.distance), 0) as travelled_distance
from users u
  left join rides r on u.id = r.user_id
group by u.name
order by travelled_distance desc,
  u.name