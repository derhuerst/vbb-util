var t = module.exports = {

	public: {
		id:		'JNY',
		type:	'public',
		symbol:	'\ud83d\ude86'
	},

	walk: {
		id:		'WALK',
		type:	'walk',
		symbol:	'\ud83d\udeb6'
	},

	todo: {   // todo: what is this?
		id:		'TRSF',
		type:	'todo',
		symbol:	'\u21b7'
	},

	bike: {
		id:		'BIKE',
		type:	'bike',
		symbol:	'\ud83d\udeb2'
	},

	taxi: {
		id:		'TAXI',
		type:	'taxi',
		symbol:	'\ud83d\ude95'
	},

	car: {
		id:		'CAR',
		type:	'car',
		symbol:	'\ud83d\ude97'
	},

	unknown: {
		id:		null,
		type:	'unknown',
		symbol:	'?'
	}

};



t.JNY = t.public;
t.WALK = t.walk;
t.TRSF = t.todo;
t.BIKE = t.bike;
t.TAXI = t.taxi;
t.CAR = t.car;



t.parse = function (id) {
	return t[id.toUpperCase()] || t.unknown;
};
