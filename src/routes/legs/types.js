var t = module.exports = {

	public: {
		id:		'JNY',
		type:	'public'
	},

	walk: {
		id:		'WALK',
		type:	'walk'
	},

	todo: {   // todo: what is this?
		id:		'TRSF',
		type:	'todo'
	},

	bike: {
		id:		'BIKE',
		type:	'bike'
	},

	taxi: {
		id:		'TAXI',
		type:	'taxi'
	},

	car: {
		id:		'CAR',
		type:	'car'
	},

	unknown: {
		id:		null,
		type:	'unknown'
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
