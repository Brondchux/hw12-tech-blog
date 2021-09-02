const router = require("express").Router();
const { User } = require("../../models");

// GET: /api/user
router.get("/", (req, res) => {
	res.status(200).json({ message: "Landed at /api/user route!" });
});

// POST: /api/user
router.post("/", async (req, res) => {
	let responseBasket;

	try {
		const newUser = await User.create(req.body);
		if (!newUser) {
			responseBasket = {
				status: res.status,
				error: true,
				message: "Unable to create account, try again.",
			};
			return res.status(200).json(responseBasket);
		}

		// Save to session
		req.session.save(() => {
			let newUserObj = newUser.get({ plain: true });
			delete newUserObj.password;
			req.session.user = newUserObj;
			req.session.loggedIn = true;

			responseBasket = {
				error: false,
				message: "Account created! Redirecting, please wait...",
			};
			return res.status(201).json(responseBasket);
		});
	} catch (error) {
		responseBasket = {
			error: true,
			message: "Something went wrong! Please try again.",
		};

		return res.status(408).json(responseBasket);
	}
});

// POST: /api/user/login
router.post("/login", async (req, res) => {
	const email = req.body.email.trim();
	const password = req.body.password;
	let responseBasket;

	try {
		let userData = await User.findOne({ where: { email } });
		if (!userData || !userData.validatePassword(password)) {
			responseBasket = {
				error: true,
				message: "Incorrect email or password combination!",
			};
			return res.status(200).json(responseBasket);
		}

		// Save to session
		req.session.save(() => {
			req.session.user = userData;
			req.session.loggedIn = true;

			responseBasket = {
				error: false,
				message: "Login successful! Redirecting, please wait...",
			};
			return res.status(201).json(responseBasket);
		});
	} catch (err) {
		responseBasket = {
			error: true,
			message: "Something went wrong! Please try again.",
		};

		return res.status(408).json(responseBasket);
	}
});

// POST: /api/user/logout
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy();
	}
	return res.status(201).end();
});

module.exports = router;
