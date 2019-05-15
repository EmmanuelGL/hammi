module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		// id:{
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// },
		name: {
		  type: Sequelize.STRING
	  },
	//   username: {
	// 	  type: Sequelize.STRING
	//   },
	  email: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
		},
		roles : {
			type: Sequelize.INTEGER
		},
		createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
		
	});
	return User;
}


