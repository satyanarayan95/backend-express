const express = require('express');

const app = express();

const port='8080'

app.listen(port,function (){
    console.log("Server is listening to "+ port);
})

app.get('/',(req,res)=>{
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('<h1>Hello</h1>');
    res.end();
})