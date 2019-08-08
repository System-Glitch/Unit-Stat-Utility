var advisorSelectors = [];
var advisorSelectorsElements = [];

var AdvisorSelector = function(element, select) {
	this.element = element;
	this.select = select;
	advisorSelectors.push(this);
	advisorSelectorsElements.push(this.element);
}

AdvisorSelector.prototype.loadExisting = function() {

}

AdvisorSelector.prototype.select = function(advisor) {

}

AdvisorSelector.prototype.clear = function() {
	this.element.innerHTML = ""; //Clear
	this.effects = [];
}

AdvisorSelector.prototype.clearRarities = function() {

}

AdvisorSelector.prototype.addRarity = function(rarity) {

}

AdvisorSelector.prototype.show = function() {
	hideAllStatSelectors();
	hideAllAdvisorSelectors();
	hideAllDropdowns();
	this.element.style.display = "table";
}

AdvisorSelector.prototype.hide = function() {
	this.element.style.display = "none";
}

function createRarityElement(rarity) {
	let element = document.createElement("span");
	element.classList.add("level");
	element.textContent = level;
	return element;
}

function hideAllAdvisorSelectors() {
	for(let i = 0 ; i < advisorSelectors.length ; i++)
		advisorSelectors[i].hide();
}

function registerHideAdvisorSelectorsListener() {
	document.addEventListener('click', function(event) {
		let parent = event.target.parentElement;
		if (advisorSelectorsElements.indexOf(event.target) != 1) { // TODO and check target class and parent target class
			hideAllAdvisorSelectors();
		}
	});
}

(function() {
	registerHideAdvisorSelectorsListener();
})();