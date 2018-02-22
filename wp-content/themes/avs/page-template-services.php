
<?php
/*
 * Template Name: Services
 * Description: A Services Template.
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( array( 'page-template-services.twig', 'page.twig' ), $context );