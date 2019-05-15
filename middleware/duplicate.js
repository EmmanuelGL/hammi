const db = require('../database/db.connection');
const User = db.user;
const Sequelize = db.Sequelize
// const Op = Sequelize.Op
checkDuplicateEmail = (req, res, next) => {
	// -> Check Username is already in use
    User.findAll({
        where: {
             email : req.body.email
              
            }
    }) 
    .then(user => {
      console.log(JSON.stringify(user.length))
			if (user.length) {
				console.log('email ===='+JSON.stringify(user))
        //res.status(400).send("Fail -> Email is already in use!");
        req.flash('duplicate', 'Fallo -> Email esta en uso!');
		  	return res.redirect('/auth/signup');
				// return;
			}
			next();
	});
}
module.exports = checkDuplicateEmail;