const promiseOne = new Promise(function(resolve , reject){

    setTimeout(function(){
       console.log('Async task  is completed ');
       resolve();
       
    } , 2000)
})

promiseOne.then(function(){
    console.log("promised consumed");
    
})

// method -2
new Promise(function(resolve  , reject){
     setTimeout(function(){
        console.log("Asyn task 2 is completed");
        resolve()
     } , 1000)
}).then(function(){
    console.log("Asyn 2 reslove");
    
})

const promiseThree = new Promise(function(reslove , reject){
    setTimeout(function(){
    reslove({userName : "Md Athar Ali" , email: "mdatharsbr@gmail.com"})
    } , 4000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
    let error = false // true
    if(!error){
      resolve({username : 'snajay kumari ' , password : '233456'});
    }
    else{
        reject('ERROR :404')
    }

    } , 5000)
})

promiseFour.then(function(user){
   console.log(user)
   return user.username
   
}).then(function(username){
   console.log(username);
   
}).catch(function(error){
  console.log(error);
   
}).finally(function(){
    console.log('our promise is either resolve or reject');
    
})


const promiseFive = new Promise(function(resolve , reject){

    setTimeout(function(){
    let error = true // true
    if(!error){
       resolve({username: 'Sanjay Kumar 2 ' , password: '23456'})
    }
    else{
        reject('ERROR : js error 404')
    }

    } , 7000)

})

async function consumePromisefive(){
    try{
        const response = await promiseFive
        console.log(response);
        
    }
    catch(error){
        console.log(error);
        
    }
}

consumePromisefive()
    




