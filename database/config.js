
//conectar con mysql
// var config = {
//   	host : 'localhost',
//   	user : 'root',
//   	password : '',
//   	database : 'tesis'
//   }

// conectar con postgres
  const config = {
		user: 'postgres',
		host: '127.0.0.1',
		database: 'tesis',
		password: 'root',
		port: 5432,
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