---
title: "Algorithm and Logic #11: Greedy Method"
summary: "Greedy is taken from English meaning greedy, avaricious, stingy, miserly."
description: "Greedy is taken from English meaning greedy, avaricious, stingy, miserly."
categories: ["Algorithm Logic"]
tags: ["greedy", "logic", "algorithm", "greedy-algorithm", "greedy-method"]
series: ["Algorithm and Logic Chapters"]
series_order: 11
date: 2026-04-27T05:02:50+07:00
math: true
draft: false
---

- Greedy is taken from English meaning greedy, avaricious, stingy, miserly.
- Greedy principle: "_Take What You Can Get Now!_".
- Greedy algorithm forms a solution step by step.
- Greedy is a search strategy for optimization problems based on the principle: at each stage, choose the best solution. With the hope that all these stages will find the best solution for the problem. Greedy algorithms are simple and not complex (Santosa and Ai, 2017).

To get the optimal solution from a problem that has two criteria:

1. Objective Function/Main
2. Constraint Value

**Greedy Method Working Process:**

To solve a problem with n input data consisting of several constraint functions & 1 objective function solved by selecting several possible solutions (feasible solution/feasible sets), namely if it has met the objective function.

**Example Optimization Problem:**

**(Coin Change Problem):**<br>
Given money worth A. Exchange A with existing coins. How many minimum coins are needed for the exchange?

**Example 1**: available many coins 1, 5, 10, 25

- Money worth A = 32 can be exchanged in many ways:<br>
  32 = 1 + 1 + … + 1 (32 coins)<br>
  32 = 5 + 5 + 5 + 5 + 10 + 1 + 1 (7 coins)<br>
  32 = 10 + 10 + 10 + 1 + 1 (5 coins)<br>
  … etc<br>
- Minimum: 32 = 25 + 5 + 1 + 1 (4 coins)

GREEDY method is used in solving problems:

1. Optimal On Tape Storage Problem
2. Knapsack Problem

## 1. Optimal On Tape Storage Problem

- The problem of how to optimize storage/memory in a computer so that stored data can fit optimally.

- Suppose there are n programs to be stored on tape. The tape has a maximum length of L, each program to be stored has length L1, L2, L3..., Ln. The storage method is sequential.

### Application of Optimal On Tape Storage Problem is:

- Found on Cassette Tape
- Storage media in the 19th century
- Before digitization in the 20th century

### Greedy Criteria in Optimal On Tape Storage Problem:

{{< katex >}}

_Objective Function: Optimal Storage_ = \( \displaystyle D(I) = \sum*{j=1}^{n} \sum*{k=1}^{j} l\_{ik} \)

_Constraint Function: Mean Retrieval Time (MRT)_ = \( \displaystyle \sum\_{j=1}^{n} t_j / n \)

**Example problem:**<br>
Storage on cassette tape has 3 song files with duration 5 minutes, 10 minutes, 3 minutes. Determine the order to save storage media?

Solution:

1. Find 2 greedy criteria<br>
   Objective function: optimization of storage media Constraint function: file access time (Mean Retrieval Time)
2. Find Feasible Solution<br>
   Alternative solutions that can be used to obtain optimal solution<br>
   Number of Feasible Solutions for 3 input files is: N Factorial where N: Number of Files 3!=3x2x1=6

3. Calculate Objective Function & Constraint Function

| Ordering | Length | D (I)                                                                       |    MRT     |
| :------: | :----: | :-------------------------------------------------------------------------- | :--------: |
|  1,2,3   | 5,10,3 | 5 + (5+10) + (5+10+3) = 38                                                  | 38/3=12.66 |
|  1,3,2   | 5,3,10 | 5 + (5+3) + (5+3+10) = 31                                                   | 31/3=10.33 |
|  2,1,3   | 10,5,3 | 10 + (10+5) + (10+5+3) = 43                                                 | 43/3=14.33 |
|  2,3,1   | 10,3,5 | 10 + (10+3) + (10+3+5) = 41                                                 | 41/3=13.66 |
|  3,1,2   | 3,5,10 | 3 + (3+5) + (3+5+10) = <span style="color:red; font-weight:bold;">29</span> | 29/3=9.66  |
|  3,2,1   | 3,10,5 | 3 + (3+10) + (3+10+5) = 34                                                  | 34/3=11.33 |

**(L1,L2,L3) = (5,10,3)**

From the table, the optimal order is obtained as follows:

- first arrangement for the third program
- second arrangement for the first program
- third arrangement for the second program

**The key to the Optimal On Tape Storage Problem is File Arrangement from Small to Large Size (Increasing)**

## 2. KNAPSACK Problem

- Knapsack is a bag or sack
- Sack used to load objects, of course not all objects can be accommodated in the sack.
- The sack can only store some objects with total size (weight) less than or equal to the sack's capacity size.

Illustrative image there is a bag with capacity 15kg, there are 5 items with their respective weights and profits. The problem is which items should be put into the bag (Aristi, 2015)..

**Case:**

- There are n objects (Xi;i=1,2,3,....n)
- Each has weight (weight)/Wi
- Each has different value (profit)/Pi.

### KNAPSACK Problem Issue

How are these objects loaded/put into a knapsack that has maximum capacity=M.

So the following problems arise:

- How to choose objects to be loaded from n existing objects so that the value of loaded objects is in accordance with capacity (≤ M)
- If all objects must be loaded into the knapsack then **what portion** of each existing object can be loaded into the knapsack so that the cumulative value is max & in accordance with the knapsack capacity?

### Knapsack Problem can be solved by:

1. Mathematically
2. Greedy Criteria
3. Greedy Programming Algorithm

#### 1. Mathematical Knapsack Solution

**Objective function = main/objective function**<br>
Function that solves the problem by obtaining the optimal solution.

**The solution meant** = finding the maximum value/profit for the number of objects loaded in the knapsack so that it matches the capacity.

**Objective Function** Maximum: \( \displaystyle \sum\_{i=1}^{n} P_i X_i \)

**Constraint function = subjective function**<br>
Function that aims to provide the maximum limit of each object to be loaded in the knapsack so that its capacity does not exceed the maximum carrying capacity of the knapsack.

**Constraint Function**: \( \displaystyle \sum\_{i=1}^{n} W_i X_i \le M \)

where: 0 \(\le\) Xi \(\le\) 1; Pi >0;Wi>0

> Note: because using Mathematics is very difficult and complicated, it is not discussed in depth.

#### 2. Solution With Greedy Criteria

The concept of the criteria offered by the Greedy method is:

- Choose object (item) with maximum Pi value or largest
- Choose object (item) with minimum Wi weight first.
- Choose object (item) with the largest value & weight comparison namely Pi/Wi.

**Example:**<br>
**Known that capacity M = 20kg**<br>
**With number of items n=3**

- Weight Wi of each item<br>
  (W1, W2, W3) = (18, 15, 10)
- Value Pi of each item<br>
  (P1, P2, P3) = (25, 24, 15)

**Choose item with Maximum Profit Value**

- P1 = 25 -> X1 = 1, assumed as upper value
- P2 = 24 -> X2 = 2/15, calculated with Constraint Function
- P3 = 15 -> X3 = 0, assumed as lower value

**Greedy Criteria Problem Solution**

**Solution:**

- The item with the largest profit value is item 1, so the first chosen is item 1 as much as \( X_1 = 1 \)
- After item 1 is selected, the remaining knapsack capacity is 20 kg - 18 kg = 2 kg.
- Then choose item 2 as much as \( X_2 \) = remaining knapsack capacity / \( W_2 \) = 2/15
- After item 2 is selected, remaining knapsack capacity = 0 Kg, so item 3 is not selected → \( X_3 = 0 \)
- <b>\( (X_1, X_2, X_3) = (1, 2/15, 0) \) is <i>feasible solution</i></b>

**Choose item with Minimum Weight**

- W1 = 18 -> X1 = 0, as lower limit
- W2 = 15 -> X2 = 2/3, calculated with Constraint Function
- W3 = 10 -> X3 = 1, as upper limit

**Solution:**

- The item with the smallest weight is item 3, so the selected one is item 3 as much as \( X_3 = 1 \)
- After item 3 is selected, the remaining knapsack capacity is 20kg - 10kg = 10kg
- Choose item 2 as much as \( X_2 \) = Remaining Knapsack Capacity / \( W_2 \) = 10/15 = 2/3
- After item 2 is selected, remaining knapsack capacity is 0Kg, meaning item 1 is not selected → \( X_1 = 0 \)
- <b>\( (X_1, X_2, X_3) = (0, 2/3, 1) \) is <i>feasible solution</i></b>

**Choose item by calculating the largest comparison of**<br>
**Profit divided by Weight (Pi/Wi) sorted in non-increasing order, namely:**

- P1/W1 = 25/18 =1.38-> because smallest then X1 = 0
- P2/W2 = 24/15 =1.6-> because largest then X2 = 1
- P3/W3 = 15/10 =1.5-> with Constraint function X3 = 1/2

**Solution:**

- The item with the largest \( (P_i/W_i) \) is item 2, so the first chosen is item 2 as much as \( X_2 = 1 \)
- After item 2 is selected, the remaining knapsack capacity is 20kg - 15kg = 5kg
- Then choose item 3 as much as \( X_3 \) = remaining knapsack capacity / \( W_3 \) = 5/10 = 1/2
- After item 3 is selected, remaining knapsack capacity is 0kg, so item 1 is not selected → \( X_1 = 0 \)
- <b>\( (X_1, X_2, X_3) = (0, 1, 1/2) \) is <i>feasible solution</i></b>

Create a table based on the elements of the 3rd criteria of the Greedy method

| Solution  | \( (X_1, X_2, X_3) \) | \( \sum W_i X_i \) | \( \sum P_i X_i \)                      |
| :-------- | :-------------------: | :----------------: | :-------------------------------------- |
| Pi Max    |    ( 1, 2/15, 0 )     |         20         | (25.1) + (24.(2/15)) + (15.0) = 28.2    |
| Wi Min    |     ( 0, 2/3, 1 )     |         20         | (25.0) + (24.(2/3)) + (15.1) = 31       |
| Pi/Wi max |     ( 0, 1, 1/2 )     |         20         | (25.0) + (24.1) + (15.(1/2)) = **31.5** |

Maximum profit value = 31.5 with the same composition

#### 3. Greedy Programming Algorithm Solution

GREEDY KNAPSACK Algorithm

```plaintext
PROCEDURE GREEDY_KNAPSACK (P, W, X, n)
    REAL P(1:n), W(1:n), X(1:n), M, isi
    INTEGER i, n

    X(1:n) = 0
    isi = M

    FOR i = 1 TO n DO
        IF W(i) > isi THEN
            EXIT
        ENDIF

        X(i) = 1
        isi = isi - W(i)
    REPEAT

    IF i ≤ n THEN
        X(i) = isi / W(i)
    ENDIF

END GREEDY_KNAPSACK
```

Explanation:<br>
n = Number of objects<br>
Wi = Weight of each object<br>
Pi = Profit of each object<br>
Xi = Probability of each object<br>
M = Storage media capacity

Effective if data (Pi/Wi) is sorted in non-increasing order first.

**Solution:**<br>
_With Greedy Programming Algorithm._

Known that capacity **M = 20kg**, with number of items n=3<br>
Weight Wi of each item = (W1, W2, W3) = (18, 15, 10)<br>
Value Pi of each item = (P1, P2, P3) = (25, 24, 15)<br>
Sort in non-increasing order of Pi/Wi results, for example:

- P1/W1 -> 25/18 = 1.39 becomes order 3
- P2/W2 -> 24/15 = 1.60 becomes order 1
- P3/W3 -> 15/10 = 1.50 becomes order 2

Thus producing a new data order pattern, namely

W1,W2,W3 -> 15, 10, 18 and<br>
P1,P2,P3 -> 24, 15, 25

Then that data is inputted to Greedy Alg., the process occurs:

**Initial Initialization:**

- \( X(1:n) \leftarrow 0 \) ; `isi` \( \leftarrow 20 \) ; \( i = 1 \)

**Looping Process:**

- **For \( i = 1 \):**
  - Check condition: \( W(1) > \text{isi} \) ? → \( 15 > 20 \) ? → **Condition FALSE**
  - Because false, then \( X(1) = 1 \) → Means that item can be loaded entirely.
  - `isi` = 20 - 15 = 5 → Knapsack capacity decreases, remaining 5 kg.

- **For \( i = 2 \):**
  - Check condition: \( W(2) > \text{isi} \) ? → \( 10 > 5 \) ? → **Condition TRUE**
  - Because true, then \( X(2) = 5 / 10 = 1/2 \) → 10 kg item can only be loaded half (1/2) part, namely 5 kg.

- **For \( i = 3 \):**
  - `ENDIF` → Process ended because knapsack is full (maximum capacity 20 kg). Thus, \( X(3) = 0 \).

**Total Profit:**
The profit value obtained is the sum of \( P_1 X_1 + P_2 X_2 + P_3 X_3 \), namely:
<br>
\( (24 \times 1) + (15 \times 1/2) + (18 \times 0) \)
\( = 24 + 7.5 + 0 = \mathbf{31.5} \)

**Solution:**

x(1:n) <- 0 ; isi <- 20 ; i = 1<br>
FOR i <- 1 TO 3

- **When \( i=1 \)** Is \( W[1] > \text{isi} \)? → \( 15 > 20 \)?
  - <b>\( x[1] \leftarrow 1 \)</b> → item can be loaded entirely
  - <b>\( \text{isi} = 20 - 15 = 5 \)</b> → remaining capacity 5kg

- **When \( i=2 \)** Is \( W[2] > \text{isi} \)? → \( 10 > 5 \)? → exit
  - Is \( i \le n \)? → \( 2 \le 3 \)?
  - <b>\( x[2] = \text{isi}/W[2] = 5/10 = 1/2 \)</b> → 10kg item loaded 1/2 part = 5

- `ENDIF` → ended because knapsack is full (max = 20kg)

<b>Profit value: \( P_1 + P_2 + P_3 \) namely:</b>
<br>
<b>\( 24(1) + 15(1/2) + 18(0) = 24 + 7.5 = 31.5 \)</b>

Program Code

```py
# Greedy algorithm solution program for knapsack
def fractional_knapsack(value, weight, capacity):
    # Store list of item indices (0, 1, 2, etc.)
    index = list(range(len(value)))

    # Calculate value/weight ratio for each item
    ratio = [v/w for v, w in zip(value, weight)]

    # Sort item indices based on ratio from largest to smallest (Descending)
    index.sort(key=lambda i: ratio[i], reverse=True)

    max_value = 0
    fractions = [0] * len(value)

    for i in index:
        if weight[i] <= capacity:
            # If remaining capacity is still enough to accommodate the entire weight of this item
            fractions[i] = 1
            max_value += value[i]
            capacity -= weight[i]
        else:
            # If remaining capacity is not enough, take only a portion (fraction)
            fractions[i] = capacity / weight[i]
            max_value += value[i] * (capacity / weight[i])
            break # Stop the loop because the knapsack is definitely full

    return max_value, fractions

# --- Main Program Execution Block ---
n = int(input('Enter number of items: '))

# Take input value (profit) and convert to integer list
value = input('Enter the values of the {} item(s) in order: '.format(n)).split()
value = [int(v) for v in value]

# Take input weight and convert to integer list
weight = input('Enter the positive weights of the {} item(s) in order: '.format(n)).split()
weight = [int(w) for w in weight]

capacity = int(input('Enter maximum weight: '))

# Call the function and store the return results
max_value, fractions = fractional_knapsack(value, weight, capacity)

# Display final results
print('\nThe maximum value of items that can be carried:', max_value)
print('The fractions in which the items should be taken:', fractions)
```

Output:

```
Enter number of items: 3
Enter the values of the 3 item(s) in order: 25 24 15
Enter the positive weights of the 3 item(s) in order: 18 15 10
Enter maximum weight: 20

The maximum value of items that can be carried: 31.5
The fractions in which the items should be taken: [0, 1, 0.5]
```
