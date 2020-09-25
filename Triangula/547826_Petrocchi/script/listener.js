//Gestione dei tasti 
document.addEventListener('keydown', function (e) { //Per far muovere il paddle
	if(paddle.pausa==0){
			if (e.keyCode == 37 || e.which == 37 || e.keyCode == 65 || e.which == 65) { // freccia sx o "a"
				paddle.attivoSx=1;
			paddle.SxDx=0;
		}
			if (e.keyCode == 39 || e.which == 39 || e.keyCode == 68 || e.which == 68) { // freccia dx o "d"
				paddle.attivoDx=1;
			paddle.SxDx=1;
		}
	}
		if (e.keyCode == 46 || e.which == 46 || e.keyCode == 32 || e.which == 32 || e.keyCode == 80 || e.which == 80) { // Barra spaziatrice, canc o "p" per mettere in pausa
			playPausa();
	}
	if(e.keyCode == 37 || e.which == 37 || e.keyCode == 39 || e.which == 39 || e.keyCode == 68 || e.which == 68 || e.keyCode == 65 || e.which == 65){
		scomparsa();
		if(playground.iniziato==0){
			playground.timer = window.setInterval("tempo()",1000);
			//document.getElementById('sottofondo').play();
			playground.iniziato=1;
		}
		for( var i=0; i<playground.ballStack.length; i++){
				if(playground.ballStack[i].inizio==0 && paddle.pausa==0){                                                             
					playground.ballStack[i].start();
					playground.ballStack[i].inizio=1;
				}
			}
		}
	}, false);

document.addEventListener('keyup', function (e) { //Per stoppare il paddle quando alzo il stasto
     	if (e.keyCode == 37 || e.which == 37 || e.keyCode == 65 || e.which == 65) { // freccia sx o "a"
     		paddle.attivoSx=0;
     }
		if (e.keyCode == 39 || e.which == 39 || e.keyCode == 68 || e.which == 68) { // freccia dx o "d"
			paddle.attivoDx=0;
	}
}, false);

window.addEventListener('keydown', function(e) {
  if((e.keyCode == 32 || e.which == 32 || e.keyCode == 38 || e.which == 38 || e.keyCode == 40 || e.which == 40)  && e.target == document.body) { //non fa fare lo scroll della pagina con le frecce o la spacebar
  	e.preventDefault();
  }
});

/*Made by: Stefano Petrocchi*/