var mysql = require('mysql'),
	graficasA = [], graficasT = [],
	titleA = [], titleT = [];
	// const products = [
	// 	{
	// 	  id: 1,
	// 	  name: 'laptop'
	// 	},
	// 	{
	// 	  id: 2,
	// 	  name: 'microphone'
	// 	}
	//   ];
	  
function enviarrowsActas(req, res) {
	//console.log(JSON.stringify(graficasA[0])+'------------------------------');
	//console.log
	/*var title=[{datos:[2]},{
				datos:[1]}];
	console.log(title);*/
	res.render('estadisticas/actas', {
		title: titleA[0],
		//title,
		//JSON.stringify(graficasA[0]),

		items1: graficasA[0],
		isAuthenticated: req.isAuthenticated(),
		user: req.user,
		//data:graficasA[0]
	});
	/* var data={
		 nombre:'emmas',
		 ap:'prueba',
		 am:'ya mero',
	 }
	 res.send(data);*/
}
function enviarrowsTesis(req, res) {
	//console.log(JSON.stringify(graficasA[0])+'------------------------------');
	//console.log
	/*var title=[{datos:[2]},{
				datos:[1]}];
	console.log(title);*/
	res.render('estadisticas/tesis', {
		title: titleT[0],
		//title,
		//JSON.stringify(graficasA[0]),

		items1: graficasT[0],
		isAuthenticated: req.isAuthenticated(),
		
		user: req.user,
		//data:graficasA[0]
	});
	/* var data={
		 nombre:'emmas',
		 ap:'prueba',
		 am:'ya mero',
	 }
	 res.send(data);*/
}


module.exports = {
	getActas: function (req, res, next) {
		enviarrowsActas(req, res);
	},
	postActas: function (req, res, next) {
		var seleccion = req.body.Busqueda,
			grafica = "", head = '', titulos = "";
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();

		//if(seleccion!='DeptoGrados' && seleccion!='EspecialidadDeptos'){
		if (seleccion == 'Departamento') {
			head = "departamento,total";
			grafica = 'v_edepartamentoa';
			titulos = 'Alumnos Graduados por Departamento'
		}
		if (seleccion == 'Especialidad') {
			head = "especialidad,total";
			grafica = 'v_eespecialidada';
			titulos = 'Alumnos Graduados por Especialidad'
		}
		if (seleccion == 'Grado') {
			head = "grado,total";
			grafica = 'v_egradoa';
			titulos = 'Alumnos Graduados por Maestría y Doctorado'
		}
		if (seleccion == 'Genero') {
			head = "genero,total";
			grafica = 'v_egeneroa';
			titulos = 'Genero de Alumnos Graduados'
		}
		if (seleccion == 'Departamento y Grados') {
			head = "departamento,total,grado";
			grafica = 'v_deptogradoa';
			titulos = 'Alumnos Graduados por Departamento y Grado'
		}
		if (seleccion == 'Especialidad y Departamentos') {
			head = "especialidad,departamento,total";
			grafica = 'v_especialidaddeptoa';
			titulos = 'Alumnos Graduados por Especialidad y Departamento'
		}
		db.query(`select ` + head + ` from ` + grafica, function (err, rows1, fields) {
			//console.log(rows1);
			if (seleccion == 'DeptoGrados' || seleccion == 'EspecialidadDeptos') {
				/*	var consulta=rows1
					if(seleccion == 'DeptoGrados'){
						console.log('esta entrando bien ...'+JSON.stringify(rows1));
						for(var i = 0; i < consulta.length; i++ )
								console.log(consulta.length+'primera columna: ' + consulta[i].departamento + ' titulos: ' + consulta[i].grado +' total:'+consulta[i].total);
					}else if(seleccion == 'EspecialidadDeptos'){
						console.log('esta entarando bien 22222')
						for(var i = 0; i < consulta.length; i++ )
						console.log(consulta.length+'primera columna: ' + consulta[i].especialidad + ' titulos: ' + consulta[i].departamento+' total:'+consulta[i].total);
					}*/

				//esto elimina los repetidos
				var prueba = [
					{ id: 1, nombre: 'casa', },
					{ id: 2, nombre: 'fruta' },
					{ id: 3, nombre: 'mascotas' },
					{ id: 1, nombre: 'casa', ap: 'consulta' },
					{ id: 2, nombre: 'fruta' },
					{ id: 4, nombre: 'cosas' },
					{ id: 5, nombre: 'otros' }
				];

				/* var hash = {};
				 array = array.filter(function(current) {
				   var exists = !hash[current.nombre] || false;
				   hash[current.nombre] = true;
				   return exists;
				 });*/
				//prueba[1].atributo = valor; //Notación por puntos
				// for(var i = 0; i < prueba.length; i++ ){  

				//agrega dos campos mas 
				/*
				prueba[i]["maestria"] = 15; //Notación por corchetes
				prueba[i]["Doctorado"]=20;*/
				//}
				//recorrer todo el json con valores
				//var consulta = rows1;
				// for(var i = 0; i < consulta.length; i++ ){
				//console.log(consulta.length+'primera columna: ' + consulta[i].departamento + ' titulos: ' + consulta[i].grado +' total:'+consulta[i].total);

				/*  var arreglado = consulta.map( item => { 
				  return { casa : item.nombre }; 
				  }); */
				// JSON con distintos valores para utilizar en la demo

				// Obteniendo todas las claves del JSON
				//var z = JSON.parse(prueba);

				for(var i in prueba.length) {
				for(var j in x[i]) {
				console.log(j, '-->' ,prueba[i][j]);
				}
				}
				/*for (var i = 0; i < prueba.length; i++) {
					for (var mes in prueba[i]){
						console.log(mes + ":" + prueba[i][mes]);
					}
				}*/
				/*for (var i = 0; i < prueba.length; i++) {
					console.log(prueba[i]['id']);
					/*for (var clave in prueba[0]) {
						// Controlando que json realmente tenga esa propiedad
						if (prueba[0].hasOwnProperty(clave)) {
							// Mostrando en pantalla la clave junto a su valor
							console.log("La clave es " + clave[1] + " y el valor es " + prueba[0][clave[i]]);
						}
					}*/
			//}*/


				//console.log(JSON.stringify(arreglado));
				//   var personas = [
				// 	{name: "paco", edad:23},
				// 	{name: "paco", edad:23,ap:'jajaja'},
				// 	{name: "pepe", edad:25},
				// 	{name: "paco", edad:23},
				// 	{name: "lucas", edad:30},
				// 	{name: "paco", edad:23},
				// 	{name: "pepe", edad:25}
				// ];

				// var persona = {};
				// var unicos = personas.filter(function (e) { 
				// 	return persona[e.name] ? false : (persona[e.name] = true);
				// });

				// console.log(unicos);


			}
			if(err) throw err;

			db.end();
			titleA.shift();

			graficasA.shift();
			titleA.push(titulos)

			graficasA.push(rows1)
			enviarrowsActas(req, res);

		});


	},
	getTesis: function (req, res, next) {
		//return res.render('users/signup');
		enviarrowsTesis(req, res);
	},
	postTesis: function (req, res, next) {
		var seleccion = req.body.Busqueda,
			grafica = "", head = '', titulos = '';
		if (seleccion == 'Departamento') {
			head = "departamento,total";
			grafica = 'v_edepartamento';
			titulos = 'Alumnos Graduados por Departamento'
		}
		if (seleccion == 'Especialidad') {
			head = "especialidad,total";
			grafica = 'v_eespecialidad';
			titulos = 'Alumnos Graduados por Especialidad'
		}
		if (seleccion == 'Grado') {
			head = "grado,total";
			grafica = 'v_egrado';
			titulos = 'Alumnos Graduados por Maestría y Doctorado'
		}
		if (seleccion == 'Género') {
			head = "genero,total";
			grafica = 'v_egenero';
			titulos = 'Genero de Alumnos Graduados'
		}
		if (seleccion == 'Departamento y Grados') {
			head = "grado,departamento,total";
			grafica = 'v_deptogrado';
			titulos = 'Alumnos Graduados por Departamento y Grado'
		}
		if (seleccion == 'Especialidad y Departamentos') {
			head = "especialidad,departamento,total";
			grafica = 'v_especialidaddepto';
			titulos = 'Alumnos Graduados por Especialidad y Departamento'
		}

		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query(`select ` + head + ` from ` + grafica, function (err, rows1, fields) {
			//console.log(rows1);
			if(err) throw err;

			db.end();
			titleT.shift();
			graficasT.shift();
			titleT.push(titulos)
			graficasT.push(rows1)
			enviarrowsTesis(req, res);
		});
	},


	getprueba : (req, res) => {
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query(`select departamento,total from v_edepartamentoa` ,function (err, rows1, fields) {
			//console.log(rows1);
			if(err) throw err;

			db.end();
			var products = rows1;
			console.log(products);
			res.json(products);
		});
		
		//res.json(products);
	  },
	  
	  postprueba : (req, res) => {
		console.log(req.body);
		const { name } = req.body;
		products.push({
		  id: products.length + 1,
		  name
		});
		res.json('Successfully created');
	  },
	  
	  
	  putprueba: (req, res) => {
		console.log(req.body, req.params)
		const { id } = req.params;
		const { name } = req.body;
	  
		products.forEach((product, i) => {
		  if (product.id == id) {
			product.name = name;
		  }
		});
		res.json('Successfully updated');
	  
	  },

	  
	 deleteprueba: (req, res) => {
		const { id } = req.params;
	  
		products.forEach((product, i) => {
		  if(product.id == id) {
			products.splice(i, 1);
		  }
		});
		res.json('Successfully deleted');
	  },
	  
	  
	  

};
