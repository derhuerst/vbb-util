module.exports = {



	parse: function (tickets) {
		var results = [], i, result, junk;
		for (i = 0; i < tickets.length; i++) {
			result = {
				name:	tickets[i].name,
				price:	tickets[i].price / 100,
				zone:	null
			};
			try {
				junk = JSON.parse(tickets[i].shpCtx);   // @hacon: wtf?
				if (junk.TN) result.name = junk.TN;
				if (junk.TL) result.zone = junk.TL;
			} catch (e) {}
			results.push(result);
		}
		return results;
	}



};
