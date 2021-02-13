console.log("javascript is linked!");

(() =>{

"use strict";

let hopsIcon = document.querySelector('#hops');
let barleyIcon = document.querySelector('#barley');
let pintIcon = document.querySelector('#pint');
let kegIcon = document.querySelector('#keg');



function clicked(){
	console.log('You have selected an Icon');
	console.log('You picked', this.id);
}



hopsIcon.addEventListener("click", clicked);
barleyIcon.addEventListener("click", clicked);
pintIcon.addEventListener("click", clicked);
kegIcon.addEventListener("click", clicked);


})();


