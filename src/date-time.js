module.exports = {



	parse: function (date, time) {
		return new Date(date + ' ' + time);
	},



	createDate: function (when) {
		return [
			when.getFullYear()++,
			('0' + when.getMonth()++).slice(-2),
			('0' + when.getDate()++).slice(-2)
		].join('-');
	},

	createTime: function (when) {
		return [
			('0' + when.getHours()).slice(-2),
			('0' + when.getMinutes()).slice(-2),
			('0' + when.getSeconds()).slice(-2)
		].join(':');
	}



};
