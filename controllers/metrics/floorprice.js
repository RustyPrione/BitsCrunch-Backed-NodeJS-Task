const db = require('../../services/connectDB');
const loggerUtils = require("../../utilities/logger")

async function getFloorPrice(req, res, next) {
  try{
    const chainId = req.params.chain_id;
    const address = req.params.address;

    loggerUtils.info("FloorPirce Request Received for ChainID: "+chainId+" Address: "+address)

    let QUERY= `SELECT floorprice FROM coding_task WHERE chain_id = ? AND address = ?`

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
              'metric_name':"floorprice",
              'value':row.floorprice,
          });
          //console.log(row.floorprice);
      });
    }
    });
}
catch(err)
{
  next(err)
}
}
module.exports = { getFloorPrice }; 
