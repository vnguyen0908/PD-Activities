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
		console.log("Walk Button");
		walkButton.addEventListener("click", clickHandler);
	}
}
function clickHandler(_evt) {
	/* Navigate to another screen */
	views.navigate("view-1");
}
