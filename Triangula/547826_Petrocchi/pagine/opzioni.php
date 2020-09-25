<!doctype html>
<html>
<head lang="it-IT"> 
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
	<link href="../css/form.css" rel="stylesheet" type="text/css">
</head>

<body>
	
	<audio id="sottofondo" src="../Musica/opzioni.mp3" loop autoplay></audio> <!--Musica di sottofondo-->

	<?php //gestisce il form settando gli opportuni cookie e ritorna alla home
		$urtoPalle = $transizione=$musica="";
		$urtoPalleErr = $transizioneErr= $musicaErr="";
		if ($_SERVER["REQUEST_METHOD"] == "POST") {

			if (!empty($_POST["musica"])) {
				$musica = $_POST["musica"];
				setcookie('musica', $musica, time() + (86400 * 30), "/");
				$musicaErr = "<br>Settato con successo";
			} else {
				$musicaErr = "<br>Valore non aggiornato";
			}

			if (!empty($_POST["urtoPalle"])) {
				$urtoPalle = $_POST["urtoPalle"];
				setcookie('urtoPalle', $urtoPalle, time() + (86400 * 30), "/");
				$urtoPalleErr = "<br>Settato con successo";
			} else {
				$urtoPalleErr = "<br>Valore non aggiornato";
			}

			if (!empty($_POST["transizione"])) {
				$transizione = $_POST["transizione"];
				setcookie('transizione', $transizione, time() + (86400 * 30), "/");
				$transizioneErr = "<br>Settato con successo";
			} else {
				$transizioneErr = "<br>Valore non aggiornato";
			}

			header("location:../index.php");
		}
	?>

	<?php $pagina = "opzioni" ?> <!--Identifica la pagina-->
	<?php include 'navbar.php' ?> <!--Navbar-->


	<div class="contenuto"> <!--Sezione centrale-->
		<img id="iconaMusica" src="../Icone/volumeOn.png" width="24" height="24" alt="Icona Musica" onClick="cambiaIcona()"> <!--Icone musica sottofondo-->
		<div class="push2"></div> <!--Tene la sezione sotto alla navbar-->
		<section class="centrale">
			<h3>Opzioni</h3>
			<form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> <!--Form che gestisce le opzioni-->
				<br>
				Autoplay Musica:
				<br>
				<input type="radio" name="musica"  value='no' <?php if(isset($_COOKIE["musica"])){ if($_COOKIE["musica"]=="no")  echo("checked");}else  echo("checked");  ?>>No
				<input type="radio" name="musica"  value='si' <?php if(isset($_COOKIE["musica"])){ if($_COOKIE["musica"]=="si")  echo("checked");}?>>Si
				<span class="error"><?php echo $musicaErr;?></span> <!--In realtà non vengono mostrati perchè ritorna alla home ma li lascio per completezza-->
				<br><br>
				Qualità transizione schermate (*):
				<br>
				<input type="radio" name="transizione"  value='bassa' <?php if(isset($_COOKIE["transizione"])){ if($_COOKIE["transizione"]=="bassa")  echo("checked");}else  echo("checked");  ?>>Bassa
				<input type="radio" name="transizione"  value='alta' <?php if(isset($_COOKIE["transizione"])){ if($_COOKIE["transizione"]=="alta")  echo("checked");}?>>Alta
				<span class="error"><?php echo $transizioneErr;?></span>
				<br><br>
				Abilita l'urto tra palle (*):
				<br>
				<input type="radio" name="urtoPalle"  value='no'<?php if(isset($_COOKIE["urtoPalle"])){ if($_COOKIE["urtoPalle"]=="no")  echo("checked");}else  echo("checked");  ?>>No
				<input type="radio" name="urtoPalle"  value='si' <?php if(isset($_COOKIE["urtoPalle"])){ if($_COOKIE["urtoPalle"]=="si")  echo("checked");}?>>Si
				<span class="error"><?php echo $urtoPalleErr;?></span>
				<br><br>
				<span class="error">*Può causare dei rallentamenti</span>
				<br>
				<input type="submit" name="submit" value="Conferma" class="button">  
			</form>
		</section>
		<div class="push"></div> <!--Tiene il tutto sopra alle montagne-->
	</div>

	<?php include 'footer.php' ?> <!--Footer-->

</body>
</html>

<!--Made by: Stefano Petrocchi-->

