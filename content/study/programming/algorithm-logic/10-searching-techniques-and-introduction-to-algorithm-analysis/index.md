---
title: "Logic and Algorithms #10: Searching Techniques and Introduction to Algorithm Analysis"
summary: "Techniques for picking and selecting an element from several existing elements."
description: "Techniques for picking and selecting an element from several existing elements."
categories: ["Algorithm Logic"]
tags: ["learn", "coding", "algorithms", "logic", "searching", "analysis"]
series: ["Logic and Algorithms Chapters"]
series_order: 10
date: 2026-04-26T05:02:50+07:00
math: true
draft: false
---

## 1. Definition of Searching Techniques

Techniques for picking and selecting an element from several existing elements.

## 2. Searching Techniques

1. Linear/Sequential Search Technique
2. StraitMAXMIN Technique

## Linear/Sequential Search Technique

### a. Linear/Sequential Search (For unsorted or sorted data)

A search that starts from the 1st record and continues to the next records, namely the 2nd, 3rd,..., until a record is found that matches the sought information (Value X).

The Search Time Speed depends on: **The number of data elements and the position of the sought data**

#### Algorithm:

1. Set I = 1
2. While Value (I) <> X, Then Add I = I + 1
3. Repeat step No. 2 until Value(I) = X or I > N
4. If I = N+1 Then Print "Search Failed", otherwise Print "Search Successful"

**Example 1:**

Data A = `{ 10, 4, 9, 1, 15, 7 }`<br>
Sought 15

**Search steps:**

- Step 1: A[1] = 10
- Step 2: 10 <> 15, then A[2] = 4
- Step 3: repeat step 2
  - Step 2: 4 <> 15, then A[3] = 9
  - Step 2: 9 <> 15, then A[4] = 1
  - Step 2: 1 <> 15, then A[5] = 15
  - Step 2: 15 = 15
- Step 4: "Search Successful"

**Example 2:**
If the condition Value(I) = N + 1 is found, it means the search was not found or failed. Because the number of elements is N, N + 1 means the sought data is not a data element of N.

**Sequential/Linear Search Technique Program Coding**

```py
def seqSearch(data, key):
    i = 0
    pos = i + 1

    # Looping to check data one by one from the initial index
    while i < len(data):
        if data[i] == key:
            break # Stop searching if data is already found
        i += 1
        pos = i + 1

    # Checking if the final position is within the limits of the array's number of elements
    if pos <= len(data):
        print('data', key, 'found at position', pos)
    else:
        print('data not found')

    return pos

# --- Function call block ---
data = [10, 4, 9, 1, 15, 7]
print("Array data:", data)
print("Searching for number 15...")

seqSearch(data, 15)
```

Program Result

```
data 15 found at position 5
```

## MAXMIN Search Technique

### b. STRAITMAXMIN Technique

- Determine/find the max & min elements in a linear array set.
- Time complexity analysis used to complete the search to obtain complexity levels divided into **best case, worst case**, and **average case**.

**Algorithm to find MaxMin elements in Python programming:**

```py
def STRAITMAXMIN(A, n):
    # Initialize max and min values with the first element of the array
    max = A[0]
    min = A[0]

    # Looping starts from the second element (index 1) to the n-th element
    for i in range(1, n):
        # If the current element is greater than 'max', update 'max'
        if A[i] > max:
            max = A[i]
        # If it is not greater, check if it is smaller than 'min'
        elif A[i] < min:
            min = A[i]

    # Print the final result (outside the for block)
    print("Max =", max, ", Min =", min)
```

\*Remarks:

T = True<br>
F = False

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Start]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- T --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- F --> Cetak[/"Print max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- T --> SetMax["max=A[i]"]
    CekMax -- F --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- T --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- F --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Finish])

{{< /mermaid >}}

### Best Case

- In this case, the condition is achieved if the elements in set A are arranged increasingly (ascending).
- With a time comparison of n - 1 unit operations.
- The fastest/best search condition.

**Example:**

There is a set A containing 4 numbers arranged increasingly with A[0]=2, A[1]=4, A[2]=5, A[3]=10.

Determine/find the Max & Min numbers as well as the number of comparison operations performed.

\*Remarks

T = True<br>
F = False<br>
C = Comparison

| 2   | 4   | 5   | 10  |
| --- | --- | --- | --- |
| Max | 4   | 5   | 10  |
| Min | 2   | 2   | 2   |
| C   | 1   | 1   | 1   |

Total Comparisons = 3

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Start]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- T --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- F --> Cetak[/"Print max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- T --> SetMax["max=A[i]"]
    CekMax -- F --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- T --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- F --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Finish])

{{< /mermaid >}}

**Best Case Resolution:**

- For this problem, the STRAITMAXMIN procedure can be used, which produces the number Min=2 & Max=10.
- The data comparison operation to find the MaxMin numbers from the set is (n-1)=3 comparison operations.

### Worst Case

- This case occurs if the largest element value in the set is at the very front or arranged decreasingly (descending).
- With comparison operations of **2(n-1)** unit operations.
- The Longest/Worst Search Condition.

**Example:**

Finding the MaxMin elements & the number of comparison operations performed on set A arranged decreasingly.

A[0]=80, A[1]=21, A[2]=6, A[3]=-10

\*Remarks

T = True<br>
F = False<br>
C = Comparison

| 80  | 21  | 6   | -10 |
| --- | --- | --- | --- |
| Max | 80  | 80  | 80  |
| Min | 21  | 6   | -10 |
| C   | 2   | 2   | 2   |

Total Comparisons = 6

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Start]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- T --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- F --> Cetak[/"Print max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- T --> SetMax["max=A[i]"]
    CekMax -- F --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- T --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- F --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Finish])

{{< /mermaid >}}

**Worst Case Resolution**

- For this problem with the STRAITMAXMIN process, the max element=80 & min element=-10.
- The comparison operation for the MaxMin elements is 2(4-1) = 6 unit operations.

### Average Case

- Used to predict the number of steps/operations if the MaxMin element search is performed on elements in a randomly arranged set (not decreasing/not increasing).
- The predicted number of comparison operations performed is the average travel time of the best case & worst case, namely:

{{< katex >}}

$$
\begin{aligned}
&\frac{1}{2} [(n - 1) + 2(n - 1)] \\[8pt]
&= \frac{1}{2} (n - 1 + 2n - 2) \\[8pt]
&= \frac{1}{2} (3n - 3) = \frac{3}{2}n - \frac{3}{2} \quad \text{Times}
\end{aligned}
$$

- Random Search Condition

**Example:**

In set A containing { 5, -4, 9, 7 }, a search for the max & min elements is performed using the STRAITMAXMIN process. How many maxmin elements are obtained & what is the number of comparison operations performed.

\*Remarks

T = True<br>
F = False<br>
C = Comparison

| 5   | -4  | 9   | 7   |
| --- | --- | --- | --- |
| Max | 5   | 9   | 9   |
| Min | -4  | -4  | -4  |
| C   | 1   | 2   | 1   |

Total Comparisons = 5

{{< mermaid >}}
flowchart TD
%% Node Awal
Start([Start]) --> Init{{"max=A[0]<br>min=A[0]"}}
Init --> SetI["i=1"]

    %% Titik Pengecekan Looping (i < n)
    SetI --> CekLoop{"i < n"}

    %% Alur jika Benar (B) masuk ke pengecekan max/min
    CekLoop -- T --> CekMax{"A[i] > max"}

    %% Alur jika Salah (S) dari pengecekan i < n langsung ke Cetak
    CekLoop -- F --> Cetak[/"Print max & min"/]

    %% Pengecekan Nilai Maximum
    CekMax -- T --> SetMax["max=A[i]"]
    CekMax -- F --> CekMin{"A[i] < min"}

    %% Pengecekan Nilai Minimum
    CekMin -- T --> SetMin["min=A[i]"]

    %% Semua alur proses bermuara ke increment i+=1
    SetMax --> Inc["i+=1"]
    CekMin -- F --> Inc
    SetMin --> Inc

    %% Kembali ke pengecekan awal (Looping)
    Inc --> CekLoop

    %% Node Akhir
    Cetak --> Selesai([Finish])

{{< /mermaid >}}

**Random case resolution**

Example: A = { 5, -4, 9, 7 }<br>
**Comparison Operations: 5 \*The random case resolution cannot use a formula because the comparison result will be between Best Case and Worst Case (Best Case < Average Case < Worst Case)**

While using the formula: **3/2 n - 3/2 = 3/2 \* 4 - 3/2 = 4.5**

> Note: The use of average case is used to compare algorithms where if there is a difference in better values between Best Case and Worst Case such as in merge sort and quick sort. Where the best case is better for quick sort but the worst case is better for merge sort, so to determine the best algorithm, an average case comparison is made (Not discussed because it is a more in-depth algorithm analysis).

## Algorithm Analysis Conclusion

- Every Algorithm can be analyzed for the operational steps performed to determine its complexity.
- To state an algorithm is better, it can be done by comprehensively comparing the complexity of that algorithm.
- If there is a difference in better values between Best Case and Worst Case, then to determine the best algorithm, an Average Case comparison can be made.
