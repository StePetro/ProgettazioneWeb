//Fa apparire le varie sezioni del tutorial
function storia(){
	document.getElementById("storia").style.display="block";
	document.getElementById("triangoli").style.display="none";
	document.getElementById("pillole").style.display="none";
	document.getElementById("regole").style.display="none";
}

function regole(){
	document.getElementById("regole").style.display="block";
	document.getElementById("triangoli").style.display="none";
	document.getElementById("pillole").style.display="none";
	document.getElementById("storia").style.display="none";
}

function pillole(){
	document.getElementById("pillole").style.display="block";
	document.getElementById("triangoli").style.display="none";
	document.getElementById("storia").style.display="none";
	document.getElementById("regole").style.display="none";
}

function triangoli(){
	document.getElementById("triangoli").style.display="block";
	document.getElementById("storia").style.display="none";
	document.getElementById("pillole").style.display="none";
	document.getElementById("regole").style.display="none";
}

/*Made by: Stefano Petrocchi*/