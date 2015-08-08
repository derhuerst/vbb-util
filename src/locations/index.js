module.exports = {

	stations:	require('./stations/index'),
	types:		require('./types'),



	stringifyId: function (id) {
		return id + '';
	},

	parseId: parseInt

};
