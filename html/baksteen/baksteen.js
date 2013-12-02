function Baksteen (_container) {
	var self = this,
		container = _container,
		kiezelsteentjes = [];

	init = function () {
		container.addEventListener("click", onClick, true);
	}
	onClick = function (_event) {
		if (_event.target === container) {
			var kiezeltje = new TekstKiezeltje(self, _event.clientX - container.offsetLeft, _event.clientY - container.offsetTop);
			kiezelsteentjes.push(kiezeltje);
			container.appendChild(kiezeltje.element);
		}
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
		element, title, content;

	init = function () {
		element = document.createElement("div");
		element.className = "kiezeltje";
		element.style.left = x;
		element.style.top = y;

		element.appendChild(createTitle("Unknown"));
		element.appendChild(createContent());

		element.addEventListener("mouseover", onMouseOver, false);
		element.addEventListener("mouseout", onMouseOut, false);
	}
	createTitle = function (_title) {
		title = document.createElement("p");
		title.className = "kiezeltje-title";
		title.innerHTML = _title;
		return title;
	}
	createContent = function () {
		content = document.createElement("div");
		content.className = "kiezeltje-content";
		return content;
	}
	onMouseOver = function (_event) {
		element.style.zIndex = 2;
	}

	onMouseOut = function (_event) {
		element.style.zIndex = 1;
	}

	init();
	return {
		element: element,
		title: title,
		content: content,
		update: function () {
		}
	};
}

function TekstKiezeltje( _parent, _x, _y) {
	var self = this,
		parent = _parent,
		kiezeltje = Kiezeltje(_parent, _x, _y);

	kiezeltje.title.innerHTML = '<input class="kiezeltje-title" type="text"/>';
	kiezeltje.content.innerHTML = '<textarea class="kiezeltje-content"></textarea>';

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