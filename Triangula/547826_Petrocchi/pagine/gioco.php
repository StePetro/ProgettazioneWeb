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
	<link href="../css/gioco.css" rel="stylesheet" type="text/css">
</head>

<body id="opacizza"> 
	<?php $pagina = "gioco" ?> <!--Identifica la pagina-->
	<?php include 'navbar.php' ?> <!--Navbar-->

	<div class="contenuto"> <!--Sezione centrale-->
		<audio id="sottofondo" src="../Musica/TriangoloSottofondo.mp3" loop autoplay></audio> <!--Icone sotto alla navbar-->
		<img id="iconaMusica" src="../Icone/volumeOn.png" width="24" height="24" alt="Icona Musica" onClick="cambiaIcona()">
		<img id="playPausa" src="../Icone/pausa.png" width="24" height="24" alt="Icona Musica" onClick="playPausa()">
		
		<aside> <!--Statistiche laterali-->
			<p><em>Tempo: </em><span id="minuti">0</span>.<span id="secondi">0</span></p>
			<p><em>Vite: </em><span id="vite">0</span></p>
			<p><em>Palle: </em><span id="palle">0</span></p>
			<p><em>Triangoli: </em><span id="triangoli">0</span></p>
			<!--Ho usato un attributo style in quanto la scritta è unica di questa pagina ed era meno dispersivo che metterlo nel css-->
			<p>	<em class="punteggio" style="color:rgba(103,51,100,1.00);">P</em> 
				<em class="punteggio" style="color:rgba(78,34,70,1.00);">u</em>
				<em class="punteggio" style="color:rgba(87,42,71,1.00);">n</em>
				<em class="punteggio" style="color:rgba(101,54,74,1.00);">t</em>
				<em class="punteggio" style="color:rgba(113,66,76,1.00);">e</em>
				<em class="punteggio" style="color:rgba(128,78,77,1.00);">g</em>
				<em class="punteggio" style="color:rgba(143,91,78,1.00);">g</em>
				<em class="punteggio" style="color:rgba(153,101,79,1.00);">i</em>
				<em class="punteggio" style="color:rgba(167,112,82,1.00);">o</em>
				<em class="punteggio" style="color:rgba(174,120,82,1.00);">: </em>
				<span id="punteggio">0</span>
			</p>
		</aside>

		<div class="push2"></div> <!--Tiene le sezioni sotto alla navbar-->
		
		<article id="sconfitta" class="ombraSovrapposta"> <!--Sezione che appare se si perde-->
			<h2>game over</h2>
			<a href="gioco.php" class="sconfitta button"> Rigioca </a>
			<a href="classifica.php" class="sconfitta button"> Classifica </a>
			<a href="menu.php" class="sconfitta button"> Torna al men&#249; principale </a>
		</article>
		
		<article id="start" class="ombraSovrapposta"> <!--Sezione che appare all'inizio del gioco-->
			<h2 id="numerocapitolo">Capitolo I:</h2>
			<h3 id="nomeCapitolo">La Scoperta</h3>
			<p>(premere freccia destra o sinistra per iniziare)</p>
		</article>
		
		<article id="pausa" class="ombraSovrapposta"> <!--Sezione di pausa-->
			<h2>Pausa</h2>
			<a  href="gioco.php" class="pausa button"> Riavvia </a>
			<a href="classifica.php" class="pausa button"> Classifica </a>
			<a href="menu.php" class="pausa button"> Torna al men&#249; principale </a>
		</article>
		
		<article id="vittoria" class="ombraSovrapposta"> <!--Sezione che appare alla vittoria-->
			<h2>Vittoria</h2>
			<a  href="gioco.php" class="vittoria button"> Rigioca </a>
			<a href="classifica.php" class="vittoria button"> Classifica </a>
			<a href="menu.php" class="vittoria button"> Torna al men&#249; principale </a>
		</article>

		<section id="playground" onLoad="document.getElementById(playground).focus()" > <!--Playground: non ha un titolo per motivi stilistici (warning)-->
			<div id="paddle"></div>
		</section>
		<div class="push"></div> <!--Tiene le sezioni sopra alle montagne-->
	</div>

	<?php include 'footer.php' ?> <!--footer-->
	<!--Script per il gioco, l'ordine è importante!-->
	<script src="../script/funzionalita.js"></script>
	<script src="../script/listener.js"></script>
	<script src="../script/triangoli.js"></script>
	<script src="../script/pillole.js"></script>
	<script src="../script/palle.js"></script>
	<script src="../script/oggetti.js"></script>
	<script src="../script/musica.js"></script>
	<script src="../script/tempo.js"></script>
	<script src="../script/livello1.js"></script>
	<script src="../script/livello2.js"></script>
	<script src="../script/livello3.js"></script>
	<script src="../script/generale.js"></script>
</body>
</html>

<!--Made by: Stefano Petrocchi-->

