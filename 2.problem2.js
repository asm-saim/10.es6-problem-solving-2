/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

function totalCalc(discount, ...restOp) {
  let total = restOp.reduce((accumulator, element) => accumulator + element, 0);
    // console.log(total);
  let discountAmount = (total * discount) / 100;
//   console.log(discountAmount);
  let discountedPrice = total - discountAmount;
  return discountedPrice;
}
console.log(totalCalc(10, 24, 56, 345, 234, 112));
