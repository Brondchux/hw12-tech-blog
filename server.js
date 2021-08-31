const express = require("express");
const app = express();
const PORT = process.env.PORT || 7800;

app.get("/", (req, res) => {
	res.json("Welcome to tech blog");
});

app.listen(PORT, () => {
	console.log(`Now listening on http://localhost:${PORT}`);
});
