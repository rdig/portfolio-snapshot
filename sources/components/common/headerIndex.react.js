var React = require('react');

var Header = require('./header.react');

var HeaderIndex = React.createClass({
	render: function() {
		return (
			<div className="hero-section gradient">
				<Header />
				<section className="hero-content">
					<p className="section-title">Hi there...</p>
					<div className="content">
						<p className="title">
							<span>My name is <h1>Raul Glogovetan</h1>&nbsp;<span className="bold">(glo&middot;go&middot;ve&middot;ţan)</span>, and I'm a Front-end developer based out of Romania.</span>
							<span className="icon romanian-flag" alt="Romania" title="Romania"></span>
						</p>
						<p>For more than 10 years I’ve been working in this fast-paced industry, and in all this time I've had the chance to build the most innovative web app and sites for amazing clients from all over the globe.</p>
					</div>
				</section>
			</div>
		);
	}
});

module.exports = HeaderIndex;
