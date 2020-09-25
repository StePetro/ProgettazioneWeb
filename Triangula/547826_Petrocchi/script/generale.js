//livello1();
//livello2();
//livello3();
//livello4();
//livello5();

function carica_livello(){ //Preleva il livello da caricare dal cookie creato nel menù
	livello=getCookie("livello");
	switch(livello) {
    case '1':
        livello1();
        break;
    case '2':
        livello2();
        break;
   	case '3':
        livello3();
        break;
	case '4':
        livello4();
        break;
    default:
        alert("Nessun livello selezionato");
	}	
	return livello;
}

playground.livello=carica_livello();

if(getCookie("musica") == "no"){ //toglie l'autoplay alla musica
		document.getElementById('sottofondo').pause();
		
}

if(getCookie("transizione") == "bassa"){ //toglie la transizione morbida alle sezioni 
    document.getElementById("pausa").style.display = "none";
    document.getElementById("sconfitta").style.display = "none";
    document.getElementById("vittoria").style.display = "none";
}

/*Made by: Stefano Petrocchi*/