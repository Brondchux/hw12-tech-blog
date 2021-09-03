const router = require("express").Router();
const { Comment } = require("../../models");

// POST: /api/comment
router.post("/", async (req, res) => {
	let responseBasket;

	try {
		const newComment = await Comment.create(req.body);
		if (!newComment) {
			responseBasket = {
				status: res.status,
				error: true,
				message: "Unable to post comment, try again.",
			};
			return res.status(200).json(responseBasket);
		}

		responseBasket = {
			error: false,
			message: "Comment posted!",
		};
		return res.status(201).json(responseBasket);
	} catch (error) {
		responseBasket = {
			error: true,
			message:
				"Something went wrong while posting your comment! Please try again.",
		};

		return res.status(408).json(responseBasket);
	}
});

module.exports = router;
