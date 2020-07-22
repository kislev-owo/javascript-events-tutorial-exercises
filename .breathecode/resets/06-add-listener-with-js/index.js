window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
function wuju() {
	// creamos la funcion
	alert("wuju"); // la alerta es wuju
}
document.querySelector("#theGreen").addEventListener("click", wuju);
// arriba el dom utilizado es querySelector para el boton con su evento listener de cuando de click activar la fuction wuju
