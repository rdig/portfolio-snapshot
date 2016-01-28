let React = require('react');

const C = require('../../includes/constants');

let Cta = React.createClass({
	render: function() {
		return (
			<section className="contact-section article">
				<h3>Have a project for me? I'd love to help you build it.</h3>
				<a href={'mailto:'+C.CONTACT_EMAIL} className='bold' alt='Contact Email Raul Glogovetan' title='Contact Email Raul Glogovetan'>Let's get in touch!</a>
			</section>
		);
	}
});

module.exports = Cta;
