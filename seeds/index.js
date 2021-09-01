require("dotenv").config();
const sequelize = require("../config/connection");
const users = require("./userSeeds");
const posts = require("./postSeeds");
const comments = require("./commentSeeds");

sequelize.sync({ force: true }).then(async () => {
	await users();
	console.log("\n---------DONE SEEDING USERS---------\n");

	await posts();
	console.log("\n---------DONE SEEDING POSTS---------\n");

	await comments();
	console.log("\n---------DONE SEEDING COMMENTS---------\n");
});
