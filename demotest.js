const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./Blockchain');

let sql = `SELECT * FROM coding_task`;
let sql1= `SELECT name,image_url,description FROM coding_task WHERE chain_id = ? AND address = ?`

db.all(sql1, [1,"0x268428b34f991c0a54f5a8a26ec8a9021fa91fc8"], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    //console.log(row.chain_id,row.address,row.name,row.marketcap,row.floorprice);
    console.log(row.name,row.image_url,row.description);
  });
});

// close the database connection
db.close();