<?php

	
	$db_name="h3u111_map"; // Database name
	$tbl_name="events"; // Table name

	// Connect to server and select database.
	mysql_connect("$host", "$username", "$password")or die("cannot connect");
	mysql_query("SET NAMES utf8");
	mysql_select_db("$db_name")or die("cannot select DB");

	// Retrieve data from database
?>