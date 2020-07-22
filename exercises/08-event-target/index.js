window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here

		alert(event.target.tagName); //con event.target obtenga el elemento que desencadeno un objeto en especifico, por eso aparece button y a...
	});
};
