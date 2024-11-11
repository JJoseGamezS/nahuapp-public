const mysql = require("promise-mysql"); //Nos permite conectarnos a la base de datos
const config = require("./../config");

const connection = mysql.createConnection({ 
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    connectTimeout: 10000 // Ajusta el tiempo de espera (10 segundos)
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
