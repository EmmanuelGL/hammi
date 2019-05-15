const db = require('../database/db.connection');
const User = db.user;
var bcrypt = require('bcryptjs');

module.exports = {

	getSignUp : function(req, res, next){
		return res.render('users/signup', {duplicate: req.flash('duplicate')});
	},

	postSignUp: function(req, res, next){
		var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(req.body.password, salt);
		console.log(req.body)
		User.create({
			email: req.body.email,
			name: req.body.nombre,
			password: password,
			roles: 1
			// username: req.body.username,
		}).then(user => {
			// res.send({ message: 'Registered successfully!' });
			req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
			return res.redirect('/auth/signin');

		}).catch(err => {
			// res.status(500).send({ error: err.message });
			req.flash('info', 'DidNotMatch');
			return res.redirect('/');
		})

	},

	getSignIn: function(req, res, next){
		return res.render('users/signin', {message: req.flash('info'), authmessage : req.flash('authmessage')});
	},

	logout : function(req, res, next){
		req.logout();
		res.redirect('/auth/signin');
	},

	getUserPanel : function(req, res, next){
		res.render('users/edit', {
			duplicate: req.flash('duplicate'),
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},

	getProducts : function(req, res, next){
		return res.render('products/details',{
			isAuthenticated: req.isAuthenticated(),
			user : req.user
		});
	},

	updateUser : function(req, res) {
		// let productId = req.params.productId
		// let update = req.body
	  
		// Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
		//   if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
	  
		//   res.status(200).send({ product: productUpdated })
		// })
		return res.render('product/details', {
			
			isAuthenticated: req.isAuthenticated(),
			user : req.user
		});
	  }
};