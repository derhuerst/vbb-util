module.exports = {



	parse: function (ticket) {
		var result = {
			name:	ticket.name,
			price:	ticket.price / 100
		};
		try {
			var junk = JSON.parse(ticket.shpCtx);   // @hacon: wtf?
			if (junk.TN) result.name = junk.TN;
			result.zone = junk.TL || null;
		} catch (e) {
			result.zone = null;
		}
		return result;
	}



};
