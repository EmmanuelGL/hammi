module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('clientes', {
		Empresa:{
            type: Sequelize.STRING
        },
		Nombre: {
		  type: Sequelize.STRING
	    },
	    email: {
		  type: Sequelize.STRING
	    },
	    telefono: {
		  type: Sequelize.STRING
		},
		
		// createdAt: Sequelize.DATE,
        // updatedAt: Sequelize.DATE,
		
	},
	{ sequelize, timestamps: false } );
	return Cliente;
}


