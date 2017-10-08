<?php
if (preg_match('/^127.0.0.1|localhost$/i', $_SERVER['HTTP_HOST']) || preg_match('/\.dev$/i', $_SERVER['HTTP_HOST']) || preg_match('/^192.168.1./', $_SERVER['REMOTE_ADDR'])) {
    include(dirname(__FILE__).'/wp-config-dev.php');
}else if(preg_match('/^indev.com.au$/i', $_SERVER['HTTP_HOST'])){
    include(dirname(__FILE__).'/wp-config-staging.php');
} else {
    include(dirname(__FILE__).'/wp-config-prod.php');
}