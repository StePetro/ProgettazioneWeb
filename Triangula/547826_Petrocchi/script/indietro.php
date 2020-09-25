<?php //seleziona la classifica del livello precedente
	$livello = 0;
	if (!empty($_GET["livello"])) {
		$livello = $_GET["livello"];
	}
	if($livello){
		$livello = ($livello-1)%4;
	}else
		$livello = 3;
	
	echo "loadClassifica($livello)";
?>
<!--Made by: Stefano Petrocchi-->