const db = require('../../services/connectDB');
const loggerUtils = require("../../utilities/logger")

async function getMarketcap(req, res, next) {
  try{
    const chainId = req.params.chain_id;
    const address = req.params.address;
    //const marketcap = req.params.marketcap;

    loggerUtils.info("MarketCap Request Received for ChainID: "+chainId+" Address: "+address)
    // open the database
    let QUERY= `SELECT marketcap FROM coding_task WHERE chain_id = ? AND address = ?`

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
          res.json({ 
              'metric_name':"marketcap",
              'value':row.marketcap,
          });
          //console.log(row.marketcap);
      });
    }
    });
}
catch(err)
{
  next(err)
}
}
module.exports = { getMarketcap }; 
