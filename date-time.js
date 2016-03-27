'use strict'

const dateTime = {

	  parse: (date, time) => new Date(date + ' ' + time)

	, stringifyToDate: (when) => [
		when.getFullYear(),
		('0' + (1 + when.getMonth())).slice(-2),
		('0' + when.getDate()).slice(-2)
	].join('-')

	, stringifyToTime: (when) => [
		('0' + when.getHours()).slice(-2),
		('0' + when.getMinutes()).slice(-2),
		('0' + when.getSeconds()).slice(-2)
	].join(':')

}

module.exports = dateTime
