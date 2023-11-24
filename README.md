# 🍏🍊 Apples and Oranges🍏🍊

The "Apples and Oranges" problem on [HackerRank](https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true)
involves determining the number of apples and oranges that fall within a specific range along a one-dimensional line.

![Example](1474218925-f2a791d52c-Appleandorange2.png)

## Instructions:

🏠 You are given the starting point of the house, 's', and the ending point, 't', on the line.

`const s = 2`

`const t = 6`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |     |     |     |     |

❗ Please note that the count displayed in the example, illustrating the segmentation of slots in the grid, is solely for visual representation. This numerical value is not provided as part of the given problem. ❗

🌳 The apple tree is located at point 'a'.

🍏 The 'apples' array represents the distance each apple falls.

`const a = 7`

`const apples = [-1, 0, 1]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |     |     |     |     |
|     |     |     |     |     |     | 🌳  |     |     |     |
|     |     |     |     |     | 🍏  | 🍏  | 🍏  |     |     |

🌴 The orange tree is at point 'b'.

🍊 The 'oranges' array represents the distance each orange falls.

`const b = 10`

`const oranges = [-4, 0, 6]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |     |     |     |     |
|     |     |     |     |     |     | 🌳  |     |     |     |
|     |     |     |     |     | 🍏  | 🍏  | 🍏  |     |     |
|     |     |     |     |     |     |     |     |     | 🌴  |
|     |     |     |     |     | 🍊  |     |     |     | 🍊  |

📏 When a fruit falls from its tree, it lands at a distance of n units from its origin along the x-axis.

⬅️ A negative value of means the fruit fell n units to the tree's left.

👀 n is random letter used commonly to represent ANY number.

➡️ And a positive value of means it falls n units to the tree's right.

🧮 Your mission is to tally the number of apples and oranges that land within the confines of the house (between 's' and 't').

🪃 This is the expected return: `[appleCount, orangeCount];
`

## Scenarios:

### 1.- All apples and oranges fall within the house boundaries

`const s = 4`

`const t = 8`

`const a = 2`

`const apples = [5, 1, 4]`

`const b = 7`

`const oranges = [-3, 0, -1]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |     |     |
|     |     | 🌳  |     |     |     |     |     |     |     |
|     |     |     | 🍏  |     |     | 🍏  | 🍏  |     |     |
|     |     |     |     |     |     | 🌴  |     |     |     |
|     |     |     | 🍊  |     | 🍊  | 🍊  |     |     |     |

`return [3, 3];`

---

### 2.- Only Apples Hit the House

`const s = 4`

`const t = 5`

`const a = 1`

`const apples = [-8, 3]`

`const b = 7`

`const oranges = [0, -1]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | 🏠  | 🏠  |     |     |     |     |     |
| 🌳  |     |     |     |     |     |     |     |     |     |
|     |     |     | 🍏  |     |     |     |     |     |     |
|     |     |     |     |     |     | 🌴  |     |     |     |
|     |     |     |     |     | 🍊  | 🍊  |     |     |     |

`return [1, 0];`

---

### 3.- Only Oranges Hit the House

`const s = 4`

`const t = 10`

`const a = 10`

`const apples = [3]`

`const b = 2`

`const oranges = [4, 6, -1]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |
|     | 🌴  |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     | 🌳  |
| 🍊  |     |     |     |     | 🍊  |     | 🍊  |     |     |

`return [0, 2];`

---

### 4.- No Fruits Hit the House

`const s = 3`

`const t = 7`

`const a = 4`

`const apples = [-20, 20]`

`const b = 5`

`const oranges = [-5]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |     |     |     |
|     |     |     | 🌳  |     |     |     |     |     |     |
|     |     |     |     | 🌴  |     |     |     |     |     |

`return [0, 0];`
