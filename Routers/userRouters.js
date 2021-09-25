const express=require('express');
const userRouter=express.Router();

const userModel=require('../models/userModel');

//routes

userRouter
.route('/')
.get(protectRoute,getUsers)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

userRouter
.route('/:id')
.get(getUserById);

//functions
async function getUsers(req,res){
    try{
        console.log('getUser called');
        let users=await userModel.find();
        if(users){
            return res.json(users); 
        }
        else{
            return res.json({
                message:'users not found'
            });
        }
    }
    catch(err){
        return res.json({
            message:err.message
        });
    }

//post request
// client-> server 
//create
// app.post('/user',createUser);
function createUser(req,res){
    user=req.body;
    // console.log(req.body);
    res.send('data has been added succesfully');
}
//update
// app.patch('/user',updateUser);
function updateUser (req,res){
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user);
};
//delete 
// app.delete('/user',deleteUser);
function deleteUser(req,res){
    user={};
    res.json(user);
    // res.send('ussr has been deleted');
}

function getUserById(req,res){
    console.log(req.params);
    res.json(req.params.id);
}

let flag=false; // Userloggedin
function protectRoute(req,res,next){
    try{
        if(req.cookies){
            if(req.cookies.login=='1234'){
                next();
            }
            else{
                res.json({
                    message:"not authorized"
                });
            }
        }
        else{
            res.json({
                message:"operation not allowed"
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}

module.exports=userRouter;