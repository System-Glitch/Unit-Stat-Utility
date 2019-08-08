var statSelectors = [];
var statSelectorsElements = [];

var StatsSelector = function(element, unitObject) {
	this.gear = undefined;
	this.category = undefined;
	this.unitObject = unitObject;
	this.element = element;
	this.effectsContainer = document.createElement('div');
	this.effectsContainer.classList.add("effects-container");

	this.effects = [];
	this.levelContainer = undefined;

	this.unitObject.statSelectors.push(this);
	statSelectors.push(this);
	statSelectorsElements.push(this.element);
}

StatsSelector.prototype.loadExisting = function() {
	const that = this;

	this.effectsContainer = this.element.getElementsByClassName("effects-container")[0];
	if(this.effectsContainer == undefined) {
		this.effectsContainer = document.createElement('div');
		this.effectsContainer.classList.add("effects-container");
	}
	this.levelContainer = this.element.getElementsByClassName("level-container")[0];
	
	let levels = this.element.getElementsByClassName("level");
	for(let i = 0 ; i < levels.length ; i++) {
		levels[i].onclick = function(ev) { 
			let level = ev.target.textContent;
			that.loadLevel(level);
			that.unitObject.updateStats();

			let levelEffects = that.gear.effects[level];
			for(let i = 0 ; i < levelEffects.length ; i++) {
				let effect = levelEffects[i];
				updateComparison(effect.type)
			}
		};
	}

	let sliders = this.element.getElementsByClassName("gear-stat");
	for(let i = 0 ; i < sliders.length ; i++) {
		let element = sliders[i];
		let valueElement = element.getElementsByClassName('stat-selector-value-input')[0];
		let inputElement = element.getElementsByClassName('stat-selector-slider')[0];
		inputElement.oninput = function(event) {
			valueElement.value = round(inputElement.value);
			that.unitObject.state.gear[that.category].stats[element.dataset.effect] = inputElement.value;
			that.unitObject.updateStats();
			updateComparison(element.dataset.effect);
		};
		this.effects.push({type: element.dataset.effect, element: inputElement, isAbsolute: inputElement.nextElementSibling.nextElementSibling == undefined});
	}

};

StatsSelector.prototype.loadGear = function(gear) {
	this.gear = gear;
	this.clear();
	if(gear != undefined && gear.effects != undefined) {
		let level = getHighestKey(gear.effects);
		this.loadLevels(gear);
		this.loadLevel(level);
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
	this.unitObject.state.gear[this.category].lvl = level;
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
	while(effects.length > 0) {
		effects[0].remove();
	}
	this.effects = [];
	this.unitObject.state.gear[this.category].stats = {};
}

StatsSelector.prototype.addEffect = function(effect) {
	let html = components.gearEffect(effects[effect.type].name, round(effect.min), round(effect.max), effect.isAbsolute);
	let element = createEffectElement(html, effect);
	//let valueElement = element.getElementsByClassName('stat-selector-value')[0];
	let valueInputElement = element.getElementsByClassName('stat-selector-value-input')[0];
	let inputElement = element.getElementsByClassName('stat-selector-slider')[0];
	const that = this;
	
	inputElement.oninput = function(event) {
		valueInputElement.value = round(inputElement.value);
		that.unitObject.state.gear[that.category].stats[element.dataset.effect] = inputElement.value;
		that.unitObject.updateStats();
		updateComparison(element.dataset.effect);
	};
	valueInputElement.oninput = function(event) {
		const input = event.target;
		if(input.checkValidity()) {
			inputElement.value = input.value;
		} else if(input.validity.stepMismatch) {
			input.value = round(inputElement.value);
			inputElement.value = input.value;
		}
		that.unitObject.state.gear[that.category].stats[element.dataset.effect] = inputElement.value;
		that.unitObject.updateStats();
		updateComparison(element.dataset.effect);
	}
	valueInputElement.onblur = function(event) {
		const input = event.target;
		if(!input.checkValidity()) {
			if(input.validity.rangeUnderflow) {
				input.value = round(effect.min);
			} else if(input.validity.rangeOverflow) {
				input.value = round(effect.max);
			} else {
				input.value = round(inputElement.value);
			}
		}
		inputElement.value = input.value;
		input.value = round(input.value);
		that.unitObject.state.gear[that.category].stats[element.dataset.effect] = inputElement.value;
		that.unitObject.updateStats();
		updateComparison(element.dataset.effect);
	}
	this.effectsContainer.appendChild(element);
	this.effects.push({type: effect.type, element: inputElement, isAbsolute: effect.isAbsolute});

	this.unitObject.state.gear[this.category].stats[effect.type] = inputElement.value;
}

StatsSelector.prototype.loadLevels = function(gear) {
	this.levelContainer = createLevelContainer();
	for(let key in gear.effects) {
		let levelElement = createLevelElement(key);
		const that = this;
		levelElement.onclick = function(ev) {
			let level = ev.target.textContent;
			that.loadLevel(level);
			that.unitObject.updateStats();

			let levelEffects = that.gear.effects[level];
			for(let i = 0 ; i < levelEffects.length ; i++) {
				let effect = levelEffects[i];
				updateComparison(effect.type)
			}
		};
		this.levelContainer.appendChild(levelElement);
	}
	this.element.appendChild(this.levelContainer);
}

StatsSelector.prototype.show = function() {
	hideAllStatSelectors();
	hideAllAdvisorSelectors();
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

function createEffectElement(innerHTML, effect) {
	let element = document.createElement("div");
	element.classList.add("gear-stat");
	element.classList.add(effect.positive ? "text-positive" : "text-negative");
	element.dataset.effect = effect.type;
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
		if (statSelectorsElements.indexOf(event.target) != 1 && 
			(event.target == null || (!event.target.classList.contains('gear-stat') && !event.target.classList.contains('level-container')) && !event.target.classList.contains('stats-selector')) &&
			(parent == null || (!parent.classList.contains('gear-stat') && !parent.classList.contains('level-container')  && !parent.classList.contains('stat-selector-value-container')))) {
			hideAllStatSelectors();
		}
	});
}

(function() {
	registerHideStatSelectorsListener();
})();