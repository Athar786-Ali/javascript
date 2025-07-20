
class User {
    constructor(username){
       this.username = username
    }
    logMe(){
        return `Username is ${this.username}`
    }
}
class Teacher extends User{
    
      constructor(username  , email , password){
           super(username)
           this.email = email;
           this.password = password
      }
      addCourse(){
        console.log(`new courses is added by ${this.username}`);
        
      }
}

const chai  = new Teacher("Sanjay " , "snajay@gmail.com" , 122345)
chai.addCourse();



