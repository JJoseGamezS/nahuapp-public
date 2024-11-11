const { config } = require("dotenv"); //Nos permite ejecutar config

config(); //nos da acceso a las variables de entorno de .env

module.exports = {
    host: process.env.HOST || "",                 //host: "localhost"
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    port: process.env.PORT ||        // Puerto de la base de datos MySQL
};
