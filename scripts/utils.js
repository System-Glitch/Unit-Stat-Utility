function round(number) {
	return Math.round(number * 10) / 10;
}

function getHighestKey(object) {
	return Object.keys(object).reduce(function(a, b){ return object[a] > object[b] ? a : b });
}