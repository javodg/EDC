var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/main');
var ctrlclientes = require('../controllers/clientes');
var ctrlordenes = require('../controllers/ordenes');
var ctrlvendedores = require('../controllers/vendedores');
var ctrladmin = require('../controllers/admin');
//var db = require('../models/db');

/* GET home page. */
router.get('/', ctrl.index);
//router.get('/clientes', ctrlclientes.clientes);
router.get('/clientes/lista', ctrlclientes.lista);
router.get('/clientes/nuevo', ctrlclientes.nuevo);
router.get('/clientes/nuevo_c', ctrlclientes.nuevo_c);
// Rutas para cliente (nuevo, modificar, ver, etc)
router.route('/cliente/:id')
	.get(ctrlclientes.detalle)
	.post(ctrlclientes.nuevo);
router.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, 
function (req, res) {
  res.send('Hello from B!');
});
/* Rutas para la base de datos */


module.exports = router;
