# بسم الله الرحمن الرحيم

[TOC]

## Introduction

- Stored objects include these object types:
  - Stored procedure: An object created with `CREATE PROCEDURE` and invoked using the `CALL` statement. A procedure does not have a return value but can modify its parameters for later inspection by the caller. It can also generate result sets to be returned to the client program.
  - Stored function: An object created with `CREATE FUNCTION` and used much like a built-in function. You invoke it in an expression and it returns a value during expression evaluation.
  - Trigger: An object created with `CREATE TRIGGER` that is associated with a table. A trigger is activated when a particular event occurs for the table, such as an insert or update.
  - Event: An object created with `CREATE EVENT` and invoked by the server according to schedule.
  - View: An object created with `CREATE VIEW` that when referenced produces a result set. A view acts as a virtual table.
- Terminology used in this document reflects the stored object hierarchy:
  - Stored routines include stored procedures and functions.
  - Stored programs include stored routines, triggers, and events.
  - Stored objects include stored programs and views.

## Stored Objects

### Defining Stored Programs

#### Create Procedure

```sql
mysql> delimiter //
mysql> CREATE PROCEDURE dorepeat(p1 INT)
    -> BEGIN
    ->   SET @x = 0;
    ->   REPEAT SET @x = @x + 1; UNTIL @x > p1 END REPEAT;
    -> END
    -> //

mysql> delimiter ;

mysql> CALL dorepeat(1000);

mysql> SELECT @x;
```

#### Create Function

```sql
mysql> CREATE FUNCTION hello (s CHAR(20))
mysql> RETURNS CHAR(50) DETERMINISTIC
    -> RETURN CONCAT('Hello, ',s,'!');

mysql> SELECT hello('world');
```

### Using Stored Routines

- Stored routines can be particularly useful in certain situations:
  - When multiple client applications are written in different languages or work on different platforms, but need to perform the same database operations.
  - When security is paramount. Banks, for example, use stored procedures and functions for all common operations. This provides a consistent and secure environment, and routines can ensure that each operation is properly logged. In such a setup, applications and users would have no access to the database tables directly, but can only execute specific stored routines.

- Stored routines can provide improved performance because less information needs to be sent between the server and the client. The tradeoff is that this does increase the load on the database server because more of the work is done on the server side and less is done on the client (application) side. Consider this if many client machines (such as Web servers) are serviced by only one or a few database servers.

### Using Triggers

#### Trigger Syntax and Examples

Here is a simple example that associates a trigger with a table, to activate for INSERT operations. The trigger acts as an accumulator, summing the values inserted into one of the columns of the table.

```sql
mysql> CREATE TABLE account (acct_num INT, amount DECIMAL(10,2));
mysql> CREATE TRIGGER ins_sum BEFORE INSERT ON account
       FOR EACH ROW SET @sum = @sum + NEW.amount;
```

The `CREATE TRIGGER` statement creates a trigger named `ins_sum` that is associated with the account table. It also includes clauses that specify the trigger action time, the triggering event, and what to do when the trigger activates:

- The keyword `BEFORE` indicates the trigger action time. In this case, the trigger activates before each row inserted into the table. The other permitted keyword here is `AFTER`.
- The keyword `INSERT` indicates the trigger event; that is, the type of operation that activates the trigger. In the example, `INSERT` operations cause trigger activation. You can also create triggers for `DELETE` and `UPDATE` operations.
- The statement following `FOR EACH ROW` defines the trigger body; that is, the statement to execute each time the trigger activates, which occurs once for each row affected by the triggering event. In the example, the trigger body is a simple `SET` that accumulates into a user variable the values inserted into the amount column. The statement refers to the column as `NEW`.amount which means “the value of the amount column to be inserted into the new row.”

To use the trigger, set the accumulator variable to zero, execute an INSERT statement, and then see what value the variable has afterward:

```sql
mysql> SET @sum = 0;
mysql> INSERT INTO account VALUES(137,14.98),(141,1937.50),(97,-100.00);
mysql> SELECT @sum AS 'Total amount inserted';
```

To destroy the trigger, use a DROP TRIGGER statement. You must specify the schema name if the trigger is not in the default schema:

`mysql> DROP TRIGGER test.ins_sum;`

As of MySQL 5.7.2, it is possible to define multiple triggers for a given table that have the same trigger event and action time.

```sql
mysql> CREATE TRIGGER ins_transaction BEFORE INSERT ON account
       FOR EACH ROW PRECEDES ins_sum
       SET
       @deposits = @deposits + IF(NEW.amount>0,NEW.amount,0),
       @withdrawals = @withdrawals + IF(NEW.amount<0,-NEW.amount,0);
```

The following example  defines an UPDATE trigger that checks the new value to be used for updating each row, and modifies the value to be within the range from 0 to 100. This must be a `BEFORE` trigger because the value must be checked before it is used to update the row:

```sql
mysql> delimiter //
mysql> CREATE TRIGGER upd_check BEFORE UPDATE ON account
       FOR EACH ROW
       BEGIN
           IF NEW.amount < 0 THEN
               SET NEW.amount = 0;
           ELSEIF NEW.amount > 100 THEN
               SET NEW.amount = 100;
           END IF;
       END;//
mysql> delimiter ;
```

### Using Views

 A view can be created from many kinds of `SELECT` statements. It can refer to base tables or other views. It can use joins, `UNION`, and subqueries. The `SELECT` need not even refer to any tables. The following example defines a view that selects two columns from another table, as well as an expression calculated from those columns:

```sql
mysql> CREATE TABLE t (qty INT, price INT);
mysql> INSERT INTO t VALUES(3, 50), (5, 60);
mysql> CREATE VIEW v AS SELECT qty, price, qty*price AS value FROM t;
mysql> SELECT * FROM v;
```

## Functions vs. Stored Procedures

- Source: <https://www.quora.com/What-difference-between-stored-procedures-and-functions-in-MySQL>

1. A FUNCTION always returns a value using the return statement. Practical scenarios, when expecting a value to be returned which in turn helps for computation in rest of code.
2. PROCEDURE may return one or more values through parameters or may not return any at all.

  - **IN,OUT,INOUT** parameters are different types. IN will be the input to the procedure. OUT will be the output from the procedure and this helps to get the output from the procedure. INOUT usually a same parameter behaves as input as well as output.

3. Functions are normally used for computations where as procedures are normally used for executing business logic.
4. A Function returns 1 value only. Procedure can return multiple values (max 1024).
5. Stored procedure always returns an integer value of zero by default. Whereas function return types could be scalar or table or table values. This is because Functions mainly meant for computation.
6. Stored procedures have a precompiled execution plan, where as functions are not. Because of precompiled plan, for routines, stored procedure is preferred a lot.
7. A function can be called directly by SQL statement like select `func_name` from dual while procedures cannot.
8. Stored procedure has the security and reduces the network traffic and also we can call stored procedure in any no. of applications at a time.
9. A Function can be used in the SQL Queries while a procedure cannot be used in SQL queries that cause a major difference b/w function and procedures.

## References

- MySQL 5.7 Reference Manual - Chapter 13:  SQL Statement Syntax - 13.1 Data Definition Statements  <https://dev.mysql.com/doc/refman/5.7/en/sql-syntax-data-definition.html>
- MySQL 5.7 Reference Manual - Chapter 23: Stored Objects <https://dev.mysql.com/doc/refman/5.7/en/stored-objects.html>
