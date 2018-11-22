var config = require('.././database/config');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || config;
module.exports={
    getRegistro: function(req, res, next){
        return res.render('users/registro',{
                isAuthenticated : req.isAuthenticated(),
                user : req.user,
        });
    },
    getRegistro1: function(req, res, next){
        //---------select prueba---------------
        const results = [], results2 = [], results3=[];
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
            var select ='SELECT * FROM "Tesis".grado ORDER BY idgrado ASC;';
            var select2 ='SELECT * FROM "Tesis".unidad ORDER BY idunidad ASC;';
            var select3 = `SELECT idpersona,(nombre||' '||nombre2||' '||nombre3||' '||apellido||' '||apellido2||' '||apellido3) as nombre FROM "Tesis".persona ORDER BY nombre ASC`
            var query = client.query(select);
            query.on('row', (row) => {
                results.push(row);
            });
            query = client.query(select2);
            query.on('row', (row) => {
                results2.push(row);
            });
            query = client.query(select3);
            query.on('row', (row) => {
                results3.push(row);
            });
            query.on('end', () => {
                done();
                console.log("se cerro base de datos")
                // return res.json(results);
                // console.log(JSON.stringify(results))
                var contenido=[{
                    items : results,
                    items2 : results2,
                    items3 : results3
                }]
				return res.json(contenido);
                // return res.render('users/registro',{
                //         isAuthenticated : req.isAuthenticated(),
                //         user : req.user,
                //         items : results,
                //         items2 : results2,
                //         items3 : results3
                // });
            });
        });
    },
    postRegistro: function(req, res, next){
        var anombre = null,anombre2 = null, anombre3=null,aap = null, aap1=null,aap2=null;
        var alumno = req.body.nombre == null?"": anombre =`'${req.body.nombre}'`;
            alumno = req.body.nombre2 == null?"": anombre2 = `'${req.body.nombre2}'`;
			alumno = req.body.nombre3 == null?"": canombre3 = `'${req.body.nombre3}'`;
            alumno = req.body.apellido == null?"": aap = `'${req.body.apellido}'`;
            alumno = req.body.apellido2 == null?"": aap1 =  `'${req.body.apellido2}'`;
			alumno = req.body.apellido3 == null?"": aap2 =  `'${req.body.apellido3a}'`;
        var mes = parseInt(req.body.mes)
        var grado = parseInt(req.body.grado) 
        var folio = parseInt(req.body.folio)
        var lugar = parseInt(req.body.lugar)
        var codirector=null,codirector1=null,codirector2=null,codirector3=null;
        var codirectores = req.body.codirector === null?"": codirector =req.body.codirector.idpersona;
            codirectores = req.body.codirector1 === null?"": codirector1 = req.body.codirector1.idpersona;
			codirectores = req.body.codirector2 === null?"": codirector2 = req.body.codirector2.idpersona;
			codirectores = req.body.codirector3 === null?"": codirector3 = req.body.codirector3.idpersona;
	    var sinodal=null,sinodal2=null,sinodal3=null,sinodal4=null,sinodal5=null;
        var sinodales = req.body.sinodal === null?"": sinodal =req.body.sinodal.idpersona;
            sinodales = req.body.sinodal2 === null?"": sinodal2 = req.body.sinodal2.idpersona;
            sinodales = req.body.sinodal3 === null?"": sinodal4 = req.body.sinodal3.idpersona;
            sinodales = req.body.sinodal4 === null?"": sinodal4 = req.body.sinodal4.idpersona;
            sinodales = req.body.sinodal5 === null?"": sinodal5 = req.body.sinodal5.idpersona;
		
        console.log('fffffffffffffffffffffffff')
        var prue = req.body
        console.log(prue)
        var sin1nombre = null, sin1nombre1 = null, sin1nombre2 = null, sin1ap = null, sin1ap1 = null, sin1ap2 = null, sin1ins=null, sin1cargo = null,
            sin2nombre = null, sin2nombre1 = null, sin2nombre2 = null, sin2ap = null, sin2ap1 = null, sin2ap2 = null, sin2ins=null, sin2cargo = null,
            sin3nombre = null, sin3nombre1 = null, sin3nombre2 = null, sin3ap = null, sin3ap1 = null, sin3ap2 = null, sin3ins=null, sin3cargo = null,
            sin4nombre = null, sin4nombre1 = null, sin4nombre2 = null, sin4ap = null, sin4ap1 = null, sin4ap2 = null, sin4ins=null, sin4cargo = null,
            sin5nombre = null, sin5nombre1 = null, sin5nombre2 = null, sin5ap = null, sin5ap1 = null, sin5ap2 = null, sin5ins=null, sin5cargo = null;
        //---asignar valor a sinodal inv    
        console.log(req.body['sinodalinv'].length) 
        if(req.body['sinodalinv'].length > 0){
            var sinodalesinv = req.body['sinodalinv'][0]['addName'] === undefined?"":   sin1nombre =req.body['sinodalinv'][0]['addName']
                                                                                    sin1nombre1 =req.body['sinodalinv'][0]['addName1']
                                                                                    sin1nombre2 =req.body['sinodalinv'][0]['addName2']
                                                                                    sin1ap =req.body['sinodalinv'][0]['addApsinodal']
                                                                                    sin1ap1 =req.body['sinodalinv'][0]['addApsinodal1']
                                                                                    sin1ap2 =req.body['sinodalinv'][0]['addApsinodal2']
                                                                                    sin1ins =req.body['sinodalinv'][0]['institucionsino']
                                                                                    sin1cargo =req.body['sinodalinv'][0]['cargosino'];
            if(req.body['sinodalinv'].length > 1){
                sinodalesinv = req.body['sinodalinv'][1]['addName'] === undefined?"":   sin2nombre =req.body['sinodalinv'][1]['addName']
                                                                                        sin2nombre1 =req.body['sinodalinv'][1]['addName1']
                                                                                        sin2nombre2 =req.body['sinodalinv'][1]['addName2']
                                                                                        sin2ap =req.body['sinodalinv'][1]['addApsinodal']
                                                                                        sin2ap1 =req.body['sinodalinv'][1]['addApsinodal1']
                                                                                        sin2ap2 =req.body['sinodalinv'][1]['addApsinodal2']
                                                                                        sin2ins =req.body['sinodalinv'][1]['institucionsino']
                                                                                        sin2cargo =req.body['sinodalinv'][1]['cargosino'];
            }
            if(req.body['sinodalinv'].length > 2){
                sinodalesinv = req.body['sinodalinv'][2]['addName'] === undefined?"":   sin3nombre =req.body['sinodalinv'][2]['addName']
                                                                                        sin3nombre1 =req.body['sinodalinv'][2]['addName1']
                                                                                        sin3nombre2 =req.body['sinodalinv'][2]['addName2']
                                                                                        sin3ap =req.body['sinodalinv'][2]['addApsinodal']
                                                                                        sin3ap1 =req.body['sinodalinv'][2]['addApsinodal1']
                                                                                        sin3ap2 =req.body['sinodalinv'][2]['addApsinodal2']
                                                                                        sin3ins =req.body['sinodalinv'][2]['institucionsino']
                                                                                        sin3cargo =req.body['sinodalinv'][2]['cargosino']; 
            }
            if(req.body['sinodalinv'].length > 3){            
                sinodalesinv = req.body['sinodalinv'][3]['addName'] === undefined?"":   sin4nombre =req.body['sinodalinv'][3]['addName']
                                                                                        sin4nombre1 =req.body['sinodalinv'][3]['addName1']
                                                                                        sin4nombre2 =req.body['sinodalinv'][3]['addName2']
                                                                                        sin4ap =req.body['sinodalinv'][3]['addApsinodal']
                                                                                        sin4ap1 =req.body['sinodalinv'][3]['addApsinodal1']
                                                                                        sin4ap2 =req.body['sinodalinv'][3]['addApsinodal2']
                                                                                        sin4ins =req.body['sinodalinv'][3]['institucionsino']
                                                                                        sin4cargo =req.body['sinodalinv'][3]['cargosino'];
            }
            if(req.body['sinodalinv'].length > 4){
                sinodalesinv = req.body['sinodalinv'][4]['addName'] === undefined?"":   sin5nombre =req.body['sinodalinv'][4]['addName']
                                                                                        sin5nombre1 =req.body['sinodalinv'][4]['addName1']
                                                                                        sin5nombre2 =req.body['sinodalinv'][4]['addName2']
                                                                                        sin5ap =req.body['sinodalinv'][4]['addApsinodal']
                                                                                        sin5ap1 =req.body['sinodalinv'][4]['addApsinodal1']
                                                                                        sin5ap2 =req.body['sinodalinv'][4]['addApsinodal2']
                                                                                        sin5ins =req.body['sinodalinv'][4]['institucionsino']
                                                                                        sin5cargo =req.body['sinodalinv'][4]['cargosino'];
            }

              
        }  
        console.log('222222222222222222222')
        // ---------------postgrest------------------
        pg.connect(connectionString, (err, client, done) => {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }

            var select =`select "Tesis".fn_inserta(${anombre},${anombre2},${anombre3},${aap},${aap1},${aap2},${req.body.matricula},
                                                    '${req.body.tituloT}',${mes},${req.body.ano},${grado},
                                                    ${req.body.director.idpersona},${codirector},${codirector1},${codirector2},${codirector3},
                                                    ${folio},${lugar},
                                                    ${sinodal},${sinodal2},${sinodal3},${sinodal4},${sinodal5},
                                                    ${sin1nombre},${sin1nombre1},${sin1nombre2},${sin1ap},${sin1ap1},${sin1ap2},${sin1ins},${sin1cargo},
                                                    ${sin2nombre},${sin2nombre1},${sin2nombre2},${sin2ap},${sin2ap1},${sin2ap2},${sin2ins},${sin2cargo},
                                                    ${sin3nombre},${sin3nombre1},${sin3nombre2},${sin3ap},${sin3ap1},${sin3ap2},${sin3ins},${sin3cargo},
                                                    ${sin4nombre},${sin4nombre1},${sin4nombre2},${sin4ap},${sin4ap1},${sin4ap2},${sin4ins},${sin4cargo},
                                                    ${sin5nombre},${sin5nombre1},${sin5nombre2},${sin5ap},${sin5ap1},${sin5ap2},${sin5ins},${sin5cargo});`;
                                                   
            console.log(select)
            var query = client.query(select);
            query.on('row', (row) => {
                // results.push(row);
                console.log(JSON.stringify(row));
            });
            query.on('end', () => {
                done();
                console.log("se cerro base de datos")
                return res.json('Successfully updated --------si llega al back ');
                // var contenido=[{
                //     items : results,
                //     items2 : results2,
                //     items3 : results3
                // }]
				// return res.json(contenido);
            });
        });
        //-------------------------------Fin de insercion-------------------------
        
    //    return res.json('Successfully updated --------si llega al back ');
    },
}