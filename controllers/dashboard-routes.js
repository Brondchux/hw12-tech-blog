const router = require("express").Router();
const { Post, User } = require("../models");

// GET: /dashboard
router.get("/", async (req, res) => {
	let userPosts;
	try {
		const userPostsData = await Post.findAll({
			where: {
				user_id: req.session.user.id,
			},
			order: [["id", "DESC"]],
			include: [{ model: User, attributes: ["username"] }],
		});
		userPosts = userPostsData.map((post) => {
			const plainPost = post.get({ plain: true });
			return { ...plainPost, postOwner: true };
		});
	} catch (error) {
		userPosts = null;
	}
	res.render("dashboard", {
		userData: req.session.user,
		loggedIn: req.session.loggedIn,
		userPosts,
	});
});

// GET: /dashboard/:id
router.get("/:id", async (req, res) => {
	let singlePost;
	try {
		const singlePostData = await Post.findByPk(req.params.id, {});
		singlePost = singlePostData.get({ plain: true });
	} catch (error) {
		singlePost = null;
	}
	res.render("dashboard", {
		userData: req.session.user,
		loggedIn: req.session.loggedIn,
		singlePost,
		editPost: true,
	});
});
module.exports = router;
