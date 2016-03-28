'use strict'

const tokenize = require('vbb-tokenize-station')

const stopwords = [
	  'bahnhof', 'strasse', 'hauptbahnhof'
	, 'ubahn', 'sbahn'
	, 'berlin', 'polen'
]

const stations = {

	  notes: require('./notes')

	, tokenize

	, stopwords
	, filterStopwords: (words) => words.filter((word) => stopwords.indexOf(word) >= 0)



	, stringifyId: (id) => id + ''

	, parseId: parseInt

}



module.exports = stations
