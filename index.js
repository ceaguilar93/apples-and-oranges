function countApplesAndOranges(s, t, a, apples, b, oranges) {
  
  let appleCount = []

  for (let i=0; i <apples.length; i++) {
    let realPosition = apples[i] + a;
    if (realPosition >= s && realPosition <= t) {
      appleCount.push(apples[i])
    } 
  }

  let orangeCount = []

  for (let i=0; i <oranges.length; i++) {
    let realPosition = oranges[i] + b;
    if (realPosition >= s && realPosition <= t) {
      orangeCount.push(oranges[i])
    } 
  }
  // console.log (appleCount)
  // console.log (appleCount.length)

  console.log (orangeCount)
  console.log (orangeCount.length)

  return [appleCount.length, orangeCount.length]
}



// Test Scenarios
console.log(countApplesAndOranges(3, 8, 2, [5, 1, 4], 7, [-3, 0, -1])); // [3, 3]
console.log(countApplesAndOranges(4, 5, 1, [-8, 3], 7, [0, -1])); // [1, 0]
console.log(countApplesAndOranges(4, 10, 10, [3], 1, [4, 6, -1])); // [0, 2]
console.log(countApplesAndOranges(3, 7, 4, [-20, 20], 5, [-5])); // [0, 0]


// Stablish the range of the house (start, end) (s,t)=position numbers 
// Set the position number for the apple tree
  // 4 5 6
// [-1,0,1]
// Set the position number for the orange tree
// Return an array with the number of apples and the number of oranges [x,y]