var input = "MCMXCIX";
var translation = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

function transform (_text) {
	var numbers = [];

	for (var i = 0; i < _text.length; i++) {
		numbers.push(translation[_text[i]]);
	}

	return numbers;
}

function calc (_xs) {
	if (_xs.length <= 0) {
		return 0;
	}
	var n = _xs.indexOf(Math.max.apply(Math, _xs));
	return _xs[n] - arguments.callee(_xs.slice(0, n)) + arguments.callee(_xs.slice(n + 1, _xs.length));
}

function calcHelper() {
	document.getElementById("bloot").innerHTML=calc(transform(document.getElementById("blaat").value));
}
