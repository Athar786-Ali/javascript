// for of loop


const array = ["Athar" , "Sanjay" , "Meekayle"]

for(const arr of array){
    console.log(arr);
    
}

// map
const myMap = new Map();

myMap.set("Name" , "Athar")
myMap.set("Age" , 22)
myMap.set("one" , 1)
myMap.set(true , "yes")

console.log(myMap);
console.log(myMap.get("Name"));
console.log(myMap.get("Age"));


for (const [key , value] of myMap) {

  console.log(`${key} => ${value}`);
}

// iterate in Object -> using for in loop

const myObject = {
    Name : "Sanjay" , 
    Age : 25,
    Location : "Rajiyauddinpur"
    
}

for (const key in myObject) {
    
    console.log(key ," -> ", myObject[key]);
    
    
}


const arr = ["cpp" , "py" , "java" , "js"]

for(const key in arr){
    console.log(`${key} -> ${arr[key]}`);
    
}

// for each loop

const coding  = ["cpp" , "python " , " java" , "Ruby" , "javaScript"]

coding.forEach( function (ele , index , arr) {
    console.log(ele ,index , arr);
    
})

coding.forEach( (item ,index) => {
    console.log(`${item} -> ${index}`);
    
})

function printme(item){
    console.log(item);
    
}

coding.forEach(printme);

const myMainCoding = [
    {
        languageName :"JavaScript",
        LanguageFile :"js"
    },
    {
        languageName :"Java",
        LanguageFile :"java"
    },
    {
        languageName :"c++",
        LanguageFile :"cpp"
    },
    
]

myMainCoding.forEach( (item) => {
    console.log(`${item.languageName} and ${item.LanguageFile}`);
    
})