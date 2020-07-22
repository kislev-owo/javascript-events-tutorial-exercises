window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

document.getElementById("button2").addEventListener("click", function() {
	alert("Button 2"); // en la id button2 se crea un listener click dando esta alerta
});
//getElementById recibe el valor del id button2
