// agregar mongoose


// Database
var db_offline = new PouchDB('clientes');
var db_online = new PouchDB(process.env.DB_URI);
console.log('Conectado a ' + process.env.DB_URI);
// modulo de cliente
var clientenuevo = function(req, res) {
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
  db_offline.put(doc);
  db_offline.info().then(function (info) {
    console.log(info);
  })
  db_offline.get('algomas').then(function (doc) {
    console.log(doc);
  });
  if(db_online) {
    console.log('se manda info a db_online');
    db_offline.replicate.to(db_online);
  }
};