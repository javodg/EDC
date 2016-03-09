// agregar mongoose
var mongoose = require('mongoose');

// iniciar la db
//var dbURIclientes = 'mongodb://localhost/clientes';
//if (process.env.NODE_ENV === 'production') {
var dbURIclientes = 'mongodb://javodg@gmail.com:asereje1@ds023118.mlab.com:23118/enemedios';
//}

//var dbURIclientes = 'mongodb://localhost/clientes';
var clientesdb = mongoose.createConnection(dbURIclientes);

// eventos de consola
clientesdb.on('connected', function () {
	console.log('Mongoose connected to ' + dbURIclientes);
});
clientesdb.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});
clientesdb.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

// eventos de terminacion
var gracefulShutdown = function (msg, callback) {
	clientesdb.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};
// For nodemon restarts
process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});
// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});
// For Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});

// Schema horarios
var horariosSchema = new mongoose.Schema({
	dias: [Number],
	abre: Number,
	cierra: Number,
	cerrado: Boolean
});
// Schema contacto
var contactoSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	pos: String,
	mail: String,
	tel: Number,
	decide: Boolean	
})
// Schema cliente
var clientesSchema = new mongoose.Schema({ 
	nombre: {type: String, required: true},
	cliente: {type: String, required:true},
	categoria: String,
	productos: [String],
	tel: Number,
	web: String,
	dir: {
		calle: String,
		n_exterior: String,
		n_interior: String,
		colonia: String,
		municipio: String,
		ciudad: String,
		estado: String
	},
	horarios : [horariosSchema],
	coords: {type: [Number], index: '2dsphere'},
	contactos:[contactoSchema]
});
// init del modelo de cliente
//mongoose.model('Cliente','clientesSchema')
