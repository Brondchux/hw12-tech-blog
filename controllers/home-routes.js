const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
	const posts = await Post.findAll({
		include: [{ model: User }],
		order: [["id", "DESC"]],
	});
	const postsData = posts
		? posts.map((post) => post.get({ plain: true }))
		: null;
	res.render("home", {
		loggedIn: req.session.loggedIn,
		postsData,
	});
});

router.get("/post/:id", async (req, res) => {
	const post = await Post.findByPk(req.params.id, {
		include: [
			{ model: User, attributes: ["username", "id"] },
			{
				model: Comment,
				include: [{ model: User, attributes: ["username", "id"] }],
			},
		],
	});

	const postData = post ? post.get({ plain: true }) : null;
	const showDeleteBtn =
		postData && postData.user_id === req.session.user.id ? true : false;
	res.render("post", {
		loggedIn: req.session.loggedIn,
		userId: req.session.user ? req.session.user.id : null,
		postData,
		showDeleteBtn,
	});
});

module.exports = router;
