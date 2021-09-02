const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("dashboard", {
		userData: req.session.user,
		timer: "June 21, 2021 17:00:00",
	});
});

module.exports = router;
