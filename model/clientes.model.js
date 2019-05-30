module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('clientes', {
		empresa:{
            type: Sequelize.STRING
        },
		name: {
		  type: Sequelize.STRING
	    },
	    email: {
		  type: Sequelize.STRING
	    },
	    telefono: {
		  type: Sequelize.STRING
		},
		
		createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
		
	});
	return Cliente;
}


