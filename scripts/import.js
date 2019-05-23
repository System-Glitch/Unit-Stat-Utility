var result = "";

function getEffect(name) {
	for(let key in effects) {
		if(effects[key].name == name)
			return key;
	}
	return null;
}

function parse(type, name) {
	let category = gear[name];
	result += '\t' + name + ": [\n";
	result += "\t\t{name: \"None\", img: '" + (category != undefined ? category[0].img : 'Slot/' + name + 'Slot_ua.png') + "'},\n";

	let index = 1;
	for(let key in celeste.items) {
		let gearPiece = celeste.items[key];
		if(gearPiece.type == type)
			result += parseItem(gearPiece, category != undefined ? category[index++].img : 'Gear/' + gearPiece.trait.trim()) + "\n";
	}
	result += "\t],\n";

	let element = document.getElementById('result');
	element.innerHTML = result;
}

function parseItem(gear, image) {
	let result = "\t\t{\n";

	result += '\t\t\tname: "' + gear.name.trim() + '",\n';
	result += '\t\t\timg: "' + image + '",\n';
	
	result += '\t\t\teffects: {\n';

	//Levels
	for(let key in gear.levels) {
		result += '\t\t\t\t';
		result += gear.levels[key] + ': [\n';

		//Effects
		for(let key2 in gear.effects) {
			let effect = gear.effects[key2];

			let median = (((effect.amount + (effect.scaling * (gear.levels[key] + 3)))-1))*100;
			let min = median * 0.95;
			let max = median * 1.05;
			if(min > max) {
				let tmp = max;
				max = min;
				min = tmp;
			}
			result += '\t\t\t\t\t{min: ' + min + ', max: ' + max + ', positive: ' + effect.beneficial + ', type: "' + getEffect(effect.name) + '"},\n';
		}

		result += '\t\t\t\t],\n';
	}

	result += '\t\t\t}\n';

	return result + "\t\t},";
}

parse("Belly Bow", "bellyBow");
parse("Bow", "bow");
parse("Fire Pot", "firePot");
parse("Fishing Nets", "fishingNet");
parse("Great Axe", "greatAxe");
parse("Heavy Spear", "heavySpear");
parse("Holy Staff", "holyStaff");
parse("Javelin", "javelin");
parse("Light Spear", "lightSpear");
parse("Scepter", "scepter");
parse("Sling", "sling");
parse("Sword", "sword");
parse("Work Tools", "workTool");
parse("Throwing Arm", "throwingArm");
parse("Merchant Gear", "merchantGear");

parse("Arrows", "arrow");
parse("Shield", "shield");
parse("Torc", "torc");

parse("Armor Plating", "armorPlating");
parse("Cloth Armor", "clothArmor");
parse("Medium Armor", "mediumArmor");
parse("Reinforced Construction", "reinforcedConstruction");

parse("Laborer Gear", "laborerGear");
parse("Light Armor", "lightArmor");
parse("Construction Addition", "constructionAddition");
parse("Engineering Accessory", "engineeringAccessory");
parse("Ram Head", "ramHead");
parse("Religious Item", "religiousItem");
parse("Scout Special", "scoutSpecial");
parse("Ship Accessory", "shipAccessory");
parse("Soldiers' Gear", "soldiersGear");
parse("War Horn", "warHorn");
parse("Warpaint", "warpaint");