const express=require('express');
const app=express();



app.listen('5000',function(){
    console.log('server listening on port 5000');
});

app.use(express.json());

const userRouter=express.Router();
app.use('/user',userRouter);
//mounting in express
userRouter
.route('/')
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

userRouter
.route('/:id')
.get(getUserById);

let user={};
// client <- server
app.get('/',(req,res)=>{
    res.send('Home Page');
});

//read
app.get('/user',(req,res)=>{
    res.json(user);
});

//post request
// client-> server 

//create
app.post('/user',(req,res)=>{
    user=req.body;
    // console.log(req.body);
    res.send('data has been added succesfully');
});


//update
app.patch('/user',(req,res)=>{
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user);
});

//delete
app.delete('/user',(req,res)=>{
    user={};
    res.json(user);
})

//param route
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    res.json(req.params.id);
});