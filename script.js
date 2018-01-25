function adjacentElementsProduct(inputArray){
	var mul = [];
	for(var i=0; i<inputArray.length-1; i++){
		mul[i] = inputArray[i] * inputArray[i+1];
	}
	document.write(Math.max.apply(null, mul));
}

adjacentElementsProduct([-3, 1, -2, 6, -8]);