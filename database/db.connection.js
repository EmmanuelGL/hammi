const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password,
{
    host: config.host,
    dialect: config.dialect,
    pool: {
      max: config.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }   
});

sequelize.authenticate()
    .then(()=>{
        console.log('Conectado exitosamente')
    })
    .catch(err=>{
        console.log('No se conecto')
    })

    const db = {};
 
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.user = require('../model/user.model.js')(sequelize, Sequelize);
    db.cliente = require('../model/clientes.model.js')(sequelize, Sequelize);
     
    module.exports = db;