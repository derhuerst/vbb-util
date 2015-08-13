module.exports = {

	notes:		require('./notes'),



	searchableName: function (name) {
		return name

		// German umlauts
		.replace(/ß/g, 'ss')
		.replace(/ä/g, 'ae')
		.replace(/ö/g, 'oe')
		.replace(/ü/g, 'ue')

		// remove abbreviations
		.replace(/^[SU](\+[SU])?\W/, ' ')

		// expand abbreviations
		.toLowerCase()
		.replace(/\(pl\)/g, ' polen ')
		.replace(/\(berlin\)/g, ' berlin ')
		.replace(/\(bln\)/g, ' berlin ')
		.replace(/str\.?$/, 'strasse')
		.replace(/str\.?\W/g, 'strasse ')
		.replace(/bhf\.?$/, 'bahnhof')
		.replace(/bhf\.?\W/g, 'bahnhof ')

		// special chars
		.replace(/[^\w\s]/g, ' ')
		.replace(/_/g, ' ')

		.replace(/\s{2,}/g, ' ')
		.trim();
	},



	stringifyId: function (id) {
		return id + '';
	},

	parseId: parseInt

};
