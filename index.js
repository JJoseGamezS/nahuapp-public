// Para correr el servidor usar en terminal: node index.js y ctrl+c para terminar proceso

// Importar librerias
const express = require('express'); //Para manejar peticiones (rutas).
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');

//Importa la rutas
const languageRoutes = require('./api/routes/language.routes');
const morgan = require('morgan');

// Objetos para llamar a los metodos de express
const cors = require('cors') //Para el manejo de politica de cors
const app = express();
const ejs = require('ejs');

// Conexion a la base de datos
const connection = require('./api/config');

// Puerto donde corre el server
const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: '*', // Permitir todos los orígenes
}));

/*const whiteList = ['http://localhost:4000/','http://127.0.0.1:4000/','https://nahuapp.com/','https://nahuapp.com:4000'];
app.use(cors({origin:whiteList}))*/

// Middlewares - Funcion intermedia entre el cliente y el servidor
app.use(morgan("dev")); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use("/api/languages", languageRoutes);
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('inicio', {
    pageTitle: 'Inicio',
  });
});

app.get('/Resumenes', (req, res) => {
  res.render('resumenes', {
    pageTitle: 'Resumenes',
  });
});

app.get('/Vocabulario', (req, res) => {
  res.render('vocabulario', {
    pageTitle: 'Vocabulario',
  });
});

app.get('/Ejercicios', (req, res) => {
  res.render('ejercicios', {
    pageTitle: 'Ejercicios',
  });
});

// Rutas dinámicas para los temas
app.get('/temas/:unidad/:tema', (req, res) => {
  const unidad = req.params.unidad;
  const tema = req.params.tema;
  const filePath = path.join(__dirname, 'views', 'temas', `${unidad}_${tema}.ejs`);

  if (fs.existsSync(filePath)) {
    res.render(`temas/${unidad}_${tema}`, {
      pageTitle: `${unidad}_${tema}`,
    });
  } else {
    res.status(404).render('404', {
      pageTitle: 'Pagina no encontrada',
    });
  }
});

// Error al no encontrar la pagina
app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Pagina no encontrada',
  });
});

// Configuracion del puerto usado por el servidor
app.listen(PORT, () => {
  console.log('Listen on port: ', PORT||3306);
});

module.exports = app;