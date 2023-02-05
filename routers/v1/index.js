const routers = require("express").Router();
//Controller APIs
const assets = require('./assets')
const metrics = require('./metrics')


routers.use(assets)
routers.use(metrics)

module.exports = routers;
