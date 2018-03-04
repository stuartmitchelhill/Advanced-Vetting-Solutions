
<?php
/*
 * Template Name: Contact
 * Description: A Contact Page Template.
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

Timber::render( array( 'page-template-contact.twig', 'page.twig' ), $context );