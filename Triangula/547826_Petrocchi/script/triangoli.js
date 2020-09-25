//funzione-oggetto che definisce un triangolo
function triangolo(TPos, Lpos, base, altezza, tipo, vite, Ts, Ls, Balla){ //(TPos=0, Lpos=0, base=60, altezza=60, tipo="Normale", vite=2, Ts=0, Ls=0, Balla=0) questa verione dei browser non prevedono i parametri di default
	//creazione img che mostra il triangolo sul playground																				
	var PG = document.getElementById("playground");														
	var nuovoTriangolo = document.createElement("img");
	var srcAttr = document.createAttribute("src");
	var classAttr = document.createAttribute("class");
	var idAttr = document.createAttribute("id");
	var altAttr = document.createAttribute("alt");

	srcAttr.value = "../triangoli/triangolo" + tipo + ".png" ;
	idAttr.value = "triangolo" + playground.triangleStack.length;
	classAttr.value = "triangolo";
	altAttr.value = "triangolo";
	nuovoTriangolo.setAttributeNode(srcAttr);
	nuovoTriangolo.setAttributeNode(idAttr);
	nuovoTriangolo.setAttributeNode(classAttr);
	nuovoTriangolo.setAttributeNode(altAttr);
	PG.appendChild(nuovoTriangolo); 
	document.getElementById("triangolo" + playground.triangleStack.length).style.height = altezza + "px";
	document.getElementById("triangolo" + playground.triangleStack.length).style.width = base + "px";
	this.numero= playground.triangleStack.length;																							
	playground.numeroTriangoli++;

	this.topPosition = TPos;     //parametri del triangolo
	this.leftPosition = Lpos;
	this.base = base;
	this.altezza = altezza;
	this.tipo = tipo;
	this.nascondi = 0;
	this.vite = vite;
	this.topSpeed= Ts;
	this.leftSpeed= Ls;
	this.balla=Balla;
	
	if (tipo.indexOf("Inverso")>-1) { //Identifica i triangoli capovolti
		this.inverso=1;
	} 
	else {
		this.inverso=0;
	}

	this.urtoBall = function(lato){  //Urto della pallina su un lato del triangolo, a seconda della tipologia o del lato può scatenare eventi diversi
		if((this.tipo=="Barriera"||this.tipo=="BarrieraInverso") && lato=="Base"){
			effettiSonori("ferro");
		}
		else {
			this.vite--;
			if(vite==0){
				giocatore.punteggio += 200;
			} else{
				giocatore.punteggio += 50;
			}
			document.getElementById("punteggio").firstChild.nodeValue = giocatore.punteggio;
			if( this.tipo=="Oro" || this.tipo=="OroInverso"){
				effettiSonori("ferro");
			}else{
				effettiSonori("crack");
			}
			if(this.vite==1 && (this.tipo=="Pieno" || this.tipo=="PienoInverso" || this.tipo=="Oro" || this.tipo=="OroInverso" )){
				document.getElementById("triangolo"+this.numero).src="../triangoli/triangolo"+tipo+"RottoTutto.png";
			}
			else{
				document.getElementById("triangolo"+this.numero).src="../triangoli/triangolo"+tipo+"Rotto"+lato+".png";
			}
			if(this.vite==0){
				this.eliminaTriangolo();                           ///////<-----------Elimina il triangolo
			}
		}
	};
	
	this.eliminaTriangolo = function() { //elimina il triangolo
		probabilita = Math.random()*100;
		if(probabilita>60){  //40% di probabilità di creare una pillola altrimenti crea una moneta
			tipoScelto=Math.floor(Math.random() * tipiPillole.length);
			tipo=tipiPillole[tipoScelto];
			if (tipo=="Fungo" || tipo=="FungoAvariato") {
				aggiungiPillola(tipo, 30, 30, 3,0,this.topPosition,this.leftPosition);
			}
			else{
				aggiungiPillola(tipo, 15, 30, 3,0,this.topPosition,this.leftPosition);
			}
		}else{
			aggiungiPillola("Coin", 15, 15, 3,0,this.topPosition,this.leftPosition);
		}

		if( this.tipo=="Oro" || this.tipo=="OroInverso"){ //il triangolo d'oro "esplode" creando delle monete dorate 
			effettiSonori("Monete");
			aggiungiPillola("CoinG", 15, 15, 3,3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -3,3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, 3,-3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -3,-3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -3,0,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, 3,1,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -3,1,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, 3,-1,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -3,-1,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, 1,3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -1,3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, 1,-3,this.topPosition,this.leftPosition);
			aggiungiPillola("CoinG", 15, 15, -1,-3,this.topPosition,this.leftPosition);	
		}else{
			effettiSonori("rotto");
		}
		this.leftPosition=-20;
		this.topPosition=-20;
		var daEliminare = document.getElementById("triangolo" + this.numero);
		daEliminare.parentNode.removeChild(daEliminare);
		this.nascondi=1;
		playground.numeroTriangoli--;
		if(playground.numeroTriangoli==0){ //se i triangoli sono terminati si vince 
			vittoria();
		}
	};
}

/*Made by: Stefano Petrocchi*/
