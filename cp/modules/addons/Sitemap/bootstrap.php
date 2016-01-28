<?php

// API

$this->module("sitemap")->extend([

	'set_xml_header' => function() use ($app) {
		header("Content-type: text/xml; charset=utf-8");
	},

	'return_start_tags' => function() {
		$start_xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"."\n";
		$start_xml .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\">"."\n";
		return $start_xml;
	},

	'return_end_tags' => function() {
		return "</urlset>";
	},

	'create_xml_block' => function($loc, $lastmod, $changefreq, $priority) {

		$xml_block = "<url>";
		$xml_block .= "<loc>".$loc."</loc>";
		$xml_block .= "<lastmod>".$lastmod."</lastmod>";
		$xml_block .= "<changefreq>".$changefreq."</changefreq>";
		$xml_block .= "<priority>".$priority."</priority>";
		$xml_block .= "</url>";
		return $xml_block;

	},

	'get_links_from_collections' => function($collections_tbl) {

		// @TODO Do not hardcode the location of cockpit
		$normalized_url = cockpit()->site_url.str_replace("/c", "/", cockpit()->base_url);

		foreach ($collections_tbl as $key) {

			$collection_data = cockpit("collections")->collection($key['name'])->find()->toArray();

			for ($i=0; $i<count($collection_data); $i+=1) {

				if ($collection_data[$i]['Published']) {

					$link = $normalized_url.strtolower($key['name'])."/".$collection_data[$i]['Name_slug'];
					$last = date('Y-m-d', $collection_data[$i]['modified']);
					$freq = $key['change_frequency'];
					$prio = $key['priority'];

					echo $this->create_xml_block($link, $last, $freq, $prio);
				}
			}
		}
	},

	'get_links_from_statics' => function($statics_tbl) {

		// @TODO Do not hardcode the location of cockpit
		$normalized_url = cockpit()->site_url.str_replace("/c", "", cockpit()->base_url);

		foreach ($statics_tbl as $key) {

			$link = $normalized_url.$key['path'];
			$last = date('Y-m-d');
			$freq = $key['change_frequency'];
			$prio = $key['priority'];

			echo $this->create_xml_block($link, $last, $freq, $prio);
		}
	},

	'generate_sitemap' => function() use($app) {

		$sitemap_db = cockpit('datastore:find', 'Sitemap');

		// @TODO
		// Either find a better way to get data out of arrays,
		// or at leats document the expected way the data should look
		$collections = $sitemap_db[0]['collections'];
		$statics = $sitemap_db[1]['statics'];

		$this->set_xml_header();
		echo $this->return_start_tags();

		$this->get_links_from_statics($statics);
		$this->get_links_from_collections($collections);

		echo $this->return_end_tags();

	}

]);

if (!function_exists('generate_sitemap')) {
	function generate_sitemap() {
		return cockpit('sitemap')->generate_sitemap();
	}
}

// ADMIN
if (COCKPIT_ADMIN && !COCKPIT_REST) include_once(__DIR__.'/admin.php');

?>
