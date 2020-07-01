
import document from "document";


let views;



export function init(_views) {
	views = _views;
	console.log("view-1 init()");
	onMount();
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let walkButton = document.getElementById("walkButton");
	walkButton.onactivate = function (evt) {
		console.log("Walking");
		walkButton.addEventListener("click", clickHandler);
	}

	let runButton = document.getElementById("runButton");
	runButton.onactivate = function (evt) {
		console.log("Running");
		runButton.addEventListener("click", clickHandler);
	}

	let hikeButton = document.getElementById("hikeButton");
	hikeButton.onactivate = function (evt) {
		console.log("Hiking");
		hikeButton.addEventListener("click", clickHandler);
	}

	let bikeButton = document.getElementById("bikeButton");
	bikeButton.onactivate = function (evt) {
		console.log("Biking");
		bikeButton.addEventListener("click", clickHandler);
	}

	let boxButton = document.getElementById("boxButton");
	boxButton.onactivate = function (evt) {
		console.log("Boxing");
		boxButton.addEventListener("click", clickHandler);
	}

	let swimButton = document.getElementById("swimButton");
	swimButton.onactivate = function (evt) {
		console.log("Swimming");
		swimButton.addEventListener("click", clickHandler);
	}

}

/**
 * Sample button click with navigation.
 */
function clickHandler(_evt) {
	/* Navigate to another screen */
	views.navigate("view-2");
}