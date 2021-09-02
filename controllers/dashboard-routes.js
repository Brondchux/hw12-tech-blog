const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("dashboard", {
		userData: req.session.user,
		loggedIn: req.session.loggedIn,
	});
});

module.exports = router;
