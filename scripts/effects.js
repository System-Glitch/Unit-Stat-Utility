var effects = {
	damage: {name: "Damage", startsAtOne: false},
	health: {name: "Health", startsAtOne: false},
	speed: {name: "Movement speed", startsAtOne: false},
	cost: {name: "Cost", startsAtOne: false},
	armorPierce: {name: "Pierce Armor", startsAtOne: true},
	armorInf: {name: "Melee-Inf. Armor", startsAtOne: true},
	armorCav: {name: "Melee-Cav. Armor", startsAtOne: true},
	armorCrush: {name: "Crush Armor", startsAtOne: true},
	vision: {name: "Line-of-sight", startsAtOne: false},
	splash: {name: "Splash area", startsAtOne: false},
	multiplierBuildings: {name: "Bonus vs. Buildings", startsAtOne: true},
	multiplierCavalry: {name: "Bonus vs. Cavalry", startsAtOne: true},
	multiplierRanged: {name: "Bonus vs. Ranged", startsAtOne: true},
	multiplierInfantry: {name: "Bonus vs. Infantry", startsAtOne: true},
	multiplerShips: {name: "Bonus vs. Ships", startsAtOne: true},
	multiplierSiege: {name: "Bonus vs. Siege", startsAtOne: true},
	multiplierHuntable: {name: "Bonus vs. Huntable", startsAtOne: true},
	multiplierVillager: {name: "Bonus vs. Villager", startsAtOne: true},
	snare: {name: "Snare", startsAtOne: false},
	timeTrain: {name: "Train Time", startsAtOne: false},
	timeBuilding: {name: "Build Time", startsAtOne: false},
	range: {name: "Attack Range", startsAtOne: false},
	population: {name: "Population", startsAtOne: false},
	gatherFish: {name: "Fish Gather Rate", startsAtOne: false},
	gatherWood: {name: "Wood Gather Rate", startsAtOne: false},
	gatherGold: {name: "Gold Gather Rate", startsAtOne: false},
	gatherStone: {name: "Stone Gather Rate", startsAtOne: false},
	gatherBerry: {name: "Berry Gather Rate", startsAtOne: false},
	gatherHunt: {name: "Hunt. Gather Rate", startsAtOne: false},
	gatherHerdable: {name: "Herdable Gather Rate", startsAtOne: false},
	gatherFarm: {name: "Farm Gather Rate", startsAtOne: false},
	healOOC: {name: "Healing Rate (OoC)", startsAtOne: false},
	healRange: {name: "Healing Range", startsAtOne: false},
	healConstant: {name: "Healing Rate", startsAtOne: false},
	conversionRate: {name: "Conversion Rate", startsAtOne: false},
	conversionRange: {name: "Conversion Range", startsAtOne: false},
	empowerTrain: {name: "Train Time", startsAtOne: false},
	empowerResearch: {name: "Research Time", startsAtOne: false},
	carryCapacity: {name: "Carry Capacity", startsAtOne: false}
}

var effectsContainer = document.getElementById("effects-container");

function createEffectElement(effect, effectName) {
	let container = document.createElement("p");
	container.classList.add('effect');
	container.innerHTML = '<span class="effect-title">' + effectName + ':</span>&nbsp;<span class="' + effect + '" data-original="0">0</span>';
	effectsContainer.appendChild(container);
}

function loadEffects() {
	console.log("Loading effects...");
	for(let key in effects) {
		if(key != "cost")
			createEffectElement(key, effects[key].name);
	}
}

loadEffects();