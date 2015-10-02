<?php

	$page = $_GET['page'];

	if(empty($_GET)) {
		$page = "home";
	}

?>

<html>

	<head>

		<title>BT Designs - <?php echo $page; ?></title>
		<link rel="stylesheet" type="text/css" href="css/styles.css">

	</head>

	<body>

		<?php include('inc/header.php'); ?>

		<?php include('inc/' . $page . '.php'); ?>
		
		<?php include('inc/footer.php'); ?>

	</body>

</html>