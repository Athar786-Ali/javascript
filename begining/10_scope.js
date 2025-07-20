


let a = 900
if(true){
    let a  =20
    const b = 10
    var c = 60

}
//console.log(a);    let->scope within the block
console.log(a);
//console.log(b);     const->scope within the block
console.log(c);     //var->scope outside the block

function one(){
    username = "Md Athar Ali"

    function two(){
        channel = "youtube"
        console.log(username);
    }
    // console.log(channel);  not accessbile

    two()
    
}
one()

console.log(addOne(5));
function addOne(num){
    return num+1
}

// console.log(addTwo(10));
//  const addTwo =  function (num){   it will give error
//     return num+2
// }



