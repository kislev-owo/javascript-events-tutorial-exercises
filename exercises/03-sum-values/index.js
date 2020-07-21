window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber y añado el parseInt
	var stringA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber y añado el parseInt
	var stringB = parseInt(document.getElementById("secondNumber").value);

	//your code goes here

	let sum = stringA + stringB; // sumo variable a y variable b
	let result = document.getElementById("resultNumber"); // el resultado lo guardo en el html resultNUmber con DOM getElement
	result.value = sum; // consigo el resultado en la variable sum
};
