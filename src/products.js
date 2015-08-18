var p = module.exports = {

	suburban: {
		category:	0,
		bitmask:	1,
		name:		'S-Bahn',
		short:		'S',
		type:		'suburban',
		color:		'008C4F',
		cliSymbol:	'\u25cf'
		unicode:	'\ud83d\ude88',
	},

	subway: {
		category:	1,
		bitmask:	2,
		name:		'U-Bahn',
		short:		'U',
		type:		'subway',
		color:		'0067AC',
		cliSymbol:	'\u25a0'
		unicode:	'\ud83d\ude87',
	},

	tram: {
		category:	2,
		bitmask:	4,
		name:		'Tram',
		short:		'T',
		type:		'tram',
		color:		'E3001B',
		cliSymbol:	'\u25a0'
		unicode:	'\ud83d\ude8b',
	},

	bus: {
		category:	3,
		bitmask:	8,
		name:		'Bus',
		short:		'B',
		type:		'bus',
		color:		'A5037B',
		cliSymbol:	'\u25cf'
		unicode:	'\ud83d\ude8c',
	},

	ferry: {
		category:	4,
		bitmask:	16,
		name:		'Fähre',
		short:		'F',
		type:		'ferry',
		color:		'099BD6',
		cliSymbol:	'\u25cf'
		unicode:	'\ud83d\udea2',
	},

	express: {
		category:	5,
		bitmask:	32,
		name:		'IC/ICE',
		short:		'I',
		type:		'express',
		color:		'F4E613',
		cliSymbol:	'\u25cf'
		unicode:	'\ud83d\ude84',
	},

	regional: {
		category:	6,
		bitmask:	64,
		name:		'RB/RE',
		short:		'R',
		type:		'regional',
		color:		'FF0000',
		cliSymbol:	'\u25c6'
		unicode:	'\ud83d\ude86',
	},

	unknown: {
		category:	null,
		bitmask:	0,
		name:		'unknown',
		short:		'?',
		type:		'unknown',
		color:		'555555',
		cliSymbol:	'?'
		unicode:	'?',
	}

};



p.bitmasks = [];
p.bitmasks[1] = p.suburban;
p.bitmasks[2] = p.subway;
p.bitmasks[4] = p.tram;
p.bitmasks[8] = p.bus;
p.bitmasks[16] = p.ferry;
p.bitmasks[32] = p.express;
p.bitmasks[64] = p.regional;



p.categories = [
	p.suburban,
	p.subway,
	p.tram,
	p.bus,
	p.ferry,
	p.express,
	p.regional,
	p.unknown
];



p.stringifyBitmask = function (types) {
	var result = 0, type;
	for (type in types) {
		if (types[type] === true) result += p[type].bitmask;
	}
	return result;
};

p.parseBitmask = function (bitmask) {
	var result = {}, i = 1;
	do {
		result[p.bitmasks[i].type] = !!(bitmask & i);
		i *= 2;
	} while (p.bitmasks[i] && p.bitmasks[i].type)
	return result;
};



p.parseCategory = function (category) {
	return p.categories[parseInt(category)] || p.unknown;
};
