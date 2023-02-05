const sqlite3 = require('sqlite3').verbose();
const appRoot = require('app-root-path');
const db = new sqlite3.Database(`${appRoot}/database/Blockchain`);


module.exports=db;
