module.exports.lista = function (req, res) {
	res.render('lista_clientes', { title:'Lista de Clientes' });
};
module.exports.nuevo = function (req, res) {
	res.render('nuevocliente', { title:'Lista de Clientes' });
};
module.exports.cliente = function (req, res) {
	res.render('lista_clientes', { title:'Lista de Clientes' });
};
module.exports.clientes = function (req, res) {
	res.render('lista_clientes', { title:'Lista de Clientes' });
};
// solo ejemplo de detalle de cliente
module.exports.cliente2 = function (req, res) {
	res.render('detalle_cliente', { title:'Detalle de cliente' });
};