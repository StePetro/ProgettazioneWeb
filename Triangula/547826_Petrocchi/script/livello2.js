function livello2(){
	//Contenuto sezione iniziale
	document.getElementById("numerocapitolo").firstChild.nodeValue = "Capitolo II:";
	document.getElementById("nomeCapitolo").firstChild.nodeValue = "Dietro la Porta";
	document.getElementById('sottofondo').src = '../Musica/livello2.2.mp3'
	document.getElementById('sottofondo').volume-=0.5;

	//Aggiunge la prima palla
	aggiungiPalla(10,673,paddle.position + paddle.width/2 /*+30 -30*i*/,0,0,0);

	//Disposizione dei triangoli nel playground
 	var distanzia=60;
	for( var i=0; i<7; i++){
		if(i==3){
			aggiungiTriangolo(300,-60+distanzia, 60, 60,"Normale",2);
		}
		else{
			aggiungiTriangolo(300,-60+distanzia, 60, 60,"Barriera",2);
		}
		distanzia=distanzia +60;
	}
	
	distanzia += 30;
	for( var i=0; i<3; i++){
		aggiungiTriangolo(300,playground.width-distanzia, 60, 60,"PienoInverso",3);
		distanzia=distanzia +60;
	}
	for( var i=0; i<2; i++){
		aggiungiTriangolo(300,playground.width-distanzia+150, 60, 60,"Pieno",3);
		distanzia=distanzia +60;
	}
	
	var distanzia=60;
	for( var i=0; i<7; i++){
		if(i==3){
			aggiungiTriangolo(300,playground.width-distanzia, 60, 60,"Normale",2);
		}
		else{
			aggiungiTriangolo(300,playground.width-distanzia, 60, 60,"Barriera",2);
		}
		
		distanzia=distanzia +60;
	}
	
		var distanzia=60;
	for( var i=0; i<15; i++){
		aggiungiTriangolo(125,0+distanzia, 60, 60,"Normale",2);
		distanzia=distanzia +60;
	}
	var distanzia=60;
	for( var i=0; i<14; i++){
		aggiungiTriangolo(125,30+distanzia, 60, 60,"NormaleInverso",2);
		distanzia=distanzia +60;
	}
	
	//Per far partire il paddle in pausa
	paddle.pausa = 1;

	//Fa apparire la sezione iniziale e fa attendere 2 secondi prima di poter giocare
	apparizione();
	var partenza = setTimeout("paddle.pausa=0",2000);
}

/*Made by: Stefano Petrocchi*/