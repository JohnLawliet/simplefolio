var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var randcol = document.querySelectorAll("h4");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getcolor(){
	let letters = "0123456789ABCDEF"; 
	let color = '#'; 
	for (var i = 0; i < 6; i++) 
 		color += letters[(Math.floor(Math.random() * 16))];
	return color;
}


button.addEventListener("click",function(){
	for (var i=0; i<2; i++){
		randcol[i].textContent = getcolor()
	}
	console.log("randcol[0] : "+randcol[0]);
	console.log("randcol[1] : "+randcol[1]);
});


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);