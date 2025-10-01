const authRouter = require("./auth.routes.js")
const express= require("express");
const indexRouter = express.Router()

indexRouter.use("/auth",authRouter)

module.exports = indexRouter