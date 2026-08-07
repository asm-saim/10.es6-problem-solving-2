/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/

//function for marks:

const marksMaker = (marks) => {
  if (marks >= 90) {
    return "A+";
  } else if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else {
    return "Fail";
  }
};

const arrayOfObj = (array) => {
  const newArrayOfObj = array.map((info) => {
    const { name, marks } = info;
    const final = { name, marks, grade: marksMaker(marks) };
    return final;
  });
  return newArrayOfObj;
};
console.log(
  arrayOfObj([
    { name: "Rafi", marks: 85 },
    { name: "Karim", marks: 45 },
  ]),
);

/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/
const calculateQtyAndPrice = (products) => {
  let items = 0;
  let totalPrice = 0;
  for (let product of products) {
    const { name, price, qty } = product;
    items += qty;
    totalPrice += price * qty;
  }
  return `Total: ${items} items, ${totalPrice} Taka`;
};
const products = [
  { name: "Pen", price: 100, qty: 1 },
  { name: "Notebook", price: 100, qty: 2 },
];
console.log(calculateQtyAndPrice(products));
