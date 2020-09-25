//Contiene tutte le funzioni di utilità

//Crea un triangolo (!!!I parametri di default non sono supportati in queste versioni dei browser!!!)
function aggiungiTriangolo(TPos1, Lpos1, base1, altezza1, tipo1, vite1, Ts, Ls, Balla){ //(TPos1=0, Lpos1=0, base1=60, altezza1=60, tipo1="Normale", vite1=2, Ts=0, Ls=0, Balla=0){
	playground.triangleStack.push(new triangolo(TPos1, Lpos1, base1, altezza1, tipo1, vite1, Ts, Ls, Balla));
}

//Crea una palla
function aggiungiPalla(R1,TPos1,LPos1,TSpeed1,LSpeed1,Inizio1){ //(R1 = 20,TPos1 = 673,LPos1 = 520,TSpeed1 = 0,LSpeed1 = 0,Inizio1 = 0){
	playground.ballStack.push(new ball(R1, TPos1, LPos1, TSpeed1, LSpeed1, Inizio1));
}

//Crea una pillola
function aggiungiPillola(tipo, altezza, larghezza, TSpeed, LSpeed, TPos, LPos){
	playground.pillStack.push(new pillola(tipo, altezza, larghezza, TSpeed, LSpeed, TPos, LPos));
}

//Aggiorna le posizioni dei vari oggetti
function aggiornaPosizioni(){
	if(paddle.pausa!=1){
		document.getElementById("paddle").style.left = (paddle.position) + "px";
		paddle.position += paddle.speed;
	}
	
	for( var j=0; j<playground.triangleStack.length; j++){ //triangoli
		if(playground.triangleStack[j].nascondi==0){
			if(playground.invertiTriangoli==1 && playground.triangleStack[j].balla==1){
				//window.alert(playground.triangleStack[j].topSpeed);
				playground.triangleStack[j].topSpeed*=-1;
				playground.triangleStack[j].leftSpeed*=-1;
				//window.alert(playground.triangleStack[j].topSpeed);
			}
			if(playground.triangleStack[j].balla==1){
				playground.triangleStack[j].topPosition += playground.triangleStack[j].topSpeed;
				playground.triangleStack[j].leftPosition += playground.triangleStack[j].leftSpeed;
			}
			document.getElementById("triangolo" + j).style.top = (playground.triangleStack[j].topPosition) + "px";
			document.getElementById("triangolo" + j).style.left = (playground.triangleStack[j].leftPosition) + "px";
		}
	}
	playground.invertiTriangoli=0;
	
	for( var i=0; i<playground.ballStack.length; i++){ //palle
		if(playground.ballStack[i].nascondi==0){
			playground.ballStack[i].topPosition += playground.ballStack[i].topSpeed;
			playground.ballStack[i].leftPosition += playground.ballStack[i].leftSpeed;
			playground.ballStack[i].y += playground.ballStack[i].topSpeed;
			playground.ballStack[i].x += playground.ballStack[i].leftSpeed;
			document.getElementById("ball" + i).style.top = (playground.ballStack[i].topPosition) + "px";
			document.getElementById("ball" + i).style.left = (playground.ballStack[i].leftPosition) + "px";
		}
	}
	
	for( var k=0; k<playground.pillStack.length; k++){ //pillole
		if(playground.pillStack[k].nascondi==0){
			playground.pillStack[k].topPosition += playground.pillStack[k].topSpeed;
			playground.pillStack[k].leftPosition += playground.pillStack[k].leftSpeed;
			document.getElementById("pillola" + k).style.top = (playground.pillStack[k].topPosition) + "px";
			document.getElementById("pillola" + k).style.left = (playground.pillStack[k].leftPosition) + "px";
		}
	}
}

function tempo(){ //gestisce la statistica sul tempo trascorso
	playground.secondi++;
	document.getElementById("secondi").firstChild.nodeValue = playground.secondi%60;
	document.getElementById("minuti").firstChild.nodeValue =Math.floor(playground.secondi/60);
}

function playPausa(){ //gestisce la funzione di pausa del gioco
	if(playground.pausa==0){
		playground.pausa=1;
		document.getElementById("playPausa").src="../Icone/play.png";
		if(getCookie("transizione") == "bassa"){
			document.getElementById("pausa").style.display = "block";
			posticipato3();
		}else{
			intervallo = setTimeout("posticipato3()", 1000);
		}
		document.getElementById("pausa").style.boxShadow = "0px 0px 20px 20px rgba(0, 0, 0, 0.5)"; 
		document.getElementById("pausa").style.backgroundColor = "rgba(0,0,0,0.5)";
		document.getElementById("pausa").style.color = "rgba(255,255,255,1.00)";
		document.getElementById("pausa").style.zIndex = "2";
		clearInterval(playground.timer);
	}
	else{
		playground.pausa=0;
		document.getElementById("playPausa").src="../Icone/pausa.png";
		document.getElementById("pausa").style.boxShadow = "0px 0px 300px 100px rgba(0, 0, 0, 0)";
		document.getElementById("pausa").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("pausa").style.color = "rgba(255,255,255,0)";
		document.getElementById("pausa").style.zIndex = "-2";
		if(getCookie("transizione") == "bassa"){
			document.getElementById("pausa").style.display = "none";
			posticipato4();
		}else{
			intervallo = setTimeout("posticipato4()", 1000);
		}
		if(playground.iniziato==1){
			playground.timer = window.setInterval("tempo()",1000);
		}
	}
}

function scomparsa(){ //Fa scomparire la schermata iniziale
	if(getCookie("transizione") == "bassa"){
		document.getElementById("start").style.display = "none";
	}
	document.getElementById("start").style.boxShadow = "0px 0px 300px 100px rgba(255,255,255,0)";
	document.getElementById("start").style.backgroundColor = "rgba(255,255,255,0)";
	document.getElementById("start").style.color = "rgba(103,51,100,0)";
	document.getElementById("start").style.zIndex = "-2";
}	

function apparizione(){ //Fa comparire la schermata iniziale
	if(getCookie("transizione") == "bassa"){
		document.getElementById("start").style.display = "block";
	}
	document.getElementById("start").style.boxShadow = "0px 0px 20px 20px rgba(255,255,255,0.5)";
	document.getElementById("start").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("start").style.color = "rgba(103,51,100,1.00)";
	document.getElementById("start").style.zIndex = "2";
}

function sconfitta(){ //gestisce il gioco in caso di sconfitta
	effettiSonori("sconfitta");
	document.getElementById('sottofondo').pause();
	if(getCookie("transizione") == "bassa"){
		intervallo = setTimeout("posticipato()", 8000);
	}else{
		intervallo = setTimeout("posticipato()", 10000);
	}
	if(Math.random() > 0.5){
		intervallo = setTimeout("document.getElementById('sottofondo').src = '../Musica/musicaTriste.mp3'", 8000);
	}else{
		intervallo = setTimeout("document.getElementById('sottofondo').src = '../Musica/musicaTriste2.mp3'", 8000);
	}
	document.getElementById("sconfitta").style.boxShadow = "0px 0px 700px 500px rgba(0, 0, 0, 0.5)";
	document.getElementById("sconfitta").style.backgroundColor = "rgba(0,0,0,0.5)";
	document.getElementById("sconfitta").style.color = "rgba(255,255,255,1.00)";
	document.getElementById("sconfitta").style.zIndex = "2";
	//var list = document.getElementsByClassName("sconfitta");
	/*for (var i = 0; i < list.length; i++) {
		list[i].style.color = "rgba(255, 255, 255, 0.5)";
		list[i].style.backgroundColor = "rgba(160, 76, 74, 0.5)";
		list[i].style.boxShadow = "0px 4px 15px 1px rgba(103, 51, 100, 0.5)";
		list[i].style.zIndex ="2";
	}*/
	playground.pausa=1;
	loadDoc('../script/database.php', giocatore.punteggio, playground.secondi, playground.livello, 0);
	clearInterval(playground.timer);
}

function posticipato(){ //Fa apparire gli oggetti in maniera posticipata
	//document.getElementById('sottofondo').src = '../Musica/musicaTriste.mp3';
	document.getElementById("sconfitta").style.display = "block";
	var lista = document.getElementsByClassName("sconfitta");
	for (var i = 0; i < lista.length; i++) {
		/*lista[i].style.transition = "1s";*/
		lista[i].style.display = "block";
		lista[i].style.zIndex = "3";
	}
}

function posticipato2(){ //Fa apparire gli oggetti in maniera posticipata
	//document.getElementById('sottofondo').src = '../Musica/musicaTriste.mp3';
	var lista = document.getElementsByClassName("vittoria");
	for (var i = 0; i < lista.length; i++) {
		/*lista[i].style.transition = "1s";*/
		lista[i].style.display = "block";
		lista[i].style.zIndex = "3";
	}
}

function posticipato3(){ //Fa apparire gli oggetti in maniera posticipata
	var lista = document.getElementsByClassName("pausa");
	for (var i = 0; i < lista.length; i++) {
		lista[i].style.display = "block";
		lista[i].style.zIndex = "3";
	}
}

function posticipato4(){ //Fa scomparire gli oggetti in maniera posticipata
	var lista = document.getElementsByClassName("pausa");
	for (var i = 0; i < lista.length; i++) {
		lista[i].style.display = "none";
		lista[i].style.zIndex = "-3";
	}
}

function vittoria(){ //Gestisce la vittoria nel gioco
	creaPalla=window.setInterval("aggiungiPalla(10,675,paddle.position + paddle.width/2 -5,0,0,1)", 1000);
	if(getCookie("transizione") == "bassa"){
		document.getElementById("vittoria").style.display = "block";
		posticipato2();
	}else{
		intervallo = setTimeout("posticipato2()", 10000);
	}
	if(Math.random() > 0.5){
		document.getElementById('sottofondo').src = '../Musica/vittoria.mp3';
	}else{
		document.getElementById('sottofondo').src = '../Musica/vittoria2.mp3';
	}
	document.getElementById("vittoria").style.boxShadow = "0px 0px 700px 500px rgba(255,255,255,0.5)";
	document.getElementById("vittoria").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("vittoria").style.color = "rgba(103,51,100,1.00)";
	document.getElementById("vittoria").style.zIndex = "2";
	giocatore.punteggio += 1000;
	document.getElementById("punteggio").firstChild.nodeValue = giocatore.punteggio;
	loadDoc('../script/database.php', giocatore.punteggio, playground.secondi, playground.livello, 1);
	clearInterval(playground.timer);
}

function effettiSonori(tipo){ //Fa funzionare gli effetti sonori a patto che siano nel giusto formato .mp3
	var snd = new Audio("../effetti/" + tipo + ".mp3");
	snd.play();
}

function distanza(x1,x2,y1,y2){ //calcola la distanza tra due punti
	var dx = x1 - x2;
	var dy = y1 - y2;
	return Math.sqrt((dx * dx) + (dy * dy));
}

function inverti(){ //inverte la direzione dei triangoli (per farli "ballare")
	playground.invertiTriangoli=1;
}

function getCookie(cname) { //preleva il valore del cookie "cname"
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function loadDoc(script, punteggio, tempo, livello,vittoria){ //passa le statistiche della partita al database
	var continuoURL='';
	if(tempo)
		continuoURL='&tempo='+tempo;
	if(livello)
		continuoURL=continuoURL+'&livello='+livello;
	if(vittoria)
		continuoURL=continuoURL+'&vittoria='+vittoria;
	if(punteggio!="")
	{
		var xhttp=new XMLHttpRequest();
		xhttp.open("GET", script+"?punteggio="+punteggio+continuoURL, true);
		xhttp.send();
	}
}

/*Made by: Stefano Petrocchi*/
