var upgrades = {
	agogeDiscipline: {
		isChain: false,
		name: "Agoge Discipline",
		img: "img/Upgrades/AgogeDiscipline.png",
		effects: [
			{amount: -25.0, positive: true, type: "timeTrain"}
		],
		cost: {
			food: 200,
			gold: 100
		}
	},
	murderHoles: {
		isChain: false,
		name: "Murder Holes",
		img: "img/Upgrades/MurderHoles.png",
		effects: [
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			wood: 50,
			gold: 50
		}
	},
	ashlarMasonry: {
		isChain: false,
		name: "Ashlar Masonry",
		img: "img/Upgrades/AshlarMasonry.png",
		effects: [
			{amount: 25.0, positive: true, type: "health"}
		],
		cost: {
			wood: 100,
			stone: 100
		}
	},
	greekFire: {
		isChain: false,
		name: "Greek Fire",
		img: "img/Upgrades/GreekFire.png",
		effects: [
			{amount: 50.0, positive: true, type: "multiplierBuildings"},
			{amount: 25.0, positive: true, type: "multiplierSiege"},
			{amount: 25.0, positive: true, type: "multiplierShips"}
		],
		cost: {
			wood: 200,
			gold: 300
		}
	},
	stables: {
		isChain: true,
		noneStables: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		horsemanship: {
			isChain: false,
			name: "Horsemanship",
			img: "img/Upgrades/Horsemanship.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 150,
				gold: 100
			}
		},
		purebred: {
			isChain: false,
			name: "Purebred",
			img: "img/Upgrades/Purebred.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 300,
				gold: 200
			}
		},
		horseshoes: {
			isChain: false,
			name: "Horseshoes",
			img: "img/Upgrades/Horseshoes.png",
			effects: [
				{amount: 10.0, positive: true, type: "health"},
				{amount: 10.0, positive: true, type: "damage"},
				{amount: 5.0, positive: true, type: "speed"},
			],
			cost: {
				food: 900,
				gold: 600
			}
		},
	},
	stablesEgypt: {
		isChain: true,
		noneStablesEgypt: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		mountedTraining: {
			isChain: false,
			name: "Mounted Training",
			img: "img/Upgrades/MountedTraining.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 150,
				gold: 100
			}
		},
		purebredEgypt: {
			isChain: false,
			name: "Purebred",
			img: "img/Upgrades/Purebred.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 300,
				gold: 200
			}
		},
		desertConditioning: {
			isChain: false,
			name: "Desert Conditioning",
			img: "img/Upgrades/DesertConditioning.png",
			effects: [
				{amount: 10.0, positive: true, type: "health"},
				{amount: 10.0, positive: true, type: "damage"},
				{amount: 5.0, positive: true, type: "speed"},
			],
			cost: {
				food: 900,
				gold: 600
			}
		},
	},
	armoryMelee: {
		isChain: true,
		noneArmoryMelee: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		temper: {
			isChain: false,
			name: "Temper",
			img: "img/Upgrades/Temper.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		ironSmelting: {
			isChain: false,
			name: "Iron Smelting",
			img: "img/Upgrades/IronSmelting.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		damascusSteel: {
			isChain: false,
			name: "Damascus Steel",
			img: "img/Upgrades/DamascusSteel.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryArmor: {
		isChain: true,
		noneArmoryArmor: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		scaleMail: {
			isChain: false,
			name: "Scale Mail",
			img: "img/Upgrades/ScaleMail.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		chainMail: {
			isChain: false,
			name: "Chain Mail",
			img: "img/Upgrades/ChainMail.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		laminarArmor: {
			isChain: false,
			name: "Laminar Armor",
			img: "img/Upgrades/LaminarArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryArmorEgyptian: {
		isChain: true,
		noneArmoryArmorEgyptian: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		scaleMailAndHide: {
			isChain: false,
			name: "Scale Mail and Hide Armor",
			img: "img/Upgrades/ScaleMailandHideArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"},
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		chainMailAndBoiledLeather: {
			isChain: false,
			name: "Chain Mail and Boiled-Leather Armor",
			img: "img/Upgrades/ChainMailandBoiled-LeatherArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"},
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		lamellarAndLacqueredLeather: {
			isChain: false,
			name: "Lamellar and Lacquered-Leather Armor",
			img: "img/Upgrades/LamellarandLacquered-LeatherArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"},
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryArrows: {
		isChain: true,
		noneArmoryArrows: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		barbedArrows: {
			isChain: false,
			name: "Barbed Arrows",
			img: "img/Upgrades/BarbedArrows.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		broadheadArrows: {
			isChain: false,
			name: "Broadhead Arrows",
			img: "img/Upgrades/BroadheadArrows.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		bodkinArrows: {
			isChain: false,
			name: "Bodkin Arrows",
			img: "img/Upgrades/BodkinArrows.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryShield: {
		isChain: true,
		noneArmoryShield: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		shieldRim: {
			isChain: false,
			name: "Shield Rim",
			img: "img/Upgrades/ShieldRim.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		shieldTruss: {
			isChain: false,
			name: "Shield Truss",
			img: "img/Upgrades/ShieldTruss.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		shieldBoss: {
			isChain: false,
			name: "Shield Boss",
			img: "img/Upgrades/ShieldBoss.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	}
};

var upgradesContainer = document.getElementById("upgrades-container");
var loneUpgradesContainer = document.getElementById("lone-upgrades-container");
var upgradeElements = {};

function createUpgradeElement(key, upgrade, chain) {
	let container = document.createElement('div');

	let icon = document.createElement('img');
	icon.classList.add("upgrade");
	icon.src = upgrade.img;

	let tooltip = createUpgradeTooptip(upgrade);
	let input = document.createElement('input');
	input.classList.add('upgrade-active');
	input.type = "hidden";
	input.value = 0;

	if(chain != undefined) {
		container.classList.add('chained-upgrade');
		input.dataset.chain = chain;
	}

	container.appendChild(icon);
	container.appendChild(tooltip);
	container.appendChild(input);

	return container;
}

function createUpgradeTooptip(upgrade) {
	let tooltip = document.createElement('div');
	tooltip.classList.add('upgrade-tooltip');

	tooltip.innerHTML = '<span class="upgrade-title">' + upgrade.name + '</span>';
	tooltip.innerHTML += createCostSpan(upgrade.cost);

	for(let key in upgrade.effects) {
		let effect = upgrade.effects[key];

		let html = components.upgradeEffect(effects[effect.type].name, effect.amount);
		let element = createEffectElement(html, effect.positive);
		tooltip.appendChild(element);
	}
	return tooltip;
}

function createCostSpan(cost) {
	let content = '';
	for(let key in cost)
		content += '<span>' + cost[key] + '</span><img src="img/Resources/' + key + '.png" class="resource-icon">&nbsp;'

	return content;
}

function hideAllUpgrades() {
	for(let key in upgradeElements) {
		let element = upgradeElements[key];
		element.style.display = "none";
		if(element.nextSibling != undefined && !element.nextSibling.classList.contains('upgrade-row')) {
			element.nextSibling.style.display = "none";
			element.nextSibling.classList.remove("active");
		}

		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 0;

		let img = element.getElementsByClassName('upgrade')[0];
		img.classList.remove("active");
	}
}

function toggleUpgrade(element) {

	if(!element.classList.contains("upgrade-arrow")) {
		let input = element.parentElement.getElementsByClassName('upgrade-active')[0];
		input.value = input.value == 1 ? 0 : 1;
	}

	if(!element.classList.contains("active"))
		element.classList.add("active");
	else
		element.classList.remove("active");
}

function enableUpgrade(element) {
	if(!element.classList.contains("upgrade-arrow")) {
		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 1;
	}

	if(element.classList.contains('chained-upgrade'))
		element = element.getElementsByClassName('upgrade')[0];

	element.classList.add("active");
}

function disableUpgrade(element) {
	if(!element.classList.contains("upgrade-arrow")) {
		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 0;
	}

	if(element.classList.contains('chained-upgrade'))
		element = element.getElementsByClassName('upgrade')[0];

	element.classList.remove("active");
}

function loadUpgrade(container, key, upgrade, chain) {
	let element = createUpgradeElement(key, upgrade, chain);
	upgradeElements[key] = element;
	container.appendChild(element);

	element.addEventListener('click', onUpgradeClick);
}

function onUpgradeClick(event) {
	let element = event.target;
	let parent = element.parentElement;

	if(parent.classList.contains("chained-upgrade")) {
		let sibling = parent;
		while((sibling = sibling.previousElementSibling) != null)
			enableUpgrade(sibling);
		sibling = parent;
		while((sibling = sibling.nextElementSibling) != null)
			disableUpgrade(sibling);
		
		enableUpgrade(element.parentElement);
	} else
		toggleUpgrade(element);


	updateStats();
}

function loadUpgradeChain(key, chain) {
	let container = document.createElement('div');
	container.classList.add('upgrade-row');

	for(let key2 in chain) {
		if(key2 == "isChain") continue;

		loadUpgrade(container, key2, chain[key2], key);
		let arrow = document.createElement('span');
		arrow.classList.add('upgrade-arrow');
		arrow.textContent = '➡';
		container.appendChild(arrow);

	}

	container.lastChild.remove(); //Remove last arrow
	upgradesContainer.appendChild(container);
}

function loadUpgrades() {
	console.log("Loading upgrades...");
	for(let key in upgrades) {

		let upgrade = upgrades[key];
		if(upgrade.isChain)
			loadUpgradeChain(key, upgrade);
		else
			loadUpgrade(loneUpgradesContainer, key, upgrade);
	}
}

loadUpgrades();