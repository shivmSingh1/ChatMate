const express = require("express");
const { connectDb } = require("./config/connectDb");
const app = express()
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes");


require("dotenv").config()
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(cookieParser())
app.use("/",indexRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`server is listining on port ${PORT}`);
    connectDb()
})