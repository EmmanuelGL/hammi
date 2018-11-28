//------------------nuevo-----------------------
var config = require('.././database/config');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || config;
var title=[],
titulos=[{
    v_departamentoa : 'Departamento', 
    v_especialidada : 'Especialidad',
    v_gradoa : 'Grado',
    v_generoa : 'Género',
    v_deptogradoa_final : 'Departamento y Grados',
    v_especialidaddeptoa : 'Especialidad y Departamentos'
}],
titulost=[{
    v_departamentot : 'Departamento', 
    v_especialidadt : 'Especialidad',
    v_gradot : 'Grado',
    v_generot : 'Género',
    v_deptogradot_final : 'Departamento y Grados',
    v_especialidaddeptot : 'Especialidad y Departamentos'
}];
module.exports={
    getActas: function(req, res, next){
		res.render('estadisticas/actas',{
			isAuthenticated : req.isAuthenticated(),
			user : req.user,
	    });
    },
    postActas: function(req, res, next){
		
		console.log(req.body.grafica)
		//---------------consulta------------------//
        const results = [],
        title=[],encabezados=[];
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
           
            select ='SELECT * FROM "Tesis".'+req.body.grafica+';';
            var query = client.query(select);
            query.on('row', (row) => {
                results.push(row);
                console.log(JSON.stringify(row))
            });
            select =`SELECT column_name FROM information_schema.columns WHERE table_schema = 'Tesis'AND table_name   = '${req.body.grafica}';`;
            query = client.query(select);
            query.on('row', (row) => {
                
                encabezados.push(row)
            });
            query.on('end', () => {
                done();
               
                title.push(titulos[0][req.body.grafica])
                console.log("se cerro base de datos")
                var contenido=[{
                    grafica: results,
                    title:title,
                    encabezados: encabezados
                }]
				return res.json(contenido);
            });
        });
		//--------------Fin de la consulta---------//
	},
	getTesis: function(req, res, next){
		res.render('estadisticas/tesis', {
					isAuthenticated: req.isAuthenticated(),
					user: req.user,
				});
    },
    postTesis: function(req, res, next){
        console.log(req.body.grafica)
		//---------------consulta------------------//
        const results = [];
        title=[],encabezados=[];
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
            var select ='SELECT * FROM "Tesis".'+req.body.grafica+';';
            var query = client.query(select);
            query.on('row', (row) => {
                results.push(row);
            });
            select =`SELECT column_name FROM information_schema.columns WHERE table_schema = 'Tesis'AND table_name   = '${req.body.grafica}';`;
            query = client.query(select);
            query.on('row', (row) => {
                
                encabezados.push(row)
                
            });
            query.on('end', () => {
                done();
               
                title.push(titulost[0][req.body.grafica])
                console.log("se cerro base de datos")
                var contenido=[{
                    grafica: results,
                    title:title,
                    encabezados:encabezados
                }]
				return res.json(contenido);
            });
        });
		//--------------Fin de la consulta---------//
    },
    postPeriodo: function(req, res, next){
        var select='', cab='';
        const results = [];
        title=[],encabezados=[], tipografica = req.body.grafica, anio= req.body.anio;
        console.log(req.body.grafica+'-----jajajajajaya we--------'+req.body.anio)
        //--------------------Actas-------------------------
        if(tipografica == 'Departamento'){
            select= `select * from "Tesis".deptoA('${anio}-01-01','${anio}-12-31')`;
            cab = "v_departamentoa"; 
        }
        if(tipografica == 'Especialidad'){
            select =`select * from "Tesis".espea('${anio}-01-01','${anio}-12-31')`;
            cab = "v_especialidada"
        }
        if(tipografica == 'Grado'){
            select=`select * from "Tesis".gradoA('${anio}-01-01','${anio}-12-31');`
            cab = "v_gradoa"
        }
        if(tipografica == 'Género'){
            select =`select * from "Tesis".generoA('${anio}-01-01','${anio}-12-31');`
            cab = 'v_generoa'
        }
        if(tipografica == 'Departamento y Grados'){
            select = `select * from "Tesis".deptogradoA('${anio}-01-01','${anio}-12-31');`
            cab = 'v_deptogradoa_final'
        }
       
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
        //     //select * from "Tesis".deptoA('2000-01-01','2000-12-31');
        //     var select ='SELECT * FROM "Tesis".'+req.body.grafica+';';
            var query = client.query(select);
            query.on('row', (row) => {
                results.push(row);
            });
            select =`SELECT column_name FROM information_schema.columns WHERE table_schema = 'Tesis'AND table_name   = '${cab}';`;
            query = client.query(select);
            query.on('row', (row) => {
                
                encabezados.push(row)
                
            });
            query.on('end', () => {
                done();
               
                title.push(req.body.grafica)
                console.log("se cerro base de datos")
                var contenido=[{
                    grafica: results,
                    title:title,
                    encabezados:encabezados,
                    subtitle: 'Periodo : '+anio
                }]
                console.log(JSON.stringify(contenido));
				return res.json(contenido);
            });
        });
    },
    postPeriodoT:function(req, res, next){
        var select='', cab='';
        const results = [];
        title=[],encabezados=[], tipografica = req.body.grafica, anio= req.body.anio;
        // console.log(req.body.grafica+'-----jajajajajaya we--------'+req.body.anio)
        //--------------------Actas-------------------------
        if(tipografica == 'Departamento'){
            select= `select * from "Tesis".deptot(${anio})`;
            cab = "v_departamentot"; 
        }
        if(tipografica == 'Especialidad'){
            select =`select * from "Tesis".espet(${anio})`;
            cab = "v_especialidadt"
        }
        if(tipografica == 'Grado'){
            select=`select * from "Tesis".gradot(${anio});`
            cab = "v_gradot"
        }
        if(tipografica == 'Género'){
            select =`select * from "Tesis".generot(${anio});`
            cab = 'v_generot'
        }
        if(tipografica == 'Departamento y Grados'){
            select = `select * from "Tesis".deptogradot(${anio});`
            cab = 'v_deptogradot_final' 
        }
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
        //     //select * from "Tesis".deptoA('2000-01-01','2000-12-31');
        //     var select ='SELECT * FROM "Tesis".'+req.body.grafica+';';
            var query = client.query(select);
            query.on('row', (row) => {
                results.push(row);
            });
            select =`SELECT column_name FROM information_schema.columns WHERE table_schema = 'Tesis'AND table_name   = '${cab}';`;
            query = client.query(select);
            query.on('row', (row) => {
                
                encabezados.push(row)
                
            });
            query.on('end', () => {
                done();
               
                title.push(req.body.grafica)
                console.log("se cerro base de datos")
                var contenido=[{
                    grafica: results,
                    title:title,
                    encabezados:encabezados,
                    subtitle: 'Periodo : '+anio
                }]
				return res.json(contenido);
            });
        });
    }
}