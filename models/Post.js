const { Model, DataTypes } = require("sequelize");

class Post extends Model {
	// TODO: Optional - Add extra helper methods here
}

Post.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "post",
		freezeTableName: true,
		timestamps: true,
		underscored: true,
	}
);

module.exports = Post;
