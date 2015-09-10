var t = module.exports = {

	public: {
		id:			'JNY',
		type:		'public',
		unicode:	'\ud83d\ude86'
	},

	walk: {
		id:			'WALK',
		type:		'walk',
		unicode:	'\ud83d\udeb6'
	},

	todo: {   // todo: what is this?
		id:			'TRSF',
		type:		'todo',
		unicode:	'\u21b7'
	},

	bike: {
		id:			'BIKE',
		type:		'bike',
		unicode:	'\ud83d\udeb2'
	},

	taxi: {
		id:			'TAXI',
		type:		'taxi',
		unicode:	'\ud83d\ude95'
	},

	car: {
		id:			'CAR',
		type:		'car',
		unicode:	'\ud83d\ude97'
	},

	unknown: {
		id:			null,
		type:		'unknown',
		unicode:	'?'
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
