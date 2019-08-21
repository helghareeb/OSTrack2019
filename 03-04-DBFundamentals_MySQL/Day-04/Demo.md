# بسم الله الرحمن الرحيم

## Queries

Answer the following

- Create `sales` table

```sql
create table sales (
    -> id int primary key,
    -> sales_value int,
    -> year int);
```

- Insert some values

```sql
insert into sales values (1,200, 2019);
insert into sales values (2,200, 2019);
insert into sales values (3,200, 2019);
insert into sales values (3,200, 2019);
insert into sales values (4,100, 2018);
insert into sales values (5,100, 2018);
```

- Get total of sales

```sql
select sum(sales_value);
```

- Get total sales of year 2019

```sql
select sum(sales_value) from sales where year = 2019;
```

- Get sales grouped by year

```sql
select sum(sales_value) from sales group by year;
```

- Don't forget to display the year

```sql
select year, sum(sales_value) from sales group by year;
```

- Insert some additional data for year 2017

```sql
insert into sales values (6,50, 2017);
insert into sales values (7,50, 2017);
insert into sales values (8,50, 2017);
```

- List total sales of years after 2017

```sql
select year, sum(sale_value)
from sales
where year > 2017;
```

- Don't forget to display the year

```sql
select year, sum(sales_value) from sales where year > 2017 group
by (year);
```

- List total sales for years after 2017 grouped by year

```sql
select year, sum(sales_value) from sales where year > 2017 group
by (year);
```

- List total sales for years after 2017 grouped by year on condition that total sales are greater than 500

```sql
select year, sum(sales_value)
from sales
where year > 2017
group by year
having sum(sales_value) > 500;
```

- Create `employees` table

```sql
create table employess(
    id int primary key,
    name varchar(255)
)
```

- Insert some values in `employees` table

```sql
insert into employees values (1,'ahmed');
insert into employees values (2,'mohamed');
insert into employees values (3,'saeed');
```

- Now, link `sales` tables with `employees` table

```sql
alter table sales add column emp_id int;
```

- Assign sales entries of year 2019 to Ahmed

```sql
update sales
set emp_id = 1
where year = 2019;
```

- Assign sales entries of year 2018 to Mohamed

```sql
update sales
set emp_id = 1
where year = 2019;
```

- Assign sales entries of year 2017 to Saeed

```sql
update sales set emp_id = 3 where year = 2017;
```

- List sales entries with their salesman id and salesman name

```sql
select sales.id, sales.sales_value, sales.year, sales.emp_id, employees.name 
from sales 
left join employees 
on sales.emp_id = employees.id;
```

- List sales entries with their salesman id and salesman name. Include all salesmen even who did not yet have any sold items entry

```sql
select sales.id, sales.sales_value, sales.year, sales.emp_id, employees.name 
from sales
right join employees
on sales.emp_id = employees.id;
```

- Our company decided to assign manager to employees. Modify employees table to reflect this decision

```sql
alter table employees add column manager_id int;
```

- Insert some new values to `employees`

```sql
insert into employees(id, name, manager_id) values (5, 'ayman', NULL);
```

- Assign Ayman as the manager of Hanaa

```sql
update employees
set manager_id = 5
where id = 4;
```

- Assign Ahmed as the manager of Saeed

```sql
update employees set manager_id = 2 where name = 'saeed';
```

- Display list of employees including name of their managers

```sql
Select t1.id, t1.name, t1.manager_id, t2.name 
from employees t1
left join employees t2
on t1.manager_id = t2.id;
```

- Display list of all employees including employees who have no managers

```sql
Select t1.id, t1.name, t1.manager_id, t2.name 
from employees t1
left join employees t2
on t1.manager_id = t2.id;
```