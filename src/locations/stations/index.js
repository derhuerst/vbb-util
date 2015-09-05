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
		.replace(/\(bln\)/g, 'berlin')
		.replace(/^s\s/, 'sbahn ')
		.replace(/^u\s/, 'ubahn ')
		.replace(/^s\+u\s/, 'sbahn ubahn ')
		.replace(/str\./, 'strasse')
		.replace(/bhf\./, 'bahnhof')
		.replace(/hbf\./, 'hauptbahnhof')

		.split(/[\s\/\(\)\-,\.]+/);

		for (var i = 0; i < result.length; i++) {
			if (result[i].length === 0){
				result.splice(i--, 1);
				continue;
			}
			result[i] = result[i].trim()

			// expand abbreviations
			.replace(/str\.?$/, 'strasse')
			.replace(/bhf\.?$/, 'bahnhof')
			.replace(/hbf\.?$/, 'hauptbahnhof');
		}

		return result.join(' ')
		.replace(/[^\w\s]|_/g, '');   // special chars
	},



	stopwords: [
		'bahnhof',
		'strasse',
		'sbahn',
		'ubahn',
		'berlin',
		'polen',
		'hauptbahnhof'
	],



	stringifyId: function (id) {
		return id + '';
	},

	parseId: parseInt

};



exports.stopwords.filter = function (word) {
	return 0 > stopwords.indexOf(word);
};

exports.filterStopwords = function (words) {
	return words.filter(exports.stopwords.filter);
};
