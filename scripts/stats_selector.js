var statSelectors = [];
var statSelectorsElements = [];

var StatsSelector = function(element) {
	this.gear = undefined;
	this.element = element;
	this.effects = [];

	statSelectors.push(this);
	statSelectorsElements.push(this.element);
}

StatsSelector.prototype.loadGear = function(gear) {
	this.gear = gear;
	this.element.innerHTML = ""; //Clear
	this.effects = [];
	if(gear.effects != undefined && gear.effects.length > 0) {
		for(let i = 0 ; i < gear.effects.length ; i++) {
			let effect = gear.effects[i];
			this.addEffect(effect);
		}
	} else {
		this.element.textContent = "No effects.";
	}
}

StatsSelector.prototype.addEffect = function(effect) {
	let html = components.gearEffect(effects[effect.type], effect.min, effect.max);
	let element = createEffectElement(html, effect.positive);
	let valueElement = element.getElementsByClassName('stat-selector-value')[0];
	let inputElement = element.getElementsByClassName('stat-selector-slider')[0];
	element.oninput = function(event) {
		valueElement.textContent = round(inputElement.value);
		updateStats();
	}
	this.element.appendChild(element);
	this.effects.push({type: effect.type, element: inputElement});
}

StatsSelector.prototype.show = function() {
	hideAllStatSelectors();
	hideAllDropdowns();
	this.element.style.display = "table";
}

StatsSelector.prototype.hide = function() {
	this.element.style.display = "none";
}

function createEffectElement(innerHTML, positive) {
	let element = document.createElement("div");
	element.classList.add("gear-stat");
	element.classList.add(positive ? "text-positive" : "text-negative");
	element.innerHTML = innerHTML;
	return element;
}

function hideAllStatSelectors() {
	for(let i = 0 ; i < statSelectors.length ; i++)
		statSelectors[i].hide();
}

function registerHideStatSelectorsListener() {
	document.addEventListener('click', function(event) {
		let parent = event.target.parentElement;
		if (statSelectorsElements.indexOf(event.target) != 1 && (parent == null || !parent.classList.contains('gear-stat')))
			hideAllStatSelectors();
	});
}

function updateStats() {
	let modifiers = {};
	for(let key in effects)
		modifiers[key] = [];

	for(let i = 0 ; i < statSelectors.length ; i++) {
		let selector = statSelectors[i];
		for(let j = 0 ; j < selector.effects.length ; j++) {
			let effect = selector.effects[j];
			let mod = parseFloat(effect.element.value);
			modifiers[effect.type].push(1+(mod/100));
		}
	}

	for(let key in modifiers) {

		let displays = document.getElementsByClassName(key);
		for(let i = 0 ; i < displays.length ; i++) {
			let display = displays[i];
			let original = parseFloat(display.dataset.original);
			let result = original;
			let effect = modifiers[key];
			let length = effect.length;
			for(let j = 0 ; j < length ; j++) {
				result *= effect[j];
			}
			display.textContent = round(result);
		}
	}

	//ARMORY UPGRADES FORMULA
	/*
	armor=1-A/B

	A= 1-base armor
	B=1+armor value from upgrade
	*/
}

registerHideStatSelectorsListener();