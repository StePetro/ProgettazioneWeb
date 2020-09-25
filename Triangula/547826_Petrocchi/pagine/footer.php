<!--Viene incluso in tutte le pagine tramite un include in php-->
<footer>
	<p>&#169; <strong>Stefano Petrocchi </strong><em>2018-<?php echo date("Y");?></em></p>
</footer>
<?php 
	if($pagina=="index") { //a seconda di che pagina è devo aggiustare gli indirizzi
		echo "<script src='script/musica.js'></script>";
		if(isset($_COOKIE["musica"]) && $_COOKIE["musica"]=="no"){ //gestisce il blocco all'autoplay della musica
			echo "<script>cambiaIconaIndex()</script>";
		}
	}else{
		if(!($pagina=="accesso"||$pagina=="registrazione")){
			echo "<script src='../script/musica.js'></script>";
			if(isset($_COOKIE["musica"]) && $_COOKIE["musica"]=="no"){
				echo "<script>cambiaIcona()</script>";
			}
		}
	}
?>

<!--Made by: Stefano Petrocchi-->