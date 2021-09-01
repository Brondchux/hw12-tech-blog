const { Model, DataTypes } = require("sequelize");

class User extends Model {
	comparePassword(password) {}
	// TODO: Improve user model later by adding a usernameChecker method here
}

User.init(
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "user",
		freezeTableName: true,
		timestamps: true,
		underscored: true,
	}
);

module.exports = User;
