const { Comment } = require("../models");

const comments = [
	{
		id: 3,
		content: "This is soooooo true, I can relate!",
		post_id: 2,
		user_id: 2,
	},
	{
		id: 1,
		content: "There's no way this is true!",
		post_id: 3,
		user_id: 1,
	},
	{
		id: 2,
		content: "Thank you for posting this, really helpful.",
		post_id: 1,
		user_id: 3,
	},
	{
		id: 4,
		content: "Where can I find this near me?",
		post_id: 2,
		user_id: 1,
	},
	{
		id: 6,
		content: "Hahahahahahahhaa, ooooomg!",
		post_id: 1,
		user_id: 2,
	},
	{
		id: 5,
		content: "I know a place you can find this.",
		post_id: 4,
		user_id: 3,
	},
];

const seedComment = () => Comment.bulkCreate(comments);

module.exports = seedComment;
