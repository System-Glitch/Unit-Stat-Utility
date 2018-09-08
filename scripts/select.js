var selects = [];
var selectsElements = [];
var gearSelectors = [];
var gearSelectorIcon = document.getElementById('gear-selector-unit-icon');
let championUpgrade = null;
let championUpgradeElement = document.getElementById("champion-upgrade");
let championTooltip = document.getElementById("champion-upgrade-tooltip");
let championUpgradeActive = document.getElementById("champion-upgrade-active");

var Select = function(element, imgPath, type) {
	this.type = type;
	this.imgPath = imgPath;
	this.element = element;
	this.dropdown = element.getElementsByClassName("select-dropdown")[0];
	this.container = element.getElementsByClassName("select-selected")[0];
	this.selectedOption = this.container.getElementsByClassName("select-option")[0];
	this.optionsElements = this.dropdown.getElementsByClassName("select-option");
	this.searchBar = this.dropdown.getElementsByClassName("select-search")[0];

	selectsElements.push(this.dropdown);

	//Register events
	let that = this;
	this.container.onclick = function(event) {
		that.showDropdown();
		event.stopPropagation();
	};

	if(this.type == "gear") {
		this.category = undefined;
		this.gearId = undefined;
		this.gear = undefined;
		this.statsSelector = new StatsSelector(element.getElementsByClassName("stats-selector")[0]);

		this.cog = this.container.getElementsByClassName('cog')[0];
		this.cog.onclick = function(event) {
			that.statsSelector.show();
			hideAllDropdowns();
			event.stopPropagation();
		}
	}

	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let optionElement = this.optionsElements[i];
		optionElement.onclick = function(event) {
			that.select(optionElement);
			that.hideDropdown();
			event.stopPropagation();
		}
	}

	//Register search events
	this.searchBar.onkeyup = function(event) {
		that.search(event.target.value);
	};

	if(this.optionsElements.length > 0)
		this.select(this.optionsElements[0]);

}

Select.prototype.search = function(search) {
	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let element = this.optionsElements[i];
		let name = element.getElementsByClassName('select-name')[0].textContent.toLowerCase();
		if(name.indexOf(search.toLowerCase()) != -1 || search.length == 0)
			element.style.display = "flex";
		else
			element.style.display = "none";
	}
}

Select.prototype.showDropdown = function() {

	hideAllDropdowns();
	hideAllStatSelectors();

	this.dropdown.style.display = "flex";
	this.dropdown.focus();
}

Select.prototype.hideDropdown = function() {
	this.dropdown.style.display = "none";
}

Select.prototype.select = function(option) {

	let img;

	switch(this.type) {
		case "unit":
			this.unitId = option.dataset.unit;
			this.unit = units[this.unitId];
			img = this.unit["img"];
			updateChampionUpgrade(this.unit);
			updateDefaultStats(this.unit);
			updateGearSelectors(this.unit);
			resetGear();
			break;
		case "gear":
			this.category = option.dataset.category;
			this.gearId = option.dataset.gear;
			this.gear = gear[this.category][this.gearId];
			this.statsSelector.loadGear(this.gear);
			img = this.gear["img"];
			updateStats();
			break;
	}

	if(this.type == "unit") {
		this.selectedOption.innerHTML = option.innerHTML;
		gearSelectorIcon.src = this.imgPath + img;
	} else if(this.type == "gear") {
		this.selectedOption.getElementsByClassName('gear-select-img')[0].src = this.imgPath + img;
	}
}

function updateChampionUpgrade(unit) {
	
	
	championTooltip.innerHTML = "";
	championUpgradeElement.classList.remove("active");
	championUpgradeActive.value = 0;

	if(unit.champion != undefined) {

		championUpgradeElement.style.display = "inline-block";
		championUpgrade = unit.champion;

		championTooltip.innerHTML = '<span class="upgrade-title">' + championUpgrade.name + '</span>';
		championUpgradeElement.src = championUpgrade.img;

		for(let key in championUpgrade.effects) {
			let effect = championUpgrade.effects[key];
			let html = components.upgradeEffect(effects[effect.type].name, effect.amount);
			let element = createEffectElement(html, effect.positive);
			championTooltip.appendChild(element);
		}

	} else {
		championUpgrade = null;
		championUpgradeElement.style.display = "none";
	}
}

function updateDefaultStats(unit) {
	let stats = {};
	for(let key in effects)
			stats[key] = 0.0;

	for(let key in unit.stats)
		stats[key] = unit.stats[key];

	for(let key in stats) {
		let displays = document.getElementsByClassName(key);
		for(let i = 0 ; i < displays.length ; i++) {
			let display = displays[i];
			display.dataset.original = stats[key];
			display.textContent = round(stats[key]);
		}
	}
}

function updateGearSelectors(unit) {

	//Hide all
	for(let i = 0 ; i < gearSelectors.length ; i++) {
		gearSelectors[i].element.style.display = "none";
	}

	if(unit.gear == undefined || unit.gear.length == 0)
		return;

	//Show only correct ones
	for(let i = 0 ; i < unit.gear.length ; i++) {
		let category = unit.gear[i];
		document.getElementById("gear-select-" + category).style.display = "inline-block";
	}
}

function resetGear() {
	for(let i = 0 ; i < gearSelectors.length ; i++) {
		let selector = gearSelectors[i];
		selector.select(selector.optionsElements[0]);
	}
}

function registerSelects() {
	let gearSelects = document.getElementsByClassName("gear-select");
	for(let i = 0 ; i < gearSelects.length ; i++) {
		let obj = new Select(gearSelects[i], 'img/', 'gear');
		selects.push(obj);
		gearSelectors.push(obj);
	}

	let unitSelects = document.getElementsByClassName("unit-select");
	for(let i = 0 ; i < unitSelects.length ; i++)
		selects.push(new Select(unitSelects[i], 'img/Unit/', 'unit'));
}

function hideAllDropdowns() {
	for(let i = 0 ; i < selects.length ; i++)
		selects[i].hideDropdown();
}

function registerHideListener() {
	document.addEventListener('click', function(event) {
		if (selectsElements.indexOf(event.target) != 1 && !event.target.classList.contains('select-search'))
			hideAllDropdowns();
	});
}

function registerChampionUpgrade() {
	championUpgradeElement.addEventListener('click', function(event) {
		if(!championUpgradeElement.classList.contains("active")) {
			championUpgradeActive.value = "1";
			championUpgradeElement.classList.add("active");
		} else {
			championUpgradeActive.value = "0";
			championUpgradeElement.classList.remove("active");
		}

		updateStats();
	});
}

registerHideListener();
registerSelects();
registerChampionUpgrade();