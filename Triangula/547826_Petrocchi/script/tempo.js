//Gestisce le tempistiche di gioco se non è in pausa, aggiorna velocità e posizione di tutti gli oggetti, controlla gli urti e aggiorna le statistiche
window.setInterval(function show(){ 
	if(playground.pausa!=1){
		paddle.aggiornaVelocita(); 
		paddle.urtoBordo(); 
		aggiornaPosizioni(); 
		for( var i=0; i<playground.ballStack.length; i++){
			if(playground.ballStack[i].nascondi===0){
				playground.ballStack[i].urtoBordo();
				playground.ballStack[i].urtoPaddle();
				if(getCookie("urtoPalle") == "si"){
					playground.ballStack[i].urtoPalle();
				}
				playground.ballStack[i].urtoTriangolo();
			}
		}
		
		for( var k=0; k<playground.pillStack.length; k++){
			//if(playground.pillStack[k].nascondi===0){
				playground.pillStack[k].urtoBordo();
				playground.pillStack[k].urtoPaddle();
			//}
		}
		
		document.getElementById("vite").firstChild.nodeValue = giocatore.vite;
		if(giocatore.vite==0){
			document.getElementById("vite").style.color = "red";
		}else{
			document.getElementById("vite").style.color = "white";
		}
		if(playground.numeroBall==0){
			document.getElementById("palle").style.color = "red";
		}
		document.getElementById("palle").firstChild.nodeValue = playground.numeroBall;
		document.getElementById("triangoli").firstChild.nodeValue = playground.numeroTriangoli;
	}	
}, 1000/60);

/*Made by: Stefano Petrocchi*/
