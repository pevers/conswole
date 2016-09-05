'use strict'

var oldConsoleLog = console.log;
console.log = function() {
	oldConsoleLog.apply(this, Object.keys(arguments)
		.filter(key => typeof arguments[key] === 'string')
		.map(key => arguments[key].toUpperCase()));
};