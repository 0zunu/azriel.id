---
title: "Relational Databases & Database Design"
summary: "A database that represents data in tables, where the tables are connected by the same/common values in related columns."
description: "A database that represents data in tables, where the tables are connected by the same/common values in related columns."
categories: ["Database Systems"]
tags:
  [
    "Relational Databases",
    "Database Design",
    "Relational Keys",
    "Integrity Constraints",
    "Database Schema",
  ]
series: ["Database Systems Chapters"]
series_order: 2
date: 2026-06-21T05:02:50+07:00
draft: false
---

## Relational Database

A database that represents data in tables, where those tables are connected by the same/common values in related columns.

Database components:

1. Table
2. Column/attribute
3. Row/tuple
4. Domain

{{< mermaid >}}
flowchart LR
%% DBMS container holding tables
subgraph DBMS [DBMS]
direction TB
T1[Book Table]
T2[Member Table]
T3[Loan Table]
T4[Return Table]
end

    %% Client PC entities
    PC1(Client PC 1)
    PC2(Client PC 2)
    PC3(Client PC 3)

    %% Connection lines between DBMS and PCs
    DBMS --- PC1
    DBMS --- PC2
    DBMS --- PC3

    %% Styling for neatness
    style DBMS fill:none,stroke-width:2px

{{< /mermaid>}}

Schema:

1. Book Table: book code (3), book title (20)
2. Member Table: member code (3), member name (25)
3. Loan Table: loan code (5), loan date (date), member code (3)
4. Return Table: return code (5), return date (date), member code (3)

Member Table:

| Member Code | Name    |
| ----------- | ------- |
| A01         | Surya   |
| A02         | Fitri   |
| A03         | Syahrur |

Book Table:

| Book Code | Title                                 | Stock |
| --------- | ------------------------------------- | ----- |
| B01       | C++ Programming                       | 10    |
| B02       | Building an Application in 30 Minutes | 15    |
| B03       | Cooking is Easy                       | 15    |

Schema:

1. Book Table: book code (3), book title (20)
2. Member Table: member code (3), member name (25)
3. Loan Table: loan code (5), loan date (date), member code (3)
4. Return Table: return code (5), return date (date), member code (3)

### 1. Table

A table has a name and consists of rows and columns. Tables in a database must not have the same name (unique). A table is also called a Relation or File.

In the [diagram](#relational-database) there are 4 tables: member table, book table, loan table, and return table.

### 2. Column/Attribute

A column has a name. Columns in a table must not have the same name. The order of names may be arbitrary and does not affect the meaning of the table.

Another name for a column is Field or Attribute.

In the [table](#relational-database), columns are member name, book title, member code, book code, etc.

### 3. Domain

A domain is a collection of values that can be stored in one or more columns. A domain may belong to one or more columns, but a column has only one domain. Because a domain restricts and controls the values that can be stored, it is called a domain constraint.

In the [diagram](#relational-database), the member code column contains only 3 values, namely “A01”.

### 4. Row

A row contains the data of an object. A row in a table must be unique, can be placed in any order, and does not affect the meaning of the table. A row is also called a Record or tuple.

In the [member table](#relational-database) it can store three objects (that is, three member records) in three tuples.

## Relational Keys

A relational key is the identification of one or more columns whose values can uniquely distinguish tuples.

Five relational keys:

1. Superkey
2. Candidate key
3. Primary key
4. Alternate key
5. Foreign key

**Member Table**

| Member Code | Name    |
| ----------- | ------- |
| A01         | Surya   |
| A02         | Fitri   |
| A03         | Syahrur |

**Return Table**

| Return Code | Loan Code |
| ----------- | --------- |
| KM01        | PJ01      |
| KM02        | PJ02      |

**Book Table**

| Book Code | Title                                 | Stock |
| --------- | ------------------------------------- | ----- |
| B01       | C++ Programming                       | 10    |
| B02       | Building an Application in 30 Minutes | 15    |
| B03       | Cooking is Easy                       | 15    |

**Loan Table**

| Loan Code | Loan Date  | Book Code | Member Code | Quantity | Return Date |
| --------- | ---------- | --------- | ----------- | -------- | ----------- |
| PJ01      | 10-01-2019 | B01       | A01         | 1        | 13-01-2019  |
| PJ01      | 10-01-2019 | B02       | A01         | 1        | 13-01-2019  |
| PJ01      | 10-01-2019 | B03       | A01         | 1        | 13-01-2019  |
| PJ02      | 12-01-2019 | B02       | A02         | 1        | 14-01-2019  |
| PJ02      | 12-01-2019 | B03       | A02         | 1        | 14-01-2019  |

### 1. Superkey

A superkey is a single or group of columns whose values uniquely distinguish tuples in a table.

Each table has more than one superkey, namely:

- Member table: member code, member name
- Book table: book code, title, stock
- Loan table: loan code, loan date, book code, member code, quantity, return date
- Return table: return code, loan code

Member table:

- Column member code,
- Column invoice number and column member name

Book table:

- Column book code
- Combination of book code, title, stock.

### 2. Candidate Key

A candidate key is a superkey such that no proper subset of it is also a superkey. Not all superkeys are candidate keys. A candidate key that consists of two or more columns is called a composite key.

Each table has candidate keys and non-candidate keys, namely:

Member table:

- Column member code: candidate key
- Column invoice number and column member name: not a candidate key

Book table:

- Column book code: candidate key
- Combination of book code, title, stock: not a candidate key

Loan table:

- Columns loan code, book code, member code: candidate key
- Combination of loan code, book code, member code, quantity, etc.: not a candidate key

### 3. Primary Key

A primary key is the selected candidate key (from among other candidate keys) that uniquely distinguishes tuples in a table. If a table has only one candidate key (for example, the member table and the book table), that key becomes the primary key. But if there is more than one candidate key (for example, the sales table and the return table), then one of those candidate keys may be chosen as the primary key.

### 4. Alternate Key

An alternate key is a candidate key that is not chosen as the primary key. For example, in the return table, if we choose the return code as the primary key, then the loan code can be an alternate key.

### 5. Foreign Key

A foreign key is one or more columns whose values are the same as or related to the candidate key in another table or the same table.

For example, in the loan table there is a member code column that connects to the member table, so member code is a foreign key. These related columns are very important in join operations.

## Table Schema (Relation Schema)

A table schema is the basic information describing a table, consisting of the table name and a set of column-domain pairs.

Example: Member Table Schema<br>
Member Table (member code, name)

## Database Schema (Relational Database Schema)

A database schema is a collection of table schemas where each table has a different name.

Example: Library Database Schema

- Member table (member code, name)
- Book table (book code, title, stock)
- Loan table (loan code, loan date, book code, etc.)

## Integrity Constraints

We have discussed [domain](#3-domain) constraints. There are four other constraints that maintain the integrity of data stored in a database:

1. Null
2. Entity integrity
3. Referential integrity
4. General constraints

### 1. Null

Null is a value in a column (tuple) that is still unknown. This can mean that the value cannot be applied to that column.

However, null is not the same as the numeric value zero or the string "-"; zero and whitespace are values, while null indicates the absence of a value.

For example, if a table has data that is not yet known, it may be written as null, but this does not apply to the primary key. Because the primary key column must be unique, if the primary key stores null then the uniqueness property of that column is lost because multiple tuples could have null values.

### 2. Entity Integrity

Entity integrity is the constraint or rule that primary key columns must not store null.

As explained earlier, the primary key is used to uniquely define a tuple.

### 3. Referential Integrity

Referential integrity is the constraint that if a table has a foreign key column, then the value in that foreign key must match the value of the candidate key column, and if not, the foreign key may be written as null.

There are two cases where null is not allowed:

1. When the column is constrained to not allow null.
2. When the column is also part of the primary key.

### 4. General Constraints

General constraints are additional rules established by users or database administrators according to the policies and restrictions of an organization.

Example:

- Book loans are not allowed if only one copy of the book is in stock.
- If a member still has a book that has not been returned, they are not allowed to borrow again.

## Database Design

The database creation process consists of two main stages:

1. Analysis and design stage
2. Implementation stage

### 1. Analysis Stage

The analysis stage is the mapping or modeling of the real world using a specific database design notation, as well as creating an implementation description for the database.

{{< mermaid >}}
flowchart TD
%% Style definitions for step boxes
classDef langkah stroke-width:1px;

    %% Stage 1: Conceptual (Left to Right)
    subgraph Concept [Database Design Conceptually]
        direction LR
        L1["<div style='text-align:left;'><b>Step 1: Discovery and<br/>Fact Analysis</b><hr/>• Identify organizational units<br/>• Discover facts<br/>• Summarize discovered facts</div>"]:::langkah
        L2["<div style='text-align:left;'><b>Step 2: Create ERD</b><hr/>• Determine entity types<br/>• Determine entity relationships<br/>• Determine multiplicity<br/>• Determine attributes<br/>• Draw the ERD<br/>• Refine the ERD structure</div>"]:::langkah

        L1 ==> L2
    end

    %% Stage 2: Logical (Top to Bottom)
    subgraph Logic [Database Design Logically]
        direction TB
        L3["<div style='text-align:left;'><b>Step 3: Map the ERD</b><hr/>• Map entity types<br/>• Map entity relationships<br/>• Map multi-valued attributes</div>"]:::langkah
        L4["<div style='text-align:left;'><b>Step 4: Normalize<br/>Table Structure</b><hr/>• Check table normality<br/>• Normalize tables<br/>• Validate tables</div>"]:::langkah

        L3 ==> L4
    end

    %% Stage 3: Physical (Right to Left)
    subgraph Physical [Database Design Physically]
        direction RL
        L5["<div style='text-align:left;'><b>Step 5: Create<br/>Database Schema Definition</b><hr/>• Table encoding and compression<br/>• Choose DBMS<br/>• Define base tables<br/>• Handle derived data</div>"]:::langkah
        L6["<div style='text-align:left;'><b>Step 6: Design File and<br/>Index Organization</b><hr/>• Analyze user transactions<br/>• Determine indexes<br/>• Create index documentation and DDL</div>"]:::langkah

        L5 ==> L6
    end

    %% Stage 4: Implementation
    subgraph Implementation [Implementation Stage]
        L7["<div style='text-align:left;'><b>Step 7:<br/>Implement DDL</b><hr/>• Use command line<br/>• Use graphical interface</div>"]:::langkah
    end

    %% Connecting the stages (Snake flow)
    L2 ==> L3
    L4 ==> L5
    L6 ==> L7

    %% Styling group borders for neatness

{{< /mermaid >}}

The analysis and design stages are divided into three parts:

1. Conceptual database design<br>The process of creating a data model that does not depend on the physical aspects of the database.
2. Logical database design<br>The process of creating a data model based on a specific data model, but not dependent on a particular DBMS or physical implementation.
3. Physical database design<br>The process of creating an implementation description for the database on secondary storage (disk). This description explains the base tables, file organization, indexes for efficient data access, all integrity constraints, and security measures.

### 2. Implementation Stage

This stage implements the database design that has been created. The implementation uses client applications provided by the selected DBMS.
