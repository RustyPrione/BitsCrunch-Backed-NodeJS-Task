const routers = require("express").Router();
const {getAssetData}=require("../../../controllers")

routers.get("/:chain_id/:address", getAssetData);
module.exports = routers;