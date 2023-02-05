const db = require('../../services/connectDB');
const loggerUtils = require("../../utilities/logger")

function getMetricsAsset(req, res, next) {
  try{
    const chainId = req.params.chain_id;
    const address = req.params.address;
    //const assets = req.params.assets;

    loggerUtils.info("AssetMetric Request Received for ChainID: "+chainId+" Address: "+address)

    let QUERY= `SELECT assets FROM coding_task WHERE chain_id = ? AND address = ?`

    db.all(QUERY, [chainId,address], (err, rows) => {
    if (err) {
        throw err;
    }
    if(rows.length == 0){
      res.json({ 
        "message":"No such data found in database"
      });
    }else{
      rows.forEach((row) => {
          //console.log(row.chain_id,row.address,row.name,row.marketcap,row.floorprice);
          console.log("loop");
          res.json({ 
              'metric_name':"assets",
              'value':row.assets,
          });
          //console.log(row.assets);
      });
    }
    });
}
catch(err)
{
  next(err)
}
}
module.exports = { getMetricsAsset }; 
