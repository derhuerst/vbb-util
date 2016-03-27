'use strict'

const stopwords = [
	  'bahnhof', 'strasse', 'hauptbahnhof'
	, 'ubahn', 'sbahn'
	, 'berlin', 'polen'
]

const stations = {

	  notes: require('./notes')

	, tokenize: (name) => {
		let result = name
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
	}

	, stopwords
	, filterStopwords: (words) => words.filter((word) => stopwords.indexOf(word) >= 0)



	, stringifyId: (id) => id + ''

	, parseId: parseInt

}



module.exports = stations
