/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/
const expensive = (obj) => {
  const keys = Object.keys(obj);
  let exp = 0;
  let expProduct = "";
  for (let key of keys) {
    // console.log(key, obj[key]);
    if (obj[key] > exp) {
      exp = obj[key];
      expProduct = key;
    }
  }
  return expProduct;
};
console.log(expensive({ pen: 20, book: 150, bag: 500 }));
