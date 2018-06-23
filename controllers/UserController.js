var mysql = require('mysql');
//const {Pool}  = require("pg")
var bcrypt = require('bcryptjs');

module.exports = {

	getSignUp : function(req, res, next){
		return res.render('users/signup');
	},

	postSignUp: function(req, res, next){
		
		/*var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(req.body.password, salt);

		const connection = require('.././database/config');
		
		connection.query('INSERT INTO users(email,nombre,password) values($1,$2,$3)',
		[req.body.email,req.body.nombre,password],(err, res) => {
			console.log(err, res)
			
   		});
  		 //connection.end()
		req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
		return res.redirect('/auth/signin');
	},*/
			var config = require('.././database/config');
			var db = mysql.createConnection(config);
			db.connect();
			db.query(`select * from users where email= ?`,req.body.email,function(err,rows,fields){
				if(err || rows.length == 0){                      
					/*if(req.body.password === req.body.repassword){*/
						var salt = bcrypt.genSaltSync(10);
						console.log(salt)
						//var password = bcrypt.hashSync(req.body.password, salt);
				
						var user = {
							email : req.body.email,
							nombre : req.body.nombre,
							password : req.body.password
						};    
						db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
							if(err) throw err;
				
							db.end();
						});
						req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
						return res.redirect('/auth/signin');

					/*}else{
						req.flash('info', 'DidNotMatch');
						return res.redirect('/');
					}*/
				}
				if(rows){
					//console.log("88888888888888888888"+JSON.stringify(rows)+"88888888888888888888888");
					//req.flash('info', 'duplicity');

					req.flash('authmessage', '* Ya estas registrado');
					return res.redirect('/auth/signin');
				}
			});	
		},

	getSignIn: function(req, res, next){
		return res.render('users/signin', {message: req.flash('info'), authmessage : req.flash('authmessage')});
	},

	logout : function(req, res, next){
		req.logout();
		res.redirect('/auth/signin');
	},

	/*getUserPanel : function(req, res, next){
		res.render('estadisticas/actas', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	}*/



};