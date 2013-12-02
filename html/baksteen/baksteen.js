function Baksteen (_container) {
	var self = this,
		container = _container,
		kiezelsteentjes = {};

	init = function () {
		container.addEventListener("click", onClick, true);
	}
	generateId = function () {
		var id;
		do {
			id = "kiezel" + Math.random();
		} while (id in kiezelsteentjes);
		return id;
	}
	onClick = function (_event) {
		_event.preventDefault();
		if (_event.target === container) {
			var id = generateId();
			
			kiezelsteentjes[id] = new TekstKiezeltje(self, id, _event.clientX - container.offsetLeft, _event.clientY - container.offsetTop);

			container.appendChild(kiezelsteentjes[id].element);
		}
	}

	this.removeKiezeltje = function (_id) {
		container.removeChild(kiezelsteentjes[_id].element);
		delete kiezelsteentjes[_id];
	}
	init();
}

function Kiezeltje (_parent, _id, _x, _y) {
	var self = this,
		parent = _parent,
		id = _id,
		x = _x,
		y = _y,
		doubleclick = false,
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
		element.addEventListener("dblclick", onDoubleClick, false);
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
		element.style.backgroundColor = "#A0A0A0";
	}
	onMouseOut = function (_event) {
		element.style.zIndex = 1;
		element.style.backgroundColor = "";
	}
	onDoubleClick = function (_event) {
		parent.removeKiezeltje(id);
	}

	init();
	return {
		element: element,
		title: title,
		content: content,
	};
}

function TekstKiezeltje(_parent, _id, _x, _y) {
	var self = this,
		parent = _parent,
		num = _id,
		kiezeltje = Kiezeltje(_parent, num, _x, _y);

	//kiezeltje.title.innerHTML = '<input class="kiezeltje-title" type="text"/>';
	//kiezeltje.content.innerHTML = '<textarea class="kiezeltje-content"></textarea>';

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