// agregar mongoose
var PouchDB = require('pouchdb');


// Database
//var db_offline = new PouchDB('/db/clientes');
var db_online = new PouchDB(process.env.DB_URI);
console.log('Conectado a ' + process.env.DB_URI);
// modulo de cliente
module.exports.nuevo = function(req, res) {
  var doc = {
    "_id": "desw",
    "name": "Mittens",
    "occupation": "kitten",
    "age": 3,
    "hobbies": [
      "playing with balls of yarn",
      "chasing laser pointers",
      "lookin' hella cute"
    ]
  };
  db_online.put(doc);
  db_online.info().then(function (info) {
    console.log(info);
  })
  db_online.get('algomas').then(function (doc) {
    console.log(doc);
  });
};


// ejemplos de CRUD
// agregar registro
/*var cliente = {
	'_id': 'enemedios',
	'nombre': 'Enemedios',
	'dir': 'Violetas Mz 170 Lt 36 b. Ojo de Agua, Tecamac',
	'tel': 59384426,
	'contactos':[
		{	'nombre':'Roberto Diaz Gaitan',
			'pos':'Director',
			'mail':'roberdg56@gmail.com',
			'tel': 59384426},
		{	'nombre':'Javier Diaz Gaitan',
			'pos':'Programador',
			'mail':'javodg@gmail.com',
			'tel': 5538922314
		}
	]
}
dbclientes.put(cliente);

/*db.get('enemedios').then(function (doc) {
  console.log(doc);
});

// modificar registro
db.get('enemedios').then(function (doc) {
  // update their age
  doc.tel = 111111;
  // put them back
  return db.put(doc);
}).then(function () {
  // fetch mittens again
  return db.get('enemedios');
}).then(function (doc) {
  console.log(doc);
});*/
