var romanTranslator = (function () {
	var translation = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

	function transform (_text) {
		var numbers = [];

		for (var i = 0; i < _text.length; i++) {
			if (!(_text[i] in translation)) {
				return [];
			}
			numbers.push(translation[_text[i]]);
		}
		return numbers;
	}
	function toDec (_xs) {
		var n = _xs.indexOf(Math.max.apply(Math, _xs));

		return _xs.length > 0 ? (_xs[n] - arguments.callee(_xs.slice(0, n)) + arguments.callee(_xs.slice(n + 1, _xs.length))) : 0;
	}
	return {
		romanToDec: function (_text) {
			return toDec(transform(_text));
		}
	}
})();
