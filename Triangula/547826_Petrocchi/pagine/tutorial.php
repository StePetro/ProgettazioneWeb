<!doctype html>
<html lang="it-IT">
<head> 
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Triangolo</title>
	<meta name="author" content="Stefano Petrocchi">
	<meta name="description" content="Gioco online in stile brick breaker con una tematica basata sui triangoli.">
	<link rel="shortcut icon" href="favicon.ico"/>
	<link rel="icon" href="../favicon.ico"/> 
	<meta name="keywords" content="triangolo,triangoli,gioco,online,brick,breaker,paddle,the,game,palle,palla,pillole,pillola,monete,meneta,divertente,classifica">
	<link href="../css/generale.css" rel="stylesheet" type="text/css">
	<link href="../css/tutorial.css" rel="stylesheet" type="text/css">
</head>

<body>

	<?php $pagina = "tutorial" ?> <!--Identifica la pagina-->
	<?php include 'navbar.php' ?> <!--Navbar-->
	<?php
		$numero = rand(0,2);
		switch ($numero) { //sceglie a caso un sottofondo
			case 0:
				echo '<audio id="sottofondo" src="../Musica/tutorial.mp3" loop autoplay></audio>';
				break;
			case 1:
				echo '<audio id="sottofondo" src="../Musica/tutorial2.mp3" loop autoplay></audio>';
				break;
			case 2:
				echo '<audio id="sottofondo" src="../Musica/tutorial3.mp3" loop autoplay></audio>';
				break;
		}
	?>


	<div class="contenuto"> <!--Sezione centrale-->
		<img id="iconaMusica" src="../Icone/volumeOn.png" width="24" height="24" alt="Icona Musica" onClick="cambiaIcona()"> <!--Icone musica sottofondo-->
		
		<section class="centrale"> <!--Non mi piaceva stilisticamente mettere un titolo come "tutorial", per questo tengo solo i sottotitoli degli articoli al suo interno (per spiegare il warning)-->
			<article id="storia"> <!--Sezione della storia-->
				<h2> Storia </h2>

					<img src="../immagini/ilTradimento.jpg" alt="La scoperta del triangolo" >
					<p class="scritta">
						Un giorno il Sig. Paddle torn&ograve; a casa da sua moglie <em>prima del previsto</em> e fece una scoperta che gli cambiò la vita... 
						<br><br>
						Il <em>triangolo</em> era entrato nella sua casa e aveva preso sua moglie e con lei la sua vita di un tempo... 
						<br><br>
						Uscendo di casa in preda allo sconforto scopr&igrave; che non solo la sua vita domestica era stata rovinata, ma i triangoli avevano invaso l'intero pianeta, questo <em>no! Non l'aveva considerato!</em> 
						<br><br>
						Da quel giorno giurò a se stesso che avrebbe avuto un'unica missione: <em>ricacciare i triangoli dalla faccia della terra</em>.
					</p>

				<a  class="button" href="../index.php"> Men&ugrave; Principale</a>
				<a  class="button" onClick="regole()"> Continua &#8594; </a>
			</article>
			
			<article id="regole"> <!--Sezione con regole di base-->
				<h2> Regole di Base </h2>

					<img src="../immagini/regole.jpg" alt="Regole di Base" >
					<p class="scritta">
						<em>Muovere</em> il paddle con le frecce sinistra e destra <span class="nobr"><em>&#8592; &#8594;</em></span>
						<br><br>
						Lo <em>scopo</em> del gioco è <em>eliminare</em> pi&ugrave; <em>triangoli</em> possibili colpendoli con la <em>palla</em>
						<br><br>
						Si hanno inizialmente a disposizione 2 <em>vite</em>, si perde una vita se <em>non rimangono pi&ugrave; palle</em> in campo: le palle <em>scompaiono</em> se toccano il <em>bordo inferiore</em>
						<br><br>
						Si accumulano <em>punti</em> in base ai triangoli distrutti e bonus raccolti, i <em>migliori 10 punteggi</em> saranno resi pubblici nella <em>classifica</em>!
					</p>

				<a  class="button" onClick="storia()"> &#8592; Indietro </a>
				<a  class="button" onClick="triangoli()"> Continua &#8594; </a>
			</article>
			
			<article id="triangoli"> <!--Sezione con descrizione triangoli-->
				<h2>Triangoli</h2>

					<img src="../immagini/triangoli.jpg" alt="Regole di Base" >
					<p class="scritta">
						Diverse saranno le <em>tipologie di triangolo</em> che dovrai affrontare, ognuna con le sue caratteristiche peculiari
						<br><br>
						La maggior parte dei triangoli ha bisogno di <em>più di un colpo per essere distrutti</em>, una volta distrutti potranno <em>rilasciare delle pillole</em> utili al tuo scopo 
						<br><br>
						Alcuni triangoli possono <em>muoversi o avere bordi resistenti</em>, trova un altro modo per distruggerli!
						<br><br>
						Non lasciarti sfuggire i <em>triangoli dorati</em>, nascondono grandi tesori...
					</p>

				<a  class="button" onClick="regole()"> &#8592; Indietro </a>
				<a  class="button" onClick="pillole()"> Continua &#8594; </a>
			</article>
			
			<article id="pillole"> <!--Sezione con descrizione pillole-->
				<h2>Pillole</h2>

					<img src="../immagini/pillole.jpg" alt="Regole di Base" >
					<p class="scritta">
						Le <em>pillole</em> saranno un potente alleato per ricacciare i triangolo da dove sono venuti
						<br><br>
						Queste hanno degli <em>effetti speciali</em>, tra cui: allungare il tuo paddle, ingrandire la palla o darti ulteriori vite!
						<br><br>
						Stai attento a quelle <em>andate a male</em> però, possono avere effetti indesiderati...
						<br><br>
						Questo è tutto quello che devi sapere, <em>che la caccia abbia inizio!</em>
					</p>

				<a  class="button" onClick="triangoli()"> &#8592; Indietro </a>
				<a  class="button" <?php if(isset($_SESSION["utente"])) echo "href='menu.php'"; else echo "href='accesso.php'";?>>Gioca!</a>
			</article>
			
		</section>
		<div class="push"></div> <!--Tiene tutto sopra alle montagne-->
	</div>

	<?php include 'footer.php' ?> <!--Footer-->
	<script src="../script/tutorial.js"></script> <!--Script che gestisce il tutorial-->
	
</body>
</html>

<!--Made by: Stefano Petrocchi-->

