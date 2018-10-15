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
}