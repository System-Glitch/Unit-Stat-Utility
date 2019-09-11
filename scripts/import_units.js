var effectMapping = {
	population: "PopulationCount",
	speed: "MaxVelocity",
	health: "MaxHitpoints",
	vision: "LOS",
	timeTrain: "TrainPoints",
	timeBuilding: "BuildPoints"
}

var actionEffectMapping = {
	Damage: "damage",
	DamageArea: "splash"
}

var damageBonusMapping = {
	AbstractArcher: "multiplierRanged",
	AbstractArtillery: "multiplierSiege",
	AbstractCavalry: "multiplierCavalry",
	AbstractInfantry: "multiplierInfantry",
	Ship: "multiplierShips",
	Building: "multiplierBuildings",
	Huntable: "multiplierHuntable",
	UnitTypeVillager1: "multiplierVillager"
}

var rateMapping = {
	FishGather: {
		AbstractFish: "gatherFish"
	},
	Gather: {
		AbstractFish: "gatherFish",
		Stone: "gatherStone",
		Huntable: "gatherHunt",
		Tree: "gatherWood",
		Gold: "gatherGold",
		AbstractFruit: "gatherBerry",
		AbstractFarm: "gatherFarm"
	},
	Building: {
		Building: "buildingSpeed"
	},
	Heal: {
		LogicalTypeHealed: "healRate"
	},
	Convert: {
		ConvertableCavalry: "convertCavalryRate",
		ConvertableInfantry: "convertInfantryRate",
		ConvertableSiege: "convertSiegeRate",
		StandardConvertable: "conversionRate"
	}
}

var rangeMapping = {
	Heal: "healRange",
	Convert: "conversionRange",
	RangedAttack: "range"
}

var armorMapping = {
	Ranged: "armorPierce",
	Siege: "armorCrush",
	Cavalry: "armorCavalry",
	Hand: "armorInfantry"
}

var gearMapping = {
	ArmorPlt: "armorPlating",
	ArmorBuilding: "reinforcedConstruction",
	GearBldg: "constructionAddition",
	Tools: "workTool",
	Spears2H: "heavySpear",
	Spears1H: "lightSpear",
	ArmorMed: "mediumArmor",
	Gear: "soldiersGear",
	Swords1H: "sword",
	ArmorCloth: "clothArmor",
	ArmorLgt: "lightArmor",
	Javalins: "javelin",
	BallistaArms: "throwingArm",
	Merchant: "merchantGear",
	GearBoat: "shipAccessory",
	Staffs2H: "holyStaff",
	FireThrowers: "firePot",
	GearSiege: "engineeringAccessory",
	ScoutSpecial1H: "scoutSpecial",
	GearVill: "laborerGear",
	GearPriest: "religiousItem",
	Warpaint: "warpaint"

}

var upgradesMapping = {
	greeks: {
		AbstractInfantry: ["agogeDiscipline", "barracks", "armoryMelee"],
		AbstractArcher: ["agogeDiscipline", "greekFire", "archery", "armoryArrows"],
		AbstractCavalry: ["agogeDiscipline", "stables", "armoryMelee"],
		AbstractPriest: ["divineVision"],
		Building: ["ashlarMasonry", "townWatch"],
		Military: ["armoryArmor", "armoryShield"],
	},
	egyptians: {
		AbstractInfantry: ["barracks", "armoryMelee"],
		AbstractArcher: ["armoryArrows"],
		AbstractPriest: ["paidinBlood", "essenceoftheCobra", "divineProduction", "strengthoftheGods", "touchofRa", "sightoftheSun"],
		Military: ["armoryArmorEgyptian"],
		Building: ["townWatch"]
	},
	persians: {
		AbstractInfantry: ["armoryMelee"],
		AbstractArcher: ["archery", "armoryArrows"],
		AbstractCavalry: ["stables", "armoryMelee"],
		Military: ["armoryArmor", "armoryShield"],
		Building: ["townWatch"]
	},
	celts: {
		AbstractInfantry: ["barracks", "armoryMelee", "brewing", "furorCeltica", "headhunting"],
		AbstractArcher: ["archery", "armoryArrows"],
		AbstractCavalry: ["stables", "armoryMelee"],
		Military: ["armoryArmor", "armoryShield"],
		AbstractPriest: ["giftOfSequana"],
		Building: ["townWatch"]
	},
	babylonians: {
		AbstractInfantry: ["barracks", "armoryMelee", "pharmacology"],
		AbstractArcher: ["armoryArrows", "pharmacology"],
		AbstractCavalry: ["stables", "armoryMelee", "pharmacology"],
		Military: ["armoryArmor", "armoryShield", "totalWar"],
		Building: ["townWatch"]
	},
	norse: {
		AbstractInfantry: ["barracks", "armoryMelee"],
		AbstractArcher: ["archery", "armoryArrows"],
		AbstractCavalry: ["stablesNorse", "armoryMelee"],
		Military: ["armoryArmor", "armoryShield"],
		Building: ["townWatch"]
	}
}

var upgradesSpecific = {
	Gr_Bldg_GuardTower: ["greekFire", "murderHoles", "tower"],
	Eg_Bldg_GuardTower: ["tower"],
	Ce_Bldg_GuardTower: ["fortifiedTowerLone"],
	Pe_Bldg_GuardTower: ["fortifiedTowerLone"],
	Ba_Bldg_GuardTower: ["tower","arithmetic"],
	No_Bldg_GuardTower: ["tower"],
	Gr_Bldg_Fortress: ["greekFire"],
	Ba_Bldg_Fortress: ["arithmetic"],
	No_Bldg_Fortress: ["burningPitch"],
	Ba_Bldg_TownCenter: ["arithmetic"],
	Eg_Arc_ChariotArcher: ["stablesEgypt", "championChariotArcher"],
	Eg_Arc_ElephantArcher: ["championElephantArcher"],
	Eg_Arc_Slinger: ["barracks", "championSlinger"],
	Eg_Cav_CamelRider: ["championCamelRider", 'armoryMelee'],
	Eg_Cav_WarElephant: ["championWarElephant", "armoryMelee"],
	Eg_Shp_CatTrireme: ["championCatapultTrireme"],
	Eg_Shp_Trireme: ["championTrireme","armoryArrows"],
	Gr_Shp_Trireme: ["championTrireme","armoryArrows"],
	Gr_Shp_FireShip: ["championFireShip"],
	Eg_Shp_FireShip: ["championFireShip"],
	No_Shp_FireShip: ["championFireShip"],
	Eg_Sie_SiegeTower: ["championSiegeTower"],
	Eg_Sie_Catapult: ["championCatapult"],
	Gr_Sie_Palintonon: ["championPalintonon"],
	Pe_Sie_Palintonon: ["championPalintonon","relentlessZeal"],
	Ba_Sie_Palintonon: ["championPalintonon"],
	Eg_Sie_Trebuchet: ["championPalintonon"],
	Eg_Inf_Axeman: ["championAxeman"],
	Eg_Inf_Spearman: ["championSpearmanEgypt"],
	Gr_Inf_Spearman: ["championSpearmanGreece"],
	Gr_Inf_Hypaspist: ["championHypaspist"],
	Gr_Inf_Hoplite: ["championHoplite"],
	Gr_Arc_Toxotai: ["championToxotes"],
	Gr_Arc_Peltast: ["championPeltast"],
	Gr_Arc_Gastrophes: ["championGastraphetes"],
	Gr_Cav_Sarissophoroi: ["championSarissophoroi"],
	Gr_Cav_Podromos: ["championProdromos"],
	Gr_Cav_Hippikon: ["championHippikon"],
	Gr_Shp_CatTrireme: ["championBallistaTrireme"],
	Gr_Sie_BatteringRam: ["championBatteringRam"],
	Gr_Sie_Ballista: ["championBallista"],
	Pe_Inf_Sparabara: ["championSparabara", "shieldWall", "barracks", "rigorousTraining"],
	Pe_Shp_Galley: ["championGalley","armoryArrows"],
	Pe_Inf_Spearman: ["championSpearmanPersia", "barracks", "rigorousTraining"],
	Pe_Arc_Bowman: ["championBowman","blotOuttheSun", "rigorousTraining"],
	Pe_Cav_Asabara: ["championAsabara", "rigorousTraining"],
	Pe_Shp_MangonelGalley: ["championMangonelGalley"],
	Pe_Shp_RamShip: ["championRamShipPersia"],
	Pe_Inf_Immortal: ["championImmortal","relentlessZeal"],
	Pe_Arc_Takabara: ["championTakabara","blotOuttheSun", "rigorousTraining"],
	Pe_Cav_Cataphract: ["championCataphract", "rigorousTraining"],
	Pe_Arc_MountedArcher: ["championMountedArcher", "rigorousTraining"],
	Pe_Sie_BatteringRam: ["championBatteringRamPersia","relentlessZeal"],
	Pe_Sie_WarWagon: ["championWarWagon","relentlessZeal"],
	Ce_Inf_Spearman: ["championSpearmanCelt"],
	Ce_Shp_Warship: ["championSwanship","armoryArrows"],
	Ce_Inf_LongSwordsman: ["championLongSwordsman"],
	Ce_Arc_Slinger: ["championSlingerCelt"],
	Ce_Inf_WoadRaider: ["championWoadRaider"],
	Ce_Inf_Champion: ["championChampion"],
	Ce_Arc_Bowman: ["championBowmanCelt"],
	Ce_Cav_Horseman: ["championHorseman"],
	Ce_Sie_Ram: ["championRam"],
	Ce_Sie_Palintonon: ["championStoneThrower"],
	Ce_Arc_Carpentom: ["championCarpentom"],
	Gr_Civ_Caravan: ["saddleBags"],
	Eg_Civ_Caravan: ["saddleBags"],
	Ce_Civ_Caravan: ["saddleBags", "woodenRoads"],
	Pe_Civ_Caravan: ["saddleBags", "royalRoads"],
	Ba_Civ_Caravan: ["saddleBags"],
	No_Civ_Caravan: ["saddleBags"],
	Gr_Civ_FishingBoat: ["fishing","armoryArrows","armoryArmor","armoryShield"],
	Eg_Civ_FishingBoat: ["fishing","armoryArrows","armoryArmorEgyptian"],
	Pe_Civ_FishingBoat: ["netLuresLone","armoryArrows","armoryArmor","armoryShield"],
	Ce_Civ_FishingBoat: ["fishingPartial","armoryArrows","armoryArmor","armoryShield"],
	Ba_Civ_FishingBoat: ["fishingPartial","armoryArrows","armoryArmor","armoryShield"],
	No_Civ_FishingBoat: ["fishing","armoryArrows","armoryArmor","armoryShield"],
	Gr_Civ_UtilityBoat: ["armoryArrows","armoryArmor","armoryShield"],
	Eg_Civ_UtilityBoat: ["armoryArrows","armoryArmorEgyptian"],
	Pe_Civ_UtilityBoat: ["armoryArrows","armoryArmor","armoryShield"],
	Ce_Civ_UtilityBoat: ["cargoExpansion","armoryArrows","armoryArmor","armoryShield"],
	Ba_Civ_UtilityBoat: ["armoryArrows","armoryArmor","armoryShield"],
	No_Civ_UtilityBoat: ["armoryArrows","armoryArmor","armoryShield"],
	Pe_Civ_Villager: ["paidLabor"],
	Pe_Spc_Magus: ["withoutNumber"],
	Ce_Spc_Druid: ["giftOfBalor"],
	Ce_Civ_Villager: ["callToArms"],
	Ba_Inf_Spearman: ["championSpearmanBabylon"],
	Ba_Shp_Bireme: ["championBireme","armoryArrows"],
	Ba_Arc_WarChariot: ["championWarChariot", "ironWheels", "stables"],
	Ba_Sie_SiegeTower: ["ironWheels"],
	Ba_Inf_ShieldBearer: ["championShieldBearer"],
	Ba_Arc_Slinger: ["championSlingerBabylon", "archery"],
	Ba_Arc_Bowman: ["championBowmanBabylon", "archery"],
	Ba_Cav_Lancer: ["championLancer"],
	Ba_Shp_RamShip: ["championRamShipBabylon"],
	Ba_Inf_RoyalGuard: ["championRoyalGuard"],
	Ba_Inf_Sapper: ["championSapper"],
	Ba_Arc_ChariotArcher: ["championChariotArcherBabylon","ironWheels","stables"],
	Ba_Arc_MountedArcher: ["championMountedArcherBabylon"],
	Ba_Sie_SiegeTower: ["championSiegeTowerBabylon"],
	Ba_Civ_OxCart: ["reinforcedCart", "cargoExpansionBabylon", "ironWheelsCart"],
	Ba_Spc_Priest: ["codeofHammurabi"],
	No_Inf_Chief: ["armoryMelee", "championChief"],
	No_Cav_WarDog: ["dogTraining"],
	No_Inf_Spearman: ["championSpearmanNorse"],
	No_Shp_Longship: ["championLongship","armoryArrows"],
	No_Inf_ThrowingAxeman: ["championThrowingAxeman"],
	No_Arc_Skirmisher: ["championSkirmisher"],
	No_Cav_Raider: ["championRaider"],
	No_Inf_Axeman: ["championHarjar"],
	No_Inf_Ulfhednar: ["championUlfheoinn"],
	No_Inf_Berserker: ["championBerserker"],
	No_Arc_Bowman: ["championBowmanNorse"],
	No_Cav_Horseman: ["championHorsemanNorse"],
	No_Sie_Ram: ["championFarbjoor"],
	No_Sie_Palintonon: ["championLogThrower"],
	No_Spc_Seer: ["eyeofWodan"],
	No_Spc_Bard: ["drinkOfAegir"],
	Gr_Civ_Villager: ["loom", "huntingDogs", "pickersGloves", "woodGathering", "goldGatheringPartial", "stoneGathering", "farmGatheringPartial", "carryUpgrades"],
	Eg_Civ_Villager: ["loom", "huntingDogs", "pickersGloves", "woodGatheringPartial", "goldGathering", "stoneGathering", "farmGathering", "carryUpgrades"],
	Ce_Civ_Villager: ["loom", "huntingDogs", "pickersGloves", "woodGathering", "pickaxeLone", "stoneGathering", "farmGathering", "carryUpgrades"],
	Pe_Civ_Villager: ["loom", "huntingDogs", "pickersGloves", "woodGatheringPartial", "goldGathering", "stoneGathering", "farmGathering", "carryUpgrades"],
	Ba_Civ_Villager: ["loom", "huntingDogs", "pickersGloves", "woodGathering", "goldGatheringPartial", "chiselLone", "plowLone"],
	No_Civ_Villager: ["loom", "huntingDogs", "pickersGloves", "woodGathering", "goldGatheringPartial", "stoneGathering", "farmGathering", "carryUpgrades"],
}

var civNameMapping = {
	greeks: "Greek",
	egyptians: "Egyptian",
	persians: "Persian",
	celts: "Celtic",
	babylonians: "Babylonian",
	norse: "Norse"
}

var ignoredGear = ["Clubs2H"];
var ignoredUnits = [
	"Gr_Inf_Clubman", "Gr_Sie_Catapult", "Gr_Bldg_WarHut", "Gr_Bldg_ArcMirrorTower",
	"Eg_Spc_PriestAmen", "Eg_Bldg_ArcherRange", "Gr_Bldg_TrojanHorse", "Eg_Bldg_WonderFoundation"
];

var manualEffects = {
	Gr_Civ_Villager: {carryCapacityFood: 10, carryCapacityWood: 10, carryCapacityGold: 10, carryCapacityStone: 10},
	Eg_Civ_Villager: {carryCapacityFood: 10, carryCapacityWood: 10, carryCapacityGold: 10, carryCapacityStone: 10},
	Ce_Civ_Villager: {carryCapacityFood: 10, carryCapacityWood: 10, carryCapacityGold: 10, carryCapacityStone: 10},
	Pe_Civ_Villager: {carryCapacityFood: 10, carryCapacityWood: 10, carryCapacityGold: 10, carryCapacityStone: 10},
	Ba_Civ_Villager: {carryCapacityFood: 10, carryCapacityWood: 10, carryCapacityGold: 10, carryCapacityStone: 10},
	No_Civ_Villager: {carryCapacityFood: 10, carryCapacityWood: 10, carryCapacityGold: 10, carryCapacityStone: 10},
	Gr_Civ_Caravan: {carryCapacityGold: 150},
	Eg_Civ_Caravan: {carryCapacityGold: 150},
	Ce_Civ_Caravan: {carryCapacityGold: 150},
	Pe_Civ_Caravan: {carryCapacityGold: 150},
	Ba_Civ_Caravan: {carryCapacityGold: 150},
	No_Civ_Caravan: {carryCapacityGold: 150},
	Gr_Civ_UtilityBoat: {carryCapacityGold: 300},
	Eg_Civ_UtilityBoat: {carryCapacityGold: 300},
	Ce_Civ_UtilityBoat: {carryCapacityGold: 300},
	Pe_Civ_UtilityBoat: {carryCapacityGold: 300},
	Ba_Civ_UtilityBoat: {carryCapacityGold: 300},
	No_Civ_UtilityBoat: {carryCapacityGold: 300},
	Gr_Civ_FishingBoat: {carryCapacityFood: 150},
	Eg_Civ_FishingBoat: {carryCapacityFood: 150},
	Ce_Civ_FishingBoat: {carryCapacityFood: 150},
	Pe_Civ_FishingBoat: {carryCapacityFood: 150},
	Ba_Civ_FishingBoat: {carryCapacityFood: 150},
	No_Civ_FishingBoat: {carryCapacityFood: 150},
	Eg_Spc_PriestSet: {chaosRange: 32, chaosRate: 10},
}

var manualIcon = {
	Ce_Bldg_SacredGrove: "SacredGrove64.png",
	Gr_Cav_Sarissophoroi: "Sarissophoroi64.png"
}

function getElementsByAttribute(tag, attr, attrValue) {
	let elems = Array.prototype.slice.call(strings.getElementsByTagName(tag), 0);
	return elems.filter(node => node.getAttribute(attr) == attrValue)[0].textContent;
}

function firstUpper(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function firstLower(string) {
	return string.charAt(0).toLowerCase() + string.slice(1);
}

function getIcon(unit) {
	if(manualIcon[unit] != undefined) {
		return manualIcon[unit];
	} else {
		let icon = unit.getElementsByTagName('Icon')[0].textContent;
		icon = icon.substring(icon.lastIndexOf('\\')+1, icon.lastIndexOf('_ua')) + ".png";
		return icon;
	}
}

function getName(unit) {
	return getElementsByAttribute("string", "_locid", unit.getElementsByTagName('DisplayNameID')[0].textContent);
}

function getStats(unit) {

	let stats = {};
	let unitName = unit.getAttribute('name');

	//Manual
	if(manualEffects[unitName] != undefined) {
		for(let key in manualEffects[unitName])
			stats[key] = manualEffects[unitName][key];
	}

	//Cost
	let costNodes = unit.getElementsByTagName("Cost");
	for(let i = 0 ; i < costNodes.length ; i++) {
		let node = costNodes[i];
		stats["cost" + firstUpper(node.getAttribute('resourcetype'))] = parseFloat(node.textContent);
	}

	//Armor
	let armorNodes = unit.getElementsByTagName("Armor");
	for(let i = 0 ; i < armorNodes.length ; i++) {
		let node = armorNodes[i];
		stats[armorMapping[node.getAttribute('type')]] = parseFloat(node.getAttribute('value'));
	}

	//Action effects and bonuses
	let actionNodes = unit.getElementsByTagName("ProtoAction");
	for(let i = 0 ; i < actionNodes.length ; i++) {
		let node = actionNodes[i];
		let child = node.childNodes;
		let type = undefined;
		for(let j = 0 ; j < child.length ; j++) {
			let childNode = child[j];
			let name = childNode.tagName;
			let effect = actionEffectMapping[name];
			if(name == "Name")
				type = childNode.textContent;
			else if(name == "MaxRange") {
				let key = rangeMapping[type];
				if(key != undefined)
					stats[key] = parseFloat(childNode.textContent);
			} else if(effect != undefined)
				stats[effect] = parseFloat(childNode.textContent);
			else if(name == "DamageBonus")
				stats[damageBonusMapping[childNode.getAttribute("type")]] = parseFloat(childNode.textContent);
			else if(name == "Rate" && rateMapping[type] != undefined) {
				let key = rateMapping[type][childNode.getAttribute("type")];
				if(key != undefined)
					stats[key] = parseFloat(childNode.textContent);
			}
		}
	}

	for(let effect in effectMapping) {
		let elem = unit.getElementsByTagName(effectMapping[effect])[0];
		if(elem == undefined) continue;
		let value = parseFloat(elem.textContent);
		if(!effects[effect].startsAtOne && value == 0) continue;
		stats[effect] = value;
	}

	return stats;
}

function getGear(unit) {
	let result = [];
	for(let i = 1 ; i <= 5 ; i++) {
		let trait = unit.getElementsByTagName("Trait" + i)[0];
		if(trait == undefined) continue;

		let gearType = firstLower(trait.textContent).replace(" ", "");

		if(gearType.charAt(gearType.length-1) == 's')
			gearType = gearType.substring(0, gearType.length - 1);

		if(gear[gearType] != undefined)
			result.push(gearType);
		else if(gearMapping[trait.textContent] != null)
			result.push(gearMapping[trait.textContent]);
		else if(ignoredGear.indexOf(trait.textContent) != -1 || trait.textContent.indexOf("Con") == 0)
			continue;
		else
			throw "Unknown gear type : " + trait.textContent;

	}
	return result;
}

function getCiv(unit) {
	let name = unit.getAttribute('name');
	let civName = undefined;
	if(name.indexOf("Gr_") == 0) { //Greek
		civName = "greeks";
	} else if(name.indexOf("Eg_") == 0) { //Egyptians
		civName = "egyptians";
	} else if(name.indexOf("Pe_") == 0) { //Persians
		civName = "persians";
	} else if(name.indexOf("Ce_") == 0) { //Celts
		civName = "celts";
	} else if(name.indexOf("Ba_") == 0) { //Babylonians
		civName = "babylonians";
	} else if(name.indexOf("No_") == 0) { //Norse
		civName = "norse";
	}
	return civName;
}

function getUpgrades(unit, civName) {
	let result = [];
	let name = unit.getAttribute("name");
	let types = unit.getElementsByTagName("UnitType");

	if(upgradesSpecific[name] != undefined)
		result = result.concat(upgradesSpecific[name]);

	if(upgradesMapping[civName] != undefined) {
		for(let i = 0 ; i < types.length ; i++) {
			let type = types[i].textContent;
			
			if(upgradesMapping[civName][type] != undefined)
				result = result.concat(upgradesMapping[civName][type]);
		}
	}
	return result;
}

var request = new XMLHttpRequest();

request.open("GET", "scripts/protoAge4.xml", false);
request.setRequestHeader("Content-Type", "text/xml");
request.send(null);

var doc = request.responseXML;

request = new XMLHttpRequest();

request.open("GET", "scripts/Stringtablex.xml", false);
request.setRequestHeader("Content-Type", "text/xml");
request.send(null);

var strings = request.responseXML.childNodes[0].childNodes[1]; //English

var units = doc.childNodes[0];

var result = {};

for(let i = 0 ; i < units.children.length; i++) {
	let unit = units.children[i];
	let gearTypes = getGear(unit);
	let name = unit.getAttribute('name');
	let civName = getCiv(unit);

	if(ignoredUnits.indexOf(name) == -1 && gearTypes.length && name.toLowerCase().indexOf("npc") != 0) { //Can wear gear
		result[name] = {
			name: getName(unit)/* + (civNameMapping[civName] != undefined ? " (" + civNameMapping[civName] + ")" : '')*/,
			img: getIcon(unit),
			stats: getStats(unit),
			gear: gearTypes,
			upgrades : getUpgrades(unit, civName)
		};
	}
}

let element = document.getElementById('result');
element.innerHTML = 'var units = {\n';
for(let key in result) {
	element.innerHTML += key + ": " + JSON.stringify(result[key]) + ",\n";
}

element.innerHTML += "}\n";