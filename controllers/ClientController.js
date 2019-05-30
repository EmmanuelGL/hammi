const db = require('../database/db.connection');
const Cliente = db.cliente;
var bcrypt = require('bcryptjs');

module.exports = {

	getSignUp : function(req, res, next){
		Cliente.findAll()
		.then(user=>{
			return done(null, {
							id: user.id, 
							nombre : user.name,
							email : user.email,
							password : user.password,
							rol: user.roles
						});
		}	
		})
		.catch(err=>{
			return done(null, false, req.flash('authmessage', 'Surgio un error'+err));
		})



		return res.render('users/signup', {duplicate: req.flash('duplicate')});
	},

	
};