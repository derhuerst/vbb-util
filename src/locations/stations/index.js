module.exports = {

	notes:		require('./notes'),



	tokenize: function (name) {
		var result = name
		.toLowerCase()

		// German umlauts
		.replace(/ß/g, 'ss')
		.replace(/ä/g, 'ae')
		.replace(/ö/g, 'oe')
		.replace(/ü/g, 'ue')

		// expand abbreviations
		.replace(/\(pl\)/g, 'polen')
		.replace(/\(berlin\)/g, 'berlin')
		.replace(/\(bln\)/g, 'bln')

		.replace(/^[SU](\+[SU])?\W/, ' ')   // remove `S+U` abbreviations
		.split(/[\s\/\(\)]+/);

		var i;
		for (i = 0; i < result.length; i++) {
			result[i] = result[i]
			// expand abbreviations
			.replace(/str\.?/, 'strasse')
			.replace(/bhf\.?/, 'bahnhof')
			.replace(/hbf\.?/, 'hauptbahnhof');
		}

		return result
		.join(' ')

		// special chars
		.replace(/[^\w]|_/g, ' ')
		.replace(/\s{2,}/g, ' ')
		.trim();
	},



	stringifyId: function (id) {
		return id + '';
	},

	parseId: parseInt

};
