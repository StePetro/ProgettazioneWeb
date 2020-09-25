<?php //seleziona la classifica del livello successivo
	$livello = 0;
	if (!empty($_GET["livello"])) {
		$livello = $_GET["livello"];
	}
	$livello = ($livello+1)%4;
	echo "loadClassifica($livello)";
?>
<!--Made by: Stefano Petrocchi-->