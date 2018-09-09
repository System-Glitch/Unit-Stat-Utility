var statSelectors = [];
var statSelectorsElements = [];

var StatsSelector = function(element) {
	this.gear = undefined;
	this.element = element;
	this.effectsContainer = document.createElement('div');
	this.effectsContainer.classList.add("effects-container");

	this.effects = [];
	this.levelContainer = undefined;

	statSelectors.push(this);
	statSelectorsElements.push(this.element);
}

StatsSelector.prototype.loadGear = function(gear) {
	this.gear = gear;
	this.clear();
	if(gear != undefined && gear.effects != undefined) {
		this.loadLevels(gear);
		this.loadLevel(getHighestKey(gear.effects));
	} else {
		this.element.textContent = "No effects.";
	}
}

StatsSelector.prototype.loadLevel = function(level) {
	this.selectLevel(level);
	this.clearEffects();
	this.element.appendChild(this.effectsContainer);
	let levelEffects = this.gear.effects[level];
	for(let i = 0 ; i < levelEffects.length ; i++) {
		let effect = levelEffects[i];
		this.addEffect(effect);
	}
	updateStats();
}

StatsSelector.prototype.selectLevel = function(level) {
	let elements = this.levelContainer.getElementsByClassName('level');
	for (let i = 0; i < elements.length ; i++) {
		let element = elements[i];
		if(element.textContent == level)
			element.classList.add('level-active');
		else
			element.classList.remove('level-active');
	}
}

StatsSelector.prototype.clear = function() {
	this.element.innerHTML = ""; //Clear
	this.effects = [];
}

StatsSelector.prototype.clearEffects = function() {
	let effects = this.effectsContainer.getElementsByClassName("gear-stat");
	this.effects = [];
	while(effects.length > 0) {
		effects[0].remove();
	}
}

StatsSelector.prototype.addEffect = function(effect) {
	let html = components.gearEffect(effects[effect.type].name, effect.min, effect.max);
	let element = createEffectElement(html, effect.positive);
	let valueElement = element.getElementsByClassName('stat-selector-value')[0];
	let inputElement = element.getElementsByClassName('stat-selector-slider')[0];
	element.oninput = function(event) {
		valueElement.textContent = round(inputElement.value);
		updateStats();
	}
	this.effectsContainer.appendChild(element);
	this.effects.push({type: effect.type, element: inputElement});
}

StatsSelector.prototype.loadLevels = function(gear) {
	this.levelContainer = createLevelContainer();
	for(let key in gear.effects) {
		let levelElement = createLevelElement(key);
		let that = this;
		levelElement.onclick = function(ev) { that.loadLevel(ev.target.textContent) };
		this.levelContainer.appendChild(levelElement);
	}
	this.element.appendChild(this.levelContainer);
}

StatsSelector.prototype.show = function() {
	hideAllStatSelectors();
	hideAllDropdowns();
	this.element.style.display = "table";
}

StatsSelector.prototype.hide = function() {
	this.element.style.display = "none";
}

function createLevelElement(level) {
	let element = document.createElement("span");
	element.classList.add("level");
	element.textContent = level;
	return element;
}

function createLevelContainer() {
	let element = document.createElement("div");
	element.classList.add("level-container");
	return element;
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
		if (statSelectorsElements.indexOf(event.target) != 1 && (parent == null || (!parent.classList.contains('gear-stat') && !parent.classList.contains('level-container'))))
			hideAllStatSelectors();
	});
}

function updateStats() {
	let modifiers = {};
	for(let key in effects)
		modifiers[key] = [];


	//Gear
	for(let i = 0 ; i < statSelectors.length ; i++) {
		let selector = statSelectors[i];
		for(let j = 0 ; j < selector.effects.length ; j++) {
			let effect = selector.effects[j];
			let mod = parseFloat(effect.element.value);
			modifiers[effect.type].push(1+(mod/100));
		}
	}

	//Champion upgrade
	if(championUpgrade != null && championUpgradeActive.value == 1) {
		for(let j = 0 ; j < championUpgrade.effects.length ; j++) {
			let effect = championUpgrade.effects[j];
			let mod = parseFloat(effect.amount);
			modifiers[effect.type].push(1+(mod/100));
		}
	}

	//Upgrades
	for(let key in upgradeElements) {
		let element = upgradeElements[key];
		let input = element.getElementsByClassName('upgrade-active')[0];
		if(input.value == "1") {
			let chain = input.dataset.chain;
			let upgrade = null;
			if(chain != undefined)
				upgrade = upgrades[chain][key];
			else
				upgrade = upgrades[key];
			
			for(let j = 0 ; j < upgrade.effects.length ; j++) {
				let effect = upgrade.effects[j];
				let mod = parseFloat(effect.amount);
				modifiers[effect.type].push(1+(mod/100));
			}
		}
	}

	for(let key in modifiers) {

		let displays = document.getElementsByClassName(key);
		for(let i = 0 ; i < displays.length ; i++) {
			let display = displays[i];
			let original = parseFloat(display.dataset.original);

			if(effects[key].startsAtOne && original == 0)
				original++;

			let result = original;
			let effect = modifiers[key];
			let length = effect.length;
			for(let j = 0 ; j < length ; j++) {
				result *= effect[j];
			}
			display.textContent = round(result);

			if((result == 0 || (result == 1 && effects[key].startsAtOne)) && key != "cost")
				display.parentElement.style.display = "none";
			else
				display.parentElement.style.display = "block";
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