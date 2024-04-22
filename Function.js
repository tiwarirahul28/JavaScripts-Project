// function sum(x, y) {
//   console.log(x, y);
//   s = x + y;
//   return s;
// }
// let value = sum(12, 9);
// console.log(value);

// Sum Function
// function sum(a, b) {
//   return a + b;
// }

// function mul(a, b) {
//   return a * b;
// }

// arrow function
// const arrowSum = (a, b) => {
//   console.log(a, b);
// };

// console.log(arrowSum);

// const arrowmul = (a, b) => {
//   console.log(a * b);
//   return a * b;
// };

// console.log(arrowmul);


// normal function
function countVowel(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}


// arrow Function
const count = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
