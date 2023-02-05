const db = require('../../services/connectDB');
const loggerUtils = require("../../utilities/logger")

 function getAssetData(req, res, next) {
  try{
    const chainId = req.params.chain_id;
    const address = req.params.address;
    console.log(chainId+ +address);
    loggerUtils.info("Get Asset Data Request Received for ChainID: "+chainId+" Address: "+address)
   
    let QUERY= `SELECT name,image_url,description FROM coding_task WHERE chain_id = ? AND address = ?`

    db.all(QUERY, [chainId,address], (err, rows) => {
    if (err) {
        throw err;
    }
    if(rows.length == 0){
      res.json({ 
        "message":"No such data found in database"
      });
    }
    else{
      rows.forEach((row) => {
          res.json({ 
              'name':row.name,
              'image_url':row.image_url,
              'description':row.description
          });
          //console.log(row.name,row.image_url,row.description);
      });
    }
    });
}
catch(err)
{
  next(err)
}
}

module.exports = { getAssetData }; 
