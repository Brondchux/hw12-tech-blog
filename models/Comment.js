const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
	// TODO: Optional - Add extra helper methods here
}

Comment.init(
	{
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
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "post",
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "comment",
		timestamps: true,
		underscored: true,
		freezeTableName: true,
	}
);

module.exports = Comment;
