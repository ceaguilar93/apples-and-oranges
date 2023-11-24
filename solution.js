// Using loops

// function countApplesAndOranges(s, t, a, apples, b, oranges) {
//   let appleInHouse = 0;
//   let orangesInHouse = 0;

//   for (let i = 0; i < apples.length; i++) {
//     if (a + apples[i] >= s && a + apples[i] <= t) {
//       appleInHouse++;
//     }
//   }

//   for (let j = 0; j < oranges.length; j++) {
//     if (b + oranges[j] >= s && b + oranges[j] <= t) {
//       orangesInHouse++;
//     }
//   }

//   return [appleInHouse, orangesInHouse];
// }

// Using HOFs

// function countApplesAndOranges(s, t, a, apples, b, oranges) {
//   // Initialize counters for apples and oranges
//   let appleCount = 0;
//   let orangeCount = 0;

//   // Check each apple's position
//   apples.forEach((apple) => {
//     const position = a + apple;
//     if (position >= s && position <= t) {
//       appleCount++;
//     }
//   });

//   // Check each orange's position
//   oranges.forEach((orange) => {
//     const position = b + orange;
//     if (position >= s && position <= t) {
//       orangeCount++;
//     }
//   });

//   // Return the counts
//   return [appleCount, orangeCount];
// }

// Test Scenarios

console.log(countApplesAndOranges(3, 8, 2, [5, 1, 4], 7, [-3, 0, -1])); // [3, 3]
console.log(countApplesAndOranges(4, 5, 1, [-8, 3], 7, [0, -1])); // [1, 0]
console.log(countApplesAndOranges(4, 10, 10, [3], 1, [4, 6, -1])); // [0, 2]
console.log(countApplesAndOranges(3, 7, 4, [-20, 20], 5, [-5])); // [0, 0]
