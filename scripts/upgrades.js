var upgrades = {
	agogeDiscipline:  {
		name: "Agoge Discipline",
		img: "img/Upgrades/AgogeDiscipline.png",
		effects: [
			{amount: -25.0, positive: true, type: "timeTrain"}
		],
		cost: {
			food: 200,
			gold: 100
		}
	}
};

var upgradesContainer = document.getElementById("upgrades-container");
var upgradeElements = {};

function createUpgradeElement(key, upgrade) {
	let container = document.createElement('div');

	let icon = document.createElement('img');
	icon.classList.add("upgrade");
	icon.src = upgrade.img;

	let tooltip = createUpgradeTooptip(upgrade);
	let input = document.createElement('input');
	input.classList.add('upgrade-active');
	input.type = "hidden";
	input.value = 0;

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
	for(let key in upgrades)
		upgradeElements[key].style.display = "none";
}

function loadUpgrades() {
	console.log("Loading upgrades...");
	for(let key in upgrades) {
		let element = createUpgradeElement(key, upgrades[key]);
		upgradeElements[key] = element;
		upgradesContainer.appendChild(element);

		element.addEventListener('click', function(event) {
			let element = event.target;
			let input = element.parentElement.getElementsByClassName('upgrade-active')[0];
			if(!element.classList.contains("active")) {
				input.value = 1;
				element.classList.add("active");
			} else {
				input.value = 0;
				element.classList.remove("active");
			}

			updateStats();
		});
	}
}

loadUpgrades();