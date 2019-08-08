var civNameMapping = {greeks:"Greek",egyptians: "Egyptian",persians:"Persian",celts:"Celtic",babylonians:"Babylonian",norse: "Norse"};
var components = {
	selectOption: function(img, name, civ) {
		return ('<img src="%ICON%" class="select-img">' +
				'<span class="select-name">%NAME%</span>')
				.replace("%ICON%", img)
				.replace("%NAME%", name);
	},
	civIcon: function(civ) {
		return '<img src="img/UI/' + civ + '.png" class="civ-icon" title="' + civNameMapping[civ] + '">';
	},
	gearSelect: function() {
		return '<div class="select-selected gear-select-selected" data-initialized="0">' +
					'<div class="select-option">' +
						'<img src="data:" class="select-img gear-select-img">' +
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
	advisorSelect: function() {
		return '<div class="select-selected advisor-select-selected" data-initialized="0">' +
					'<div class="select-option">' +
						'<img src="data:" class="select-img advisor-select-img">' +
					'</div>' +
				'</div>' +
				'<div class="select-dropdown advisor-select-dropdown">' +
					'<div class="slider-container"><input type="text" class="select-search" placeholder="Search..." autocomplete="off"></div>' +
					'<div class="select-option-container advisor-select-option-container">' +
					'</div>' +
				'</div>';
	},
	gearEffect: function(description, min, max, isAbsolute) {
		let med = (max + min) / 2;
		return ('<span class="stat-selector-description">%DESCRIPTION%</span>' +
				'<input type="range" min="%MIN%" max="%MAX%" value="%MED%" step="0.01" class="stat-selector-slider">' +
				'<span class="stat-selector-value-container"><input type="number" step="0.1" min="' + min + '" max="' + max + '" value="' + round(med) + '" class="stat-selector-value-input" required/></span>' + (!isAbsolute ? '<span>%</span>' : ''))
				.replace("%DESCRIPTION%", description)
				.replace("%MIN%", min)
				.replace("%MAX%", max)
				.replace("%MED%", med)
				.replace("%MED%", round(med));
	},
	upgradeEffect: function(description, amount, isAbsolute, display) {
		if(display)
			return ('<span class="stat-selector-description">%DESCRIPTION%</span>&nbsp;' +
					'<span class="stat-selector-value">%AMOUNT%</span><span class="minify-width">' + (!isAbsolute ? '%' : '') + '</span>')
					.replace("%DESCRIPTION%", description)
					.replace("%AMOUNT%", amount);
		else
			return ('<span class="stat-selector-description">%DESCRIPTION%</span>')
					.replace("%DESCRIPTION%", description);
	}
};

function createOptionElement(innerHTML) {
	let element = document.createElement("div");
	element.classList.add("select-option");
	element.innerHTML = innerHTML;
	return element;
}

function createUnitOptionElement(id, innerHTML, unit) {
	let element = createOptionElement(innerHTML);
	element.dataset.unit = id;
	return element;
}

function getCivFromId(id) {
	let civName = undefined;
	if(id.indexOf("Gr_") == 0) {
		civName = "greeks";
	} else if(id.indexOf("Eg_") == 0)
		civName = "egyptians";
	else if(id.indexOf("Pe_") == 0)
		civName = "persians";
	else if(id.indexOf("Ce_") == 0)
		civName = "celts";
	else if(id.indexOf("Ba_") == 0)
		civName = "babylonians";
	else if(id.indexOf("No_") == 0)
		civName = "norse";
	return civName;
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
	let element = createOptionElement(innerHTML);
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
	element.classList.add("gear-select-" + category);
	element.dataset.category = category;
	element.innerHTML = components.gearSelect();

	document.getElementsByClassName("gear-selector")[0].appendChild(element);
	return element;
}

function createAdvisorSelector(age) {
	let element = document.createElement("div");
	element.classList.add("advisor-selector-slot");
	element.classList.add("select");
	element.classList.add("advisor-select");
	element.classList.add("advisor-select-" + age);
	element.dataset.age = age;
	element.innerHTML = components.advisorSelect();

	document.getElementsByClassName("advisor-selector")[0].appendChild(element);
	return element;
}

function addAdvisorOption(id, img, name, select) {
	let html = components.selectOption(img, name);
	let element = createAdvisorOptionElement(html, id);
	let dropdowns = select.getElementsByClassName("advisor-select-option-container");
	for(let i = 0 ; i < dropdowns.length ; i++)
		dropdowns[i].appendChild(element.cloneNode(true));
}

function createAdvisorOptionElement(innerHTML, advisor) {
	let element = createOptionElement(innerHTML);
	element.dataset.advisor = advisor;
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
				addGearOption(categoryKey, 'data:', item["name"], select, key);
			}
		}, i++);
	}
}

function loadAdvisors() {
	console.log("Loading advisors...");
	var i = 1;
	for(let keyAge in advisors) {

		const age    = advisors[keyAge]
		const select = createAdvisorSelector(keyAge);
		
		setTimeout(function() {
			for(let key in age) {
				const advisor = age[key]
				addAdvisorOption(key, 'data:', advisor.name, select, keyAge)
			}
		}, i++);
	}
}

//loadUnits();
//loadGear();
loadAdvisors();