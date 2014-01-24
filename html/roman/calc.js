var romanTranslator = (function () {
	var translation = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};

	function transform (_text) {
		var numbers = [],
			text = _text.toUpperCase();

		for (var i = 0; i < text.length; i++) {
			if (!(text[i] in translation)) {
				return [];
			}
			numbers.push(translation[text[i]]);
		}
		return numbers;
	}
	function toDec (_xs) {
		var n = _xs.indexOf(Math.max.apply(Math, _xs));

		return _xs.length > 0 ? (_xs[n] - arguments.callee(_xs.slice(0, n)) + arguments.callee(_xs.slice(n + 1, _xs.length))) : 0;
	}
	function toRoman (_xs, _n) {
		if (_n > 0 && _xs.length > 0) {
			return (_n - translation[_xs[0]] >= 0) ? (_xs[0] + arguments.callee(_xs, _n - translation[_xs[0]])) : arguments.callee(_xs.slice(1), _n);
		}else{
			return '';
		}
	}
	return {
		romanToDec: function (_text) {
			return toDec(transform(_text));
		},
		decToRoman: function (_dec) {
			return toRoman(Object.keys(translation), _dec);
		}
	}
})();
