---
title: "Algorithm and Logic #09: Sorting Methods"
summary: "The process of arranging a series of data into a certain order or arrangement. The sorted data can be numeric data, character data, or string data (Sitorus, 2015)."
description: "The process of arranging a series of data into a certain order or arrangement. The sorted data can be numeric data, character data, or string data (Sitorus, 2015)."
categories: ["Algorithm Logic"]
tags: ["learn", "coding", "algorithms", "logic", "sorting methods"]
series: ["Algorithm and Logic Chapters"]
series_order: 9
date: 2026-04-25T05:02:50+07:00
draft: false
---

## Sorting Methods

### 1. Definition of Sorting

The process of arranging a series of data into a certain order or sequence. The sorted data can be numeric data, character data, or string data (Sitorus, 2015).

### 2. Types of Sorting Methods:

1. Selection Sort
2. Bubble Sort
3. Insertion Sort

Things that affect the Speed of a Sorting Algorithm: The Number of Comparison Operations & The Number of Data Movement Operations. Sorting techniques by selecting elements or working by selecting the **smallest data** element and then comparing & exchanging it with the initial data element, and so on until all elements produce a sorted data pattern.

### The Working Principle of the Selection Sort Technique is:

1. Checking starts from the 1st data to the n-th data
2. Determine the index of the number with the smallest value from the number data
3. Swap the number at that index with the number at the initial position of the iteration (I = 0 for the first number) of the number data
4. Repeat the above steps for the next number (I = I + 1) up to n-1 times

<div style="font-family: sans-serif; color: currentColor; font-size: 16px;">

  <table style="border: none; text-align: center; font-size: 1.2em; border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr style="font-weight: bold;">
      <td style="text-align: left; padding-bottom: 20px;" colspan="2">Example:</td>
      <td style="padding-bottom: 20px;">22</td>
      <td style="padding-bottom: 20px;">10</td>
      <td style="padding-bottom: 20px;">15</td>
      <td style="padding-bottom: 20px;">3</td>
      <td style="padding-bottom: 20px;">8</td>
      <td style="padding-bottom: 20px;">2</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iteration 1</td>
    </tr>
    <tr style="color: #cc0000;">
      <td colspan="2"></td>
      <td style="padding-bottom: 10px;">1</td>
      <td style="padding-bottom: 10px;">2</td>
      <td style="padding-bottom: 10px;">3</td>
      <td style="padding-bottom: 10px;">4</td>
      <td style="padding-bottom: 10px;">5</td>
      <td style="padding-bottom: 10px;">6</td>
    </tr>
    <tr>
      <td style="text-align: left; width: 120px;">Step 1</td><td style="width: 20px;">:</td>
      <td>22</td><td>10</td><td>15</td><td>3</td><td>8</td><td>2</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 2</td><td>:</td>
      <td>22</td><td>10</td><td>15</td><td>3</td><td>8</td><td style="color: #00b0f0; font-weight: bold;">2</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 3</td><td>:</td>
      <td style="color: #7030a0; font-weight: bold;">2</td><td>10</td><td>15</td><td>3</td><td>8</td><td style="color: #7030a0; font-weight: bold;">22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Step 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Repeat steps 2 and 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iteration 2</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 1</td><td>:</td>
      <td>2</td><td>10</td><td>15</td><td>3</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 2</td><td>:</td>
      <td>2</td><td>10</td><td>15</td><td style="color: #00b0f0; font-weight: bold;">3</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 3</td><td>:</td>
      <td>2</td><td style="color: #999999; font-weight: bold;">3</td><td>15</td><td style="color: #999999; font-weight: bold;">10</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Step 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Repeat steps 2 and 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iteration 3</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 1</td><td>:</td>
      <td>2</td><td>3</td><td>15</td><td>10</td><td>8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 2</td><td>:</td>
      <td>2</td><td>3</td><td>15</td><td>10</td><td style="color: #00b0f0; font-weight: bold;">8</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 3</td><td>:</td>
      <td>2</td><td>3</td><td style="color: #00b0f0; font-weight: bold;">8</td><td>10</td><td style="color: #999999; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Step 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Repeat steps 2 and 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iteration 4</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 1</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 2</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td style="color: #00b0f0; font-weight: bold;">10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 3</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td style="color: #00b0f0; font-weight: bold;">10</td><td style="color: #999999; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Step 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Repeat steps 2 and 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iteration 5</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 1</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 2</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td style="color: #00b0f0; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 3</td><td>:</td>
      <td>2</td><td style="color: #999999; font-weight: bold;">3</td><td style="color: #999999; font-weight: bold;">8</td><td>10</td><td style="color: #00b0f0; font-weight: bold;">15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left; padding-bottom: 15px;">Step 4</td><td style="padding-bottom: 15px;">:</td>
      <td colspan="6" style="text-align: left; padding-bottom: 15px;">Repeat steps 2 and 3</td>
    </tr>
    <tr>
      <td style="text-align: left; text-decoration: underline; font-weight: bold; padding-bottom: 10px;" colspan="8">Iteration 6</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 1</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td>22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 2</td><td>:</td>
      <td>2</td><td>3</td><td>8</td><td>10</td><td>15</td><td style="color: #00b0f0; font-weight: bold;">22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 3</td><td>:</td>
      <td>2</td><td style="color: #999999; font-weight: bold;">3</td><td style="color: #999999; font-weight: bold;">8</td><td>10</td><td>15</td><td style="color: #00b0f0; font-weight: bold;">22</td>
    </tr>
    <tr>
      <td style="text-align: left;">Step 4</td><td>:</td>
      <td colspan="6" style="text-align: left;">Repeat steps 2 and 3</td>
    </tr>

  </table>

  <div style="margin-top: 50px;">
    <h2 style="text-decoration: underline; margin-bottom: 30px;">illustration</h2>
    <table style="border: none; text-align: center; font-size: 1.5em; font-weight: bold; width: 100%; max-width: 500px; border-spacing: 0 25px; border-collapse: separate;">
      <tr>
        <td style="border: none;">22</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">2</td>
      </tr>
      <tr>
        <td style="border: none;">22</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">2</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">22</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">3</td><td style="border: none;">15</td><td style="border: none;">10</td><td style="border: none;">8</td><td style="border: none;">22</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">22</td>
      </tr>
      <tr>
        <td style="border: none;">2</td><td style="border: none;">3</td><td style="border: none;">8</td><td style="border: none;">10</td><td style="border: none;">15</td><td style="border: none;">22</td>
      </tr>
    </table>
  </div>

</div>

### Program Example

```py
def SelectionSort(val):
    # Looping from the back index moving forward
    for i in range(len(val)-1, 0, -1):
        Max = 0

        # Looping to find the largest value in the remaining unsorted array
        for l in range(1, i+1):
            if val[l] > val[Max]:
                Max = l

        # Process of swapping the largest value to the very back position
        temp = val[i]
        val[i] = val[Max]
        val[Max] = temp

# --- Function call block ---
Angka = [22, 10, 15, 3, 8, 2]
print("Array before sorting:", Angka)

SelectionSort(Angka)

print("Array after sorting: ", Angka)
```

Program Result:

```
[2, 3, 8, 10, 15, 22]
```

## Bubble Sorting

- A sorting method by comparing the current element value data with the subsequent element value data.
- Element comparison can start from the beginning or start from the very end. If the current element is greater (for ascending sort) or smaller (for descending sort) than the next element, then their positions are swapped, but if not, their positions remain (Harumy et al., 2016).

### Bubble Sorting (From the Front)

- The Working Principle of Bubble Sort is:

1. Check starting from the 1st data to the n-th data
2. Compare the 1st data with the data next to it (the 2nd)
3. If it is greater, move the number with the number in front of it
4. If it is smaller, no movement occurs
5. Repeat steps 1 to 4 n-1 times with the number of data reduced by 1 every iteration

Initial: `[5, 7, 3, 2, 4]`

#### Iteration 1:

- Compare 5 and 7. (5 < 7) → Position is correct, no swap. `[5, 7, 3, 2, 4]`
- Compare 7 and 3. (7 > 3) → Swap! `[5, 3, 7, 2, 4]`
- Compare 7 and 2. (7 > 2) → Swap! `[5, 3, 2, 7, 4]`
- Compare 7 and 4. (7 > 4) → Swap! `[5, 3, 2, 4, 7]`
- Result: The largest number (7) is already in the rightmost position.

#### Iteration 2:

- Compare 5 and 3. (5 > 3) → Swap! `[3, 5, 2, 4, 7]`
- Compare 5 and 2. (5 > 2) → Swap! `[3, 2, 5, 4, 7]`
- Compare 5 and 4. (5 > 4) → Swap! `[3, 2, 4, 5, 7]`
- Result: The second largest number (5) occupies its correct position. (Number 7 does not need to be checked again).

#### Iteration 3:

- Compare 3 and 2. (3 > 2) → Swap! `[2, 3, 4, 5, 7]`
- Compare 3 and 4. (3 < 4) → Position is correct, no swap. `[2, 3, 4, 5, 7]`
- Result: The entire array is unknowingly sorted correctly.

#### Iteration 4:

- The system still performs one last check from the front (comparing 2 & 3, then 3 & 4) to ensure no more elements are swapped. Since there is no swap, the sorting process is officially stopped.

<div style="display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; font-size: 16px;">
  
  <h2 style="text-align: center; margin-bottom: 10px; font-weight: normal;">BUBBLE SORT RESULT (From the Front)</h2>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Initial</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

</div>

### Bubble Sorting (From the Back)

- **The Working Principle of Bubble Sort is:**

1. Check starting from the n-th data to the 1st data
2. Compare the n-th data with the data next to it ((n-1)-th)
3. If it is smaller, move the number with the number in front of it
4. If it is greater, no movement occurs
5. Repeat steps 1 to 4 n-1 times with the number of data reduced by 1 every iteration

Initial: `[5, 7, 3, 2, 4]`

#### Iteration 1: (Starts from the rightmost index)

- Compare 2 and 4. (2 < 4) → Position is correct, no swap. `[5, 7, 3, 2, 4]`
- Compare 3 and 2. (3 > 2) → Swap! `[5, 7, 2, 3, 4]`
- Compare 7 and 2. (7 > 2) → Swap! `[5, 2, 7, 3, 4]`
- Compare 5 and 2. (5 > 2) → Swap! `[2, 5, 7, 3, 4]`
- Result: The smallest number (2) is already in the leftmost position (front).

#### Iteration 2: (Ignore the first position which is sorted)

- Compare 3 and 4. (3 < 4) → Position is correct, no swap. `[2, 5, 7, 3, 4]`
- Compare 7 and 3. (7 > 3) → Swap! `[2, 5, 3, 7, 4]`
- Compare 5 and 3. (5 > 3) → Swap! `[2, 3, 5, 7, 4]`
- Result: The second smallest number (3) is already in the correct position.

#### Iteration 3: (Ignore the first and second positions)

- Compare 7 and 4. (7 > 4) → Swap! `[2, 3, 5, 4, 7]`
- Compare 5 and 4. (5 > 4) → Swap! `[2, 3, 4, 5, 7]`
- Result: The third smallest number (4) is already in the correct position. Overall the arrangement is sorted.

#### Iteration 4:

- The system does one final round to make sure no more swaps occur (comparing 5 and 7). Because there are no swaps, the process is stopped.

<div style="display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; font-size: 16px;">
  
  <h2 style="text-align: center; margin-bottom: 10px; font-weight: normal;">BUBBLE SORT (From the Back)</h2>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Initial</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

</div>

#### Program Example

```py
def BubbleSort(X):
    # This logic is actually Selection Sort
    for i in range(len(X)-1, 0, -1):
        Max = 0
        for l in range(1, i+1):
            if X[l] > X[Max]:
                Max = l

        # Process of swapping
        temp = X[i]
        X[i] = X[Max]
        X[Max] = temp

# --- Function call block ---
Hasil = [22, 10, 15, 3, 8, 2]
print("Before:", Hasil)

BubbleSort(Hasil)

print("After: ", Hasil)
```

```
[2, 3, 8, 10, 15, 22]
```

## Insertion Sort

- Data sorting that compares data with the first two data elements, then compares the sorted data elements, then the comparison between the data will continue to be repeated until there are no remaining data elements (Rahayuningsih, 2016).
- Similar to how to sort cards, taken per sheet & inserted into the proper place.

**The Working Principle of Insertion Sort is:**

1. Check starting from the 1st data to the n-th data
2. The initial index is the 2nd data
3. Check starting from the 1st data to the (index-1)-th data
4. Compare the data at the index position with the checking data
5. If the data at the index position is smaller, then the data can be inserted according to the position during checking, then shift the remaining data
6. Repeat the above steps for the next index (I=I+1) up to n-1 times

Initial: `[5, 7, 3, 2, 4]`

The first element (number 5) is considered as the already sorted part. We will start checking from the second element.

### Iteration 1:

- Take the second element, which is 7.
- Compare it with the element to its left (5). Because 7 is greater than 5 (7 > 5), its position is already correct.
- Result: `[5, 7, 3, 2, 4]` (Sorted part now: 5, 7)

### Iteration 2:

- Take the third element, which is 3.
- Compare 3 with the elements to its left from right to left:
  - 3 < 7 (Shift 7 to the right)
  - 3 < 5 (Shift 5 to the right)
- Insert 3 at the very front position.
- Result: `[3, 5, 7, 2, 4]` (Sorted part now: 3, 5, 7)

### Iteration 3:

- Take the fourth element, which is 2.
- Compare 2 with the elements to its left (7, 5, 3):
  - 2 < 7 (Shift 7 to the right)
  - 2 < 5 (Shift 5 to the right)
  - 2 < 3 (Shift 3 to the right)
- Insert 2 at the very front position.
- Result: `[2, 3, 5, 7, 4]` (Sorted part now: 2, 3, 5, 7)

### Iteration 4:

- Take the last element, which is 4.
- Compare 4 with the elements to its left:
  - 4 < 7 (Shift 7 to the right)
  - 4 < 5 (Shift 5 to the right)
  - 4 > 3 (Stop shifting because 4 is greater than 3).
- Insert 4 right after number 3.
- Final Result: `[2, 3, 4, 5, 7]` (The entire array is sorted!).

<div style="display: flex; flex-direction: column; gap: 20px; font-family: sans-serif; font-size: 16px;">
  
  <h2 style="text-align: center; margin-bottom: 10px; font-weight: normal;">INSERTION SORT</h2>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Initial</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 1</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 2</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 3</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
      </tr>
    </table>
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 85px; font-size: 1.1em;">Iteration 4</div>
    <table style="border-collapse: collapse; text-align: center; margin: 0;">
      <tr>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">2</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">3</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">4</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">5</td>
        <td style="border: 1px solid #000; width: 80px; padding: 5px 0;">7</td>
      </tr>
    </table>
  </div>

</div>

Program Example:

```py
def InsertionSort(val):
    # Start from the second element (index 1) because the first element is considered already in position
    for index in range(1, len(val)):
        a = val[index] # 'a' is the value we are holding/want to insert
        b = index

        # As long as there are still elements to the left (b>0) AND the element to the left is greater than 'a'
        while b > 0 and val[b-1] > a:
            # Shift the larger element to the right
            val[b] = val[b-1]
            b = b - 1

        # After finding the right position, insert 'a' in that position
        val[b] = a

# --- Function call block ---
Angka = [22, 10, 15, 3, 8, 2]
print("Array before sorting:", Angka)

InsertionSort(Angka)

print("Array after sorting: ", Angka)
```

```
[2, 3, 8, 10, 15, 22]
```

## Conclusion on Sorting Methods

- Bubble sort requires the longest computing time.
- Insertion sort and Selection sort have the same complexity as Bubble sort, but their time is faster.
