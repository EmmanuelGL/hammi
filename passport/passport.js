
var LocalStrategy = require('passport-local').Strategy;
// var mysql = require('mysql');
// var bcrypt = require('bcryptjs');
const pg = require('pg');

var config = require('.././database/config');
const connectionString = process.env.DATABASE_URL || config;

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
		const results = [];
		pg.connect(connectionString, (err, client) => {
		  // Handle connection errors
		  if(err) {
			done();
			console.log(err);
			// return res.status(500).json({success: false, data: err});
		  }
		  // SQL Query > Select Data
		  const query = client.query('SELECT * FROM "Tesis".usuario WHERE email = ($1)', [email]);
		  // Stream results back one row at a time
		  query.on('row', (row) => {
			results.push(row);
			console.log(JSON.stringify(row));
		  });
		  // After all data is returned, close connection and return results
		  query.on('end', () => {
			//done();
			if(results.length > 0){
					var user = results[0];
					if(password == user.contrasena){
						return done(null, {
							id: user.idusuario, 
							nombre : user.nombre,
							email : user.email
						});
					}
			}
			return done(null, false, req.flash('authmessage', 'Email o Password incorrecto.'));
			
			//return res.json(results);
		  });
		});

		// var config = require('.././database/config');
		// var db = mysql.createConnection(config);
		// db.connect();

		// db.query('SELECT * FROM users WHERE email = ?', email, function(err, rows, fields){
		// 	if(err) throw err;

		// 	db.end();
			
		// 	if(rows.length > 0){

		// 		var user = rows[0];
		// 		/*console.log(password);
		// 		console.log('-----'+bcrypt.compareSync(password, user.password));
		// 		if(bcrypt.compareSync(password, user.password)){*/
		// 		if(password == user.password){
		// 			return done(null, {
		// 				id: user.id, 
		// 				nombre : user.nombre,
		// 				email : user.email
		// 			});
		// 		}
		// 	}

		// 	return done(null, false, req.flash('authmessage', 'Email o Password incorrecto.'));

		// });

	}
	));

};