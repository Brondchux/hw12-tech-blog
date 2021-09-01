const { User } = require("../models");

const users = [
	{
		id: 1,
		username: "Alima",
		email: "alima@gmail.com",
		password: "asdfjkl;",
	},
	{
		id: 2,
		username: "Murija",
		email: "murija@gmail.com",
		password: "password",
	},
	{
		id: 3,
		username: "Hassan",
		email: "hassan@gmail.com",
		password: "asdfjkl;",
	},
	{
		id: 4,
		username: "Tony",
		email: "tony@gmail.com",
		password: "password",
	},
];

const seedUser = () => User.bulkCreate(users, { returning: true });

module.exports = seedUser;
