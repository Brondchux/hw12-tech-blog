const moment = require("moment");

module.exports = {
	dateFormatter: (date) => {
		return moment(date).format("MMM DD 'YY hh:mm A");
	},

	currentYear: () => {
		return new Date().getFullYear();
	},
};
