import express from "express"; //Para manejar peticiones (rutas).
import morgan from "morgan";

// Routes
import languageRoutes from "./../api/routes/language.routes";

const cors = require('cors') //Para el manejo de politica de cors
const app = express();

// Settings - desde que puerto corre la app
app.set("port", 3000);

app.use(cors()) //Todo el mundo *

/*const whiteList = ['http://localhost:4000/','http://127.0.0.1:4000/','https://nahuapp.com/','https://nahuapp.com:4000'];
app.use(cors({origin:whiteList}))*/

// Middlewares - Funcion intermedia entre el cliente y el servidor
app.use(morgan("dev")); 
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);

export default app;