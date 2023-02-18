

const notes=require('./data/notes')
const express=require('express')

// create object
const app=express();

// server port

app.get("/", (req,res)=>
{
    res.send("API is working");
});

app.get("/api/notes/",(req,res)=>{

    res.json(notes);
})

app.listen(5000,console.log("server started at 5000"));

