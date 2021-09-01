const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
