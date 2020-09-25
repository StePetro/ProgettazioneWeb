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
	<link href="../css/menu.css" rel="stylesheet" type="text/css">
</head>

<body>
	
	<audio id="sottofondo" src="../Musica/menu.mp3" loop autoplay></audio> <!--Musica sottofondo-->

	<?php $pagina = "menu" ?> <!--Identifica la pagina-->
	<?php include 'navbar.php' ?> <!--Navbar-->


	<div class="contenuto"> <!--Sezione centrale-->
		<img id="iconaMusica" src="../Icone/volumeOn.png" width="24" height="24" alt="Icona Musica" onClick="cambiaIcona()"> <!--Icone musica sottofondo-->
		<div class="push2"></div> <!--Tiene le sezioni sotto alla navbar-->
		<section class="centrale"> 
			<h3>Menù</h3>
			<p>Scegli il capitolo:</p>
			<ul> <!--Setto dei cookie per semplicità a scadenza di un giorno per lo script che carica il livello-->
				<li><a href="gioco.php" class="button"  onclick="setCookie('livello', 1, 1)">Capitolo I: <em>La Scoperta</em></a></li>
				<li><a href="gioco.php" class="button" onclick="setCookie('livello', 2, 1)">Capitolo II: <em>Dietro la Porta</em></a></li>
				<li><a href="gioco.php" class="button" onclick="setCookie('livello', 3, 1)">Capitolo III: <em>Disco</em></a></li>
				<li><a href="classifica.php" class="button bClassifica" onclick="setCookie('livello', 0, 1)">Classifica</a></li>
			</ul>
		</section>
		<div class="push"></div> <!--Tiene le sezioni sopra alle montagne-->
	</div>

	<?php include 'footer.php' ?><!--Footer-->
	<script src="../script/creaCookie.js"></script>
</body>
</html>

<!--Made by: Stefano Petrocchi-->

