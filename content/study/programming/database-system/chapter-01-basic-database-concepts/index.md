---
title: "Basic Database Concepts"
summary: "Database systems are critically important in the development of software engineering, and databases serve as the foundation for information systems and fundamentally change how many organizations operate."
description: "Database systems are critically important in the development of software engineering, and databases serve as the foundation for information systems and fundamentally change how many organizations operate."
categories: ["Database Systems"]
tags: ["DBMS", "DDL", "DML"]
series: ["Database System Chapters"]
series_order: 1
date: 2026-07-01T05:02:50+07:00
draft: false
---

## Introduction to Databases

Databases are currently having a major impact on economic and social development. Database systems are critically important in the development of software engineering, and databases serve as the foundation for information systems and fundamentally change how many organizations operate.

Examples of Database Usage in applications: phone number management applications, company payroll applications, etc.

### Database Usage Examples

- Library Borrowing

When we borrow books from a library, it is very likely that a database is accessed. The staff will enter the book code or use a barcode reader, which is connected to a database application to retrieve the book's data. The application will then reduce the stock quantity of the book and display the current stock level to the staff. If the stock of the book falls below the minimum threshold, the database system will automatically inform the staff that borrowing can no longer be processed. Alternatively, if a reader asks about the availability of a book, the staff can check the book's stock and storage location by running an application that determines the book's availability from the database.

{{< mermaid >}}
flowchart LR
%% Database Entity
DB[(Library Database)]

    %% Group containing tables (representing dashed ellipse)
    subgraph IsiDatabase ["Contents of Library Database"]
        direction TB
        B[Book Table]
        M[Member Table]
        R[Return Table]
        BW[Borrowing Table]
    end

    %% Dashed lines from Database to Group
    DB -.- IsiDatabase

    %% Styling to make group (subgraph) have dashed lines like ellipse
    style IsiDatabase fill:none,stroke-width:2px,stroke-dasharray: 8 8

{{< /mermaid >}}

## Basic Database Concepts

**BASIS** can be interpreted as a base or warehouse, a place where things gather.

**DATA** is a representation of real-world facts that represent an object such as people (employees, students, buyers, customers), goods, animals, events, concepts, conditions, and so on, expressed in the form of numbers, letters, symbols, text, images, sounds, or combinations thereof.

**DATABASE** is a collection of groups of data/collection of data that are logically related and their descriptions, which are stored in such a way and designed together to meet the information needs of an organization.

## Principles and Objectives of Databases

- The main principle is the organization of data/records.
- The main objective is ease and speed in data/record retrieval. What is particularly emphasized in databases is the organization, sorting, grouping, and organizing of data that we store according to its function/type. This data organization can be in the form of separate tables or in the form of defining columns (fields) of data in each table.

## Basic Database Operations

The basic operations that we can perform on a database are:

1. Create database
2. Drop database
3. Create table
4. Drop table
5. Insert
6. Query
7. Update
8. Delete

## Database System

**System** is an arrangement consisting of
a number of functional components that
are interrelated and together aim to
fulfill a specific process.

Example:<br>
System = vehicle<br>
Functional components = ignition/starter (to start ignition), ignition components (for fuel combustion that makes the piston work), etc.

- A database is merely a passive object.
- Software/applications/programs are the drivers or managers.
- A system is a combination of the two.

**Database System** is a system consisting of a collection of related data tables and a set of programs (DBMS) that allow multiple users and/or other programs to access and manipulate those data tables.

## Database Management System (DBMS)

## Database Management System (DBMS)

**DBMS is** software that allows users to define, manage, and control access to a database. A DBMS that manages relational databases is called a Relational DBMS **(RDBMS)**

Examples of software that are included as DBMS: dBase, FoxBase, Rbase, Microsoft-Access, Borland Paradox / Borland Interbase, MS-SQL Server, Oracle, Informix, Sybase, MySQL, etc.

{{< mermaid >}}
flowchart LR
%% Container for DBMS containing tables
subgraph DBMS [DBMS]
direction TB
T1[Book Table]
T2[Member Table]
T3[Loan Table]
T4[Return Table]
end

    %% PC/Client Entities
    PC1(Client PC 1)
    PC2(Client PC 2)
    PC3(Client PC 3)

    %% Connection lines between DBMS and PC
    DBMS --- PC1
    DBMS --- PC2
    DBMS --- PC3

    %% Style adjustments for neat appearance
    style DBMS fill:none,stroke-width:2px

{{< /mermaid>}}

{{< mermaid >}}
flowchart LR
%% Style Definition (Light blue color like the image)

    %% Large outer box enclosing the backend system
    subgraph SistemUtama [ ]
        direction LR

        %% Database
        DB[("<b>Database</b><hr/>Member Table, Book Table, <br/>Loan Table, <br/>Return Table + Table<br/>descriptions")]:::kotakPutih

        %% DBMS
        DBMS["DBMS"]:::kotakBiru

        %% Application Group
        subgraph GrupAplikasi [ ]
            direction TB
            A1["Input Data<br/>Report<hr/><i>Loan Application</i>"]:::kotakBiru
            A2["Input Data<br/>Report<hr/><i>Return Application</i>"]:::kotakBiru
        end

        %% Internal system relationships
        DB <--> DBMS
        DBMS <--> A1
        DBMS <--> A2
    end

    %% User Entities (Client)
    User1["🖥️ Member"]:::kotakPutih
    User2["🖥️ Staff"]:::kotakPutih

    %% External relationships (Application to Users)
    A1 <--> User1
    A2 <--> User2

    %% Styling border for subgraph
    style SistemUtama fill:none,stroke-width:1px
    style GrupAplikasi fill:none,stroke-width:1px

{{< /mermaid >}}

The above image explanation shows how a computer accesses a database:

The database stores all data, starting from members, book data to loan transaction data and returns, so that members can see the data of books available in the library, as well as members can see what books have been borrowed and their return dates. Likewise, staff can see the same functions.

## Components of Database System

{{< mermaid >}}
flowchart LR
%% Style Definition (Color shades following blue in the image)

    %% Left Side: Machine (Hardware)
    subgraph Machine [Machine]
        direction LR
        H[Hardware]:::kotakBiasa --- S[Software]:::kotakBiasa
    end

    %% Middle: Data as Bridge
    D(["<b>Data</b><hr/><i>Bridge</i>"]):::kotakTengah

    %% Right Side: Human (People)
    subgraph Human [Human]
        direction LR
        Pr[Procedures]:::kotakBiasa --- Pe[People]:::kotakBiasa
    end

    %% Connection lines between groups
    Machine -.- D
    D -.- Human

    %% Remove group background to focus on components
    style Machine fill:none,stroke-width:1px
    style Human fill:none,stroke-width:1px

{{< /mermaid >}}

Connolly, Thomas M & E Begg, Carolyn, Database System, A Practical Approach to Design, Implementation and Management, 2015, Pearson Education, United Kingdom

### 1. Hardware

DBMS and applications require hardware to run. Hardware can range from a single personal computer to a single mainframe or a network of computers.

The specific hardware depends on the organization's requirements and the DBMS used.

Some DBMS only run on specific hardware or operating systems, while others run on various hardware and operating systems

### 2. Software

The software component of a DBMS itself consists of DBMS software and application programs, along with the operating system, including network software if the DBMS is being used through a network.

Examples of programming languages used: C, C++, C#, Java, Visual Basic, COBOL, Pascal, SQL.

### 3. Data

Data is the most important component of the DBMS environment (certainly from the end user's point of view). In the image above, data can act as a bridge between the machine component and the human component. The database contains operational data and metadata, "data about data". The structure of a database is called a schema.

{{< mermaid >}}
flowchart LR
%% Style Definition (Light blue color like the image)

    %% Large outer box enclosing the backend system
    subgraph SistemUtama [ ]
        direction LR

        %% Database
        DB[("<b>Database</b><hr/>Member Table, Book Table, Loan<br/>Table, Return Table + Table<br/>descriptions")]:::kotakPutih

        %% DBMS
        DBMS["DBMS"]:::kotakBiru

        %% Application Group
        subgraph GrupAplikasi [ ]
            direction TB
            A1["Input Data<br/>Report<hr/><i>Loan Application</i>"]:::kotakBiru
            A2["Input Data<br/>Report<hr/><i>Return Application</i>"]:::kotakBiru
        end

        %% Internal system relationships
        DB <--> DBMS
        DBMS <--> A1
        DBMS <--> A2
    end

    %% User Entities (Client)
    User1["🖥️ Member"]:::kotakPutih
    User2["🖥️ Staff"]:::kotakPutih

    %% External relationships (Application to Users)
    A1 <--> User1
    A2 <--> User2

    %% Styling border for subgraph
    style SistemUtama fill:none,stroke-width:1px
    style GrupAplikasi fill:none,stroke-width:1px

{{< /mermaid >}}

Schema:

1. Book Table (book code, book title, etc.)
2. Member Table (member code, member name, etc.)
3. Loan Table (loan code, loan date, etc.)
4. Return Table (return code, return date, etc.)

### 4. Procedures

Procedures refer to the instructions and rules that govern the design and use of a database.

System users and staff who manage the database need documented procedures on how to use or run the system.

Procedures can consist of instructions on how to:

- Log in to DBMS.
- Use DBMS facilities or a specific application program.
- Start and stop DBMS.
- Create backup copies of the database.
- Handle hardware or software failures.
- Change table structure, reorganize database across multiple disks, improve performance, or archive data to secondary storage.

### 5. People

The last component is the people involved with the system

## Roles in Database Environment

Consists of:

1. Data and Database Administrator
2. Database Designer
3. Application Developers
4. End-User

### 1. Data and Database Administrator

Data Administrator (DA) is responsible for data resources, including databases; development and management of standard maintenance planning, policies and procedures; and conceptual/logical database design.

DA consults with and advises senior management, ensuring that the direction of database development will ultimately support the company's objectives.

Database Administrator (DBA) is responsible for the physical realization of the database, including physical database design and implementation, security and integrity control, operational maintenance, and ensuring that application system performance satisfies users. The DBA role is more technically oriented than the DA role, requiring detailed knowledge of the target DBMS and system environment

### 2. Database Designer

In large database design projects, there are two types of database designers:

1. Physical database designer, concerned with identifying data (i.e., entities and attributes), relationships between data, and constraints on the data that must be stored in the database.
2. Logical database designer must have thorough and complete understanding of the organization's data and any constraints on this data (sometimes called business rules).

### 3. Application Developers

After the database is implemented, application programs for end users must also be implemented. This is the responsibility of application developers.

Typically, application developers work from specifications generated by system analysts.

### 4. End-User

End-users can be classified according to the way they use the system:

1. **Casual Users**: They interact with the database by entering simple command operations or selecting options from a menu.
2. **Sophisticated Users**: They can use high-level query languages such as SQL to perform even complex operations, and can write application programs for their own use.

## Database Languages

The way users interact with a database is governed by a language established by the DBMS manufacturer.

Two forms of Languages are:

1. **DDL** (Data Definition Language)
2. **DML** (Data Manipulation Language)

- Details will be discussed in lecture 10

## Advantages of DBMS

1. Control data redundancy
2. Data consistency
3. More information from the same amount of data
4. Data sharing
5. Improved data integration
6. Improved security
7. Enforcement of service standards

## Disadvantages of DBMS

1. Complexity
2. Size
3. Cost of DBMS
4. Cost of additional hardware
5. Cost of technology conversion
6. Performance
7. Greater impact of failures
