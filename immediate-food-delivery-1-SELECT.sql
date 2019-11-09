WITH
    immediate_delivery
    AS
    (
        SELECT *
, (CASE WHEN DATEDIFF(day, order_date, customer_pref_delivery_date) < 1 THEN 1.0 ELSE 0 END) AS 'immediate'
, (CASE WHEN DATEDIFF(day, order_date, customer_pref_delivery_date) < 1 THEN 0 ELSE 1.0 END) AS 'scheduled'
        FROM delivery
    )

SELECT
    ROUND((SUM(immediate) / (SUM(immediate) + SUM(scheduled)) * 100), 2) AS 'immediate_percentage'
FROM immediate_delivery;