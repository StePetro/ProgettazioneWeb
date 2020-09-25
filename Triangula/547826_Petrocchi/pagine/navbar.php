<!--Viene incluso in tutte le pagine tramite un include in php-->
<?php //avvia la sessione e controlla se è stato effettuato l'accesso
	session_start();
	function accesso(){
		if(isset($_SESSION["utente"])){ 
			return $_SESSION["utente"];
		} 
		return 0;
	}
?>

<nav> <!--Barra di navigazione-->
	<ul>
		<li><a <?php if($pagina=="index") echo "class='active' href='index.php'"; else echo "href='../index.php'";?> >Home</a></li>
		<li><a <?php if($pagina=="index") echo "href='pagine/opzioni.php'"; else {if($pagina=="opzioni"){echo "class='active'";} echo "href='opzioni.php'";}?> >Opzioni</a></li>
		<li><a <?php if($pagina=="index") echo "href='pagine/tutorial.php'"; else {if($pagina=="tutorial"){echo "class='active'";} echo "href='tutorial.php'";}?> >Tutorial</a></li>
		<li><h2>Triangolo</h2></li>
		<li><a <?php if(accesso()) echo "class='active utente'"; else echo "class='utente'"; if($pagina=="index") echo "href='pagine/accesso.php'"; else echo "href='accesso.php'";?>><?php if(accesso()) echo accesso(); else echo "Login";?></a></li> <!--si indenta male-->
	</ul>
</nav>


<!--Made by: Stefano Petrocchi-->