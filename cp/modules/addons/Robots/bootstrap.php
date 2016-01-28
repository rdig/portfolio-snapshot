<?php

// API

$this->module("robots")->extend([

	'set_plaintext_header' => function() use($app) {

		header("Content-type: text/plain; charset=utf-8");
	},

	'set_user_agent' => function($ua) use($app) {

		return "User-agent: ".$ua."\n";
	},

	'return_static_content' => function($data_arr) use($app) {

		$disallowed_links = '';

		foreach ($data_arr as $key => $value) {

			$disallowed_links .= "Disallow: ".$value."\n";
		}

		return $disallowed_links;
	},

	'return_sitemap_location' => function($location) use($app) {

		return "Sitemap: ".$location."\n";
	},

	'return_host' => function($host) use($app) {

		return "Host: ".$host."\n";
	},

	'generate' => function() use($app) {

		$robots_db = cockpit('datastore:find', 'Robots');

		// @TODO
		// Either find a better way to get data out of arrays,
		// or at leats document the expected way the data should look
		$disallowed = $robots_db[0]['disallowed'];
		// @TODO Do not hardcode the location of cockpit, or of the sitemap
		$normalized_url = cockpit()->site_url.str_replace("/c", "", cockpit()->base_url);
		$sitemap_url = $normalized_url."/sitemap.xml";

		$this->set_plaintext_header();

		echo $this->set_user_agent("*");

		echo $this->return_static_content($disallowed);

		echo $this->return_sitemap_location($sitemap_url);

		echo $this->return_host($normalized_url);
	}

]);

if (!function_exists('generate')) {
	function generate() {
		return cockpit('robots')->generate();
	}
}

// ADMIN
if (COCKPIT_ADMIN && !COCKPIT_REST) include_once(__DIR__.'/admin.php');

?>
