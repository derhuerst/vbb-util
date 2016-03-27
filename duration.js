'use strict'

const parse = require('parse-iso-duration')



const duration = {

	parse: (duration) => parse(duration.replace(/^[R]T/, 'PT'))

}

module.exports = duration
