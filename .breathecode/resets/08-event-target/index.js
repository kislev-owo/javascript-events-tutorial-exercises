window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
        //you code here
        

alert(event.target.tagName); // pongo una alerta con el evento que me piden "target" para que aparesca una alerta en click del listener



	});
};
