'use strict'

const n = {

	  lift: {
		  id:   'AT'
		, type: 'lift'
	}

	, groundLevel: {
		  id:   'E5'
		, type: 'groundLevel'
	}

	, tactilePaving: {
		  id:   'BL'
		, type: 'tactilePaving'
	}

	, escalator: {
		  id:   'FT'
		, type: 'escalator'
	}

	, touchAndTravel: {
		  id:   'TT'
		, type: 'touchAndTravel'
	}

}

n.AT = n.lift
n.E5 = n.groundLevel
n.BF = n.handicapAccessible
n.BL = n.tactilePaving
n.FT = n.escalator
n.TT = n.touchAndTravel



n.parse = (notes) => {
	var r = {}
	for (let i in notes.LocationNote) {
		let type = notes.LocationNote[i].key.toUpperCase()
		if (type in n) r[n[type].type] = true
	}
	return r
}



module.exports = n
