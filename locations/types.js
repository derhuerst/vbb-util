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



const all = ['station', 'address', 'poi']
t.stringify = (types) => {
	if (all.every((t) => types[t])) return 'ALL'
	return all.reduce((r, x) => {
		if (types[x]) r += t[x].alt
		return r
	}, '')
}

t.parse = (types) => types.split('')
	.filter((alt) => alt in t)
	.reduce((r, alt) => r[t[alt].type] = true, {})



module.exports = t
