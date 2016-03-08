// agregar mongoose
var mongoose = require('mongoose');

// iniciar la db
var dbURIclientes = 'mongodb://localhost/clientes';
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

// Shema
var clientesSchema = new mongoose.Schema({ 
	nombre: {type: String, required: true},
	giro: String,
	dir: String,
	coords: {type: [Number], index: '2dsphere'},
	tel: Number,
	contactos:[
		{	nombre: {type: String, required: true},
			pos: String,
			mail: String,
			tel: Number}
	]
});
