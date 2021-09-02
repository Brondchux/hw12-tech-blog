const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy();
	}
});

module.exports = router;
