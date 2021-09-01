const router = require("express").Router();
const { User } = require("../../models");

// GET: /api/user
router.get("/", (req, res) => {
	res.status(200).json({ message: "Landed at /api/user route!" });
});

// POST: /api/user
router.post("/", async (req, res) => {
	console.log("req.body: ", req.body);
	const newUser = await User.create(req.body);
	let responseBasket;
	if (!newUser) {
		responseBasket = {
			error: true,
			message: "Unable to create account, try again.",
		};
	} else {
		// Save to session
		req.session.save(() => {
			let newUserObj = newUser.get({ plain: true });
			delete newUserObj.password;
			req.session.user = newUserObj;
			req.session.loggedIn = true;
		});

		responseBasket = {
			error: false,
			message: "Account created! Redirecting, please wait...",
		};
	}
	res.status(200).json(responseBasket);
});

module.exports = router;
