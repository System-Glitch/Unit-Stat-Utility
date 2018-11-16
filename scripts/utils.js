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
	let url = new URL(window.location);
	let raw = url.searchParams.get(param);
	if(raw == undefined) return undefined;
	try {
		let value = JSURL.parse(raw);
		return value;
	} catch(e) {
		return undefined;
	}
}