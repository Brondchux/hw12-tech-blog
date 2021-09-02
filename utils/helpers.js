module.exports = {
	dateFormatter: (date) => {
		return date.toLocaleDateString();
	},

	currentYear: () => {
		return new Date().getFullYear();
	},
};
