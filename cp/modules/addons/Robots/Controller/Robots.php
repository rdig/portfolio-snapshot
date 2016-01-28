<?php

namespace Robots\Controller;

class Robots extends \Cockpit\Controller {

	public function index() {

		return $this->render('robots:views/index.php', compact('robots'));

	}

}

?>
