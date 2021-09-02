const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
	const posts = await Post.findAll({});
	const postsData = posts.map((post) => post.get({ plain: true }));
	res.render("home", {
		loggedIn: req.session.loggedIn,
		postsData,
	});
});

module.exports = router;
