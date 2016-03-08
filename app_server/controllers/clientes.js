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
module.exports.cliente = function (req, res) {
	res.render('lista_clientes', { title:'Lista de Clientes' });
};
/*module.exports.clientes = function (req, res) {
	res.render('lista_clientes', { title:'Lista de Clientes' });
};*/
// solo ejemplo de detalle de cliente
module.exports.cliente = function (req, res) {
	res.render('detalle_cliente', { 
		title:'Detalle de Enemedios',
		cliente: {
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
			]
		} 
	});
};