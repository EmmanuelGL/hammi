var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');
var duplicate = require('../middleware/duplicate')

router.get('/', controllers.HomeController.index);

//rutas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', checkDuplicateEmail, controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/auth/signin',  passport.authenticate('local', {
	successRedirect : '/products/details',
	failureRedirect : '/auth/signin',
	failureFlash : true 
}));
router.get('/auth/logout', controllers.UserController.logout);
// router.post('/users/registro', controllers.UserController.postSignUp);
router.get('/users/edit', AuthMiddleware.isLogged ,controllers.UserController.getUserPanel);
// router.put('/user/edit:productId', [checkDuplicateEmail, AuthMiddleware.isLogged], controllers.UserController.updateUser)

router.get('/products/details',AuthMiddleware.isLogged, controllers.UserController.getProducts)



// rutas para las exportaciones de tesis y actas 
// router.get('/exportar/actas', AuthMiddleware.isLogged, controllers.Exports.getActas);
// router.post('/exportar/actas', AuthMiddleware.isLogged, controllers.Exports.postActas);
// router.get('/exportar/tesis', AuthMiddleware.isLogged, controllers.Exports.getTesis);
// router.post('/exportar/tesis', AuthMiddleware.isLogged, controllers.Exports.postTesis);
// rutas para las tablas 
// router.get('/tablas/actas', AuthMiddleware.isLogged, controllers.DataTable.getActas);
// router.post('/tablas/actas', AuthMiddleware.isLogged, controllers.DataTable.postActas);
// router.get('/tablas/tesis', AuthMiddleware.isLogged, controllers.DataTable.getTesis);
// router.post('/tablas/tesis', AuthMiddleware.isLogged, controllers.DataTable.postTesis);


module.exports = router;

