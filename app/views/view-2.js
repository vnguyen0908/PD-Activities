import document from "document";

let views;

export function init(_views) {
	views = _views;
	console.log("view-2 init ()");
	onMount();}
 
function onMount() {
let Startbutton = document.getElementById("Startbutton");
	Startbutton.onactivate = function (evt) {
		console.log("Start activate");
		Startbutton.addEventListener("click", clickHandler);
	}
	let Laterbutton = document.getElementById("Laterbutton");
	Laterbutton.onactivate = function (evt) {
		console.log("Later activate");
		Laterbutton.addEventListener("click",clickHandler1)
	}
}
function clickHandler(_evt) {
	console.log("Start activate");
	/* Navigate to another screen */
	views.navigate("view-3");}

	function clickHandler1(evt) {
		console.log("Later activate");
		  views.navigate("view-1");
		}
	  
