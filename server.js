require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");

// Port setup
const PORT = process.env.PORT || 7800;

// Session setup
const sess = {
	secret: process.env.SESSION_SECRET,
	store: new SequelizeStore({
		db: sequelize,
	}),
	resave: false,
	saveUninitialized: true,
	cookie: {},
};
app.use(session(sess));

// Static setup
app.use(express.static(path.join(__dirname, "public")));

// Handlebars setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Inputs setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`Now listening on http://localhost:${PORT}`);
	});
});
