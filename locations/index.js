var products = require('../products');



module.exports = {

	stations:	require('./stations/index'),
	types:		require('./types'),



	parse: function (location) {
		var result = {
			name:		location.name,
			latitude:	location.lat,
			longitude:	location.lon
		};

		if (this.types[location.type])
			result.type = this.types[location.type.toUpperCase()];
		if (!result.type || result.type.type === 'station') {
			if (location.extId) {   // `loc` is a station
				result.id =			this.stations.parseId(location.extId);
				result.type = 		this.types.station;
				result.products =	products.parseBitmask(location.products);
				if (location.LocationNotes)
					result.notes = this.stations.notes.parse(location.LocationNotes);
			} else result.type = this.types.unknown;
		}

		result.type = result.type.type;
		return result;
	}

};
