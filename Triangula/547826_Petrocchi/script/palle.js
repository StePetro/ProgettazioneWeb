//funzione-oggetto palla (!!!questa versione dei browser non supporta i parametri di default!!!)
function ball(R,TPos,LPos,TSpeed,LSpeed,Inizio) { //ball(R = 10,TPos = 673,LPos = 520,TSpeed = 0,LSpeed = 0,Inizio = 0) { 
	var PG = document.getElementById("playground"); //Crea un nuovo div per la palla
	var nuovaPalla = document.createElement("div");
	var classAttr = document.createAttribute("class");
	var idAttr = document.createAttribute("id");

	classAttr.value = "ball";
	idAttr.value = "ball" + playground.ballStack.length;
	nuovaPalla.setAttributeNode(classAttr);
	nuovaPalla.setAttributeNode(idAttr);																				//	____left,top____________
	PG.appendChild(nuovaPalla);                                                                                        	//  | 0,0			1080,0	|
	this.numero= playground.ballStack.length;																			//	|0,720			1080,720|
	playground.numeroBall++;																							//	-------------------------
	
	document.getElementById("ball" + playground.ballStack.length).style.height = R*2 + "px";
	document.getElementById("ball" + playground.ballStack.length).style.width = R*2 + "px";
	
	this.radius= R;      //20                      //Parametri della palla
	this.topPosition= TPos;  //673
 	this.leftPosition= LPos;  //520
 	this.topSpeed= TSpeed;
 	this.leftSpeed= LSpeed;
 	this.inizio= Inizio;
 	this.x = this.leftPosition + this.radius;
 	this.y = this.topPosition + this.radius;
 	this.nascondi=0;
 	this.prova = function(){
 		return this.radius;
 	};
 	this.urtoPaddle= function(){ //gestisce l'urto con il paddle, questo può dare una leggera spinta alla palla se si muove in una direzione durante l'urto
 		if(this.leftPosition <= paddle.position + paddle.width && this.topPosition >= playground.height - this.radius*2 - paddle.height && this.leftPosition >= paddle.position){
 			var lato;
 			var Pcoeff = 0;
 			if (this.leftSpeed > 0) {
 				lato = 1;
 			} 
 			else {
 				lato = -1;
 			}
 			if(paddle.position >= 3 && paddle.position + paddle.width <= playground.width ){
 				Pcoeff=paddle.speed * (Math.random() * 2 + 3)/6;
 			}
 			this.topSpeed = Math.random() * -2 - 3;
 			this.leftSpeed = lato * (Math.random() * 2 + 3) + Pcoeff ;
 			this.topPosition = playground.height - this.radius*2 - paddle.height -2 ;
 			effettiSonori("biglia-paddle");
 		}
 	};

 	this.urtoPalle= function(){// gestisce l'urto tra palle e le fa rimbalzare in modo diverso a seconda delle velocità reciproche e di dove si toccano
 		for( var i=0; i<playground.ballStack.length; i++){
 			if(i!==this.numero){
 				if(  distanza(this.leftPosition, playground.ballStack[i].leftPosition,this.topPosition, playground.ballStack[i].topPosition)<= 15){
						var c1=1; //coefficenti velocità
						var c2=1;
						var s=1; //coefficente scontro per velocità maggiore
						if(this.topSpeed>0){
							c1=-1;
						}
						if(this.leftSpeed>0){
							c2=-1;
						}
						if((this.leftSpeed*playground.ballStack[i].leftSpeed>0 && this.topSpeed*playground.ballStack[i].topSpeed>0)){
							s=-1;
						}	
						if(this.leftSpeed*this.leftSpeed>playground.ballStack[i].leftSpeed*playground.ballStack[i].leftSpeed){
							c2=-c2/1.5;
						}
						else{
							c2=-c2*1.5;
						}
						if(this.topSpeed*this.topSpeed>playground.ballStack[i].topSpeed*playground.ballStack[i].topSpeed){
							c1=-c1/1.5;
						}
						else{
							c1=-c1*1.5;
						}
						this.topSpeed = c1*(Math.random() * 2 + 3);
						this.leftSpeed = c2*(Math.random() * 2 + 3);
						this.topPosition += c1*10;          //per evitare urti multipli
						this.leftPosition += c2*10;
						effettiSonori("biglia-biglia");	
					}
				}
			}
		};

		this.urtoTriangolo= function(){ //Gestisce l'urto con in triangoli in modo coerente all'angolo, alla direzione e al lato in cui questo avviene
			for( var i=0; i<playground.triangleStack.length; i++){
				if(playground.triangleStack[i].nascondi==0){
					if(playground.triangleStack[i].inverso==0){
						if(  this.topPosition <= playground.triangleStack[i].topPosition + playground.triangleStack[i].altezza && this.topPosition >= playground.triangleStack[i].topPosition - this.radius*2 ){    
						if(this.leftPosition - this.radius <= playground.triangleStack[i].leftPosition + playground.triangleStack[i].base - (((-this.topPosition -this.radius + playground.triangleStack[i].topPosition + playground.triangleStack[i].altezza))/Math.sqrt(3)) && this.radius*2 + this.leftPosition >= playground.triangleStack[i].leftPosition + (((-this.topPosition -this.radius + playground.triangleStack[i].topPosition + playground.triangleStack[i].altezza))/Math.sqrt(3))){ //per individuare coerentemente i bordi Math.sqrt(3) è radice di 3 VALE SOLO PER TRIANGOLI EQUILATERI!
							var c1=1;
							var c2=1;
							if(this.topSpeed>0){
								if(this.leftSpeed>0){
									c2=-1;
									playground.triangleStack[i].urtoBall("Sx");
								}
								else{
									playground.triangleStack[i].urtoBall("Dx");
								}
								this.leftSpeed = c2*(Math.random() * 2 + 3);
								this.leftPosition += c2*5;
								c1=-1;
							}
							else{
								if((((-this.topPosition + playground.triangleStack[i].topPosition + playground.triangleStack[i].altezza))/Math.sqrt(3)) > 3){  //per evitare che si inceppi dentro al triangolo se viene da sotto e batte di lato
									c1=-1;
									if(this.leftSpeed>0){
										c2=-1;
										playground.triangleStack[i].urtoBall("Sx");
									}
									else{
										playground.triangleStack[i].urtoBall("Dx");
									}
									this.leftSpeed = c2*(Math.random() * 2 + 3);
									this.leftPosition += c2*5;
								}
								else{
									playground.triangleStack[i].urtoBall("Base");
								}
							}
							this.topSpeed = c1*(Math.random() * 2 + 3);
							this.topPosition += c1*5;          //per evitare urti multipli
						}
					}
				}
				else{
					if(this.topPosition <= playground.triangleStack[i].topPosition + playground.triangleStack[i].altezza && this.topPosition >= playground.triangleStack[i].topPosition - this.radius*2 ){    
						if(this.leftPosition<= playground.triangleStack[i].leftPosition + playground.triangleStack[i].base - ((( this.topPosition + this.radius - playground.triangleStack[i].topPosition))/Math.sqrt(3)) &&  this.leftPosition + 2*this.radius >= playground.triangleStack[i].leftPosition + (((this.topPosition + this.radius - playground.triangleStack[i].topPosition))/Math.sqrt(3))){ //per individuare coerentemente i bordi Math.sqrt(3) è radice di 3 VALE SOLO PER TRIANGOLI EQUILATERI!
							var c1=1;
							var c2=1;
							if(this.topSpeed>0){
								c1=-1;
								if ((((this.topPosition - playground.triangleStack[i].topPosition)*2)/Math.sqrt(3))/2 > 2) {
									c1=1;
									if(this.leftSpeed>0){
										playground.triangleStack[i].urtoBall("Sx");
										c2=-1;
									}
									else{
										playground.triangleStack[i].urtoBall("Dx");
									}
									this.leftSpeed = c2*(Math.random() * 2 + 3);
									this.leftPosition += c2*5;
								}
								else{
									playground.triangleStack[i].urtoBall("Base");
								}
							}
							else{
								if(this.leftSpeed>0){
									c2=-1;
									playground.triangleStack[i].urtoBall("Sx");
								}
								else{
									playground.triangleStack[i].urtoBall("Dx");
								}
								this.leftSpeed = c2*(Math.random() * 2 + 3);
								this.leftPosition += c2*5;
							}
							this.topSpeed = c1*(Math.random() * 2 + 3);
							this.topPosition += c1*5;
						}
					}
				}
			}
		}
	};
	
	this.urtoBordo= function(){ //gestisce l'urto con i bordi
		if (this.topPosition <= 0) { //Per far rimbalzare la palla sui bordi
			this.topSpeed = -this.topSpeed;
			this.topPosition = 2;
			effettiSonori("biglia-bordo");
		}	
		if (this.topPosition >= playground.height - this.radius*2){
		//	this.topSpeed = -this.topSpeed;
		//	this.topPosition = playground.height - this.radius*2 -2 ;
			this.eliminaPalla();                                           ///////<-------Funzione che fa scomparire la palla se tocca il bordo inferiore
		}
		if (this.leftPosition <= 0) {
			this.leftSpeed = -this.leftSpeed;
			this.leftPosition = 2;
			effettiSonori("biglia-bordo");
		}
		if (this.leftPosition >= playground.width - this.radius*2){
			this.leftSpeed = -this.leftSpeed;
			this.leftPosition = playground.width - this.radius*2 -2;
			effettiSonori("biglia-bordo");
		}
	};
	
	this.start= function() { //fa partire la palla all'avvio del gioco
		var lato;
		if (Math.random() < 0.5) {
			lato = 1;
		} 
		else {
			lato = -1;
		}
		this.topSpeed = Math.random() * -2 - 3;
		this.leftSpeed = lato * (Math.random() * 2 + 3);
	};
	
	this.eliminaPalla = function() { //elimina la palla quando tocca il bordo inferiore e nel caso avvia lo script di sconfitta se si perdono tutte le vite
		effettiSonori("biglia-bordoInferiore-nonFinale");
		document.getElementById("playground").style.borderBottomColor = "red";
		intervallo = setTimeout("document.getElementById('playground').style.borderBottomColor = 'rgba(241,241,241,1.00)'", 500);
		this.leftPosition=-20;
		this.topPosition=-20;
		var daEliminare = document.getElementById("ball" + this.numero);
		daEliminare.parentNode.removeChild(daEliminare);
		/*var elem = document.getElementById("ball" + numero);  //nel caso volessi solo nasconderli
    	var classAttr = document.createAttribute("class");
		classAttr.value = "hide";
		elem.setAttributeNode(classAttr);*/
		this.nascondi=1;
		playground.numeroBall--;
		if(playground.numeroBall==0 && giocatore.vite==0){
			sconfitta();
		}
		else{
			if(playground.numeroBall==0){
				aggiungiPalla(10,673,paddle.position + paddle.width/2,0,0,0);
				giocatore.vite--;
				paddle.pausa=1;
				var partenza = setTimeout("paddle.pausa=0",1000);
			}
		}
	};
}
/*Made by: Stefano Petrocchi*/