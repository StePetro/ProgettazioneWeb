function livello3(){
	//Contenuto sezione iniziale
	document.getElementById("numerocapitolo").firstChild.nodeValue = "Capitolo III:";
	document.getElementById("nomeCapitolo").firstChild.nodeValue = "Disco";
	document.getElementById('sottofondo').src = '../Musica/livello3.mp3'

	
	window.setInterval("inverti(this.numero)", 510); //per far "ballare" i triangoli
	
	//Aggiunge la prima palla
	aggiungiPalla(10,673,paddle.position + paddle.width/2 /*+30 -30*i*/,0,0,0);

	
	//Disposizione dei triangoli nel playground
	aggiungiTriangolo(playground.height/2,playground.width/2, 60, 60,"Pieno",3,1,0,1);
	aggiungiTriangolo(playground.height/2-30,playground.width/2-30, 60, 60,"PienoInverso",3,0,1,1);	
	
	aggiungiTriangolo(playground.height/2-300,playground.width/2-300, 60, 60,"Pieno",3,1,1,1);
	aggiungiTriangolo(playground.height/2-30-300,playground.width/2-30-300, 60, 60,"NormaleInverso",2,1,0,1);	
	
	aggiungiTriangolo(playground.height/2+100,playground.width/2+300, 60, 60,"Pieno",3,-1,1,1);
	aggiungiTriangolo(playground.height/2-30+100,playground.width/2-30+300, 60, 60,"PienoInverso",3,-1,0,1);	
	
	aggiungiTriangolo(playground.height/2-200,playground.width/2-150, 60, 60,"Normale",2,0,1,1);
	aggiungiTriangolo(playground.height/2-60-200,playground.width/2-200, 60, 60,"PienoInverso",3,1,1,1);	
	
	aggiungiTriangolo(playground.height/2+115,playground.width/2+423, 60, 60,"Normale",2,1,0,1);
	aggiungiTriangolo(playground.height/2-30+132,playground.width/2-30+83, 60, 60,"NormaleInverso",2,1,1,1);
	
	aggiungiTriangolo(playground.height/2+60,playground.width/2-250, 60, 60,"Normale",2,-1,1,1);
	aggiungiTriangolo(playground.height/2-30+60,playground.width/2-30-250, 60, 60,"NormaleInverso",2,-1,1,1);
	
	aggiungiTriangolo(playground.height/2+50,playground.width/2-400, 60, 60,"Normale",2,-1,0,1);
	aggiungiTriangolo(playground.height/2-30+50,playground.width/2-30-400, 60, 60,"PienoInverso",3,-1,0,1);	
	
	aggiungiTriangolo(0,0, 60, 60,"Pieno",3,2,0,0,0);
	aggiungiTriangolo(65,0, 60, 60,"NormaleInverso",2,2,0,0,0);
	
	aggiungiTriangolo(125,playground.width-60, 60, 60,"Barriera",2,2,0,0,0);
	aggiungiTriangolo(125,playground.width-120, 60, 60,"Barriera",2,2,0,0,0);
	aggiungiTriangolo(125,playground.width-180, 60, 60,"Barriera",2,2,0,0,0);
	aggiungiTriangolo(125,playground.width-240, 60, 60,"Barriera",2,2,0,0,0);
	aggiungiTriangolo(125,playground.width-300, 60, 60,"Barriera",2,2,0,0,0);
	
	aggiungiTriangolo(200,playground.width-130, 60, 60,"NormaleInverso",2,2,0,0,0);
	aggiungiTriangolo(200,playground.width-240, 60, 60,"PienoInverso",3,2,0,0,0);
	aggiungiTriangolo(60,playground.width-200, 60, 60,"Normale",2,2,0,0,0);
	

	//Per far partire il paddle in pausa
	paddle.pausa = 1;
	
	//Fa apparire la sezione iniziale e fa attendere 2 secondi prima di poter giocare
	apparizione();
	var partenza = setTimeout("paddle.pausa=0",2000);
}

/*Made by: Stefano Petrocchi*/