var upgrades = {
	agogeDiscipline:  {
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

	element.addEventListener('click', function(event) {
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
	});
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