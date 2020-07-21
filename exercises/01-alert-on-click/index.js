window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

document.querySelector("#button2").addEventListener("click", function() {
	alert("ALERTA Boton 2"); // en la id button2 se crea un listener click dando esta alerta
});
