<?php

namespace Sitemap\Controller;

class Sitemap extends \Cockpit\Controller {

	public function index() {

		return $this->render('sitemap:views/index.php', compact('sitemap'));

	}

}

?>
