import document from "document";

let views;

export function init(_views) {
	views = _views;
	console.log("view-3 init()");
	onMount();
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let Pausebutton = document.getElementById("Pausebutton");
	Pausebutton.onactivate = function (evt) {
		console.log("Pause activate");
		Pausebutton.addEventListener("click", clickHandler);
	}
	let Stopbutton = document.getElementById("Stopbutton");
	Stopbutton.onactivate = function (evt) {
		console.log("Stop activate");
		Stopbutton.addEventListener("click", clickHandler);
	}
}
function clickHandler(_evt) {
	/* Navigate to another screen */
	views.navigate("view-2");
}
