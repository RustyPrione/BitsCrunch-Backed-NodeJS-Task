const routers = require("express").Router();
const {errorHandler}=require("../middlewares/errorHandler")

const {verifyAPIKey}= require("../middlewares/verifyAPIKey")
const v1 = require("./v1")


// Version 1 API
routers.use('/api/v1',verifyAPIKey,v1)

routers.use(errorHandler)

module.exports = routers;
