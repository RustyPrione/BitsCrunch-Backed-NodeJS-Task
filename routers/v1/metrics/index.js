const routers = require("express").Router();
const {getFloorPrice,getMarketcap,getMetricsAsset}=require("../../../controllers")

routers.get("/:chain_id/:address/metrics/floorprice", getFloorPrice);
routers.get("/:chain_id/:address/metrics/marketcap", getMarketcap);
routers.get("/:chain_id/:address/metrics/assets", getMetricsAsset);

module.exports = routers;