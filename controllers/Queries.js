// var mysql = require('mysql'),
var config = require('.././database/config');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || config;
var	consultaA= [],consultaT=[];
// function enviarrowsActas(req,res){
// 	console.log(JSON.stringify(consultaA[0]))
// 	res.render('consultas/actas', {
// 		items :consultaA,
// 		//$scope.items = consultaA[0],
// 		isAuthenticated: req.isAuthenticated(),
// 		user : req.user
// 	   });
// }
// function enviarrowsTesis(req,res){
// 	res.render('consultas/tesis', {
// 		//items1 : consultaT1[0],
// 		items : consultaT[0],
// 		isAuthenticated: req.isAuthenticated(),
// 		user : req.user
// 	   });
// }
module.exports = {
	getActas : function(req, res, next){
		res.render('consultas/actas',{
			isAuthenticated : req.isAuthenticated(),
			user : req.user,
	    });		
	},
	postActas : function(req,res,next){
		console.log("-----------------------------69------"+
		req.body.Busqueda+"----------------------------69");
		//select * from v_tesis order by `fechapublicacion`
		if(req.body.modal != undefined){
			var user = {
				Folio : req.body.folio,
				Lugar : req.body.lugar,
				Desde : req.body.desde,
				Hasta : req.body.hasta,
				Alumno : req.body.alumno,
				Titulo : req.body.titulo,
				Director : req.body.director,
				Sinodal : req.body.sinodal
			};   
			
			var consulta = '',busqueda1='';
			//var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
			//console.log(Math.PI+'------------------------')
			//console.log(elvisLives)
			//console.log(user);
			var consultaAvanzada = req.body.folio === ''?"": consulta ="`FOLIO` = \""+ req.body.folio+"\" AND ";
				consultaAvanzada = req.body.lugar === ''?"": consulta = consulta +"`LUGAR` = \""+ req.body.lugar+"\" AND ";
				consultaAvanzada = req.body.desde === ''?"": consulta= consulta +"`FECHA DE TOMA DE GRADO` BETWEEN '"+req.body.desde+"' and '"+ req.body.hasta+"'";
				consultaAvanzada = req.body.alumno === ''?"": consulta = consulta +" AND `ALUMNO` = \""+ req.body.alumno+"\"";
				consultaAvanzada = req.body.titulo === ''?"": consulta = consulta +" AND `titulo` = \""+req.body.titulo+"\"";
				consultaAvanzada = req.body.director === ''?"": consulta = consulta+" AND `DIRECTOR`= \""+req.body.director + "\" OR `DIRECTOR1`= \""+req.body.director + "\" OR `DIRECTOR2`= \""+req.body.director + "\" OR `DIRECTOR3`= \""+req.body.director + "\" OR `DIRECTOR4`= \""+req.body.director + "\" ";
				consultaAvanzada = req.body.sinodal === ''?"": consulta = consulta+"AND `SINODAL`=  \""+req.body.sinodal + "\" OR `SINODAL1`= \""+req.body.sinodal + "\" OR `SINODAL2`= \""+req.body.sinodal + "\" OR `SINODAL3`= \""+req.body.sinodal + "\" OR `SINODAL4`= \""+req.body.sinodal + "\"";
			
			var busqueda = req.body.folio === ''?"": busqueda1 ="\"Folio : "+ req.body.folio+"\"  ";
				busqueda = req.body.lugar === ''?"": busqueda1 = busqueda1 +"\"Lugar : "+ req.body.lugar+"\"  ";
				busqueda = req.body.desde === ''?"":  busqueda1 = busqueda1 +"\"Desde: "+req.body.desde+", Hata: "+ req.body.hasta+"\"";
				busqueda = req.body.alumno === ''?"":  busqueda1 = busqueda1 +" \"Alumno : "+ req.body.alumno+"\"";
				busqueda = req.body.titulo === ''?"":  busqueda1 = busqueda1 +" \"Titulo : "+req.body.titulo+"\"";
				busqueda = req.body.director === ''?"":  busqueda1 = busqueda1 +" \"DIRECTOR : "+req.body.director + "\" ";
				busqueda = req.body.sinodal === ''?"":  busqueda1 = busqueda1+"\"SINODAL : "+req.body.sinodal +"\"";
			
			//console.log(consulta+'----------------------1')
			
			//console.log("Busqueda avansada: "+busqueda1+'------------------2')
			//console.log(user);
			/*consultaA.shift();
			consultaA.push(user)*/
			var config = require('.././database/config');
					var db = mysql.createConnection(config);
					db.connect();
								
					db.query(`select * from actas where (`+consulta+')',function(err,rows,fields){
							//console.log(JSON.stringify(rows))
							if(err) throw err;
	
							db.end();
							consultaA.shift();
							consultaA.push(rows)
							enviarrowsActas(req,res);
	
									
					});	
		}else{
				console.log("casi queda")
				console.log(req.body.order)
				// option='Elige una opción'
				// option='Alumno'  
				// option='Título'
				// option='Folio'
				// option='Lugar'
				// option='Fecha de toma de grado'
				// option='Directores'
				// // option='Sinodales'
				// var consulta = ""
				// var ordenar = req.body.Busqueda === 'Alumno'?consulta="`ALUMNO`":"";
				// 	ordenar = req.body.Busqueda === 'Título'?consulta="titulo":"";
				// 	ordenar = req.body.Busqueda === 'Folio'?consulta="FOLIO":"";
				// 	ordenar = req.body.Busqueda === 'Lugar'?consulta="LUGAR":"";
				// 	ordenar = req.body.Busqueda === 'Fecha de toma de grado'?consulta="`FECHA DE TOMA DE GRADO`":"";
				// 	ordenar = req.body.Busqueda === 'Directores'?consulta="`DIRECTOR`,`DIRECTOR1`,`DIRECTOR2`,`DIRECTOR3`,`DIRECTOR4`":"";
				// 	ordenar = req.body.Busqueda === 'Sinodales'?consulta="`SINODAL`,`SINODAL1`,`SINODAL2`,`SINODAL3`,`SINODAL4`":"";
					
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
		console.log("-----------------------------69------"+
		req.body.modal+"---------no mames x k entras-------------------69");

		if(req.body.modal != undefined){
		// 	var consulta= "";
		// var user = {
		// 	departamento : req.body.departamento,
		// 	grado : req.body.grado,
		// 	especialidad : req.body.especialidad,
		// 	desde : req.body.desde,
		// 	hasta : req.body.hasta,
		// 	alumno : req.body.alumno,
		// 	titulo : req.body.titulo,
		// 	director : req.body.director,
		// 	Sinodal : req.body.sinodal
		// }; 
		// var consultaAvanzada = req.body.departamento === ''?"": consulta ="`DEPARTAMENTO` = \""+ req.body.departamento+"\" AND ";
		// 	consultaAvanzada = req.body.grado === ''?"": consulta = consulta +"`GRADO` = \""+ req.body.grado+"\" AND ";
		// 	consultaAvanzada = req.body.especialidad === ''?"": consulta = consulta +"`especialidad` = \""+ req.body.especialidad+"\" AND ";
		// 	consultaAvanzada = req.body.desde === ''?"":consulta= consulta +"`fechapublicacion` BETWEEN '"+req.body.desde+"' and '"+ req.body.hasta+"'";
		// 	consultaAvanzada = req.body.alumno === ''?"": consulta = consulta +" AND `ALUMNO` = \""+ req.body.alumno+"\"";
		// 	consultaAvanzada = req.body.titulo === ''?"": consulta = consulta +" AND `TITULO` = \""+req.body.titulo+"\"";
		// 	consultaAvanzada = req.body.director === ''?"": consulta = consulta+" AND `DIRECTOR`= \""+req.body.director + "\" OR `DIRECTOR1`= \""+req.body.director + "\" OR `DIRECTOR2`= \""+req.body.director + "\" OR `DIRECTOR3`= \""+req.body.director + "\" OR `DIRECTOR4`= \""+req.body.director + "\" ";
		// 	consultaAvanzada = req.body.sinodal === ''?"": consulta = consulta+"AND `SINODAL`=  \""+req.body.sinodal + "\" OR `SINODAL1`= \""+req.body.sinodal + "\" OR `SINODAL2`= \""+req.body.sinodal + "\" OR `SINODAL3`= \""+req.body.sinodal + "\" OR `SINODAL4`= \""+req.body.sinodal + "\""; 
		// console.log(user);
		// console.log(consulta)
		// var config = require('.././database/config');
		// 		var db = mysql.createConnection(config);
		// 		db.connect();
							
		// 		db.query(`select * from v_tesis where (`+consulta+')',function(err,rows,fields){
		// 				console.log(JSON.stringify(rows))
		// 				if(err) throw err;

		// 				db.end();
		// 				consultaT.shift();
		// 				consultaT.push(rows)
		// 				enviarrowsTesis(req,res);							
		// 		});	
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