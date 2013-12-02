function Baksteen (_container) {
	var self = this,
		container = _container,
		kiezelsteentjes = [];

	init = function () {
		container.addEventListener("click", onClick);
	}
	onClick = function (_event) {
		var kiezeltje = new TekstKiezeltje(self, _event.clientX, _event.clientY);
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
	var self = _self,
		parent = _parent,
		x = _x,
		y = _y,
		element;

	init = function () {
		element = document.createElement("div");
		element.className = "kiezeltje";
		element.style.top = x;
		element.style.left = y;
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

	new Baksteen(container);

	document.body.appendChild(container);
}

function init () {
	initBaksteen();
}

window.onload = init;