function livello1(){
	//Contenuto sezione iniziale
	document.getElementById("numerocapitolo").firstChild.nodeValue = "Capitolo I:";
	document.getElementById("nomeCapitolo").firstChild.nodeValue = "La Scoperta";
	document.getElementById('sottofondo').src = '../Musica/livello1.mp3';
	
	//for( var i=0; i<3; i++){
		aggiungiPalla(10,673,paddle.position + paddle.width/2 /*+30 -30*i*/,0,0,0);
	//}

	/*var distribuisci1 = 1080/5;
	for( var i=0; i<5; i++){
		aggiungiTriangolo(300,distribuisci1*i, 60, 60,"NormaleInverso",2);
	}*/

	/*var distribuisci2 = 1080/5;
	for( var i=0; i<5; i++){
		aggiungiTriangolo(300,distribuisci2*i+100, 60, 60,"Normale",2);
	}*/
	
	//aggiungiTriangolo(400,250, 60, 60,"Normale",2);
	
	//Disposizione dei triangoli nel playground
 	var distanzia=60;
	for( var i=0; i<5; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400,250+distanzia, 60, 60,"Normale",2);
	}

	 distanzia=60;
	for( var i=0; i<4; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-60,250+distanzia+30, 60, 60,"Normale",2);
	}
	 distanzia=60;
	for( var i=0; i<3; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-120,250+distanzia+60, 60, 60,"Normale",2);
	}
	 distanzia=60;
	for( var i=0; i<2; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-180,250+distanzia+90, 60, 60,"Normale",2);
	}
	 distanzia=60;
	for( var i=0; i<1; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-240,250+distanzia+120, 60, 60,"Normale",2);
	}

 	var distanzia=60;
	for( var i=0; i<4; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400,250+distanzia+30, 60, 60,"NormaleInverso",2);
	}

	 distanzia=60;
	for( var i=0; i<3; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-60,250+distanzia+30+30, 60, 60,"NormaleInverso",2);
	}
	 distanzia=60;
	for( var i=0; i<2; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-120,250+distanzia+60+30, 60, 60,"NormaleInverso",2);
	}
	 distanzia=60;
	for( var i=0; i<1; i++){
		distanzia=distanzia +60;
		aggiungiTriangolo(400-180,250+distanzia+90+30, 60, 60,"NormaleInverso",2);
	}
	
	//Per far partire il paddle in pausa
	paddle.pausa = 1;
	
	//Fa apparire la sezione iniziale e fa attendere 2 secondi prima di poter giocare
	apparizione();
	var partenza = setTimeout("paddle.pausa=0",2000);

}

/*Made by: Stefano Petrocchi*/
