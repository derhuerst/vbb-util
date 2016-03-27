'use strict'

const fares = {

	parse: (tickets) => tickets.map((ticket) => {
		let result = {
			  name:  ticket.name
			, price: ticket.price / 100
			, zone:  null
		}
		try {
			let junk = JSON.parse(ticket.shpCtx) // @hacon: wtf?
			if (junk.TN) result.name = junk.TN
			if (junk.TL) result.zone = junk.TL
		} catch (e) {}
		return result
	})

}

module.exports = fares
