var React = require('react');

var constants = require('../../includes/constants');

var Footer = React.createClass({
	render: function() {
		return (
			<footer>
				<p>Copyright &copy; 2016 {constants.SITE_TITLE}</p>
			</footer>
		);
	}
});

module.exports = Footer;
