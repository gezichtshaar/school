var translations = "abcdefghijklmnopqrstuwvxyz".split("");

function word (_wLen) {
	return _wLen > 0 ? (translations[Math.floor(Math.random() * translations.length)] + arguments.callee(_wLen-1)) : "";
}

function sentence (_sLen, _wLen) {
	return _sLen > 0 ? (" " + word(Math.random() * _wLen) + arguments.callee(_sLen-1, _wLen)) : ".\n";
}

function paragraph (_pLen, _sLen, _wLen) {
	return _pLen > 0 ? (sentence(_sLen, _wLen) + arguments.callee(_pLen-1, _sLen, _wLen)) : "\n";
}

function doc (_dLen, _pLen, _sLen, _wLen) {
	return _dLen > 0 ? (paragraph(_pLen, _sLen, _wLen) + arguments.callee(_dLen-1, _pLen, _sLen, _wLen)) : "\n";
}

console.log(doc(4, 10, 10, 8));
