//Oggetti Vari 
var playground={ //playground
	width:1080,
	height:720,
	ballStack: [],
	numeroBall: 0,
	numeroTriangoli: 0,
	triangleStack: [],
	pausa:0,
	secondi:0,
	iniziato:0,
	timer:0,
	pillStack: [],
	numeroPillole: 0,
	invertiTriangoli: 0,
	livello: 0,
	
	playground: function(w,h){
		this.width = w;
		this.height= h;
	},
};

var giocatore={ //giocatore
	vite:1,
	punteggio:0,
};

var paddle = { //paddle
	height:25,
	width:150,
	position:460,
	speed:0,
	attivoSx:0,
	attivoDx:0,
	SxDx:0,
	pausa:0,
	
	paddle: function(h,w,pos){ //inizializza il paddle
		this.height = h;
		this.width	= w;
		this.position = pos;
		document.getElementById("paddle").style.height = this.height + "px";
		document.getElementById("paddle").style.width = this.width + "px";
	},
	
	urtoBordo: function(){ //gestisce l'urto del paddle coi bordi
		if (this.position <= 0) { //Per non far andare il paddle oltre i bordi
			this.position = 0;
		}
		if (this.position >= playground.width - this.width -0) { 
			this.position = playground.width - this.width -0;
		}
	},
	
	aggiornaVelocita: function(){ //Fa in modo che -se pigiata freccia sx(o viceversa) e non rilasciata, poi la freccia destra- il paddle si muova coerentemente
		if(this.SxDx==0){
			if(this.attivoSx){
				this.speed= -10;
			}
			else{
				this.speed= 0;
				if(this.attivoDx){
					this.speed= 10;
				}
			}
		}
		else{
			if(this.attivoDx){
				this.speed= 10;
			}
			else{
				this.speed=0;
				if(this.attivoSx){
					this.speed= -10;
				}
			}
		}
	},
};

/*Made by: Stefano Petrocchi*/