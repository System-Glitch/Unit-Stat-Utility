var selects = [];
var selectsElements = [];
var gearSelectors = [];
var unitSelectors = [];
var gearSelectorIcon = document.getElementById('gear-selector-unit-icon');

var Select = function(element, imgPath, type, unitObject) {
	this.type = type;
	this.unitObject = unitObject;
	this.imgPath = imgPath;
	this.element = element;
	this.dropdown = element.getElementsByClassName("select-dropdown")[0];
	this.container = element.getElementsByClassName("select-selected")[0];
	this.selectedOption = this.container.getElementsByClassName("select-option")[0];
	this.optionsElements = this.dropdown.getElementsByClassName("select-option");
	this.searchBar = this.dropdown.getElementsByClassName("select-search")[0];
	this.filtersContainer = this.dropdown.getElementsByClassName("select-filters")[0];
	if(this.filtersContainer != undefined) {
		this.filter = '';
		this.filters = this.filtersContainer.getElementsByClassName("filter");
		this.filterOptions(this.filters[0]);
	}

	selectsElements.push(this.dropdown);

	//Register events
	const that = this;
	this.container.onclick = function(event) {
		that.showDropdown();
		event.stopPropagation();
	};

	if(this.filtersContainer != undefined) {
		for(let i = 0 ; i < this.filters.length ; i++) {
			this.filters[i].onclick = function(event) {
				that.filterOptions(event.target);
			}
		}
	}

	if(this.type == "gear") {
		this.category = undefined;
		this.gearId = undefined;
		this.gear = undefined;
		this.statsSelector = new StatsSelector(element.getElementsByClassName("stats-selector")[0], this.unitObject);

		this.cog = this.container.getElementsByClassName('cog')[0];
		this.cog.onclick = function(event) {
			that.statsSelector.show();
			hideAllDropdowns();
			event.stopPropagation();
		}
	} else if(this.type == "advisor") {
		this.advisor = undefined;
		this.advisorId = undefined;
		this.filterAdvisor = undefined;
		this.effectiveAdvisor = undefined;
		this.advisorSelector = new AdvisorSelector(element.getElementsByClassName('advisor-rarity-selector')[0], this);

		this.cog = this.container.getElementsByClassName('cog')[0];
		this.cog.onclick = function(event) {
			this.advisorSelector.show();
			hideAllDropdowns();
			event.stopPropagation();
		}.bind(this)
	}

	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let optionElement = this.optionsElements[i];
		let j = i;
		optionElement.onclick = function(event) {
			that.select(j);
			that.hideDropdown();
			event.stopPropagation();
		}
	}

	//Register search events
	this.searchBar.onkeyup = function(event) {
		that.search(event.target.value);
	};

	if(this.optionsElements.length > 0) {

		if(this.container.dataset.initialized == 0) {
			this.select(0);
		} else {
			var optionIndex = this.container.dataset.option;
			var option = this.optionsElements[optionIndex];
			if(option != undefined) {
				if(type == "unit") {
					this.unitId = option.dataset.unit;
					this.unit = units[this.unitId];
					this.unitObject.state.unit = optionIndex;
				} else if(type == "gear") {
					this.category = option.dataset.category;
					this.gearId = option.dataset.gear;
					this.gear = gear[this.category][this.gearId];

					if(this.element.style.display == "inline-block") {
						this.unitObject.state.gear[this.category] = {id: parseInt(this.gearId), lvl: 0, stats: {}};
					}
					this.statsSelector.category = this.category;

					this.statsSelector.gear = this.gear;
					this.statsSelector.loadExisting();
				} else if(type == "advisor") {
					this.advisorId = option.dataset.advisor;
					this.advisor = advisors[this.element.dataset.age][this.advisorId];
					// TODO load existing
					// TODO unit state
				}
			}
		}

	}

}

Select.prototype.updateOptionImages = function() {
	if(this.type != 'unit') {
		setTimeout(function() {
			if(this.element.dataset.shownOnce == undefined) {
				let options = this.element.getElementsByClassName('select-dropdown')[0].getElementsByClassName('select-option');
				for(let i = 0 ; i < options.length ; i++) {
					const option = options[i];
					let imgPath = undefined;
					switch(this.type) {
						case 'advisor':
							imgPath = 'img/Advisors/' + advisors[this.element.dataset.age][option.dataset.advisor].icon + '.png';
							break;
						case 'gear':
							imgPath = 'img/' + gear[this.category][option.dataset.gear].img;
							break;
					}

					option.getElementsByClassName('select-img')[0].src = imgPath;
				}
				this.element.dataset.shownOnce = 1;
			}
		}.bind(this), 0);
	}
};

Select.prototype.filterOptions = function(filter) {
	for(let i = 0 ; i < this.filters.length ; i++) {
		this.filters[i].classList.remove("active");
	}
	filter.classList.add("active");
	this.filter = filter.dataset.filter;
	this.search(this.searchBar.value);
};

Select.prototype.updateOptions = function() {
	const that = this;
	this.optionsElements = this.dropdown.getElementsByClassName("select-option");
	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let optionElement = this.optionsElements[i];
		let j = i;
		optionElement.onclick = function(event) {
			that.select(j);
			that.hideDropdown();
			event.stopPropagation();
		}
	}
}

Select.prototype.search = function(search) {
	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let element = this.optionsElements[i];
		let name = element.getElementsByClassName('select-name')[0].textContent.toLowerCase();
		if((this.filter == undefined || element.dataset.unit.indexOf(this.filter) == 0) &&
		   (this.filterAdvisor == undefined || this.checkAdvisorAvailable(element)) &&
		   (name.indexOf(search.toLowerCase()) != -1 || search.length == 0)
		  )
			element.style.display = "flex";
		else
			element.style.display = "none";
	}
}

Select.prototype.checkAdvisorAvailable = function(element) {
	const advisor = advisors[this.element.dataset.age][element.dataset.advisor];
	return advisor.civ == undefined || advisor.civ === this.filterAdvisor;
}

Select.prototype.showDropdown = function() {

	hideAllDropdowns();
	hideAllStatSelectors();
	hideAllAdvisorSelectors();

	this.updateOptionImages();
	this.dropdown.style.display = "flex";
	this.searchBar.focus();
}

Select.prototype.hideDropdown = function() {
	this.dropdown.style.display = "none";
}

Select.prototype.select = function(optionIndex) {

	var option = this.optionsElements[optionIndex];
	if(option == undefined) return;
	let img;

	switch(this.type) {
		case "unit":
			this.unitId = option.dataset.unit;
			this.unit = units[this.unitId];
			img = this.unit["img"];
			this.unitObject.updateUpgrades(this.unit);
			this.unitObject.updateDefaultStats(this.unit);
			this.unitObject.updateGearSelectors(this.unit);
			this.unitObject.updateAdvisorSelectors(this.filter);
			this.unitObject.resetGear();
			this.unitObject.resetAdvisors();

			this.unitObject.state.unit = optionIndex;
			break;
		case "gear":
			if(option != undefined) {
				this.category = option.dataset.category;
				this.gearId = option.dataset.gear;
				this.gear = gear[this.category][this.gearId];

				if(this.element.style.display == "inline-block") {
					this.unitObject.state.gear[this.category] = {id: parseInt(this.gearId), lvl: 0, stats: {}};
				}
				this.statsSelector.category = this.category;

				this.statsSelector.loadGear(this.gear);
				img = this.gear["img"];
			}
			break;
		case "advisor":
			this.advisorId = option.dataset.advisor;
			this.advisor = advisors[this.element.dataset.age][this.advisorId];
			this.advisorSelector.loadAdvisor(this.advisor);
			img = this.advisor.icon + '.png';
			break;
	}

	if(this.type == "unit") {
		this.selectedOption.innerHTML = option.innerHTML + components.civIcon(getCivFromId(this.unitId));
		this.unitObject.gearSelectorIcon.src = this.imgPath + img;
	} else if(this.type == "gear") {
		this.selectedOption.getElementsByClassName('gear-select-img')[0].src = this.imgPath + img;
		this.selectedOption.title = this.gear.name;
	} else if(this.type == "advisor") {
		this.selectedOption.getElementsByClassName('advisor-select-img')[0].src = this.imgPath + img;
		this.selectedOption.title = this.advisor.name;
	}

	this.container.dataset.option = optionIndex;
	this.container.dataset.initialized = 1;

	this.unitObject.updateStats();
	updateComparison("all");
}

function hideAllDropdowns() {
	for(let i = 0 ; i < selects.length ; i++)
		selects[i].hideDropdown();
}

function registerHideListener() {
	document.addEventListener('click', function(event) {
		if (selectsElements.indexOf(event.target) != 1 && event.target.classList != undefined && !event.target.classList.contains('select-search') && !event.target.classList.contains('filter')  && !event.target.classList.contains('select-filters'))
			hideAllDropdowns();
	});
}

(function() {
	registerHideListener();
})();
