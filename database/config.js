
//conectar con mysql
// var config = {
//   	host : 'localhost',
//   	user : 'root',
//   	password : '',
//   	database : 'tesis'
//   }

// conectar con postgres
  const config = {
      database: 'hammy',
      username: 'root',
      password: '',
      host: 'localhost',
      dialect: 'mysql', //dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
		}
  module.exports = config;
  





















/*var pgp = require("pg")
var config = pgp("postgres://emmas:emmas@localhost:3000/tesis");
//var db = pgp("postgres://username:password@host:port/database");
*/





/*const {Pool,Cliente}= require('pg')

const config = new Pool({
  user: 'emmas',
  host: 'localhost',
  database: 'tesis',
  password: 'emmas',
  port: 5432
})*/