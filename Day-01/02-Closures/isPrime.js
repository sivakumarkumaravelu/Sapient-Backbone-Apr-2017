var isPrime = (function(){
	var cache = {};

	function isPrime(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = true;
		for(var index = 2; index <= (n/2); index++){
			if (n % index === 0){
				cache[n] = false;
				return cache[n];
			}
		}
		return cache[n];
	}
	return isPrime;
})();


var isPrime = (function(){
	var cache = {};
	
	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var index = 2; index <= (n/2); index++){
			if (n % index === 0)
				return false;
		}
		return  true;
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
})();

var isOddOrEven = (function(){
	var cache = {};
	
	function checkOddOrEven(n){
		return n % 2 === 0 ? 'even' : 'odd';
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkOddOrEven(n);
		return cache[n];
	}
})();


function memoize(algoFn){
	var cache = {};
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = algoFn(n);
		return cache[n];
	}
}

var isOddOrEven = memoize(function checkOddOrEven(n){
	return n % 2 === 0 ? 'even' : 'odd';
});

var isPrime = memoize(function (n){
	console.log('processing ', n);
	if (n <= 3) return true;
	for(var index = 2; index <= (n/2); index++){
		if (n % index === 0)
			return false;
	}
	return  true;
});

function memoize(algoFn){
	var cache = {};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = algoFn.apply(this, arguments);
		return cache[key];
	}
}




