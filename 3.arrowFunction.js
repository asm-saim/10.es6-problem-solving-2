/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/
const calculateShipping = (cost, shipping = 60) => {
  //   if (cost >= 1000) {
  //     return "Free Shipping";
  //   } else {
  //     return `Shipping Fee: ${shipping}`;
  //   }
  return cost >= 1000 ? "Free Shipping" : `Shipping Fee: ${shipping}`;
};
console.log(calculateShipping(500, 100));
/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/
const getGrade = (number) => {
  //   if (typeof number !== "number") {
  //     return "Invalid";
  //   }
  //   if (number >= 90) {
  //     return "A+";
  //   } else if (number >= 80) {
  //     return "A";
  //   } else if (number >= 60) {
  //     return "B";
  //   } else {
  //     return "Fail";
  //   }
  return typeof number !== "number"
    ? "Invalid"
    : number >= 90
      ? "A+"
      : number >= 80
        ? "A"
        : number >= 60
          ? "B"
          : "Fail";
};
console.log(getGrade(90));
