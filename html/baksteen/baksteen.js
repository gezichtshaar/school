function Baksteen (_container) {
	var self = this,
		container = _container,
		kiezelsteentjes = [];

	init = function () {
		container.addEventListener("click", onClick);
	}
	onClick = function (_event) {
		var kiezeltje = new TekstKiezeltje(self, _event.clientX - container.offsetLeft, _event.clientY - container.offsetTop);
		kiezelsteentjes.push(kiezeltje);
		container.appendChild(kiezeltje.element);
	}

	this.removeKiezeltje = function (_n) {
		container.removeChild(kiezelsteentjes[n]);
		kiezelsteentjes.splice(_n, 1);
	}
	init();
}

function Kiezeltje (_parent, _x, _y) {
	var self = this,
		parent = _parent,
		x = _x,
		y = _y,
		element;

	init = function () {
		element = document.createElement("div");
		element.className = "kiezeltje";
		element.style.left = x;
		element.style.top = y;
	}

	init();
	return {
		element: element
	};
}

function TekstKiezeltje( _parent, _x, _y) {
	var self = this,
		parent = _parent,
		kiezeltje = Kiezeltje(_parent, _x, _y);


	return kiezeltje;
}

function initBaksteen () {
	var container = document.createElement("div");

	container.className = "container";
	document.body.appendChild(container);

	new Baksteen(container);
}

function init () {
	initBaksteen();
}

window.onload = init;