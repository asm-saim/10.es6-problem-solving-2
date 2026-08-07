// Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters
// Return the final bill after tax is applied. Default tax rate is 5% when not provided.
// Input:
// calculateBill(1000)
// Output:
// 1050
// Input:
// calculateBill(1000, 0.10)
// Output:
// 1100

const calculateBill = (amount, taxRate = 0.05) => {
  let totalTex = amount * taxRate;
  return amount + totalTex;
};
console.log(calculateBill(1000, 0.10));
