var effects = {
	damage: {name: "Damage", startsAtOne: false},
	health: {name: "Health", startsAtOne: false},
	speed: {name: "Movement Speed", startsAtOne: false},
	cost: {name: "Cost", startsAtOne: false},
	protection: {name: "Bonus Damage Protection", startsAtOne: true}, //Missing effect
	armorPierce: {name: "Pierce Armor", startsAtOne: false, isArmor: true},
	armorInfantry: {name: "Melee-Infantry Armor", startsAtOne: false, isArmor: true},
	armorCavalry: {name: "Melee-Cavalry Armor", startsAtOne: false, isArmor: true},
	armorCrush: {name: "Crush Armor", startsAtOne: false, isArmor: true},
	armorSplash: {name: "Splash Damage Reduction", startsAtOne: false, isArmor: true},
	vision: {name: "Line-of-sight", startsAtOne: false},
	splash: {name: "Splash area", startsAtOne: false},
	multiplierBuildings: {name: "Building Bonus Damage", startsAtOne: true},
	multiplierCavalry: {name: "Cavalry Bonus Damage", startsAtOne: true},
	multiplierRanged: {name: "Ranged Bonus Damage", startsAtOne: true},
	multiplierInfantry: {name: "Infantry Bonus Damage", startsAtOne: true},
	multiplierShips: {name: "Ship Bonus Damage", startsAtOne: true},
	multiplierSiege: {name: "Siege Bonus Damage", startsAtOne: true},
	multiplierHuntable: {name: "Bonus vs. Huntable", startsAtOne: true},
	multiplierVillager: {name: "Bonus vs. Villager", startsAtOne: true},
	snare: {name: "Snare", startsAtOne: false}, //Missing effect
	snareResist: {name: "Snare Resist", startsAtOne: false}, //Missing effect
	critical: {name: "Critical Hit Chance", startsAtOne: false},
	timeTrain: {name: "Train Time", startsAtOne: false},
	timeBuilding: {name: "Build Time", startsAtOne: false},
	range: {name: "Maximum Range", startsAtOne: false},
	population: {name: "Population", startsAtOne: false},
	gatherFish: {name: "Gathering Food", startsAtOne: false},
	gatherWood: {name: "Gathering Wood", startsAtOne: false},
	gatherGold: {name: "Gathering Gold", startsAtOne: false},
	gatherStone: {name: "Gathering Stone", startsAtOne: false},
	gatherBerry: {name: "Gathering Berries", startsAtOne: false},
	gatherHunt: {name: "Gathering Huntable", startsAtOne: false},
	gatherHerdable: {name: "Gathering Herdable", startsAtOne: false}, //Missing effect
	gatherFarm: {name: "Gathering Farms", startsAtOne: false},
	buildingSpeed: {name: "Buildings Construction Speed", startsAtOne: false},
	healing: {name: "Healing", startsAtOne: false},
	healRange: {name: "Healing Range", startsAtOne: false},
	healRate: {name: "Healing Rate", startsAtOne: false},
	empowerDropoff: {name: "Empower Dropoff", startsAtOne: false},
	empowerTrainRate: {name: "Empower Train Rate", startsAtOne: false}, //Missing effect
	empowerBuildRate: {name: "Empower Build Rate", startsAtOne: false}, //Missing effect
	conversionResistance: {name: "Conversion Resistance", startsAtOne: false}, //Missing effect
	conversionRate: {name: "Conversion Rate", startsAtOne: false},
	convertInfantryRate: {name: "Convert Infantry Rate", startsAtOne: false},
	convertSiegeRate: {name: "Convert Siege Rate", startsAtOne: false},
	convertCavalryRate: {name: "Convert Cavalry Rate", startsAtOne: false},
	conversionRange: {name: "Conversion Range", startsAtOne: false},
	empowerResearch: {name: "Train/Research Rate", startsAtOne: false}, //Missing effect
	carryCapacity: {name: "Carry Capacity", startsAtOne: false}, //Needs to be filled manually
	trade: {name: "Trade", startsAtOne: false}, //Needs to be filled manually
	selfHeal: {name: "Enables Self-Heal Action", startsAtOne: true},
	watchPostConstructionSpeed: {name: "Watch Post Construction Speed", startsAtOne: true}
}

var effectsContainer = document.getElementById("effects-container");

function createEffectElement(effect, effectName) {
	let container = document.createElement("p");
	container.classList.add('effect');
	container.innerHTML = '<span class="effect-title">' + effectName + ':</span>&nbsp;<span class="' + effect + '" data-original="0">0</span>';
	effectsContainer.appendChild(container);
}

function loadEffects() {
	if(effectsContainer == undefined) return;
	console.log("Loading effects...");
	for(let key in effects) {
		if(key != "cost")
			createEffectElement(key, effects[key].name);
	}
}

//loadEffects();
