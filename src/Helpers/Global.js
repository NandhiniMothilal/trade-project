const dotenv = require('dotenv').config()

const GLOBALDATA = {
    port: process.env.PORT,

    dbType: process.env.DB_TYPE,
    connectType: process.env.CONNECT_TYPE,

    mysqlHost: process.env.MYSQL_HOST,
    mysqlPort: process.env.MYSQL_PORT,
    mysqlUser: process.env.MYSQL_USER,
    mysqlPassword: process.env.MYSQL_PASSWORD,
    mysqlDb: process.env.MYSQL_DATABASE,

}

module.exports = GLOBALDATA