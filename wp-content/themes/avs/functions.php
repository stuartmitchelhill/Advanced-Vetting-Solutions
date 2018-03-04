<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});
	
	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});
	
	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
        // Services
        register_post_type( 'service',
            array(
                'labels' => array(
                    'name' => __( 'Services' ),
                    'singular_name' => __( 'Service' ),
                    'menu_name'          => _x( 'Services', 'admin menu', 'avs' ),
                    'name_admin_bar'     => _x( 'Service', 'add new on admin bar', 'avs' ),
                    'add_new'            => _x( 'Add New', 'service', 'avs' ),
                    'add_new_item'       => __( 'Add New Service', 'avs' ),
                    'new_item'           => __( 'New Service', 'avs' ),
                    'edit_item'          => __( 'Edit Service', 'avs' ),
                    'view_item'          => __( 'View Service', 'avs' ),
                    'all_items'          => __( 'All Services', 'avs' ),
                    'search_items'       => __( 'Search Services', 'avs' ),
                    'parent_item_colon'  => __( 'Parent Services:', 'avs' ),
                    'not_found'          => __( 'No Services found.', 'avs' ),
                    'not_found_in_trash' => __( 'No Services found in Trash.', 'avs' )
                ),
                'rewrite' => array(
                    'slug' => 'services'
                ),
                'public' => true,
                'has_archive' => true,
                'menu_icon' => 'dashicons-clipboard',
                'supports' => array(
                    'title', 'thumbnail', 'editor'
                )
            )
        );
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
	    //menus
		$context['menu'] = new TimberMenu('Main Navigation');
        $context['secondary_menu'] = new TimberMenu('Secondary Navigation');

        //breadcrumbs
        if ( function_exists( 'yoast_breadcrumb' ) ) {
            $context['breadcrumbs'] = yoast_breadcrumb('<div class="breadcrumbs">','</div>', false );
        }

        //acf sitewide options
        $context['options'] = get_fields('options');

        $context['site'] = $this;
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

}

new StarterSite();

add_editor_style('style.css');

// Add format dropdown to wysiwyg
function activate_format_dropdown($buttons)
{
    array_unshift($buttons, 'styleselect');

    return $buttons;
}
add_filter('mce_buttons_2','activate_format_dropdown');

// Add custom styles to wysiwyg
function add_style_to_content_editor( $init_array ) {

    $style_formats = array(
        array(
            'title' => 'Intro',
            'block' => 'p',
            'classes' => 'intro',
            'wrapper' => false,
        ),

        array(
            'title' => 'Button',
            'selector' => 'a',
            'classes' => 'btn-primary',
            'wrapper' => false,
            'exact' => true,
        ),

        array(
            'title' => 'Arrow Left',
            'selector' => 'a',
            'classes' => 'arrow-link left',
            'wrapper' => false,
            'exact' => true,
        ),

        array(
            'title' => 'Arrow Right',
            'selector' => 'a',
            'classes' => 'arrow-link right',
            'wrapper' => false,
            'exact' => true,
        )
    );

    $init_array['style_formats'] = json_encode( $style_formats );

    return $init_array;
}
add_filter( 'tiny_mce_before_init', 'add_style_to_content_editor' );

function add_my_favicon() {
    $favicon_path = get_template_directory_uri() . '/assets/img/favicon-32x32.png';

    echo '<link rel="shortcut icon" href="' . $favicon_path . '" />';
}

// Add options page to theme
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
}

