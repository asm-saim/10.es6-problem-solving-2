/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const extractor = (obj) => {
  const {
    user: { name: userName, age = 18 },
  } = obj;
  return { userName, age };
};
console.log(extractor({ user: { name: "Rafi" } }));

/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/

let a = 5;
let b = 10;
[a, b] = [b, a]; //destructuring concept
console.log(a);
console.log(b);

//prob:2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
