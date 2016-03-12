var PouchDB = require('pouchdb');

module.exports.lista = function (req, res) {
	res.render('lista_clientes', { 
		clientes:[
			{id: '1',
			nombre: 'Enemedios',
			dir: 'Violetas Mz 170 Lt 36 b. Ojo de Agua, Tecamac',
			tel: '59384426',
			contactos:[
				{	nombre:'Roberto Diaz Gaitan',
					pos:'Director',
					mail:'roberdg56@gmail.com',
					tel: '59384426'},
				{	nombre:'Javier Diaz Gaitan',
					pos:'Programador',
					mail:'javodg@gmail.com',
					tel: '5538922314'}
			]},
			{id: '2',
			nombre: 'Otra empresa',
			dir: 'Violetas Mz 170 Lt 36 b. Ojo de Agua, Tecamac',
			tel: '59384426',
			contactos:[
				{	nombre:'Roberto Diaz Gaitan',
					pos:'Director',
					mail:'roberdg56@gmail.com',
					tel: '59384426'},
				{	nombre:'Javier Diaz Gaitan',
					pos:'Programador',
					mail:'javodg@gmail.com',
					tel: '5538922314'}
			]
		}
		]
	});
};
module.exports.nuevo = function (req, res) {
	res.render('nuevocliente', { title:'Lista de Clientes' });
};
module.exports.nuevo_c = function (req, res) {
	// Declarar la base de datos
	var db_online = new PouchDB(process.env.DB_URI);
  	console.log('Conectado a ' + process.env.DB_URI);
	// Llenar variable doc
	var doc = {
	    "_id": new Date().toISOString(),
	    "name": "Enemedios"
  	};
  	db_online.put(doc)
	console.log(doc);
	
	res.render('nuevocliente', { 
		title:'Lista de Clientes',
		doc: doc
	});
};
module.exports.clientes = function (req, res) {
	res.render('lista_clientes', { title:'Lista de Clientes' });
};
// solo ejemplo de detalle de cliente
module.exports.detalle = function (req, res,next) {
	res.render('detalle_cliente', { 
		title:'Detalle de Enemedios',
		cliente: {
			nombre: req.params.id,
			dir: 'Violetas Mz 170 Lt 36 b. Ojo de Agua, Tecamac',
			tel: '59384426',
			contactos:[
				{	nombre:'Roberto Diaz Gaitan',
					pos:'Director',
					mail:'roberdg56@gmail.com',
					tel: '59384426'},
				{	nombre:'Javier Diaz Gaitan',
					pos:'Programador',
					mail:'javodg@gmail.com',
					tel: '5538922314'}
			]
		} 
	});
};