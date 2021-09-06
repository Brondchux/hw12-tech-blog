const router = require("express").Router();
const { Post, User } = require("../models");

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

module.exports = router;
