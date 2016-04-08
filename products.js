'use strict'

const p = {

	  suburban: {
		  category: 0
		, bitmask:  1
		, name:     'S-Bahn'
		, short:    'S'
		, type:     'suburban'
		, color:    '#008c4f'
		, unicode:  '🚈'
		, ansi:     ['green'] // `chalk` color code
	}

	, subway: {
		  category: 1
		, bitmask:  2
		, name:     'U-Bahn'
		, short:    'U'
		, type:     'subway'
		, color:    '#0067ac'
		, unicode:  '🚇'
		, ansi:     ['blue'] // `chalk` color code
	}

	, tram: {
		  category: 2
		, bitmask:  4
		, name:     'Tram'
		, short:    'T'
		, type:     'tram'
		, color:    '#e3001b'
		, unicode:  '🚋'
		, ansi:     ['red'] // `chalk` color code
	}

	, bus: {
		  category: 3
		, bitmask:  8
		, name:     'Bus'
		, short:    'B'
		, type:     'bus'
		, color:    '#a5037b'
		, unicode:  '🚌'
		, ansi:     ['dim', 'magenta'] // `chalk` color codes
	}

	, ferry: {
		  category: 4
		, bitmask:  16
		, name:     'Fähre'
		, short:    'F'
		, type:     'ferry'
		, color:    '#099bd6'
		, unicode:  '🚢'
		, ansi:     ['cyan'] // `chalk` color code
	}

	, express: {
		  category: 5
		, bitmask:  32
		, name:     'IC/ICE'
		, short:    'E'
		, type:     'express'
		, color:    '#f4e613'
		, unicode:  '🚄'
		, ansi:     ['yellow'] // `chalk` color code
	}

	, regional: {
		  category: 6
		, bitmask:  64
		, name:     'RB/RE'
		, short:    'R'
		, type:     'regional'
		, color:    '#ff0000'
		, unicode:  '🚆'
		, ansi:     ['red'] // `chalk` color code
	}

	, unknown: {
		  category: null
		, bitmask:  0
		, name:     'unknown'
		, short:    '?'
		, type:     'unknown'
		, color:    '#555555'
		, unicode:  '?'
		, ansi:     ['gray'] // `chalk` color code
	}

}



p.bitmasks = []
p.bitmasks[1] = p.suburban
p.bitmasks[2] = p.subway
p.bitmasks[4] = p.tram
p.bitmasks[8] = p.bus
p.bitmasks[16] = p.ferry
p.bitmasks[32] = p.express
p.bitmasks[64] = p.regional


const a = p.aliases = {}
a.ubahn = a.u = a.subway = p.subway
a.sbahn = a.s = a.suburban = p.suburban
a.t = a.tram = p.tram
a.b = a.bus = p.bus
a.fähre = a.f = a.ferry = p.ferry
a.ice = a.ic = a.ice = a.express = p.express
a.regionalbahn = a.regio = a.re = a.rb = a.regional = p.regional

p.categories = [
	p.suburban,
	p.subway,
	p.tram,
	p.bus,
	p.ferry,
	p.express,
	p.regional,
	p.unknown
]

p.parseCategory = (category) => p.categories[parseInt(category)] || p.unknown

p.stringifyBitmask = (types) => {
	let bitmask = 0
	for (let type in types) {
		if (types[type] === true) bitmask += p[type].bitmask
	}
	return bitmask
}

p.parseBitmask = (bitmask) => {
	let types = {}, i = 1
	do {
		types[p.bitmasks[i].type] = !!(bitmask & i)
		i *= 2
	} while (p.bitmasks[i] && p.bitmasks[i].type)
	return types
}



module.exports = p
