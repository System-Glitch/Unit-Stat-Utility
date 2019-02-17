var unitObjects = [];

var UnitObject = function(element, isDuplicate) {
	this.element = element;
	this.unitSelect = null;
	this.gearSelectors = [];
	this.statSelectors = [];
	this.upgradeElements = {};
	this.upgradesContainer = element.getElementsByClassName("upgrades-container")[0];
	this.loneUpgradesContainer = this.upgradesContainer.getElementsByClassName("lone-upgrades-container")[0];
	this.gearSelectorIcon = element.getElementsByClassName('gear-selector-unit-icon')[0];
	this.effectsContainer = element.getElementsByClassName("effects-display-container")[0];
	this.compareButton = element.getElementsByClassName("compare-button")[0];

	//Keep track of the state for share feature
	this.state = {
		unit: 0,
		gear: {},
		upgrades: []
	};

	this.loadUpgrades();
	this.registerSelects();
	this.updateSelects();
	this.registerShareButton();

	//Temporary check to avoid sharing on duplicates
	this.isDuplicate = isDuplicate;
	if(!isDuplicate && shareOptions != undefined) {
		//Load share options
		this.unitSelect.select(shareOptions.unit);

		for(let i = 0 ; i < shareOptions.upgrades.length ; i++) {
			let upgrade = shareOptions.upgrades[i];
			let container = this.upgradeElements[upgrade];
			if(container.classList.contains("chained-upgrade")) {
				enableUpgrade(container);
				let arrow = container.previousElementSibling;
				if(arrow != undefined && arrow.classList.contains("upgrade-arrow")) {
					arrow.classList.add("active");
				}
			} else {
				toggleUpgrade(container.getElementsByClassName("upgrade")[0]);
			}
		}

		for(let key in shareOptions.gear) {
			let selector = undefined;
			for(let i = 0 ; i < this.gearSelectors.length ; i++) {
				if(this.gearSelectors[i].category == key) {
					selector = this.gearSelectors[i];
					break;
				}
			}
			if(selector != undefined) {
				let gear = shareOptions.gear[key];
				selector.select(gear.id);
				if(gear.id != 0) {
					selector.statsSelector.loadLevel(gear.lvl);
					let effects = selector.statsSelector.effects;

					for(let effect in gear.stats) {
						for(let j = 0 ; j < effects.length ; j++) {
							if(effects[j].type == effect) {
								let inputElement = effects[j].element;
								let valueElement = inputElement.parentElement.getElementsByClassName('stat-selector-value')[0];
								inputElement.value = gear.stats[effect];
								valueElement.textContent = round(inputElement.value);
								break;
							}
						}
					}
				}
			}
		}

		this.updateStats();
		this.state = shareOptions;
	}

	if(isDuplicate) {
		this.registerCloseButton();
	}
}

UnitObject.prototype.registerCloseButton = function() {
	let closeButton = this.element.getElementsByClassName('close-button')[0];
	if(closeButton == undefined) {
		closeButton = document.createElement('button');
		closeButton.innerHTML = '&times';
		closeButton.classList.add('button');
		closeButton.classList.add('close-button');
		this.element.getElementsByClassName('buttons-container')[0].appendChild(closeButton);
	}

	closeButton.onclick = function(ev) {
		unitObjects.splice(unitObjects.indexOf(this), 1);
		this.element.remove();

		unitObjects[unitObjects.length - 1].compareButton.style.display = 'inline-block';

		updateComparison("all");
	}.bind(this);
}

UnitObject.prototype.registerShareButton = function() {
	let button = this.element.getElementsByClassName("share-button")[0];
	if(button != undefined) {
		const that = this;
		button.onclick = function(ev) {
			let json = JSURL.stringify(that.state);
			let url = updateURLParameter("unit", json);

			var temp = document.createElement("input");
			document.body.appendChild(temp);
			temp.value = url;
			temp.select();
			document.execCommand("copy");		
			temp.remove();

			var notification = ev.target.getElementsByClassName("clipboard-notification")[0];

			if(!notification.classList.contains('clipboard-notification-shown')) {
				notification.classList.add("clipboard-notification-shown");
				setTimeout(function() {
						notification.classList.remove("clipboard-notification-shown");
				}, 3000);
			}
		}
	}	
}

UnitObject.prototype.registerSelects = function() {
	let gearSelects = this.element.getElementsByClassName("gear-select");
	for(let i = 0 ; i < gearSelects.length ; i++) {
		let obj = new Select(gearSelects[i], 'img/', 'gear', this);
		selects.push(obj);
		this.gearSelectors.push(obj);
	}

	let unitSelect = this.element.getElementsByClassName("unit-select")[0];
	this.unitSelect = new Select(unitSelect, 'img/Unit/', 'unit', this);
	selects.push(this.unitSelect);
}

UnitObject.prototype.updateSelects = function() {
	for(let key in this.gearSelectors) {
		let select = this.gearSelectors[key];
		select.select(select.optionsElements[0]); 
		select.updateOptions();
	}
}

UnitObject.prototype.resetGear = function() {
	for(let i = 0 ; i < this.gearSelectors.length ; i++) {
		let selector = this.gearSelectors[i];
		selector.select(0);
	}
}

UnitObject.prototype.updateStats = function() {

	if(mode == "LOADING") return;

	let modifiers = {};
	let absolutes = {};
	let armorResults = {};
	for(let key in effects) {
		if(key != "cost")
			modifiers[key] = [];
	}


	//Gear
	for(let i = 0 ; i < this.statSelectors.length ; i++) {
		let selector = this.statSelectors[i];
		for(let j = 0 ; j < selector.effects.length ; j++) {
			let effect = selector.effects[j];

			if(effect.isAbsolute) {
				if(absolutes[effect.type] == undefined)
					absolutes[effect.type] = 0;
				absolutes[effect.type] += parseFloat(effect.element.value);
			} else {
				let mod = parseFloat(effect.element.value);
				
				if(effect.type.indexOf("convert") == 0 || effect.type == "conversionRate") {
					mod *= -1;
				}

				let val = 1+(mod/100);


				if(effect.type == "cost") {
					modifiers["costFood"].push(val);
					modifiers["costWood"].push(val);
					modifiers["costGold"].push(val);
					modifiers["costStone"].push(val);
				} else if(effect.type == "carryCapacity") {
					modifiers["carryCapacityFood"].push(val);
					modifiers["carryCapacityWood"].push(val);
					modifiers["carryCapacityGold"].push(val);
					modifiers["carryCapacityStone"].push(val);
				} else if(effect.type == "gatherFood") {
					modifiers["gatherFarm"].push(val);
					modifiers["gatherHunt"].push(val);
					modifiers["gatherBerry"].push(val);
					modifiers["gatherFish"].push(val);
				} else
					modifiers[effect.type].push(effect.type === "critical" ? mod : val);
			}
		}
	}

	//Upgrades
	for(let key in this.upgradeElements) {
		let element = this.upgradeElements[key];
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
				if(effect.isAbsolute) {
					if(absolutes[effect.type] == undefined)
						absolutes[effect.type] = 0;
					absolutes[effect.type] += effect.amount;
				} else {

					let mod = parseFloat(effect.amount);
					
					if(effect.type.indexOf("convert") == 0 || effect.type == "conversionRate") {
						mod *= -1;
					}

					let val = 1+(mod/100);


					if(effect.type == "cost") {
						modifiers["costFood"].push(val);
						modifiers["costWood"].push(val);
						modifiers["costGold"].push(val);
						modifiers["costStone"].push(val);
					} else if(effect.type == "attackRate") {
						modifiers["damage"].push(val);
					} else if(effect.type == "carryCapacity") {
						modifiers["carryCapacityFood"].push(val);
						modifiers["carryCapacityWood"].push(val);
						modifiers["carryCapacityGold"].push(val);
						modifiers["carryCapacityStone"].push(val);
					} else if(effect.type == "gatherFood") {
						modifiers["gatherFarm"].push(val);
						modifiers["gatherHunt"].push(val);
						modifiers["gatherBerry"].push(val);
						modifiers["gatherFish"].push(val);
					} else
						modifiers[effect.type].push(effect.type === "critical" ? mod : val);
				}
			}
		}
	}

	for(let key in modifiers) {

		let displays = this.element.getElementsByClassName(key);
		for(let i = 0 ; i < displays.length ; i++) {
			let display = displays[i];
			let original = parseFloat(display.dataset.original);
				
			if(effects[key].startsAtOne && original == 0)
				original++;

			let result = original;
			let effect = modifiers[key];
			let effectModel = effects[key];
			let length = effect.length;

			if(effectModel.isArmor) {

				for(let j = 0 ; j < length ; j++)
					result = 1 - (1 - result) / effect[j];

				armorResults[key] = result;
				
			} else if(key === "critical") {

				for(let j = 0 ; j < length ; j++)
					result += effect[j];

			} else {

				for(let j = 0 ; j < length ; j++)
					result *= effect[j];
				
			}

			if(absolutes[key] != undefined) {
				result += absolutes[key];
			}

			display.textContent = effectModel.isArmor || key.indexOf("gather") == 0 ? 
				round2Digits(effectModel.isPercent ? --result * 100 : result) :
				round(effectModel.isPercent ? --result * 100 : result);

			if((result == 0 || (result == 1 && effects[key].startsAtOne)) && key.indexOf("cost") != 0)
				display.parentElement.style.display = "none";
			else
				display.parentElement.style.display = "block";
		}
	}
}

UnitObject.prototype.updateUpgrades = function(unit) {
	this.hideAllUpgrades();

	for(let key in unit.upgrades) {
		let upgrade = unit.upgrades[key];

		if(upgrades[upgrade].isChain) {
			for(let key in upgrades[upgrade]) {
				if(key == "isChain") continue;
				let element = this.upgradeElements[key];
				element.style.display = "inline-block";
				if(element.nextElementSibling != undefined && element.nextElementSibling.classList.contains('upgrade-arrow'))
					element.nextElementSibling.style.display = "inline-block"; //Arrow
				element.getElementsByClassName('upgrade-active')[0].value = "0";
			}
		} else {
			let element = this.upgradeElements[upgrade];
			element.style.display = "inline-block";
			element.getElementsByClassName('upgrade-active')[0].value = "0";
		}

	}

	this.updateUpgradesIcons(unit);
}

UnitObject.prototype.updateUpgradesIcons = function(unit) {
	const that = this;
	setTimeout(function() {
		for(let key in unit.upgrades) {
			let upgradeKey = unit.upgrades[key];
			let upgrade = upgrades[upgradeKey];
			if(upgrade.isChain) {
				for(let key in upgrade) {
					if(key == "isChain") continue;
					updateUpgradeIcon(that.upgradeElements[key],  upgrade[key]);
				}
			} else
				updateUpgradeIcon(that.upgradeElements[upgradeKey],  upgrade);
		}
	});
	
};

UnitObject.prototype.updateDefaultStats = function(unit) {
	let stats = {};
	for(let key in effects)
		stats[key] = 0.0;

	for(let key in unit.stats)
		stats[key] = unit.stats[key];

	for(let key in stats) {
		let displays = this.element.getElementsByClassName(key);
		for(let i = 0 ; i < displays.length ; i++) {
			let display = displays[i];
			display.dataset.original = stats[key];
			display.textContent = round(stats[key]);
		}
	}
};

UnitObject.prototype.updateGearSelectorImages = function(gearList) {
	const that = this;
	setTimeout(function() {
		for(let i = 0 ; i < gearList.length ; i++) {
			let category = gearList[i];
			let selector = that.element.getElementsByClassName("gear-select-" + category)[0];
			if(selector.dataset.shownOnce == undefined) {
				let options = selector.getElementsByClassName('select-dropdown')[0].getElementsByClassName('select-option');
				let category = selector.dataset.category;
				for(let i = 0 ; i < options.length ; i++) {
					let option = options[i];
					option.getElementsByClassName('select-img')[0].src = 'img/' + gear[category][option.dataset.gear].img;
				}
				selector.dataset.shownOnce = 1;
			}
		}
	}, 0);	
}

UnitObject.prototype.updateGearSelectors = function(unit) {
	//Hide all
	for(let i = 0 ; i < this.gearSelectors.length ; i++) {
		this.gearSelectors[i].element.style.display = "none";
	}
	this.state.gear = {};

	if(unit.gear == undefined || unit.gear.length == 0)
		return;

	//Show only correct ones
	for(let i = 0 ; i < unit.gear.length ; i++) {
		let category = unit.gear[i];
		let selector = this.element.getElementsByClassName("gear-select-" + category)[0];
		selector.style.display = "inline-block";

		this.state.gear[category] = {id: 0};
	}
	
	this.updateGearSelectorImages(unit.gear);
}

UnitObject.prototype.loadUpgrades = function() {
	//Automatically generate upgrades
	/*for(let key in upgrades) {

		let upgrade = upgrades[key];
		if(upgrade.isChain)
			this.loadUpgradeChain(key, upgrade);
		else
			this.loadUpgrade(this.loneUpgradesContainer, key, upgrade);
	}*/

	let elements = this.upgradesContainer.getElementsByClassName("upgrade");
	for(let i = 0 ; i < elements.length ; i++) {
		let element = elements[i].parentElement;
		this.upgradeElements[element.dataset.upgrade] = element;
		const that = this;
		element.addEventListener('click', function(event) {
			that.onUpgradeClick(event);
		});
	}
}

UnitObject.prototype.hideAllUpgrades = function() {
	for(let key in this.upgradeElements) {
		let element = this.upgradeElements[key];
		element.style.display = "none";
		if(element.nextElementSibling != undefined && !element.nextElementSibling.classList.contains('upgrade-row')) {
			element.nextElementSibling.style.display = "none";
			element.nextElementSibling.classList.remove("active");
		}

		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 0;

		let img = element.getElementsByClassName('upgrade')[0];
		img.classList.remove("active");
	}
	this.state.upgrades = [];
}

UnitObject.prototype.onUpgradeClick = function(event) {
	let element = event.target;
	let parent = element.parentElement;
	let upgrade = parent.dataset.upgrade;
	let index = this.state.upgrades.indexOf(upgrade);

	if(parent.classList.contains("chained-upgrade")) {
		let sibling = parent;
		while((sibling = sibling.previousElementSibling) != null) {
			enableUpgrade(sibling);
			let upgradeSibling = sibling.dataset.upgrade;
			let indexSibling = this.state.upgrades.indexOf(upgradeSibling);
			if(upgradeSibling != undefined && upgradeSibling.indexOf("none") != 0 && indexSibling == -1)
				this.state.upgrades.push(upgradeSibling);
		}
		sibling = parent;
		while((sibling = sibling.nextElementSibling) != null) {
			disableUpgrade(sibling);
			let upgradeSibling = sibling.dataset.upgrade;
			let indexSibling = this.state.upgrades.indexOf(upgradeSibling);
			if(upgradeSibling != undefined && indexSibling != -1) this.state.upgrades.splice(indexSibling, 1);
		}
		
		enableUpgrade(parent);
		if(upgrade.indexOf("none") != 0 && index == -1) this.state.upgrades.push(upgrade);
	} else {
		let enabled = toggleUpgrade(element);

		if(upgrade.indexOf("none") != 0) {
			if(enabled)
				this.state.upgrades.push(upgrade);
			else
				this.state.upgrades.splice(this.state.upgrades.indexOf(upgrade), 1);
		}
	}

	this.updateStats();
	updateComparison("all");
}

UnitObject.prototype.loadUpgrade = function(container, key, upgrade, chain) {
	let element = createUpgradeElement(key, upgrade, chain);
	this.upgradeElements[key] = element;
	container.appendChild(element);

	const that = this;
	element.addEventListener('click', function(event) {
		that.onUpgradeClick(event);
	});
}

UnitObject.prototype.loadUpgradeChain = function(key, chain) {
	let container = document.createElement('div');
	container.classList.add('upgrade-row');

	for(let key2 in chain) {
		if(key2 == "isChain") continue;

		this.loadUpgrade(container, key2, chain[key2], key);
		let arrow = document.createElement('span');
		arrow.classList.add('upgrade-arrow');
		arrow.textContent = '➡';
		container.appendChild(arrow);

	}

	container.lastChild.remove(); //Remove last arrow
	this.upgradesContainer.appendChild(container);
}

function setEffectColor(element, state) {
	switch(state) {
		case "BEST":
			element.classList.add('text-positive');
			break;
		case "WORST":
			element.classList.add('text-negative');
			break;
		case "BETWEEN":
			element.classList.add('text-neutral');
			break;
	}
}

function registerUnitObjects() {
	let objects = document.getElementsByClassName("unit");
	for(let i = 0 ; i < objects.length ; i++)
		unitObjects.push(new UnitObject(objects[i], false));
}

function updateComparison(effect) {
	if(unitObjects.length < 1) return;

	if(effect == "all") {
		for(let key in effects)
			updateComparison(key);
		return;
	} else if(effect == "gatherFood") {
		updateComparison("gatherFish");
		updateComparison("gatherBerry");
		updateComparison("gatherFarm");
		updateComparison("gatherHunt");
		return;
	}

	let effectElements = [];
	let element = unitObjects[0].effectsContainer.getElementsByClassName(effect)[0];
	if(element == undefined) return;
	element.classList.remove('text-positive');
	element.classList.remove('text-neutral');
	element.classList.remove('text-negative');
	effectElements[0] = element;

	let bestValue = parseFloat(element.textContent);
	let best = 0;
	let worstValue = bestValue;
	let worst = 0;
	let lowerIsBetter = effects[effect].lowerIsBetter;
	let allSame = true;

	for(let i = 1 ; i < unitObjects.length ; i++) {
		element = unitObjects[i].effectsContainer.getElementsByClassName(effect)[0];
		element.classList.remove('text-positive');
		element.classList.remove('text-neutral');
		element.classList.remove('text-negative');
		effectElements[i] = element;
		let value = parseFloat(element.textContent);
		if(lowerIsBetter) {
			if(value < bestValue) {
				bestValue = value;
				best = i;
				allSame = false;
			}
			if(value > worstValue) {
				worstValue = value;
				worst = i;
				allSame = false;
			}
		} else {
			if(value > bestValue) {
				bestValue = value;
				best = i;
				allSame = false;
			}
			if(value < worstValue) {
				worstValue = value;
				worst = i;
				allSame = false;
			}
		}
	}

	if(!allSame) {
		setEffectColor(effectElements[best], "BEST");
		for(let i = 0 ; i < unitObjects.length ; i++) {
			if(i == best || i == worst) continue;

			let element = effectElements[i];
			let value = parseFloat(element.textContent);
			if(value == bestValue)
				setEffectColor(element, "BEST");
			else if(value == worstValue)
				setEffectColor(element, "WORST");
			else
				setEffectColor(element, "BETWEEN");
		}
		setEffectColor(effectElements[worst], "WORST");
	}
}

var mode = "LOADING";
var shareOptions = undefined;
(function() {
	shareOptions = getUrlParameter("unit");
	registerUnitObjects();
	mode = "DONE";

	for(let i = 0 ; i < unitObjects.length ; i++)
		unitObjects[i].updateStats();
})();

