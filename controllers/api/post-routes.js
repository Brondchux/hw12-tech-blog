const router = require("express").Router();
const { Post } = require("../../models");

// POST: /api/post
router.post("/", async (req, res) => {
	let responseBasket;

	try {
		const newPost = await Post.create(req.body);
		if (!newPost) {
			responseBasket = {
				status: res.status,
				error: true,
				message: "Unable to post article, try again.",
			};
			return res.status(200).json(responseBasket);
		}

		responseBasket = {
			error: false,
			message: "Post successfully shared!",
		};
		return res.status(201).json(responseBasket);
	} catch (error) {
		responseBasket = {
			error: true,
			...req.body,
			message:
				"Something went wrong while posting your article! Please try again.",
		};

		return res.status(408).json(responseBasket);
	}
});

// PUT: /api/post
router.put("/", async (req, res) => {
	let responseBasket;

	try {
		const updatePost = await Post.update(
			{
				title: req.body.title,
				content: req.body.content,
			},
			{
				where: {
					id: req.body.post_id,
					user_id: req.body.user_id,
				},
			}
		);
		if (!updatePost) {
			responseBasket = {
				status: res.status,
				error: true,
				message: "Unable to update post, try again.",
			};
			return res.status(200).json(responseBasket);
		}

		responseBasket = {
			error: false,
			message: "Post successully updated!",
		};
		return res.status(201).json(responseBasket);
	} catch (error) {
		responseBasket = {
			error: true,
			...req.body,
			message:
				"Something went wrong while updating your post! Please try again.",
		};

		return res.status(408).json(responseBasket);
	}
});

// DELETE: /api/post
router.delete("/", async (req, res) => {
	let responseBasket;
	const userId = req.body.user_id;
	const postId = req.body.post_id;
	try {
		const deletePost = await Post.destroy({
			where: {
				id: postId,
				user_id: userId,
			},
		});
		if (deletePost) {
			responseBasket = {
				error: false,
				message: `Post with id of ${postId} was deleted successfully.`,
			};
		}
		return res.status(201).json(responseBasket);
	} catch (error) {
		responseBasket = {
			error: true,
			message:
				"Something went wrong while deleting your post! Please try again.",
		};
		return res.status(408).json(responseBasket);
	}
});

module.exports = router;
