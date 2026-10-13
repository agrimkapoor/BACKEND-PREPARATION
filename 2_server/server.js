import express from "express";

const app = express(); // this creates an instance of express

const PORT = 3000;

// app.[http method]("route",callback function)
app.get("/",(req,res)=>{
    res.send("Hello World Again");
    // this is the response given by server to client when client sends a get request to the server
});

app.get("/about",(req,res)=>{
    res.json({name:"Agrim",age:21});
    //res.json() Express mein client ko JSON response bhejne ke liye use hota hai
    // ye javascript object ko JSON format mein convert karke bhejta hai
    // {"name": "Agrim","age": 21} ye json dikhega output mei
});

app.post("/",(req,res)=>{
    res.send("This is a post request");
    // ye response tab milega jab client server ko post request bhejega
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`); // ye toh terminal pe print hoga 
});
