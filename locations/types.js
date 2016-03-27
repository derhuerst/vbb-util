'use strict'

const t = {

	  station: {
		  id:   'ST'
		, alt:  'S'
		, type: 'station'
	}

	, address: {
		  id:   'ADR'
		, alt:  'A'
		, type: 'address'
	}

	, poi: {
		  id:   'POI'
		, alt:  'P'
		, type: 'poi'
	}

	, unknown: {
		  id:   null
		, alt:  null
		, type: 'unknown'
	}

}

t.S = t.ST = t.station
t.A = t.ADR = t.address
t.P = t.POI = t.poi



t.stringify = (types) => Object.keys(types)
	.filter((type) => type in t)
	.filter((type) => t[type].alt)
	.join('')

t.parse = (types) => types.split('')
	.filter((alt) => alt in t)
	.reduce((r, alt) => r[t[alt].type] = true, {})



module.exports = t
