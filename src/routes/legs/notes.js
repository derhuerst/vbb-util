// todo: see derhuerst/vbb#9

var n = module.exports = {

	handicapAccessible: {
		id:		'BF',
		type:	'handicapAccessible'
	},

	bycicleConveyance: {
		id:		'FB',
		type:	'bycicleConveyance'
	},

};



n.BF = n.handicapAccessible;
n.FB = n.bycicleConveyance;



n.parse = function (notes) {
	var result = {}, i, property;
	for (i in notes.Note) {
		property = n[notes.Note[i].key.toUpperCase()];
		if (property) result[property.type] = true;
	}
	return result;
};
