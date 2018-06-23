var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

router.get('/', controllers.HomeController.index);

//routas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/auth/signin',  passport.authenticate('local', {
	successRedirect : '/',
	failureRedirect : '/auth/signin',
	failureFlash : true 
}));
router.get('/auth/logout', controllers.UserController.logout);
//router.get('/users/panel', AuthMiddleware.isLogged ,controllers.UserController.getUserPanel);

//rutas para laas graficas de tesis y actas 
router.get('/estadisticas/actas',AuthMiddleware.isLogged, controllers.Graphs.getActas);
router.post('/estadisticas/actas',AuthMiddleware.isLogged, controllers.Graphs.postActas);
router.get('/estadisticas/tesis',AuthMiddleware.isLogged, controllers.Graphs.getTesis);
router.post('/estadisticas/tesis',AuthMiddleware.isLogged, controllers.Graphs.postTesis)

//rutas para las consultas de actas y tesis 
router.get('/consultas/actas', AuthMiddleware.isLogged, controllers.Queries.getActas);
router.post('/consultas/actas', AuthMiddleware.isLogged, controllers.Queries.postActas);
router.get('/consultas/tesis', AuthMiddleware.isLogged, controllers.Queries.getTesis);
router.post('/consultas/tesis', AuthMiddleware.isLogged, controllers.Queries.postTesis);

//rutas para las exportaciones de tesis y actas 
router.get('/exportar/actas', AuthMiddleware.isLogged, controllers.Exports.getActas);
router.post('/exportar/actas', AuthMiddleware.isLogged, controllers.Exports.postActas);
router.get('/exportar/tesis', AuthMiddleware.isLogged, controllers.Exports.getTesis);
router.post('/exportar/tesis', AuthMiddleware.isLogged, controllers.Exports.postTesis);
//rutas para las tablas 
router.get('/tablas/actas', AuthMiddleware.isLogged, controllers.DataTable.getActas);
router.post('/tablas/actas', AuthMiddleware.isLogged, controllers.DataTable.postActas);
router.get('/tablas/tesis', AuthMiddleware.isLogged, controllers.DataTable.getTesis);
router.post('/tablas/tesis', AuthMiddleware.isLogged, controllers.DataTable.postTesis);
module.exports = router;

