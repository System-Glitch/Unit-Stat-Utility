var advisorSelectors = [];
var advisorSelectorsElements = [];

var AdvisorSelector = function(element, select) {
	this.element = element;
	this.selector = select;
	this.advisor = undefined;
	this.advisorOptionsElements = [];
	advisorSelectors.push(this);
	advisorSelectorsElements.push(this.element);
}

AdvisorSelector.prototype.loadExisting = function() {
	this.advisorOptionsElements = this.element.getElementsByClassName('advisor-option');
	for(let i = 0 ; i < this.advisorOptionsElements.length ; i++) {
		const option = this.advisorOptionsElements[i];
		option.onclick = function(e) {
			this.select(i);
		}.bind(this);
	}
}

AdvisorSelector.prototype.loadAdvisor = function(advisor) {
	this.clear();
	this.advisor = advisor;
	if(advisor != undefined) {
		this.element.appendChild(createAdvisorTitle(advisor.name));

		if(advisor.rarities != undefined) {
			this.createAdvisorOptions(advisor);
			this.select(0);
		} else {
			this.element.appendChild(createAdvisorNoOption());
		}
	} else {
		this.element.appendChild(createAdvisorNoOption());
	}
}

AdvisorSelector.prototype.createAdvisorOptions = function(advisor) {
	for(let key in advisor.rarities) {
		const rarity = advisor.rarities[key];
		const index = this.advisorOptionsElements.length;
		const option = document.createElement('div');
		option.classList.add('advisor-option');
		option.dataset.rarity = key;
		option.innerHTML = components.advisorOption(rarity.id, rarity.description);
		option.onclick = function(e) {
			this.select(index);
		}.bind(this);
		this.advisorOptionsElements.push(option);
		this.element.appendChild(option);
	}
}

AdvisorSelector.prototype.select = function(optionIndex) {
	const element = this.advisorOptionsElements[optionIndex];
	if(element == undefined) return;

	const option = this.advisor.rarities[element.dataset.rarity];
	this.selector.selectedOption.getElementsByClassName('advisor-select-img')[0].src = this.selector.imgPath + option.id + '.png';
	this.selector.effectiveAdvisor = option;
	this.selector.element.dataset.suboption = optionIndex;

	this.selector.unitObject.state.advisors[this.selector.element.dataset.age] = {id: parseInt(this.selector.container.dataset.option), rarity: optionIndex};
	this.selector.unitObject.updateStats();
	updateComparison("all");
	hideAllAdvisorSelectors();
}

AdvisorSelector.prototype.clear = function() {
	this.element.innerHTML = ""; //Clear
	this.advisorOptionsElements = [];
	this.selector.effectiveAdvisor = undefined;
}

AdvisorSelector.prototype.show = function() {
	hideAllStatSelectors();
	hideAllAdvisorSelectors();
	hideAllDropdowns();
	this.element.style.display = "flex";
}

AdvisorSelector.prototype.hide = function() {
	this.element.style.display = "none";
}

function createAdvisorTitle(name) {
	let element = document.createElement("span");
	element.classList.add("advisor-title");
	element.innerHTML = name; 
	return element;
}

function createAdvisorNoOption() {
	let element = document.createElement("span");
	element.textContent = 'No options.';
	return element;
}

function hideAllAdvisorSelectors() {
	for(let i = 0 ; i < advisorSelectors.length ; i++)
		advisorSelectors[i].hide();
}

function registerHideAdvisorSelectorsListener() {
	document.addEventListener('click', function(event) {
		let parent = event.target.parentElement;
		if (advisorSelectorsElements.indexOf(event.target) != 1 && 
			(event.target == null || !event.target.classList.contains('advisor-rarity-selector')) &&
			(parent == null || (!parent.classList.contains('advisor-option')) && !parent.classList.contains('advisor-rarity-selector'))) {
			hideAllAdvisorSelectors();
		}
	});
}

(function() {
	registerHideAdvisorSelectorsListener();
})();