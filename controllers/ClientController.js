const db = require('../database/db.connection');
const Clientes = db.cliente; 

module.exports = {
	getViewsClient: (req, res)=>{
		return res.render('clientes/datos')
	},
	getCliente: (req,res) =>{
		
		Clientes.findAll()
		.then(user=>{
			return res.json(user);
		})
		.catch(err=>{
			return res.json(err);
		})

	}
};