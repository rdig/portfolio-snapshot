let React = require('react');
let Head = require('react-helmet');

let C = require('../../includes/constants');

let NotFound = React.createClass({
	render: function() {
		return (
			<div>
				<Head title='The page you have requested does not exist -' />
				<div className="error-signal" />
				<section className="error-section">
					<h1>The page you have requested does not exist!</h1>
					<p className="error-code">Error code: 404</p>
					<p>The page you tried to access does not exist. It was either move, deleted or it didn't exist int he first place. If you arrived here following a link on another website, please <a className="bold" href={'mailto:' + C.CONTACT_EMAIL} alt="Contact Email Raul Glogovetan" title="Contact Email Raul Glogovetan">let me know</a> so I can resolve the problem.</p>
					<p>To get out of here, you can follow the links in the top menu.</p>
				</section>
			</div>
		);
	}
});

module.exports = NotFound;
