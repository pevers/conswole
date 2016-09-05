'use strict'

var oldConsoleLog = console.log;
console.log = function() {
	oldConsoleLog.apply(this, Object.keys(arguments)
		.map(key => typeof arguments[key] === 'string' ? arguments[key].toUpperCase() : arguments[key]));
};