# 🍏🍊 Apples and Oranges🍏🍊

https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

The "Apples and Oranges" problem on HackerRank involves determining the number of apples and oranges that fall within a specific range along a one-dimensional line.

## Instructions:

🏠 You are given the starting point of the house, 's', and the ending point, 't', on the line.

`const s = 2`

`const t = 6`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     | 🏠  | 🏠  | 🏠  | 🏠  | 🏠  |     |     |     |     |

❗ Keep in mind that the count you saw on the example segmenting the slots in the garde is only for visual representation, that number is not given in the problem ❗

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

📏 When a fruit falls from its tree, it lands n units of distance from its tree of origin along the x-axis.

⬅️ A negative value of means the fruit fell n units to the tree's left.

👀 n is random letter used commonly to represent ANY number.

➡️ And a positive value of means it falls n units to the tree's right.

🧮 Your task is to count how many apples and oranges land inside the house (between 's' and 't').

🪃 This is the expected return: `[appleCount, orangeCount];
`

## Scenarios:

### 1.- All apples and oranges fall within the house boundaries

`const s = 3`

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

### 2.- Only Apples Hit the House

`const s = 3`

`const t = 8`

`const a = 2`

`const apples = [5, 1, 4]`

`const b = 7`

`const oranges = [-3, 0, -1]`

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | 🏠  | 🏠  |     |     |     |     |     |
| 🌳  |     |     |     |     |     |     |     |     |     |
|     |     |     | 🍏  |     |     |     |     |     |     |
|     |     |     |     |     |     | 🌴  |     |     |     |
|     |     |     |     |     | 🍊  | 🍊  |     |     |     |

`return [3, 3];`

### 3.- Only Oranges Hit the House

### 3.- No Fruits Hit the House
