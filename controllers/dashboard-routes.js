const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("dashboard", {
		userData: req.session.user,
		timer: new Date(),
	});
});

module.exports = router;
