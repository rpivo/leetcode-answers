-- Alias the SchoolA table as sa
-- Alias the SchoolB table as sb
-- Alias the SchoolC table as sc
-- The first column will be student_name from sa
-- Alias this column as member_a
-- The second column will be student_name from sb
-- Alias this column as member_B
-- The third column will be student_name from sc
-- Alias this column as member_C
-- The CROSS JOIN is used to generate a paired combination of each row of the first table with 
-- each row of the second table.

-- The main difference between a CROSS JOIN and an INNER JOIN or LEFT JOIN is that the INNER JOIN 
-- and LEFT JOIN allow you to apply a condition (the ON clause).
-- A CROSS JOIN does not require any conditions. In fact, conditions are not allowed with a CROSS 
-- JOIN.
-- CROSS JOIN does not allow any conditions during the operation. However, you can restrict the 
-- result with some filtering operation, like the WHERE condition.
-- So, with the query below, we are getting ALL of the rows from the selected columns with the two 
-- CROSS JOINs.
-- After getting the full result, we filter with these conditions:
-- sa.student_name should not equal sb.student_name.
-- sa.student_name should not equal sc.student_name.
-- sb.student_name should not equal sc.student_name.
-- sa.student_id should not equal sc.student_id.
-- sb.student_id should not equal sc.student_id.
-- sa.student_id should not equal sb.student_id.
SELECT sa.student_name AS member_A,
  sb.student_name AS member_B,
  sc.student_name AS member_C
FROM SchoolA sa
  CROSS JOIN SchoolB sb
  CROSS JOIN SchoolC sc
WHERE sa.student_name != sb.student_name
  AND sa.student_name != sc.student_name
  AND sb.student_name != sc.student_name
  AND sa.student_id != sc.student_id
  AND sb.student_id != sc.student_id
  AND sa.student_id != sb.student_id;