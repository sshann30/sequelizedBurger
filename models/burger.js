module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		id:{
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
        },
        // devoured is a boolean variable
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
};


// 	update: function?
// 	},
// 	delete: function?
//   };