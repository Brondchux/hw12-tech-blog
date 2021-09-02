const moment = require("moment");

module.exports = {
	dateFormatter: (date) => {
		return moment(date).format("MM d 'YY hh:mm:ss A");
	},

	currentYear: () => {
		return new Date().getFullYear();
	},
};
