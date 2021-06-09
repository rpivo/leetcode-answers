-- For the result, we will select machine_id as is.
-- We will also create another column called processing_time.
-- This column will depend on a conditional CASE statement.
-- There are two branches for this CASE statement.
-- 1. WHEN activity_type is equal to 'start'
-- (Note that we do not need to select activity_type in order to use it)
-- Then we will get the result of -1 times timestamp
-- (Note, again, that we do not need to select timestamp in order to use it)
-- 2. ELSE, if activity_type is not 'start' (in other words, it's 'end')
-- then just use timestamp.
-- Each machine (machine_id) can have several distinct processes (process_id)
-- We need to get the sum of of all of these timestamps.
-- After the calculations, some of these timestamps will be negative and some will be positive.
-- Different pairs of timestamps can represent diffferent activities.
-- But that's okay -- because we've done the work to convert the start timestamps as negative
-- values, then adding all these timestamps up will give us what we want, which is a total SUM
-- of all the timestamps. Once we have that, then we can begin to calculate an average.
-- after the SUM, we divide by the number of DISTINCT process_id's for this set of timestamps.
-- To get this number, we use COUNT on DISTINCT porcess_id.
-- We will have an average at this point.
-- Then, we need to ROUND to 3 decimal places.
-- We effectively will have processing_time at this point.
-- The last thing we need to do is GROUP each of these BY machine_id.
SELECT machine_id,
  ROUND(
    SUM(
      CASE
        WHEN activity_type = 'start' THEN -1 * timestamp
        ELSE timestamp
      END
    ) / COUNT(DISTINCT process_id),
    3
  ) AS processing_time
FROM Activity
GROUP BY machine_id
