var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/main');
var ctrlclientes = require('../controllers/clientes');
var ctrlordenes = require('../controllers/ordenes');
var ctrlvendedores = require('../controllers/vendedores');
var ctrladmin = require('../controllers/admin');

/* GET home page. */
router.get('/', ctrl.index);
router.get('/clientes', ctrlclientes.clientes);
router.get('/clientes/lista', ctrlclientes.lista);
router.get('/clientes/nuevo', ctrlclientes.nuevo);
router.get('/clientes/cliente', ctrlclientes.cliente);
module.exports = router;
