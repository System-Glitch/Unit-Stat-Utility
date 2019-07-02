function round(number) {
	return Math.round(number * 10) / 10;
}

function round2Digits(number) {
	return Math.round(number * 100) / 100;
}

function getHighestKey(object) {
	return Object.keys(object).reduce(function(a, b){ return object[a] > object[b] ? a : b });
}

function updateURLParameter(param, paramVal) {
	var url = window.location.href;
	var newAdditionalURL = "";
	var tempArray = url.split("?");
	var baseURL = tempArray[0];
	var additionalURL = tempArray[1];
	var temp = "";
	if (additionalURL) {
		tempArray = additionalURL.split("&");
		for (var i=0; i<tempArray.length; i++) {
			if(tempArray[i].split('=')[0] != param) {
				newAdditionalURL += temp + tempArray[i];
				temp = "&";
			}
		}
	}

	var rows_txt = temp + "" + param + "=" + paramVal;
	return baseURL + "?" + newAdditionalURL + rows_txt;
}

function getUrlParameter(param) {
	const url = new URL(window.location);
	const raw = url.searchParams.get(param);
	return raw;
}

function postUnit(state, callback) {
	const http = new XMLHttpRequest();
	http.open('POST', 'builds', true);
	http.setRequestHeader('Content-type', 'application/json');

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			callback(http.responseText)
		}
	}
	http.send(JSON.stringify({data: state}));
}

function getUnit(id, callback) {
	const http = new XMLHttpRequest();
	http.open('GET', 'builds/' + id, true);

	http.onreadystatechange = function() {
		if(http.readyState == 4) {
			callback(http.status == 200 ? JSURL.parse(http.responseText) : undefined)
		}
	}
	http.send();
}

function getGlobalState() {
	const state = [];
	for(let key in unitObjects) {
		state.push(unitObjects[key].state);
	}
	return state;
}
