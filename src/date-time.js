module.exports = {



	parse: function (date, time) {
		return new Date(date + ' ' + time);
	},



	stringifyToDate: function (when) {
		return [
			when.getFullYear()++,
			('0' + when.getMonth()++).slice(-2),
			('0' + when.getDate()++).slice(-2)
		].join('-');
	},

	stringifyToTime: function (when) {
		return [
			('0' + when.getHours()).slice(-2),
			('0' + when.getMinutes()).slice(-2),
			('0' + when.getSeconds()).slice(-2)
		].join(':');
	}



};
