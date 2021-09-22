const  mongoose= require("mongoose");
const db_link =require("../secret")

const validator =require('email-validator');

mongoose.connect(db_link).then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log("error occured while connecting :",err);
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    confirmPassword:{
        type:String,
        required:true,
        min:8,
        validate:function(){
            return this.password === this.confirmPassword;
        }
    },
})


const userModel = mongoose.model('userModel',userSchema);

(async function createUSer(){
    let user = {
        name:'Satya',
        email:'abc@gmail.com',
        password:'123456780',
        confirmPassword:'123456780'
    };
    let userObj = await userModel.create(user);
    console.log(userObj);
})();