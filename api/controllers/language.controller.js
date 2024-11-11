const { getConnection } = require("./../database/db");


const getLanguage = async (req, res) => { //Peticion para una palabra en español
    try {
        const { espanol } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM diccionario WHERE espanol = ?", espanol);
        res.json(result);
    } catch (error) {
        console.error("Error en la consulta:", error.message); // un log para verificar el error
        res.status(500).send("Error en el servidor.");
    }
};

const methods = {
    getLanguage,
};

module.exports = { methods };
