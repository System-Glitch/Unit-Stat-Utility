var effects = {
	damage: {name: "Damage", startsAtOne: false},
	health: {name: "Health", startsAtOne: false},
	speed: {name: "Movement Speed", startsAtOne: false},
	cost: {name: "Cost", startsAtOne: false, lowerIsBetter: true},
	costFood: {name: "Food Cost", startsAtOne: false, lowerIsBetter: true},
	costGold: {name: "Gold Cost", startsAtOne: false, lowerIsBetter: true},
	costWood: {name: "Wood Cost", startsAtOne: false, lowerIsBetter: true},
	costStone: {name: "Stone Cost", startsAtOne: false, lowerIsBetter: true},
	protection: {name: "Bonus Damage Protection", startsAtOne: false, isArmor: true},
	bonusDamageImmunity: {name: "Bonus Damage Immunity", startsAtOne: false},
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
	multiplierHuntable: {name: "Huntable Bonus Damage", startsAtOne: true},
	multiplierVillager: {name: "Villager Bonus Damage", startsAtOne: true},
	multiplierSupport: {name: "Support Unit Bonus Damage", startsAtOne: true},
	multiplierAnimal: {name: "Animal Bonus Damage", startsAtOne: true},
	snare: {name: "Snare", startsAtOne: true, isPercent: true}, //Missing effect
	snareResist: {name: "Snare Resist", startsAtOne: true, isPercent: true}, //Missing effect
	critical: {name: "Critical Hit Chance", startsAtOne: false},
	timeTrain: {name: "Train Time", startsAtOne: false, lowerIsBetter: true},
	timeBuilding: {name: "Build Time", startsAtOne: false, lowerIsBetter: true},
	range: {name: "Maximum Range", startsAtOne: false},
	rateOfFire: {name: "Rate-of-fire", startsAtOne: true},
	population: {name: "Population", startsAtOne: false, lowerIsBetter: true},
	autoGatherFood: {name: "Food per Second per Garden", startsAtOne: false}, // Gardens
	gatherFood: {name: "Gathering Food", startsAtOne: false},
	gatherWood: {name: "Gathering Wood", startsAtOne: false},
	gatherGold: {name: "Gathering Gold", startsAtOne: false},
	gatherStone: {name: "Gathering Stone", startsAtOne: false},
	gatherBerry: {name: "Gathering Berries", startsAtOne: false},
	gatherHunt: {name: "Gathering Huntable", startsAtOne: false},
	gatherFish: {name: "Gathering Fish", startsAtOne: false},
	gatherHerdable: {name: "Gathering Herdable", startsAtOne: false}, //Missing effect
	gatherFarm: {name: "Gathering Farms", startsAtOne: false},
	buildingSpeed: {name: "Buildings Construction Speed", startsAtOne: true},
	healing: {name: "Healing", startsAtOne: true, isPercent: true},
	healRange: {name: "Healing Range", startsAtOne: false},
	healRate: {name: "Healing Rate", startsAtOne: true},
	chaosRange: {name: "Chaos Range", startsAtOne: false},
	chaosRate: {name: "Chaos Rate", startsAtOne: false},
	empowerDropoff: {name: "Empower Dropoff", startsAtOne: true, isPercent: true},
	empowerTrainRate: {name: "Empower Train Rate", startsAtOne: true, isPercent: true},
	empowerBuildRate: {name: "Empower Build Rate", startsAtOne: true, isPercent: true},
	conversionResistance: {name: "Conversion Resistance", startsAtOne: true, isPercent: true}, //Missing effect
	conversionRate: {name: "Conversion Rate", startsAtOne: false, lowerIsBetter: true},
	convertInfantryRate: {name: "Convert Infantry Rate", startsAtOne: false, lowerIsBetter: true},
	convertSiegeRate: {name: "Convert Siege Rate", startsAtOne: false, lowerIsBetter: true},
	convertCavalryRate: {name: "Convert Cavalry Rate", startsAtOne: false, lowerIsBetter: true},
	conversionRange: {name: "Conversion Range", startsAtOne: false},
	empowerResearch: {name: "Train/Research Rate", startsAtOne: true, round2: true},
	carryCapacity: {name: "Carry Capacity", startsAtOne: false},
	carryCapacityFood: {name: "Food Carry Capacity", startsAtOne: false},
	carryCapacityWood: {name: "Wood Carry Capacity", startsAtOne: false},
	carryCapacityGold: {name: "Gold Carry Capacity", startsAtOne: false},
	carryCapacityStone: {name: "Stone Carry Capacity", startsAtOne: false},
	conservationStone: {name: "Stone Conservation", startsAtOne: false},
	trade: {name: "Trade", startsAtOne: true}, //Needs to be filled manually
	selfHeal: {name: "Enables Self-Heal Action", startsAtOne: true},
	regen: {name: "Health Regen. Per Second", startsAtOne: false},
	snareImmunity: {name: "Grants Snare Immunity", startsAtOne: true, noDisplay: true},
	chargeAttack: {name: "Charge Attack Damage", startsAtOne: true},
	charge: {name: "Grants Charge", startsAtOne: true, noDisplay: true},
	attackMobileUnits: {name: "Grants Ability to Attack Mobile Units", startsAtOne: true, noDisplay: true},
	attackRate: {name: "Attack Rate", startsAtOne: true},
	buildLimit: {name: "Build Limit", startsAtOne: false},
	ignoreArmor: {name: "Ignore Armor", startsAtOne: true, isPercent: true},
	burning: {name: "Burning Damage over 8 Seconds", startsAtOne: true, isPercent: true},
	watchPostConstructionSpeed: {name: "Watch Post Construction Speed", startsAtOne: true}
}

var effectsContainer = document.getElementsByClassName("effects-display-container")[0];

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
		if(key.indexOf("cost") != 0)
			createEffectElement(key, effects[key].name);
	}
}

//loadEffects();
