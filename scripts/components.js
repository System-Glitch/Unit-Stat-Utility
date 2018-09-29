console.log("Loading components...");

var components = {
	selectOption: function(img, name) {
		return ('<img src="%ICON%" class="select-img">' +
				'<span class="select-name">%NAME%</span>')
				.replace("%ICON%", img)
				.replace("%NAME%", name);
	},
	gearSelect: function() {
		return '<div class="select-selected gear-select-selected">' +
					'<div class="select-option">' +
						'<img src="https://via.placeholder.com/32x32" class="select-img gear-select-img">' +
					'</div>' +
					'<div class="cog">⚙</div>' +
				'</div>' +
				'<div class="select-dropdown gear-select-dropdown">' +
					'<div class="slider-container"><input type="text" class="select-search" placeholder="Search..." autocomplete="off"></div>' +
					'<div class="select-option-container gear-select-option-container">' +
					'</div>' +
				'</div>' +
				'<div class="select-dropdown stats-selector">No effects.</div>';
	},
	gearEffect: function(description, min, max) {
		let med = (max + min) / 2;
		return ('<span class="stat-selector-description">%DESCRIPTION%</span>' +
				'<input type="range" min="%MIN%" max="%MAX%" value="%MED%" step="0.01" class="stat-selector-slider">' +
				'<span class="stat-selector-value">%MED%</span><span>%</span>')
				.replace("%DESCRIPTION%", description)
				.replace("%MIN%", min)
				.replace("%MAX%", max)
				.replace("%MED%", med)
				.replace("%MED%", round(med));
	},
	upgradeEffect: function(description, amount) {
		return ('<span class="stat-selector-description">%DESCRIPTION%</span>&nbsp;' +
				'<span class="stat-selector-value">%AMOUNT%</span><span class="minify-width">%</span>')
				.replace("%DESCRIPTION%", description)
				.replace("%AMOUNT%", amount);
	}
};

function createOptionElement(innerHTML) {
	let element = document.createElement("div");
	element.classList.add("select-option");
	element.innerHTML = innerHTML;
	return element;
}

function createUnitOptionElement(id, innerHTML, unit) {
	let element =  createOptionElement(innerHTML);
	element.dataset.unit = id;
	return element;
}

function addUnitOption(id, img, name) {
	let html = components.selectOption(img, name);
	let element = createUnitOptionElement(id, html, name);
	let dropdowns = document.getElementsByClassName("unit-select-option-container");
	for(let i = 0 ; i < dropdowns.length ; i++)
		dropdowns[i].appendChild(element.cloneNode(true));
}

function loadUnits() {
	console.log("Loading units...");
	for(let key in units) {
		let unit = units[key];
		addUnitOption(key, 'img/Unit/' + unit["img"], unit["name"]);
	}
}

function createGearOptionElement(innerHTML, gear, category) {
	let element =  createOptionElement(innerHTML);
	element.dataset.gear = gear;
	element.dataset.category = category;
	return element;
}

function addGearOption(id, img, name, select, category) {
	let html = components.selectOption(img, name);
	let element = createGearOptionElement(html, id, category);
	let dropdowns = select.getElementsByClassName("gear-select-option-container");
	for(let i = 0 ; i < dropdowns.length ; i++)
		dropdowns[i].appendChild(element.cloneNode(true));
}

function createGearSelector(category) {
	let element = document.createElement("div");
	element.classList.add("gear-selector-slot");
	element.classList.add("select");
	element.classList.add("gear-select");
	element.id = "gear-select-"+ category;
	element.innerHTML = components.gearSelect();

	document.getElementById("gear-selector").appendChild(element);
	return element;
}

function loadGear() {
	console.log("Loading gear...");
	var i = 1;
	for(let key in gear) {

		let category = gear[key];

		let select = createGearSelector(key);
		
		setTimeout(function() {
			for(let categoryKey in category) {
				let item = category[categoryKey];
				addGearOption(categoryKey, 'img/' + item["img"], item["name"], select, key);
			}
		}, i++);
	}

	setTimeout(function() { updateSelects(); }, i+1000);
}

loadUnits();
//loadGear();