'use strict'

// todo: see derhuerst/vbb#9

const n = {
	  handicapAccessible: { id: 'BF', type: 'handicapAccessible' }
	, bycicleConveyance:  { id: 'FB', type: 'bycicleConveyance' }
}
n.BF = n.handicapAccessible
n.FB = n.bycicleConveyance

n.parse = (notes) => {
	let result = {}
	for (let i in notes.Note) {
		let id = notes.Note[i].key.toUpperCase()
		if (id in n) result[n[id].type] = true
	}
	return result
}

module.exports = n
