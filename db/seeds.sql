INSERT INTO department (name)
VALUES
    ('Pharmacy'),
    ('Register'),
    ('Packing');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 43000, '2'),
    ('Technician', 40000, '1'),
    ('Bagger', 30000, '2'),
    ('Cashier', 35000, '2');

INSERT INTO employee (first_name, last_name, manager_id)
VALUES
    ('Jeff', 'Wilbur', '1'),
    ('Sean', 'Green', NULL);
