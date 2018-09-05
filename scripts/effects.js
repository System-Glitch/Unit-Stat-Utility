var effects = {
	damage: "Damage",
	health: "Health",
	speed: "Movement speed",
	cost: "Cost",
	armorPierce: "Pierce Armor",
	armorInf: "Melee-Inf. Armor",
	armorCav: "Melee-Cav. Armor",
	armorCrush: "Crush Armor",
	vision: "Line-of-sight",
	multiplierBuildings: "Bonus vs. Buildings",
	multiplierCavalry: "Bonus vs. Cavalry",
	multiplierRanged: "Bonus vs. Ranged",
	multiplierInfantry: "Bonus vs. Infantry",
	multiplerShips: "Bonus vs. Ships",
	multiplierSiege: "Bonus vs. Siege",
	multiplierHuntable: "Bonus vs. Huntable",
	multiplierVillager: "Bonus vs. Villager",
	snare: "Snare",
	timeTrain: "Train Time",
	timeBuilding: "Build Time",
	range: "Attack Range",
	splash: "Damage Area",
	population: "Population",
	gatherFish: "Fish Gather Rate",
	gatherWood: "Wood Gather Rate",
	gatherGold: "Gold Gather Rate",
	gatherStone: "Stone Gather Rate",
	gatherBerry: "Berry Gather Rate",
	gatherHunt: "Hunt. Gather Rate",
	gatherHerdable: "Herdable Gather Rate",
	gatherFarm: "Farm Gather Rate",
	healOOC: "Healing Rate (OoC)",
	healRange: "Healing Range",
	healConstant: "Healing Rate",
	conversionRate: "Conversion Rate",
	conversionRange: "Conversion Range",
	empowerTrain: "Train Time",
	empowerResearch: "Research Time"
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
			createEffectElement(key, effects[key]);
	}
}

loadEffects();