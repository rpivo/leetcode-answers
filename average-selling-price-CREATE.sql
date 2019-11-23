CREATE TABLE prices
(
    product_id INT,
    start_date DATE,
    end_date DATE,
    price INT,
);

CREATE TABLE unitssold
(
    product_id INT,
    purchase_date INT,
    units INT,
);