---
title: "Normalization"
summary: "Normalization is the process of grouping data elements into tables that represent entities and their relationships."
description: "Normalization is the process of grouping data elements into tables that represent entities and their relationships."
categories: ["Database Systems"]
tags:
  [
    "1NF",
    "2NF",
    "3NF",
    "BCNF",
    "4NF",
    "5NF",
    "Functional Dependencies",
    "Determinant",
    "Partial Dependency",
    "Transitive Dependency",
    "Key Attributes",
    "Super Key",
    "Candidate Key",
    "Primary Key",
    "Alternate Key",
    "Foreign Key",
  ]
series: ["Database System Chapters"]
series_order: 5
date: 2026-07-11T05:02:50+07:00
draft: false
---

## Normalization

When designing a database you can:

1. Apply normalization to an existing table structure, or
2. Directly create an Entity-Relationship model.

Normalization is an alternative approach for building the logical design of a database by applying a set of standard rules and criteria to produce well-structured tables.

## Definition of Normalization

Normalization is the process of grouping data elements into tables that represent entities and their relationships.

Normalization is the process of organizing attributes of a relation to form a well-structured relation.

## Well-Structured Relation

A well-structured relation has minimal redundancy and allows users to perform INSERT, DELETE, and UPDATE operations on rows without causing errors or data inconsistencies as a result of those operations.

## Advantages of Normalization

Advantages of normalization include:

1. Minimizing the storage size required to store data.
2. Reducing the risk of data inconsistency in the database.
3. Reducing the likelihood of update anomalies.
4. Maximizing the stability of the data structure.

### Example

Consider a relation called Course with the following conditions:

1. Each student may enroll in only one course.
2. Each course has a standard tuition fee (it does not depend on the student who takes the course).

COURSE RELATION

| STUDENT-ID | COURSE-CODE | FEE |
| ---------- | ----------- | --- |
| 92130      | CS-200      | 75  |
| 92200      | CS-300      | 100 |
| 92250      | CS-200      | 75  |
| 92425      | CS-400      | 150 |
| 92500      | CS-300      | 100 |
| 92575      | CD-500      | 50  |

The relation above is simple and consists of three columns/attributes.

On inspection, there is redundancy in the data because the course fee repeats for each student. This redundancy can lead to errors or data inconsistencies when the relation is updated; these are called anomalies.

Anomaly is a deviation, error, or inconsistency that occurs during insert, delete, or update operations.

There are three types of anomalies:

1. Insertion Anomaly
   An error that occurs as a result of inserting a record/tuple into a relation.

   Example: A new course (CS-600) is introduced but cannot be inserted into the relation until a student enrolls in that course.

2. Deletion Anomaly
   An error that occurs as a result of deleting a record/tuple from a relation.

   Example: If the student with STUDENT-ID 92425 is the only student enrolled in CS-400 and that record is deleted, information that the course CS-400 exists with a fee of 150 would be lost.

3. Update Anomaly
   An inconsistency that occurs as a result of updating records/tuples in a relation.

   Example: If the fee for CS-200 is increased from 75 to 100, multiple records for students taking CS-200 must be updated to keep data consistent.

According to normalization theory, the course relation can be split into two separate relations as follows:

| STUDENT-ID | COURSE-CODE |
| ---------- | ----------- |
| 92130      | CS-200      |
| 92200      | CS-300      |
| 92250      | CS-200      |
| 92425      | CS-400      |
| 92500      | CS-300      |
| 92575      | CD-500      |

| COURSE-CODE | FEE |
| ----------- | --- |
| CS-200      | 75  |
| CS-300      | 100 |
| CS-400      | 150 |
| CS-500      | 50  |

## Problems with Normalized Relations

- Performance problem: normalization can impact database performance.

  Example: Before normalization, a listing like the course relation could be obtained with a single SQL statement:

  **SELECT \* FROM COURSE;**

  After normalization, producing the same listing requires joining the STUDENT-COURSE relation with the COURSE-FEE relation, for example:

  **SELECT Student.Student-id, Course.course-code, Fee**
  **FROM student, course**
  **WHERE student.course-code = course.course-code;**

  The result is the same but execution time may be longer.

- Referential integrity problem: issues arising from references between two or more tables.

  Example (student and course relations):
  1. Do not add a new record to the student relation unless the course code for that record already exists in the course relation.
  2. Do not delete a record from the course relation if there are still records in the student relation that reference that course code.

SOME CONCEPTS TO KNOW:

a. Key/Key Attributes
b. Functional Dependencies

## Key Attributes (Fields)

a. Key fields / key attributes in a database:

1. Super key
   A set of one or more attributes used to uniquely identify an entity in an entity set.
2. Candidate key
   A single attribute or a minimal set of attributes that uniquely identify a specific occurrence of an entity.
3. Primary key
   A single attribute or a minimal set of attributes that uniquely identifies an occurrence and represents each occurrence of an entity.
4. Alternate key
   A candidate key that is not chosen as the primary key.
5. Foreign key
   An attribute (or set of attributes) that establishes a relationship by referencing the parent entity.

SALES

| S#  | SNAME | CODE |
| --- | ----- | ---- |
| S1  | ADI   | 1002 |
| S2  | RAFI  | 1001 |
| S3  | HANY  | 1003 |

ORDERS

| CODE | P#   |
| ---- | ---- |
| 1002 | 2648 |
| 1001 | 2649 |
| 1003 | 2641 |

- Super key = S#, SNAME, CODE
- Candidate key = S#, SNAME
- Primary key = S#
- Alternate key = SNAME
- Foreign key = CODE

## Functional Dependencies

1. Functional dependency is a relationship between two attributes in a relation.

It is written as: A -> B, which means attribute B is functionally dependent on attribute A; the value of A determines the value of B.

Definition of functional dependency:

Given a relation R, attribute Y of R is functionally dependent on attribute X of R (written R.X -> R.Y) if and only if each value of X in R corresponds to exactly one value of Y in R.

Functional dependency is defined as:

An attribute Y has a functional dependency on attribute X if and only if each value of X is associated with a single value of Y.

Example:

SalesOrder(buyer, city, product, quantity)

In this example, BUYER functionally determines CITY, since for the same BUYER the CITY is the same, therefore:

| Buyer | City   | Product | Quantity |
| ----- | ------ | ------- | -------- |
| P1    | Yogya  | B1      | 10       |
| P1    | Yogya  | B2      | 5        |
| P2    | Solo   | B1      | 7        |
| P2    | Solo   | B2      | 6        |
| P2    | Solo   | B3      | 6        |
| P3    | Klaten | B3      | 7        |
| P3    | Klaten | B4      | 6        |

BUYER → CITY

Note: the left side of the arrow is called the determinant and the right side is the dependent.

Determinant

| Product_Code |
| ------------ |
| B001         |
| B002         |
| B003         |

Dependent

| Product_Name    | Stock |
| --------------- | ----- |
| SIDU Notebook   | 30    |
| Kiky Notebook   | 80    |
| Global Notebook | 50    |

This means **Product_Code** functionally determines **Product_Name, Stock**, written as **product_code → product_name, stock**.

2. Fully Functional Dependency (FFD)
   A value is fully functionally dependent on a combination of attributes if it is functionally dependent on the entire combination and not on any proper subset of that combination.

Definition:

Attribute Y of relation R is fully functionally dependent on attribute X of R if Y is functionally dependent on X and not functionally dependent on any proper subset of X.

Example:

PersonID, Project, Project_budget -> time_spent_by_person_on_project (not FFD)
PersonID, Project -> time_spent_by_person_on_project (FFD)

An attribute Y has a full functional dependency on X if:

- Y is functionally dependent on X
- Y has no dependency on any subset of X

Example in a customer relation:

CUSTOMER(CUSTOMER_CODE, NAME, CITY, FAX_NUMBER)

1. {CUSTOMER_CODE, CITY} → FAX_NUMBER
2. CUSTOMER_CODE → FAX_NUMBER

Condition 1: FAX_NUMBER depends on {CUSTOMER_CODE, CITY}

Condition 2: FAX_NUMBER depends on CUSTOMER_CODE, which is a subset of {CUSTOMER_CODE, CITY}; therefore FAX_NUMBER is not fully functionally dependent on {CUSTOMER_CODE, CITY}.

In other words, FAX_NUMBER is fully functionally dependent on CUSTOMER_CODE.

| Product_Code | Product_Name    | Buyer_Code | Buyer_Name |
| ------------ | --------------- | ---------- | ---------- |
| B001         | SIDU Notebook   | P001       | Sinta      |
| B002         | Kiky Notebook   | P002       | Tina       |
| B003         | Global Notebook | P003       | Rina       |
| B001         | SIDU Notebook   | P001       | Sinta      |
| B001         | SIDU Notebook   | P003       | Rina       |
| B002         | Kiky Notebook   | P003       | Rina       |

3. Partial Dependency
   A part of a composite key can function as a primary key for some attributes.

4. Transitive Dependency
   An attribute is non-key in one relation but becomes a key in another relation. Attribute Z has a transitive dependency on X when:

- Y is functionally dependent on X
- Z is functionally dependent on Y

| Course            | Room   | Location       | Time             |
| ----------------- | ------ | -------------- | ---------------- |
| Computer Networks | Merapi | North Building | Mon, 08:00-09:50 |
| Mathematics I     | Rama   | South Building | Tue, 07:00-08:45 |
| Expert Systems    | Sinta  | South Building | Wed, 10:00-11:45 |
| Physics 1         | Merapi | North Building | Tue, 08:00-08:50 |

In this relation:

COURSE → {ROOM, TIME}
ROOM → LOCATION

Thus:

COURSE → ROOM → LOCATION
Therefore LOCATION has a transitive dependency on COURSE.

5. Determinant
   An attribute (or set of attributes) on which other attributes are fully dependent.

## Normal Forms

Normalization rules are expressed as normal forms. A normal form is a constraint imposed on relations that must be satisfied at each level of normalization.

Common normalization levels include:

- First Normal Form (1NF)
- Second Normal Form (2NF)
- Third Normal Form (3NF)
- Boyce-Codd Normal Form (BCNF)
- Fourth Normal Form (4NF)
- Fifth Normal Form (5NF)

## Normalization Steps

{{< mermaid >}}
flowchart TD
UN["UNNORMALIZED"]
N1["FIRST NORMAL FORM\n(1NF)"]
N2["SECOND NORMAL FORM\n(2NF)"]
N3["THIRD NORMAL FORM\n(3NF)"]
BCNF["BOYCE-CODD NORMAL FORM\n(BCNF)"]
N4["FOURTH NORMAL FORM\n(4NF)"]
N5["FIFTH NORMAL FORM\n(5NF)"]

    Act1(["REMOVE REPEATING\nDATA ELEMENTS"])
    Act2(["REMOVE PARTIAL\nDEPENDENCIES"])
    Act3(["REMOVE TRANSITIVE\nDEPENDENCIES"])
    Act4(["REMOVE CANDIDATE KEYS\nTHAT ARE NOT DETERMINANTS"])
    Act5(["REMOVE MULTI-VALUE\nDEPENDENCIES"])
    Act6(["REMOVE JOIN\nDEPENDENCIES"])

    UN --> N1
    N1 --> N2
    N2 --> N3
    N3 --> BCNF
    BCNF --> N4
    N4 --> N5

    UN -.- Act1
    N1 -.- Act2
    N2 -.- Act3
    N3 -.- Act4
    BCNF -.- Act5
    N4 -.- Act6

    linkStyle 0,1,2,3,4,5 stroke-width:2px;

{{< /mermaid >}}

## Unnormalized Form (UNF)

An unnormalized form is a table that has not been normalized yet. It typically contains repeated attributes.

Example data:

| student_id | name   | advisor | class1 | class2 | class3 |
| ---------- | ------ | ------- | ------ | ------ | ------ |
| 22890100   | Rafi   | Rachmat | 1234   | 1543   | 1543   |
| 22890101   | Thoriq | Adi     | 1234   | 1775   |        |

Note: advisor = Academic Advisor

Here each student has up to three class columns, which is not in 1NF because attributes are repeated.

### First Normal Form (1NF)

A relation is in 1NF if every attribute contains only atomic (single) values for each row.

Example transformed to 1NF:

| student_id | name   | advisor | class_code |
| ---------- | ------ | ------- | ---------- |
| 22890100   | Rafi   | Rachmat | 1234       |
| 22890100   | Rafi   | Rachmat | 1543       |
| 22890101   | Thoriq | Adi     | 1234       |
| 22890101   | Thoriq | Adi     | 1775       |
| 22890101   | Thoriq | Adi     | 1543       |

### Second Normal Form (2NF)

2NF is defined based on functional dependencies.

A relation is in 2NF if:

- It is in 1NF, and
- All non-key attributes are fully functionally dependent on the primary key (no partial dependencies).

Non-key attributes are attributes that are not part of the primary key.

Student relation (example):

| student_id | name   | advisor |
| ---------- | ------ | ------- |
| 22890100   | Rafi   | Rachmat |
| 22890101   | Thoriq | Adi     |

Enrollment relation:

| student_id | class_code |
| ---------- | ---------- |
| 22890100   | 1234       |
| 22890100   | 1543       |
| 22890101   | 1234       |
| 22890101   | 1775       |
| 22890101   | 1543       |

### Third Normal Form (3NF)

A relation is in 3NF if:

- It is in 2NF, and
- Every non-key attribute is non-transitively dependent on the primary key (no transitive dependencies).

The example above is in 3NF because all attributes depend directly on the primary key.

Student relation

| student_id | name   | advisor |
| ---------- | ------ | ------- |
| 22890100   | Rafi   | Rachmat |
| 22890101   | Thoriq | Adi     |

Enrollment relation

| student_id | class_code |
| ---------- | ---------- |
| 22890100   | 1234       |
| 22890100   | 1543       |
| 22890101   | 1234       |
| 22890101   | 1775       |
| 22890101   | 1543       |

### Boyce-Codd Normal Form (BCNF)

A relation is in BCNF if and only if every determinant is a candidate key (every determinant is unique).

BCNF is a stricter version of 3NF. A relation in BCNF always satisfies 3NF, but not every 3NF relation satisfies BCNF.

Example: seminar relation

Rules:

1. Primary key is (student_id, seminar_id).
2. A student may attend one or two seminars.
3. Each student is supervised by one of two seminar instructors.
4. Each instructor may teach only one seminar.

Seminar relation

| student_id | seminar_id | instructor |
| ---------- | ---------- | ---------- |
| 22890100   | 2281       | Si doel    |
| 22890101   | 2281       | Pak tile   |
| 22890102   | 2291       | Mandra     |
| 22890101   | 2291       | Basuki     |
| 22890109   | 2291       | Basuki     |

This relation is in 3NF but not in BCNF because seminar_id functionally determines instructor (each instructor teaches only one seminar), and seminar_id is not a superkey in the seminar relation. To satisfy BCNF, split into two relations:

Instructors relation

| instructor | seminar_id |
| ---------- | ---------- |
| Si doel    | 2281       |
| Pak tile   | 2281       |
| Mandra     | 2291       |
| Basuki     | 2291       |

Student-Instructor relation

| student_id | instructor |
| ---------- | ---------- |
| 22890100   | Si doel    |
| 22890101   | Pak tile   |
| 22890102   | Mandra     |
| 22890101   | Basuki     |
| 22890109   | Basuki     |

### Fourth Normal Form (4NF) and Fifth Normal Form (5NF)

4NF addresses multivalued dependencies, which generalize functional dependencies when attributes can have multiple independent values.

5NF (also called Project-Join Normal Form, PJNF) deals with join dependencies and ensures relations can be reconstructed from smaller relations via joins without spurious tuples.

#### Library Case Study

Library members

| member_code | name    |
| ----------- | ------- |
| A01         | Surya   |
| A02         | Fitri   |
| A03         | Syahrur |

Library books

| book_code | title                      | stock |
| --------- | -------------------------- | ----- |
| B01       | C++ Programming            | 10    |
| B02       | Build an App in 30 Minutes | 15    |
| B03       | Cooking is Easy            | 15    |

Loan receipt

Loan date: 10 January 2019
Member code: A01
Loan No.: PJ01

| book_code | book_title                 | quantity |
| --------- | -------------------------- | -------- |
| B01       | C++ Programming            | 1        |
| B02       | Build an App in 30 Minutes | 1        |
| B03       | Cooking is Easy            | 1        |

Return date: 13 January 2019

Normalize the data from the three documents above.

Example transformation from UNF to 1NF:

| Unnormalized Form | 1NF           |
| ----------------- | ------------- |
| member_code       | member_code\* |
| name              | name          |
| book_code         | book_code\*   |
| title             | title         |
| stock             | stock         |
| loan_date         | loan_date     |
| loan_no           | loan_no\*     |
| member_code       | member_code   |
| book_code         | book_code     |
| title             | title         |
| quantity          | quantity      |
| return_date       | return_date   |

##### 2NF

{{< mermaid >}}
classDiagram
direction LR

    class `Member` {
        member_code*
        name
    }

    class `Loan` {
        loan_date
        loan_no*
        quantity
        return_date
        book_code**
        member_code**
    }

    class `Book` {
        book_code*
        title
        stock
    }

    `Loan` <--> `Member`
    `Loan` <--> `Book`

{{< /mermaid >}}

##### 3NF

{{< mermaid >}}
classDiagram
direction LR

    class `Member` {
        member_code*
        name
    }

    class `Loan` {
        loan_date
        loan_no*
        total_books
        return_date
        member_code**
    }

    class `Loan_Detail` {
        loan_no
        book_code**
        quantity
    }

    class `Book` {
        book_code*
        title
        stock
    }

    `Loan` <--> `Member`
    `Loan_Detail` <--> `Loan`
    `Loan_Detail` <--> `Book`

{{< /mermaid >}}

#### Purchase Invoice Case Study

PURCHASE INVOICE
PT. SANTA PURI
Senopati Street 11
Yogyakarta

Supplier Code: G01
Supplier Name: Gobel Nustra
Date: 05/09/2000
Invoice No.: 998

| Code | Item Name     | Qty  | Price         | Amount    |
| ---- | ------------- | ---- | ------------- | --------- |
| A01  | AC SPLIT ½ PK | 10.0 | 135,000       | 1,350,000 |
| A02  | AC SPLIT 1 PK | 10.0 | 200,000       | 2,000,000 |
|      |               |      | Invoice Total | 3,350,000 |

Due date: 09/09/2000

1. Step 1: Unnormalized form

| invoice_no | supplier_code | supplier_name | item_code | item_name     | date     | due_date | qty | price  | amount  | total   |
| ---------- | ------------- | ------------- | --------- | ------------- | -------- | -------- | --- | ------ | ------- | ------- |
| 779        | S02           | Hitachi       | R02       | RICE COOKER   | 02/09/00 | 08/09/00 | 10  | 15000  | 150000  | 150000  |
| 998        | G01           | Gobel N       | A01       | AC SPLIT ½ PK | 05/09/00 | 09/09/00 | 10  | 135000 | 1350000 | 3350000 |
|            |               |               | A02       | AC SPLIT 1 PK |          |          | 10  | 200000 | 2000000 |         |

2. Step 2: 1NF

| invoice_no | supplier_code | supplier_name | item_code | item_name     | date     | due_date | qty | price  | amount  | total   |
| ---------- | ------------- | ------------- | --------- | ------------- | -------- | -------- | --- | ------ | ------- | ------- |
| 779        | S02           | Hitachi       | R02       | RICE COOKER   | 02/09/00 | 08/09/00 | 10  | 15000  | 150000  | 150000  |
| 998        | G01           | Gobel N       | A01       | AC SPLIT ½ PK | 05/09/00 | 09/09/00 | 10  | 135000 | 1350000 | 3350000 |
| 998        | G01           | Gobel N       | A02       | AC SPLIT 1 PK | 05/09/00 | 09/09/00 | 10  | 200000 | 2000000 | 3350000 |

3. Step 3: 2NF

{{< mermaid >}}
classDiagram
direction LR

    class `Supplier` {
        supplier_code*
        supplier_name
    }

    class `Invoice` {
        invoice_no*
        date
        due_date
        total
        supplier_code**
    }

    class `Invoice_Item` {
        invoice_no**
        item_code**
        qty
        price
        amount
    }

    class `Item` {
        item_code*
        item_name
    }

    `Invoice` <--> `Supplier`
    `Invoice_Item` <--> `Invoice`
    `Invoice_Item` <--> `Item`

{{< /mermaid >}}

4. Step 4: 3NF

{{< mermaid >}}
classDiagram
direction LR

    class `Supplier` {
        supplier_code*
        supplier_name
    }

    class `Invoice` {
        invoice_no*
        date
        due_date
        total
        supplier_code**
    }

    class `Invoice_Item` {
        invoice_no**
        item_code**
        qty
        price
        amount
    }

    class `Item` {
        item_code*
        item_name
    }

    note "Note: * primary key. ** foreign key/connector to parent table"

    `Invoice` <--> `Supplier`
    `Invoice_Item` <--> `Invoice`
    `Invoice_Item` <--> `Item`

{{< /mermaid >}}
