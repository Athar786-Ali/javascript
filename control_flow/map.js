

const nums  = [1,2,3,4,5,6,7,8,9,10]

// const myNums  = nums.map((num) => num+10)


// const myNums  = nums.map((num) => {return num+10})
// console.log(myNums);

// chaining
const myNums = nums
                  .map((num) => num *10)
                  .map((num) => num+12)
                  .filter((num) => num >20)



console.log(myNums);
                  


   
