//Gestione musica sottofondo
	var cambia = 0;
		function cambiaIcona(){
			if(cambia == 0){
				document.getElementById("iconaMusica").src="../Icone/volumeOff.png";
				cambia = 1;
				document.getElementById('sottofondo').pause();
			}
			else{
				document.getElementById("iconaMusica").src="../Icone/volumeOn.png";
				cambia = 0;
				document.getElementById('sottofondo').play();
			}
		}

		function cambiaIconaIndex(){
			if(cambia == 0){
				document.getElementById("iconaMusica").src="Icone/volumeOff.png";
				cambia = 1;
				document.getElementById('sottofondo').pause();
			}
			else{
				document.getElementById("iconaMusica").src="Icone/volumeOn.png";
				cambia = 0;
				document.getElementById('sottofondo').play();
			}
		}
/*Made by: Stefano Petrocchi*/
		