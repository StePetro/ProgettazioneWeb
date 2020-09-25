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
	<link href="../css/form.css" rel="stylesheet" type="text/css">
</head>

<body>

	<?php $pagina = "registrazione" ?> <!--Identifica la pagina-->

	<?php //Connessione al database
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "progetto_triangolo";

						// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);

						// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
	?>


	<?php //gestione del form, se i dati inseriti sono corretti torna alla pagina di accesso per il primo accesso
		$userNameErr = $emailErr = $passwordErr = $password2Err = "";
		$userName = $email = $password = $password2= "";
		$errore = 0;
		$sesso = "NULL";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			if (empty($_POST["userName"])) {
				$userNameErr = "<br>Username richiesto";
				$errore=1;
			} else {
				$userName = strtolower(test_input($_POST["userName"]));
							    // controlla che contenga solo lettere e/o numeri ed abbia una lunghezza minima di 6 e massima di 12 caratteri
				if (!preg_match("/^[a-z0-9_-]{6,18}$/",$userName)) {
					$userNameErr = "<br>Solo lettere, numeri o underscore di lunghezza massima 18 e minima 6 caratteri";
					$errore=1; 
				}
			}

			if (empty($_POST["email"])) {
				$emailErr = "<br>Email richiesta";
				$errore=1;
			} else {
				$email = test_input($_POST["email"]);
							    // controllo che l'email vada bene
				if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
					$emailErr = "<br>Inserire una mail valida";
					$errore=1; 
				}
			}

			if (empty($_POST["password"])) {
				$passwordErr = "<br>Password richiesta";
				$errore=1;
			} else {
				$password = test_input($_POST["password"]);
							    // controllo che la password vada bene
				if (!preg_match("/^(?=.*\d.*\d)(?=.*[A-Z])(?=.*[a-z])[0-9A-Za-z]{8,16}$/",$password)) {
					$passwordErr = "<br>La password deve contenere almeno 8 caratteri e non più di 16 scelti tra quelli alfanumerici, almeno due cifre, una lettera maiuscola e una minuscola."; 
					$errore=1;
				}
			}

			if (empty($_POST["password2"])) {
				$password2Err = "<br>Controllo richiesto";
				$errore=1;
			} else {
				$password2 = test_input($_POST["password2"]);
							    // controllo che la password combaci
				if (!($password == $password2)) {
					$password2Err = "<br>Le password non combaciano"; 
					$errore=1;
				}
			}

			if (!empty($_POST["sesso"])) {
				$sesso = test_input($_POST["sesso"]);
			}

			if(!$errore ){ //controllo che mail e username non esistano già
				$sql = "SELECT idUtente FROM utenti WHERE username = '$userName'";
				$result = $conn->query($sql);

				if ($result->num_rows > 0) {
					$userNameErr = "<br>Username già in uso";
					$errore=1;
				}

				$sql = "SELECT idUtente FROM utenti WHERE mail = '$email'";
				$result = $conn->query($sql);

				if ($result->num_rows > 0) {
					$emailErr = "<br>E-mail già in uso";
					$errore=1;
				}
			}

			if(!$errore ){
				$stmt = $conn->prepare("INSERT INTO utenti (password, username, sesso, mail) VALUES (?, ?, ?, ?)");
				$stmt->bind_param("ssss", $utentiPassword, $utentiUsername, $utentiSesso, $utentiMail);

					// setto i parametri e la eseguo
				$utentiPassword = md5($password); //hash per la password
				$utentiUsername = $userName;
				$utentiSesso = $sesso;
				$utentiMail = $email;
				$stmt->execute();

				$stmt->close();
				header("location: accesso.php");
			}
		}

		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
	?>    

	<?php include 'navbar.php' ?>

	<div class="contenuto"> <!--Sezione centrale-->
		<div class="push2"></div>
		<section class="centrale">
			<h2>Registrati</h2> <!--Tiene tutto sotto alla navbar-->
			<article id="registrazione"> <!--Per contenere meglio il form-->
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
					Username:<br>
					<input type="text" name="userName" placeholder="Inserire Username" value="<?php echo $userName;?>">
					<span class="error">* <?php echo $userNameErr;?></span>
					<br><br>
					E-mail: <br> <input type="text" placeholder="Inserire E-mail" name="email" value="<?php echo $email;?>">
					<span class="error">* <?php echo $emailErr;?></span>
					<br><br>
					Password: <br> <input type="password" name="password" placeholder="Inserire Password" value="<?php echo $password;?>">
					<span class="error">* <?php echo $passwordErr;?></span>
					<br><br>
					Conferma Password: <br> <input type="password" name="password2" placeholder="Riscrivere la Password" value="<?php echo $password2;?>">
					<span class="error">* <?php echo $password2Err;?></span>
					<br><br>
					Sesso:
					<input type="radio" name="sesso"  value="M" checked>M
					<input type="radio" name="sesso"  value="F">F
					<input type="radio" name="sesso"  value="A">Altro
					<br><br>
					<span class="error">* Campi Obbligatori</span>
					<br>
					<input type="submit" name="submit" value="Conferma" class="button">  
				</form>
			</article>
		</section>
		<div class="push"></div> <!--Tiene tutto sopra alle montagne-->
	</div>

	<?php include 'footer.php' ?> <!--Footer-->
</body>
</html>

<!--Made by: Stefano Petrocchi-->

