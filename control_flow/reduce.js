


const nums = [1 ,2 , 3]

// const total = nums.reduce(function (acc , currVal) {
//     console.log(`acc :${acc} and currValue : ${currVal} `)
//        return acc + currVal
// } , 0)

const total = nums.reduce((acc , currVal) => acc+currVal , 0)
console.log(total);


const cart = [
  { item: "Mobile", price: 15000 },
  { item: "Headphones", price: 2000 },
  { item: "Charger", price: 1000 }
];

const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalAmount); // 👉 18000
