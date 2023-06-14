// packages
const mysql = require('mysql2')
// helpers
const globalData = require('../Helpers/Global')

let db;

if (globalData.dbType == "mysql") {
    if (globalData.connectType == "raw") {
        db = mysql.createConnection({
            host: globalData.mysqlHost,
            port: globalData.mysqlPort,
            user: globalData.mysqlUser,
            password: globalData.mysqlPassword,
            database: globalData.mysqlDb
        })
        db.connect((err) => {
            if (err) {
                console.log(`Error in mysql db connection -> ${err}`);
            } else {
                console.log("Mysql connection created successfully")
            }
        })
    }
}

module.exports = db;