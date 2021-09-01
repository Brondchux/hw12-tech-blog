const router = require("express").Router();

// GET: /api/user
router.get("/", (req, res) => {
	res.status(200).json({ message: "Landed at /api/user route!" });
});

// POST: /api/user
router.post("/", (req, res) => {
	res.status(200).json({ ...req.body, message: "go" });
});

module.exports = router;
