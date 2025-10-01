const express = require("express");
const { connectDb } = require("./config/connectDb");
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 7000


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`server is listining on port ${PORT}`);
    connectDb()
})