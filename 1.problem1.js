//scope related:
let sum = "all printed";

for (let i = 1; i <= 3; i++) {
  let sum = "Problem Solved" + i;
  console.log(sum);
}

console.log("Final Print: ", sum);

/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/
function receiptGenerator(product, price, qty) {
  return `${product} x${qty} = ${price * qty} Taka`;
}
console.log(receiptGenerator("Pen", 20, 3));
console.log(receiptGenerator("Pencil", 8, 4));
