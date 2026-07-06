---
title: "Algorithm and Logic #08: Divide and Conquer Method"
summary: "The Divide and Conquer method is a problem-solving approach that divides a problem into smaller parts, solves each part, and then combines the results."
description: "The Divide and Conquer method is a problem-solving approach that divides a problem into smaller parts, solves each part, and then combines the results."
categories: ["Algorithm Logic"]
tags: ["learn", "coding", "algorithms", "logic", "divide and conquer"]
series: ["Algorithm and Logic Chapters"]
series_order: 8
date: 2026-04-24T05:02:50+07:00
draft: false
---

## D And C Method

#### Divide

Dividing the element values data from a data series into two parts and repeating the division until one element consists of a maximum of two values (Sonita & Nurtaneo, 2015).

#### Conquer

Sorting each element value data (Sonita & Nurtaneo, 2015).

#### Basic Principles

- Divide n inputs into k distinct input subsets (1 < k ≤ n).
- The k input subsets will result in k subproblems.
- Each subproblem has a solution forming k subsolutions.
- From the k subsolutions, an optimal solution will be obtained. **If the subproblem is still large → D and C**

## The General Form of the D And C Method Process can be seen as follows:

{{< mermaid >}}
flowchart TD
%% Top Node
Top["n input"]

    %% Level 1: Input Division
    In1["n input I"]
    In2["n input II"]
    In3["n input III"]
    InK["n input K"]

    %% Level 2: Subproblem
    Prob1["Subproblem I"]
    Prob2["Subprob. II"]
    Prob3["Subprob. III"]
    ProbK["Subprob. K"]

    %% Level 3: Subsolution
    Sol1["Subsolution I"]
    Sol2["Subsolution II"]
    Sol3["Subsolution III"]
    SolK["Subsolution K"]

    %% Bottom Node: Combined Solution
    Final["Optimal Solution"]

    %% --- Arrow Flow ---

    %% From Top to Branch Inputs
    Top --> In1
    Top --> In2
    Top --> In3
    Top --> InK

    %% From Branch Inputs to Subproblems
    In1 --> Prob1
    In2 --> Prob2
    In3 --> Prob3
    InK --> ProbK

    %% From Subproblems to Subsolutions
    Prob1 --> Sol1
    Prob2 --> Sol2
    Prob3 --> Sol3
    ProbK --> SolK

    %% From Subsolutions combined to Optimal Solution
    Sol1 --> Final
    Sol2 --> Final
    Sol3 --> Final
    SolK --> Final

{{< /mermaid >}}

- D AND C Method
  Uses a Recursive technique that divides a problem into two or more subproblems of the same size. Common problems for this technique are sorting, multiplication.

- D AND C Methods:

1. Merge Sorting
2. Quick Sorting
3. Binary Search
4. D and C Technique

## Merge Sort

- Combines two sorted arrays (Utami, 2017)
- The merge sort method is a method that requires a recursive function for its completion.

#### The Working Principle of Merge Sort is:

- Group a series of numbers into 2 parts, 4 parts, 8 parts, ...... etc. until they are left alone
- Perform sorting according to the previous group
- Perform sorting for the number of divisions

Example 1:

{{< mermaid >}}
flowchart TD
%% Level 1: Initial Array
L1["22 | 10 | 15 | 3 | 8 | 2"]

    %% Level 2: First Division
    L2_1["22 | 10 | 15"]
    L2_2["3 | 8 | 2"]

    %% Level 3: Second Division
    L3_1["22 | 10"]
    L3_2["15"]
    L3_3["3 | 8"]
    L3_4["2"]

    %% Level 4: Third Division (Single Units)
    L4_1["22"]
    L4_2["10"]
    L4_3["3"]
    L4_4["8"]

    %% Level 5: First Merge
    L5_1["10 | 22"]
    L5_2["15"]
    L5_3["3 | 8"]
    L5_4["2"]

    %% Level 6: Second Merge
    L6_1["10 | 15 | 22"]
    L6_2["2 | 3 | 8"]

    %% Level 7: Sorted Final Result
    L7["2 | 3 | 8 | 10 | 15 | 22"]

    %% --- Divide Arrow Flow ---
    L1 --> L2_1
    L1 --> L2_2

    L2_1 --> L3_1
    L2_1 --> L3_2

    L2_2 --> L3_3
    L2_2 --> L3_4

    L3_1 --> L4_1
    L3_1 --> L4_2

    L3_3 --> L4_3
    L3_3 --> L4_4

    %% --- Conquer Arrow Flow (Merge) ---
    L4_1 --> L5_1
    L4_2 --> L5_1

    L3_2 --> L5_2

    L4_3 --> L5_3
    L4_4 --> L5_3

    L3_4 --> L5_4

    L5_1 --> L6_1
    L5_2 --> L6_1

    L5_3 --> L6_2
    L5_4 --> L6_2

    L6_1 --> L7
    L6_2 --> L7

{{< /mermaid >}}

Example 2:

<div style="display: flex; flex-direction: column; gap: 15px; font-family: sans-serif; font-size: 16px;">
  
  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Initial</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">7</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Divide by 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">7</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Divide by 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">7</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #ffc000; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #92d050; color: #000;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Divide by 8</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #ff0000; color: #000;">7</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #ffc000; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #92d050; color: #000;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Sorting 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">7</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #ffc000; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #92d050; color: #000;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Sorting 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #323299; color: #000;">7</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #00b050; color: #000;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center;">
    <div style="width: 85px;">Sorting 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">2</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">3</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">4</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">5</td>
        <td style="border: 1px solid #000; width: 60px; padding: 5px 0; background-color: #fff; color: #000;">7</td>
      </tr>
    </table>
  </div>

</div>

```py
def mergeSort(X):
    print("Splitting array: ", X)

    if len(X) > 1:
        mid = len(X) // 2
        lefthalf = X[:mid]
        righthalf = X[mid:]

        # Recursive to split array into smallest parts
        mergeSort(lefthalf)
        mergeSort(righthalf)

        i = j = k = 0

        # Process of merging back in order
        while i < len(lefthalf) and j < len(righthalf):
            if lefthalf[i] < righthalf[j]:
                X[k] = lefthalf[i]
                i = i + 1
            else:
                X[k] = righthalf[j]
                j = j + 1
            k = k + 1

        # Put remaining elements from lefthalf (if any)
        while i < len(lefthalf):
            X[k] = lefthalf[i]
            i = i + 1
            k = k + 1

        # Put remaining elements from righthalf (if any)
        while j < len(righthalf):
            X[k] = righthalf[j]
            j = j + 1
            k = k + 1

    print("Merging: ", X)

# --- Function call block ---
X = [22, 10, 15, 3, 8, 2]
print("Initial array:", X)
print("-" * 30)

mergeSort(X)

print("-" * 30)
print("Final result:", X)
```

Program Output:

```
Initial array: [22, 10, 15, 3, 8, 2]
------------------------------
Splitting array:  [22, 10, 15, 3, 8, 2]
Splitting array:  [22, 10, 15]
Splitting array:  [22]
Merging:  [22]
Splitting array:  [10, 15]
Splitting array:  [10]
Merging:  [10]
Splitting array:  [15]
Merging:  [15]
Merging:  [10, 15]
Merging:  [10, 15, 22]
Splitting array:  [3, 8, 2]
Splitting array:  [3]
Merging:  [3]
Splitting array:  [8, 2]
Splitting array:  [8]
Merging:  [8]
Splitting array:  [2]
Merging:  [2]
Merging:  [2, 8]
Merging:  [2, 3, 8]
Merging:  [2, 3, 8, 10, 15, 22]
------------------------------
Final result: [2, 3, 8, 10, 15, 22]
```

## Quick Sorting

- Is the fastest method
- Quicksort was introduced by C.A.R. Hoare. Quicksort partition exchange sort, because its concept makes parts, and sorting is done per part.
- In the quick sort algorithm, pivot selection is what determines whether the quicksort algorithm will provide the best or worst performance (Nugraheny, 2018).

For example, there are N elements in descending order, it is possible to sort the N elements N/2 times, namely by first swapping the leftmost element with the rightmost element, then gradually towards the element in the middle. But this can only be done if you know for sure that the order is descending.

Broadly speaking, this method is described as follows. For example: will sort a vector A that has N elements. Choose any from the vector, usually the first element, for example X. Then all these elements are arranged by placing X in position J such that the 1st to the j-1th elements have a value smaller than X and the J+1th to the Nth elements have a value greater than X.

Thus having two subvectors, the first subvector whose element values are smaller than X, the second subvector whose element values are greater than X.

In the next step, the above process is repeated on both subvectors, so it will have four subvectors. The above process is repeated on each subvector so that all elements of the entire vector become sorted.

{{< mermaid >}}
flowchart TD
%% Level 1: Initial Array
L1["23 | 45 | 12 | 24 | 56 | 34 | 27 | 23 | 16"]

    %% Level 2: First Split (Pivot 23)
    L2_1["12 | 23 | 16"]
    L2_2["23"]
    L2_3["45 | 24 | 56 | 34 | 27"]

    L1 -- "Left Subvector" --> L2_1
    L1 --> L2_2
    L1 -- "Right Subvector" --> L2_3

    %% Level 3
    L3_1["12"]
    L3_2["23 | 16"]
    L3_3["23"]
    L3_4["24 | 34 | 27"]
    L3_5["45"]
    L3_6["56"]

    L2_1 --> L3_1
    L2_1 --> L3_2
    L2_2 --> L3_3
    L2_3 --> L3_4
    L2_3 --> L3_5
    L2_3 --> L3_6

    %% Level 4
    L4_1["12"]
    L4_2["16"]
    L4_3["23"]
    L4_4["23"]
    L4_5["24"]
    L4_6["34 | 27"]
    L4_7["45"]
    L4_8["56"]

    L3_1 --> L4_1
    L3_2 --> L4_2
    L3_2 --> L4_3
    L3_3 --> L4_4
    L3_4 --> L4_5
    L3_4 --> L4_6
    L3_5 --> L4_7
    L3_6 --> L4_8

    %% Level 5: Final Result (Sorted Units)
    L5_1["12"]
    L5_2["16"]
    L5_3["23"]
    L5_4["23"]
    L5_5["24"]
    L5_6["27"]
    L5_7["34"]
    L5_8["45"]
    L5_9["56"]

    L4_1 --> L5_1
    L4_2 --> L5_2
    L4_3 --> L5_3
    L4_4 --> L5_4
    L4_5 --> L5_5
    L4_6 --> L5_6
    L4_6 --> L5_7
    L4_7 --> L5_8
    L4_8 --> L5_9

{{< /mermaid >}}

<div style="font-family: sans-serif; color: currentColor;">
  
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <h2 style="text-decoration: underline; margin-bottom: 10px;">Example 2</h2>
    <div style="font-size: 1.2em;">Select vector X &rarr; first element</div>
  </div>
  
  <h3 style="text-decoration: underline; margin-top: 0; margin-bottom: 30px;">Iteration 1</h3>
  
  <table style="margin-left: 10%; font-size: 1.5em; font-weight: bold; text-align: center; border-collapse: separate; border-spacing: 35px 25px; border: none;">
    <tr>
      <td style="border: none;">22</td>
      <td style="border: none;">10</td>
      <td style="border: none;">15</td>
      <td style="border: none;">3</td>
      <td style="border: none;">8</td>
      <td style="border: none;">2</td>
    </tr>
    <tr>
      <td style="border: none;">22</td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
    </tr>
    <tr>
      <td style="border: none;">10</td>
      <td style="border: none;">15</td>
      <td style="border: none;">3</td>
      <td style="border: none;">8</td>
      <td style="border: none;">2</td>
      <td style="border: none;">22</td>
    </tr>
  </table>

</div>

<div style="font-family: sans-serif; color: currentColor;">

  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-top: 30px;">
    <h3 style="text-decoration: underline; margin-bottom: 10px;">Iteration 2</h3>
    <div style="font-size: 1.2em;">Select the next vector X</div>
  </div>
  
  <table style="margin-left: 10%; font-size: 1.5em; font-weight: bold; text-align: center; border-collapse: separate; border-spacing: 35px 25px; border: none;">
    <tr>
      <td style="border: none;">10</td>
      <td style="border: none;">15</td>
      <td style="border: none;">3</td>
      <td style="border: none;">8</td>
      <td style="border: none;">2</td>
      <td style="border: none; color: #cc0000;">22</td>
    </tr>
    <tr>
      <td style="border: none;">10</td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
    </tr>
    <tr>
      <td style="border: none;">3</td>
      <td style="border: none;">8</td>
      <td style="border: none;">2</td>
      <td style="border: none; color: #cc0000;">10</td>
      <td style="border: none;">15</td>
      <td style="border: none; color: #cc0000;">22</td>
    </tr>
  </table>

  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-top: 50px;">
    <h3 style="text-decoration: underline; margin-bottom: 10px;">Iteration 3</h3>
    <div style="font-size: 1.2em;">Select the next vector X</div>
  </div>
  
  <table style="margin-left: 10%; font-size: 1.5em; font-weight: bold; text-align: center; border-collapse: separate; border-spacing: 35px 25px; border: none;">
    <tr>
      <td style="border: none;">3</td>
      <td style="border: none;">8</td>
      <td style="border: none;">2</td>
      <td style="border: none; color: #cc0000;">10</td>
      <td style="border: none;">15</td>
      <td style="border: none; color: #cc0000;">22</td>
    </tr>
    <tr>
      <td style="border: none;">3</td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
      <td style="border: none;"></td>
    </tr>
    <tr>
      <td style="border: none;">2</td>
      <td style="border: none; color: #cc0000;">3</td>
      <td style="border: none;">8</td>
      <td style="border: none; color: #cc0000;">10</td>
      <td style="border: none;">15</td>
      <td style="border: none; color: #cc0000;">22</td>
    </tr>
  </table>

</div>

## Binary Search

**Binary Search (For sorted data)**
Used to find an item of data in a set of data that is arranged in order, namely data that has been sorted from largest to smallest/vice versa. The process is carried out for the first time on the middle part of the elements of the set, if the data being searched for turns out to be < the elements above it, then the search is carried out from the middle to the bottom.

**Binary Search** Algorithm

1. Low = 1, High = N
2. While Low <= High Then do step No. 3, Otherwise do step No. 7
3. Determine the Mid Value with the formula (Low + High) Div 2
4. If X < Mid Value, Then High = Mid – 1, Repeat step 1
5. If X > Mid Value, Then Low = Mid + 1, Repeat step 1
6. If X = Mid Value, Then Mid Value = Value sought
7. If X > High Then Search FAILS

**Example:**

Data A = { 1, 3, 9, 11, 15, 22, 29, 31, 48 }
Sought **3**

**Search Steps:**

Step 1: Low = 1 and High = 9<br>
Step 2: Low <= High (if YES to **L-3**, if NO to **L-7**)<br>
Step 3: Mid = (1+9) div 2 = 5 which is **15**<br>
Step 4: 3 < 15, then High = 5 – 1 = 4 which is **11**<br>
Step 1: Low = 1 and High = 4<br>
Step 2: Low <= High<br>
Step 3: Mid = (1+4) div 2 = 2 which is **3**<br>
Step 4: 3 < 3, to step 5<br>
Step 5: 3 > 3, to step 6<br>
Step 6: 3 = 3 (Search successful)<br>

#### Binary Search Program Coding

```py
def BinSearch(data, key):
    awal = 0
    akhir = len(data) - 1
    ketemu = False

    while (awal <= akhir) and not ketemu:
        tengah = (awal + akhir) // 2

        if key == data[tengah]:
            ketemu = True
            print('data', key, 'found at position', tengah + 1)
        elif key < data[tengah]:
            akhir = tengah - 1
        else:
            awal = tengah + 1

    if not ketemu:
        print('data not found')

# --- Your test data ---
data = [1, 3, 9, 11, 15, 22, 29, 31, 48]
print("Array data:", data)
print("Searching for number: 3")
print("-" * 30)

BinSearch(data, 3)
```

Program Result:

```
data 3 found at position 2
```

## D AND C Technique

- With the Basic Principle of the Divide & Conquer Method, a process problem of Searching for Max & Min elements can be solved with the D and C technique.
- Produces an optimal solution to find Maximum and Minimum values.

- Example:

Determine the MaxMin elements of an array A consisting of 9 numbers:

<table style="border: none; font-size: 1.2em; width: 100%; max-width: 600px; text-align: left; font-family: sans-serif;">
  <tr>
    <td style="border: none; padding: 5px 15px;">A[1] = 22,</td>
    <td style="border: none; padding: 5px 15px;">A[4] = -8,</td>
    <td style="border: none; padding: 5px 15px;">A[7] = 17</td>
  </tr>
  <tr>
    <td style="border: none; padding: 5px 15px;">A[2] = 13,</td>
    <td style="border: none; padding: 5px 15px;">A[5] = 15,</td>
    <td style="border: none; padding: 5px 15px;">A[8] = 31</td>
  </tr>
  <tr>
    <td style="border: none; padding: 5px 15px;">A[3] = -5,</td>
    <td style="border: none; padding: 5px 15px;">A[6] = 60,</td>
    <td style="border: none; padding: 5px 15px;">A[9] = 47</td>
  </tr>
</table>

Resolution **D and C Technique**

A = {22,13, -5, -8, 15, 60, 17, 31, 47}

{{< mermaid >}}
flowchart TD
%% Level 1 (Root)
N1["1,9 | &nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 2
    N2_1["1,5 | &nbsp;&nbsp;&nbsp;&nbsp;"]
    N2_2["6,9 | &nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 3
    N3_1["1,3 | &nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_2["4,5 | &nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_3["6,7 | &nbsp;&nbsp;&nbsp;&nbsp;"]
    N3_4["8,9 | &nbsp;&nbsp;&nbsp;&nbsp;"]

    %% Level 4
    N4_1["1,2 | &nbsp;&nbsp;&nbsp;&nbsp;"]
    N4_2["3,3 | &nbsp;&nbsp;&nbsp;&nbsp;"]

    %% --- Division Arrow Flow ---
    N1 --> N2_1
    N1 --> N2_2

    N2_1 --> N3_1
    N2_1 --> N3_2

    N2_2 --> N3_3
    N2_2 --> N3_4

    N3_1 --> N4_1
    N3_1 --> N4_2

{{< /mermaid >}}

#### D AND C Technique Resolution

Then Process tree call from each element indicated in the tree chart above. By, first reversing the tree position from bottom to top. Then filling it with its elements according to the tree chart.

Pay attention to this tree call chart:

A = { 22, 13, -5, -8, 15, 60, 17, 31, 47 }

<div style="display: flex; justify-content: flex-end; align-items: center; margin-bottom: -20px; font-family: sans-serif;">
  <span style="font-size: 1.2em; margin-right: 15px;">Merge position &rarr;</span>
  <span style="background-color: #add8e6; padding: 5px 15px; border: 1px solid #000; color: #000; font-size: 1.2em;">Max, Min</span>
</div>

{{< mermaid >}}
flowchart TD
%% Level 1 (Leaves/Initial Position at Top)
N12["1,2 | 22,13"]
N33["3,3 | -5,-5"]
N45["4,5 | -8,15"]
N67["6,7 | 60,17"]
N89["8,9 | 31,47"]

    %% Level 2 (Merge Stage 1)
    N13["1,3 | 22,-5"]

    %% Level 3 (Merge Stage 2)
    N15["1,5 | 22,-8"]
    N69["6,9 | 60,17"]

    %% Level 4 (Root/Final Result at Bottom)
    N19["1,9 | 60,-8"]

    %% --- Line Flow (Using --- for straight lines without arrows) ---
    N12 --- N13
    N33 --- N13

    N13 --- N15
    N45 --- N15

    N67 --- N69
    N89 --- N69

    N15 --- N19
    N69 --- N19

{{< /mermaid >}}
