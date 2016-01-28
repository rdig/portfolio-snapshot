let React = require('react');
let Head = require('react-helmet');

const C = require('../../includes/constants');

let Contact = React.createClass({
	render: function() {
		return (
			<div>
				<Head title='Contact ' />
				<section>
					<h1 className="center">Here is why you should contact me:</h1>
					<br />
					<p className="center small-footprint">You saw something that you want to ask me about.</p>
					<p className="center small-footprint">You want to talk about a cool project.</p>
					<p className="center">Or just dropping by to say hello!</p>
					<br />
					<p className="center">
						<a href={'mailto:'+C.CONTACT_EMAIL} className='bold' alt='Contact Email Raul Glogovetan' title='Contact Email Raul Glogovetan'>Let's get in touch!</a>
					</p>
				</section>
			</div>
		);
	}
});

module.exports = Contact;
