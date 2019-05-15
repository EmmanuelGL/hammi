
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
const db = require('../database/db.connection');
const User = db.user;
const Sequelize = db.Sequelize
module.exports = function(passport){

	passport.serializeUser(function(user, done){
		done(null, user);
	});

	passport.deserializeUser(function(obj, done){
		done(null, obj);
	});

	passport.use(new LocalStrategy({
		passReqToCallback : true
	}, function(req, email, password, done){
		// console.log('prueba mia-----'+req.body)
		User.findAll({
			where: {
				 email : email
				  
				}
		})
		.then(user=>{
			if(user.length > 0){
				var user = user[0];
				// console.log('sillega asta aqui'+JSON.stringify(user));
					// console.log('-----'+bcrypt.compareSync(password, user.password));*/
				if(bcrypt.compareSync(password, user.password)){
					// if(password == user.password){
						console.log(user.id+'---'+user.name+'----'+user.email+'---')
						return done(null, {
							id: user.id, 
							nombre : user.name,
							email : user.email,
							password : user.password,
							rol: user.roles
						});
					// }
				}	
			}
			return done(null, false, req.flash('authmessage', 'Email o Password incorrecto.'));
		})
		.catch(err=>{
			return done(null, false, req.flash('authmessage', 'Surgio un error'+err));
		})

	}
	));

};