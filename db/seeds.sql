INSERT INTO department (name)
VALUES
    ('Pharmacy'),
    ('Register'),
    ('Packing');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 43,000, ''),
    ('Technician', 40,000, '1'),
    ('Bagger', 30,000, '2'),
    ('Cashier', 35,000, '2');

INSERT INTO employee (first_name, last_name, manager_id)
VALUES
    ('Jeff', 'Wilbur', '1'),
    ('Sean', 'Green', '');
