var unitContainer = document.getElementById("unit-container");

function duplicateUnitDOM(unit) {
	let div = document.createElement("div");
	for(let i = 0 ; i < unit.classList.length ; i++)
		div.classList.add(unit.classList.item(i));
	div.innerHTML = unit.innerHTML;

	let shareButton = div.getElementsByClassName("share-button")[0];
	if(shareButton != undefined) shareButton.remove();

	unit.getElementsByClassName("compare-button")[0].style.display = 'none';
	div.getElementsByClassName("compare-button")[0].addEventListener("click", compareClicked);

	div.getElementsByClassName("select-search")[0].value = unit.getElementsByClassName("select-search")[0].value;

	let statSelectorsSrc = unit.getElementsByClassName("stat-selector-slider");
	let statSelectorsDest = div.getElementsByClassName("stat-selector-slider");
	for(let i = 0 ; i < statSelectorsSrc.length ; i++) {
		statSelectorsDest[i].value = statSelectorsSrc[i].value;
		let valueElement = statSelectorsDest[i].parentElement.getElementsByClassName('stat-selector-value-input')[0];
		valueElement.value = round(statSelectorsSrc[i].value);
	}

	return div;
}

function compareClicked(event) {

	if(mode == "LOADING") return;

	let unit = event.target.closest(".unit");
	let duplicate = duplicateUnitDOM(unit);
	let object = new UnitObject(duplicate, true);

	unitContainer.appendChild(duplicate);
	//object.updateUpgrades(object.unitSelect.unit);
	unitObjects.push(object);
}

function initCompareButtons() {
	let buttons = document.getElementsByClassName("compare-button");
	for(let i = 0 ; i < buttons.length ; i++)
		buttons[i].addEventListener("click", compareClicked);
}

(function() {
	initCompareButtons();
})();
