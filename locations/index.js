'use strict'

const products = require('../products')
const stations = require('./stations/index')
const types    = require('./types')



const locations = {

	stations, types

	, parse: (loc) => {
		let r = {
			  name:      loc.name
			, latitude:  loc.lat
			, longitude: loc.lon
		}

		loc.type = loc.type.toUpperCase()
		if (loc.type in types) r.type = types[loc.type].type

		if (r.type === 'station') {
			if (loc.extId) {
				r.id =       stations.parseId(loc.extId)
				r.type =     types.station.type
				if (loc.products)
					r.products = products.parseBitmask(loc.products)
				if (loc.LocationNotes)
					r.notes = stations.notes.parse(loc.LocationNotes)
			} else r.type = types.unknown.type
		}

		return r
	}
}

module.exports = locations
