INSERT INTO prices
    (product_id, start_date, end_date, price)
VALUES
    ('1', '2019-02-17', '2019-02-28', '5');
INSERT INTO prices
    (product_id, start_date, end_date, price)
VALUES
    ('1', '2019-03-01', '2019-03-22', '20');
INSERT INTO prices
    (product_id, start_date, end_date, price)
VALUES
    ('2', '2019-02-01', '2019-02-20', '15');
INSERT INTO prices
    (product_id, start_date, end_date, price)
VALUES
    ('2', '2019-02-21', '2019-03-31', '30');

INSERT INTO unitssold
    (product_id, purchase_date, units)
VALUES
    ('1', '2019-02-25', '100');
INSERT INTO unitssold
    (product_id, purchase_date, units)
VALUES
    ('1', '2019-03-01', '15');
INSERT INTO unitssold
    (product_id, purchase_date, units)
VALUES
    ('2', '2019-02-10', '200');
INSERT INTO unitssold
    (product_id, purchase_date, units)
VALUES
    ('2', '2019-03-22', '30');