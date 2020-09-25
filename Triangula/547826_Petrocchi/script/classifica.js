function loadClassifica(livello) { //carica la nuova tabella
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("classifica").innerHTML = this.responseText; /*Devo caricare una classifica intera strutturata come una tabella, uso innerHTML perchè altrimenti il codice diventerebbe estremamente verboso*/
		}
	};
	xhttp.open("GET", "../script/tabella.php?livello="+livello, true);
	xhttp.send();
	loadText(livello,"titolo.php","titolo");
	loadButton(livello,"avanti.php","avanti");
	loadButton(livello,"indietro.php","indietro");
}

function loadText(livello, pagina, id) {//carica il nuovo titolo
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById(id).firstChild.nodeValue = this.responseText;
		}
	};
	xhttp.open("GET", "../script/"+pagina+"?livello="+livello, true);
	xhttp.send();
}

function loadButton(livello, pagina, id) {//aggiorna gli attributi dei bottoni
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById(id).setAttribute("onClick", this.responseText);
		}
	};
	xhttp.open("GET", "../script/"+pagina+"?livello="+livello, true);
	xhttp.send();
}

/*Made by: Stefano Petrocchi*/