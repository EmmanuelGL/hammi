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
router.get('/clientes/datos',AuthMiddleware.isLogged, controllers.ClientController.getViewsClient);
router.get('/clientesDatos',AuthMiddleware.isLogged, controllers.ClientController.getCliente);





module.exports = router;

