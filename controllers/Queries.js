var config = require('.././database/config');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || config;
var	consultaA= [],consultaT=[];
module.exports = {
	getActas : function(req, res, next){
		res.render('consultas/actas',{
			isAuthenticated : req.isAuthenticated(),
			user : req.user,
	    });		
	},
	postActas : function(req,res,next){
		
		if(req.body.modal != undefined){
			var consulta= "",results = [];
			var user = {
				Folio : req.body.folio,
				Lugar : req.body.lugar,
				Desde : req.body.desde,
				Hasta : req.body.hasta,
				Alumno : req.body.alumno,
				Titulo : req.body.titulo,
				Director : req.body.director,
				Codirector: req.body.codirector,
				Sinodal : req.body.sinodal
			};   
			console.log(JSON.stringify(user))
			var consultaAvanzada = req.body.folio === null?"": consulta ="folio = '"+ req.body.folio+"' AND ";
				consultaAvanzada = req.body.lugar === null?"": consulta = consulta +"lugar = '"+ req.body.lugar+"' AND ";
				consultaAvanzada = req.body.desde === null?"": consulta= consulta +"fecha BETWEEN '"+req.body.desde+"' and '"+ req.body.hasta+"'";
				consultaAvanzada = req.body.alumno === null?"": consulta = consulta +" AND alumno = '"+ req.body.alumno+"'";
				consultaAvanzada = req.body.titulo === null?"": consulta = consulta +" AND titulo = '"+req.body.titulo+"'";
				consultaAvanzada = req.body.director === null?"": consulta = consulta+" AND director = '"+req.body.director + "'";
				consultaAvanzada = req.body.codirector === null?"": consulta = consulta+"AND codirector1 =  '"+req.body.sinodal + "' OR codirector2= '"+req.body.sinodal + "' OR codirector3= '"+req.body.sinodal +"' OR codirector4= '"+req.body.sinodal + "'";
				consultaAvanzada = req.body.sinodal === null?"": consulta = consulta+"AND sinodal1 =  '"+req.body.sinodal + "' OR sinodal2= '"+req.body.sinodal + "' OR sinodal3= '"+req.body.sinodal + "' OR sinodal4= '"+req.body.sinodal + "' OR sinodal5= '"+req.body.sinodal + "'";
			pg.connect(connectionString, (err, client, done) => {
				if(err) {
					done();
					console.log(err);
					return res.status(500).json({success: false, data: err});
				}
			
				var select =`SELECT * FROM "Tesis".v_actas where (${consulta})` ;
				var query = client.query(select);
				query.on('row', (row) => {
					// results.push(row);
					console.log(JSON.stringify(row))
					results.push(row)
				});
				query.on('end', () => {
					done();
					console.log("se cerro base de datos")
					return res.json(results);
				});
			})
		}else{
				
				console.log(req.body.order)
				var consulta = ""
				var results = [],consulta=req.body.order;
				var	ordenar = req.body.order === 'codirector'?consulta="codirector1,codirector2,codirector3,codirector4":"";
					ordenar = req.body.order === 'sinodales'?consulta="sinodal1,sinodal2,sinodal3,sinodal4":"";
					
				pg.connect(connectionString, (err, client, done) => {
					if(err) {
						done();
						console.log(err);
						return res.status(500).json({success: false, data: err});
					}
				
					var select ='SELECT * FROM "Tesis".v_actas order by '+consulta;
					var query = client.query(select);
					query.on('row', (row) => {
						// results.push(row);
						console.log(JSON.stringify(row))
						results.push(row)
					});
					query.on('end', () => {
						done();
						console.log("se cerro base de datos")
						return res.json(results);
					});
				});
				
				// console.log(consulta);
					
				// var config = require('.././database/config');
				// var db = mysql.createConnection(config);
				// db.connect();
							
				// db.query(`select * from actas order by `+consulta,function(err,rows,fields){
				// 		if(err) throw err;

				// 		db.end();
				// 		consultaA.shift();
				// 		consultaA.push(rows)
				// 		enviarrowsActas(req,res);

								
				// });	
		}
	},
	getquery : function(req,res,next){
		var results = [];
		        // title=[],encabezados=[];
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
           
            var select ='SELECT * FROM "Tesis".v_actas order by titulo';
            var query = client.query(select);
            query.on('row', (row) => {
				// results.push(row);
				results.push(row)
            });
            query.on('end', () => {
                done();
				console.log("se cerro base de datos")
				return res.json(results);
            });
        });
		
	},
	getTesis : function(req, res, next){
		
		res.render('consultas/tesis',{
			isAuthenticated : req.isAuthenticated(),
			user : req.user,
	    });	
	},
	postTesis : function(req,res,next){
		if(req.body.modal != undefined){
			var consulta= "",results = [];
			var user = {
				departamento : req.body.departamento,
				grado : req.body.grado,
				especialidad : req.body.especialidad,
				desde : req.body.desde,
				hasta : req.body.hasta,
				alumno : req.body.alumno,
			
				
				director : req.body.director,
				codirector : req.body.codirector
			}; 
			//console.log(JSON.stringify(user))
			var consultaAvanzada = req.body.departamento === null?"": consulta ="departamento = '"+ req.body.departamento+"' AND ";
				consultaAvanzada = req.body.grado === null?"": consulta = consulta +"grado = '"+ req.body.grado+"' AND ";
				consultaAvanzada = req.body.especialidad === null?"": consulta = consulta +"especialidad = '"+ req.body.especialidad+"' AND ";
				consultaAvanzada = req.body.desde === null?"":consulta= consulta +"fechapublicacion BETWEEN '"+req.body.desde+"' and '"+ req.body.hasta+"'";
				consultaAvanzada = req.body.alumno === null?"": consulta = consulta +" AND alumno = '"+ req.body.alumno+"'";
				consultaAvanzada = req.body.titulo === null?"": consulta = consulta +" AND titulo = '"+req.body.titulo+"'";
				consultaAvanzada = req.body.director === null?"": consulta = consulta+" AND director= '"+req.body.director + "'";
				consultaAvanzada = req.body.codirector === null?"": consulta = consulta+"AND codirector1=  '"+req.body.codirector + "' OR codirector2= '"+req.body.codirector + "' OR codirector3= '"+req.body.codirector + "' OR codirector4= '"+req.body.codirector+"'" ; 
			
			console.log(consulta)
			pg.connect(connectionString, (err, client, done) => {
				if(err) {
					done();
					console.log(err);
					return res.status(500).json({success: false, data: err});
				}
			
				var select =`SELECT * FROM "Tesis".v_tesis where (${consulta})` ;
				var query = client.query(select);
				query.on('row', (row) => {
					// results.push(row);
					console.log(JSON.stringify(row))
					results.push(row)
				});
				query.on('end', () => {
					done();
					console.log("se cerro base de datos")
					return res.json(results);
				});
			});
		
		}else{
			var results = [],consulta=req.body.order;
			var ordenar = req.body.order === 'codirectores'?consulta="codirector1,codirector2,codirector3,codirector4":"";
			pg.connect(connectionString, (err, client, done) => {
				if(err) {
					done();
					console.log(err);
					return res.status(500).json({success: false, data: err});
				}
			
				var select ='SELECT * FROM "Tesis".v_tesis order by '+consulta;
				var query = client.query(select);
				query.on('row', (row) => {
					// results.push(row);
					// console.log(JSON.stringify(row))
					results.push(row)
				});
				query.on('end', () => {
					done();
					console.log("se cerro base de datos")
					return res.json(results);
				});
			});
		}
	},
	getquery1 : function(req, res, next){
		var results = [];
		        // title=[],encabezados=[];
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
           
            var select ='SELECT * FROM "Tesis".v_tesis order by titulo';
            var query = client.query(select);
            query.on('row', (row) => {
				// results.push(row);
				results.push(row)
            });
            query.on('end', () => {
                done();
				console.log("se cerro base de datos")
				return res.json(results);
            });
        });
		
	}
};























