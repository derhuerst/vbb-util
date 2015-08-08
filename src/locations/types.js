var t = module.exports = {

	station: {
		id:		'ST',
		alt:	'S',
		type:	'station'
	},

	address: {
		id:		'ADR',
		alt:	'A',
		type:	'address'
	},

	poi: {
		id:		'POI',
		alt:	'P',
		type:	'poi'
	},

	unknown: {
		id:		null,
		alt:	null,
		type:	'unknown'
	}

};



t.S = t.ST = t.station;
t.A = t.ADR = t.address;
t.P = t.POI = t.poi;



t.stringify = function (types) {
	var result = '', type;
	for (type in types) {
		if (t[type] && t[type]) result += t[type].alt;
	}
	return result;
};

t.parse = function (string) {
	var result = {}, alt;
	for (alt of string) {
		if (t[alt]) result[t[alt].type] = true;
	}
	return result;
};
