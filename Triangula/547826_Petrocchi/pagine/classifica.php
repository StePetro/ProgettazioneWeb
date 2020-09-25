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
	<link href="../css/classifica.css" rel="stylesheet" type="text/css">
	<link href="../css/triangoliFluttuanti.css" rel="stylesheet" type="text/css">
	<link href="../css/triangoliFluttuantiInverso.css" rel="stylesheet" type="text/css">
</head>

<body onload="loadClassifica(0)">

	<?php $pagina = "classifica" ?> <!--Indica che pagina è-->
	<?php include 'navbar.php' ?> <!--Navbar-->


	<div class="contenuto"> <!--Sezione centrale-->
		<?php
			$numero = rand(0,100); //Sceglie a caso una musica di sottofondo
			if($numero<50){
				echo '<audio id="sottofondo" src="../Musica/classifica.mp3" loop autoplay></audio>';
			}else{
				echo '<audio id="sottofondo" src="../Musica/classifica2.mp3" loop autoplay></audio>';
			}
		?>
		<img id="iconaMusica" src="../Icone/volumeOn.png" width="24" height="24" alt="Icona Musica" onClick="cambiaIcona()"> <!--Icone musica sottofondo-->
		<section class="centrale">
			<h2 id="titolo">Classifica Generale</h2>
			<div id="scroll"> <!--Serve per la scrollbar-->
				<table id="classifica"> <!--Tabella classifica-->
				</table>
			</div>
			<a class="button schiacciato" id="indietro" onClick="loadClassifica(1)">&#8592;</a>
			<a class="button schiacciato" id="avanti" onClick="loadClassifica(3)">&#8594;</a>
			<br>
			<?php
			$livello = 0;
				if(isset($_COOKIE["livello"]))
					$livello = $_COOKIE["livello"];
			if($livello) //se non si è entrati da una schermata di gioco non lo fa vedere
				echo('<a href="gioco.php" class="button"> Rigioca </a>');
			?>
			<a href="menu.php" class="button">Torna al Men&#249;</a>
		</section>
		<div class="push"></div>
	</div>
	<ul class="formeSfondo"> <!--Sono i triangoli fluttuanti-->
		<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
	</ul>

	<?php include 'footer.php' ?> <!--footer-->

	<script src="../script/classifica.js"></script>
</body>
</html>

<!--Made by: Stefano Petrocchi-->










































