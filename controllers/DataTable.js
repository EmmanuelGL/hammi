var config = require('.././database/config');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || config;
var tabla = [], tablaTesis=[],
title =[], titleTesis = [],
encabezados = [], encabezadosTesis= []
titulos=[{
    v_departamentoa : 'Departamento', 
    v_especialidada : 'Especialidad',
    v_gradoa : 'Grado',
    v_generoa : 'Género',
    v_deptogradoa : 'Departamento y Grados',
    v_especialidaddeptoa : 'Especialidad y Departamentos'
}],
titulost=[{
    v_departamentot : 'Departamento', 
    v_especialidadt : 'Especialidad',
    v_gradot : 'Grado',
    v_generot : 'Género',
    v_deptogradot : 'Departamento y Grados',
    v_especialidaddeptot : 'Especialidad y Departamentos'
}];
    
function enviarrows(req, res){
    res.render('tablas/actas', {
	items:encabezados,
	items1: tabla,
	title : title[0],
	isAuthenticated: req.isAuthenticated(),
	user : req.user
   });
}
function enviarrowsTesis(req,res){
	res.render('tablas/tesis', {
		items:encabezadosTesis,
		items1: tablaTesis,
		title : titleTesis[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
module.exports = {

	getActas : function(req, res, next){
        tabla = [],encabezados = [],title=[];
		enviarrows(req,res);
	},
	postActas : function(req,res,next){
			/**
			 * Controlador api, regresa informacion de las tablas, contiene las funciones de:
			 * 	-Tabla de departamentos
			 * 	-Tabla de especialidades
			 * 	-Tabla de grados
			 * 	-Tabla de deptogrados
			 * 	-Tabla de especialidaddeptos
			 */	

		
//---------------consulta------------------//
		
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
            tabla = [],encabezados = [],title=[];
            var select ='SELECT * FROM "Tesis".'+req.body.Busqueda+';';
            var query = client.query(select);
            query.on('row', (row) => {
                title.push(titulos[0][req.body.Busqueda])
                tabla.push(row)
                // results.push(row);
			});
			
			select =`SELECT column_name FROM information_schema.columns WHERE table_schema = 'Tesis'AND table_name   = '${req.body.Busqueda}';`;
            query = client.query(select);
            query.on('row', (row) => {
                
                encabezados.push(row)
                // results1.push(row);
            });
            query.on('end', () => {
                done();
                console.log("se cerro base de datos")
                enviarrows(req,res);
            });
        });
// 		//--------------Fin de la consulta---------//
	},


	/*--------------------------------------------
	*CONSULTAS PARA LA VISTA DE LAS TABLAS DE TESIS 
	*
	*-----------------------------------------------*/
    getTesis : function(req, res, next){
        //return res.render('users/signup');
        tablaTesis = [],encabezadosTesis = [],titleTesis=[];
		enviarrowsTesis(req,res);
	},
	postTesis : function(req,res,next){
			/**
			 * Controlador api, regresa informacion de las tablas, contiene las funciones de:
			 * 	-Tabla de departamentos
			 * 	-Tabla de especialidades
			 * 	-Tabla de grados
			 * 	-Tabla de deptogrados
			 * 	-Tabla de especialidaddeptos
			 */		
			//nombre de la lista desplegable la cual se asignara a una variable para una busqueda
					
            pg.connect(connectionString, (err, client, done) => {
                if(err) {
                    done();
                    console.log(err);
                    return res.status(500).json({success: false, data: err});
                }
                tablaTesis = [],encabezadosTesis = [],titleTesis=[];
                console.log(req.body.Busquedat)
                var select ='SELECT * FROM "Tesis".'+req.body.Busquedat+';';
                var query = client.query(select);
                query.on('row', (row) => {
                    titleTesis.push(titulost[0][req.body.Busquedat])
                    tablaTesis.push(row)
                });
                
                select =`SELECT column_name FROM information_schema.columns WHERE table_schema = 'Tesis'AND table_name   = '${req.body.Busquedat}';`;
                query = client.query(select);
                query.on('row', (row) => {
                    encabezadosTesis.push(row)
                });
                query.on('end', () => {
                    done();
                    console.log("se cerro base de datos")
                    enviarrowsTesis(req,res);
                });
            });
	}
	
};