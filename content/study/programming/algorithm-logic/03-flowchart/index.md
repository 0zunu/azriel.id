---
title: "Algorithm and Logic #03: Flowchart"
summary: "A flowchart is a graphical representation of an algorithm that uses symbols to show the steps in problem-solving."
description: "A flowchart is a graphical representation of an algorithm that uses symbols to show the steps in problem-solving."
categories: ["Algorithm Logic"]
tags: ["learning", "coding", "algorithm", "logic", "flowchart"]
series: ["Algorithm and Logic Chapters"]
series_order: 3
date: 2026-04-19T05:02:50+07:00
draft: false
---

It is a diagram that describes the logical arrangement of a program. The symbols used are as follows:

| Symbol                     |       Symbol Name       |                                               Description                                               |
| :------------------------- | :---------------------: | :-----------------------------------------------------------------------------------------------------: |
| ![image](terminal.png)     |        Terminal         |               as the beginning (contains 'Start') and as the end (contains 'End'/'Stop').               |
| ![image](input-output.png) |      Input/Output       |                                     Reads input or displays output.                                     |
| ![image](proses.png)       |   Process/Processing    |                        Processes data through arithmetic and logical operations.                        |
| ![image](desicion.png)     | Decision/(decision box) | Functions to decide the direction/branch taken according to the fulfilled condition, namely True/False. |
| ![image](subrutin.png)     |  Subroutine/subprogram  |                       To execute the process of a part (subprogram) or procedure.                       |
| ![image](conector.png)     |    On page Connector    |              to connect a disconnected flowchart where the part is still on the same page.              |
| ![image](flowline.png)     |   Flowline/Data flow    |                             The direction part of the executed instruction.                             |
| ![image](off-page.png)     |   Off page Connector    |    Connects a connection from a disconnected flowchart part where the connection is on another page.    |
| ![image](preparation.png)  |       Preparation       |                                   Used for initial value assignment.                                    |

# Computer Program Flowchart

Basically a computer program generally consists of:

1. Reading / entering data into the computer
2. Performing computation/calculation on the data
3. Outputting / printing/ displaying the results.

## Flowchart consists of three structures

1. Sequence Structure / Simple Structure Used for programs whose instructions are sequential

![image](sequence.png)

## Example of Sequence Structure Flowchart Calculating Triangle Area

![image](luas-segitiga.png)

### Using Storage Tables

Table 1. Sequence Storage Media 1

| Command   |  A  |  B  | Output |
| :-------- | :-: | :-: | :----: |
| A <- 10   | 10  |     |        |
| A <- 2\*A | 20  |     |        |
| B <- A    |     | 20  |        |
| Write(B)  |     |     |   20   |

Table 2. Sequence Storage Media 2

| Command      |  X  |  Y  |  Z  | Output |
| :----------- | :-: | :-: | :-: | :----: |
| X <- 100     | 100 |     |     |        |
| Y <- X-25    |     | 75  |     |        |
| Z <- Y/5     |     |     | 15  |        |
| X <- X/(Z+5) |  5  |     |     |        |
| Write(X,Y,Z) |     |     |     |        |

# Summing Two Positive Numbers

Create a flowchart to sum two positive integers and print the result. The algorithm:

- Enter number a
- Enter number b
- Sum numbers a and b
- Print the sum result

![image](dua-bilangan.png)

# Determining Even/Odd Numbers

Branching Structure Used for programs that use condition selection. (example determining even/odd numbers)

![image](genap-ganjil.png)

**The algorithm:**

1. Enter a number
2. Divide the number by 2
3. If the remainder of the division = 0 then the number is an even number
4. If the remainder of the division = 1 then the number is an odd number

**Pseudocode:**

```
read number
If number mod 2 = 0 then
“Even Number”
Else
“Odd Number”
```

![image](hasil-genap-ganjil.png)

# Looping Flowchart

Looping Structure Used for programs whose instructions will be executed repeatedly.

![image](perulangan.png)
