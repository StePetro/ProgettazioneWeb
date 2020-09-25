function pillola(tipo, altezza, larghezza, TSpeed, LSpeed, TPos, LPos){ //funzione-oggetto pillola
	this.tipo=tipo;            //Parametri della pillola
	this.altezza=altezza;
	this.larghezza=larghezza;
	this.topSpeed= TSpeed;
	this.leftSpeed= LSpeed;
	this.leftPosition = LPos;
	this.topPosition = TPos;
	this.nascondi=0;
	
	var PG = document.getElementById("playground");     //creazione img che visualizza la pillola sul playground
	var nuovaPillola = document.createElement("img");
	var classAttr = document.createAttribute("class");
	var idAttr = document.createAttribute("id");
	var srcAttr = document.createAttribute("src");
	var altAttr = document.createAttribute("alt");

	classAttr.value = "pillola";
	altAttr.value = "pillola";
	idAttr.value = "pillola" + playground.pillStack.length;
	srcAttr.value = "../pillole/pillola" + tipo + ".png" ;
	nuovaPillola.setAttributeNode(classAttr);
	nuovaPillola.setAttributeNode(idAttr);
	nuovaPillola.setAttributeNode(srcAttr);
	nuovaPillola.setAttributeNode(altAttr);
	PG.appendChild(nuovaPillola);                                                                                        
	this.numero= playground.pillStack.length;																					
	playground.numeroPillole++;
	document.getElementById("pillola" + playground.pillStack.length).style.height = altezza + "px";
	document.getElementById("pillola" + playground.pillStack.length).style.width = larghezza + "px";
	
	this.urtoPaddle= function(){    //urto pillola sul paddle
		if(this.leftPosition<=paddle.position + paddle.width && this.topPosition >= playground.height - this.altezza - paddle.height && this.leftPosition>=paddle.position){
			this.attivaPillola();
			this.eliminaPillola();
		}
	};
	
	this.urtoBordo= function(){
		if (this.topPosition <= 0) { //Per far rimbalzare la pillola sui bordi (Serve per le monete del triangolo dorato)
			this.topSpeed = -this.topSpeed;
			this.topPosition = 2;
		}	
		if (this.topPosition >= playground.height - this.altezza){
			this.topSpeed = -this.topSpeed;
			this.topPosition = playground.height - this.altezza -2 ;
			this.eliminaPillola();                                           ///////<-------------Fa scomparire la pillola
		}
		if (this.leftPosition <= 0) {
			this.leftSpeed = -this.leftSpeed;
			this.leftPosition = 2;
		}
		if (this.leftPosition >= playground.width - this.larghezza){
			this.leftSpeed = -this.leftSpeed;
			this.leftPosition = playground.width - this.larghezza -2;
		}
	};
	
	this.eliminaPillola = function() {        //Fa scomparire la pillola
	//effettiSonori("");
	this.leftPosition=-20;
	this.topPosition=-20;
	var daEliminare = document.getElementById("pillola" + this.numero);
	daEliminare.parentNode.removeChild(daEliminare);
	this.nascondi=1;
	playground.numeroPillole--;
};

this.attivaPillola = function(){     //A seconda del tipo, attiva le proprietà della pillola
	switch(this.tipo) {

		case "MultiBall":                    //La pillola Multiball duplica le palle presnti nel playground
			effettiSonori("pillola");
			effettiSonori("biglia-biglia");
			giocatore.punteggio +=100;
			var limite=playground.ballStack.length;
			for(var i=0; i<limite; i++){
				if(playground.ballStack[i].nascondi==0){
					aggiungiPalla(10,playground.ballStack[i].topPosition, playground.ballStack[i].leftPosition,-5,-5, 1);
				}
			}
			break;

		case "BigBall":                             //La pillola Bigball aumenta il raggio della palla fino ad un limite massimo per ragioni di gameplay
			effettiSonori("pillola");
			giocatore.punteggio +=50;
			var limite=playground.ballStack.length;
			for(var k=0; k<limite; k++){
				if(playground.ballStack[k].nascondi==0 && playground.ballStack[k].radius<20){
					playground.ballStack[k].radius*=1.2;
					document.getElementById("ball" + k).style.height = playground.ballStack[k].radius*2 + "px";
					document.getElementById("ball" + k).style.width = playground.ballStack[k].radius*2 + "px";
				}
			}
			break;

		case "ThinyBall":                         //La pillola ThinyBall diminuisce il raggio della palla 
			effettiSonori("pillola");
			giocatore.punteggio -=50;
			var limite=playground.ballStack.length;
			for(var k=0; k<limite; k++){
				if(playground.ballStack[k].nascondi==0){
					playground.ballStack[k].radius/=1.2;
					document.getElementById("ball" + k).style.height = playground.ballStack[k].radius*2 + "px";
					document.getElementById("ball" + k).style.width = playground.ballStack[k].radius*2 + "px";
				}
			}
			break;

		case "BigPaddle":                         //La pillola Bigball aumenta la lunghezza del paddle fino ad un limite massimo per ragioni di gameplay
			effettiSonori("pillola");
			giocatore.punteggio +=150;
			if(paddle.width<300){
				paddle.width*=1.2;
				document.getElementById("paddle").style.width = paddle.width + "px";
				effettiSonori("yeah"); 
			}
			break;

		case "ThinyPaddle":                   //La pillola Thinypaddle diminuisce la lunghezza del paddle
			effettiSonori("pillola");
			giocatore.punteggio -=150;
			paddle.width/=1.2;
			document.getElementById("paddle").style.width = paddle.width + "px";
			effettiSonori("ohNo");
			break;

		case "Coin":                          //moneta
			giocatore.punteggio +=25;
			effettiSonori("moneta");
			break;

		case "CoinG":                        //moneta del triangolo d'oro
			giocatore.punteggio +=50;
			effettiSonori("moneta");
			break;

		case "Fungo":                        //Il fungo aumenta le vite
			giocatore.punteggio +=250;
			effettiSonori("cibo");
			giocatore.vite +=1;
			break;

		case "FungoAvariato":                 //Il fungo avariato blocca il paddle per 1 secondo a causa di un colpo di tosse
			giocatore.punteggio -=150;
			intervallo = setTimeout("effettiSonori('tosse');", 1000);
			effettiSonori("cibo");
			var pausa = setTimeout("paddle.pausa=1",1000);
			var partenza = setTimeout("paddle.pausa=0",2000);
			break;
	}
	document.getElementById("punteggio").firstChild.nodeValue = giocatore.punteggio; //aggiorna il punteggio
};
}

var tipiPillole=["BigBall","MultiBall","BigPaddle","ThinyPaddle","ThinyBall","Fungo","FungoAvariato"]; //array delle possibili pillole per poterle selezionare a caso

/*Made by: Stefano Petrocchi*/