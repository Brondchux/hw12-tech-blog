const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const loginRoutes = require("./login-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);

module.exports = router;
