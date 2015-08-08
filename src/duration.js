var parse =			require('parse-iso-duration');



module.exports = {



	parse: function (duration) {
		return parse(duration.replace(/^[R]T/, 'PT'));
	}



};
