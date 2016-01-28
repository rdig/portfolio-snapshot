<?php
	require_once("cp/bootstrap.php");
	$dir = str_replace('index.php', '', $_SERVER['PHP_SELF']);
	$absolute_path = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$dir;
?>

<!DOCTYPE html>
<html dir="ltr" lang="en">
	<base href="<?=$absolute_path;?>" />
	<head>
		<meta charset="UTF-8" />
		<?php cockpit_js_lib('api-key') ?>
		<!--[if gte IE 9]>
		<style type="text/css">	.gradient {	filter: none; }	</style>
		<![endif]-->
	</head>
	<body>
		<div id="c"></div>
		<script src="scripts/c.js"></script>
		<script src="scripts/p.js"></script>
	</body>
</html>
