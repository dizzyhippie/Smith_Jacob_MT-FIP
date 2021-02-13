console.log("javascript is linked!");

(() =>{
	
let hopsIcon = document.querySelector('#hops');
let barleyIcon = document.querySelector('#barley');
let pintIcon = document.querySelector('#pint');
let kegIcon = document.querySelector('#keg');

let hopsText =document.querySelector('#hopText');
let barleyText =document.querySelector('#barText');
let pintText =document.querySelector('#pinText');
let kegText =document.querySelector('#kegsText');
 


function hopClick(){
	console.log('You have selected an Icon');
	console.log('You picked', this.id);
	hopsText.innerHTML = "<p>" + "In 2018, we started using select homegrown hops from Chilliwack, British Columbia." + "</p>";
}

function barClick(){
	console.log('You have selected an Icon');
	console.log('You picked', this.id);
	barleyText.innerHTML = "<p>" + "Molson has always strived to use ingredients that reflect our Canadian pride." + "</p>";
}
"Molson has always strived to use ingredients that reflect our Canadian pride."
function pintClick(){
	console.log('You have selected an Icon');
	console.log('You picked', this.id);
	pintText.innerHTML = "<p>" + "In 1927, Molson helped establish the first ever bottle return program!" + "</p>";
}

function kegClick(){
	console.log('You have selected an Icon');
	console.log('You picked', this.id);
	kegText.innerHTML = "<p>" + "Molson, it’s the name on the label but there’s a lot behind it." + "</p>";
}



hopsIcon.addEventListener("click", hopClick);
barleyIcon.addEventListener("click", barClick);
pintIcon.addEventListener("click", pintClick);
kegIcon.addEventListener("click", kegClick);

})();


