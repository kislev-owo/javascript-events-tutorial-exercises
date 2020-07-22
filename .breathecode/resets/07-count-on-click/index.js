//This is a global variable
var counter = 0;

window.onload = function loadFunction() {
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
};

//called when the user clicks
window.increaseCounter = function increaseCounter() {
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
};
//   toda la parte de arriba viene ya agregada al ejercicio ! //

window.DecreaseCounter = function DecreaseCounter() {
	//aqui cambio el html y creo un onclick llamado decreaseCounter y creo la funcion con el mismo nombre
	counter--;
	//cada vez que se da un click el contador usado por el sumador disminuye
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
	//aqui con dom.getElement pongo en la id screen un html con la sumatoria del contador tambien se puede hacer con hijos
};
