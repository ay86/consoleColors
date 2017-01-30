/**
 * @Author Angus <angusyoung@mrxcool.com>
 * @Description ANSI colors
 * @Since 2017/1/26
 */

'use strict';

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else if (typeof module != 'undefined') {
		module.exports = factory();
	}
	else {
		root.colors = factory();
	}
})(this, function () {
	var aColorMap = {
		'black'    : '30',
		'red'      : '31',
		'green'    : '32',
		'yellow'   : '33',
		'blue'     : '34',
		'magenta'  : '35',
		'cyan'     : '36',
		'gray'     : '37',
		'white'    : '0',
		'bgBlack'  : '40',
		'bgRed'    : '41',
		'bgGreen'  : '42',
		'bgYellow' : '43',
		'bgBlue'   : '44',
		'bgMagenta': '45',
		'bgCyan'   : '46',
		'bgGray'   : '47',
		'bold'     : '1',
		'_'        : '4',
		'inv'      : '7'
	};

	for (var color in aColorMap) {
		if (aColorMap.hasOwnProperty(color)) {
			(function (sColorName) {
				Object.defineProperty(String.prototype, sColorName, {
					get: function () {
						var aStyle = [aColorMap[sColorName]];
						var sString = this;
						var _old_ = this.match(/^\x1B\[(.*)m(.*)\x1B\[0m$/);
						if (_old_) {
							aStyle.push(_old_[1]);
							sString = _old_[2];
						}
						return '\x1B[' + aStyle.join(';') + 'm' + sString + '\x1B[0m';
					}
				});
			})(color);
		}
	}
});