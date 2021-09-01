const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
	validatePassword(loginPassword) {
		return bcrypt.compareSync(loginPassword, this.password);
	}
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
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		hooks: {
			beforeCreate: async (newUserData) => {
				newUserData.email = await newUserData.email.toLowerCase();
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			},
			beforeUpdate: async (updatedUserData) => {
				newUserData.email = await newUserData.email.toLowerCase();
				updatedUserData.password = await bcrypt.hash(
					updatedUserData.password,
					10
				);
				return updatedUserData;
			},
		},
		sequelize,
		modelName: "user",
		freezeTableName: true,
		timestamps: true,
		underscored: true,
	}
);

module.exports = User;
