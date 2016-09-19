<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<title><?php wp_title(); ?></title>
	<link sizes="32x32" href="/favicon-32x32.png" rel="icon" type="image/png">


	<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/frontend/dist/assets/styles/app.min.css" rel="stylesheet">
</head>

<body class="page">
