const express = require('express');
const languageController = require('./../controllers/language.controller').methods;

const router = express.Router(); // Nos permite manejar las rutas de nuestro proyecto.

router.get("/:espanol", languageController.getLanguage);

module.exports = router;