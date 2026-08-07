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
  return {userName, age};
};
console.log(extractor({ user: { name: "Rafi" } }));
