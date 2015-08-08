var n = module.exports = {

	lift: {
		id:		'AT',
		type:	'lift'
	},

	groundLevel: {
		id:		'E5',
		type:	'groundLevel'
	},

	handicapAccessible: {
		id:		'BF',
		type:	'handicapAccessible'
	},

	tactilePaving: {
		id:		'BL',
		type:	'tactilePaving'
	},

	escalator: {
		id:		'FT',
		type:	'escalator'
	},

	touchAndTravel: {
		id:		'TT',
		type:	'touchAndTravel'
	}

};



n.AT = n.lift;
n.E5 = n.groundLevel;
n.BF = n.handicapAccessible;
n.BL = n.tactilePaving;
n.FT = n.escalator;
n.TT = n.touchAndTravel;



n.parse = function (notes) {
	var result = {}, i, property;
	for (i in notes.Note) {
		property = n[notes.Note[i].key];
		if (property) result[property.type] = true;
	}
	return result;
};
