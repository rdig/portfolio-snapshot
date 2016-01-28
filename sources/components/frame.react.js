let React = require('react');
let Head = require('react-helmet');

let HeaderDefault = require('./common/header.react');
let HeaderIndex = require('./common/headerIndex.react');
let Footer = require('./common/footer.react');

const C = require('../includes/constants');

let Frame = React.createClass({
	propTypes: {
		children: React.PropTypes.object,
		location: React.PropTypes.object
	},
	render: function() {
		let Header = HeaderDefault;
		if (this.props.location.pathname === '/') {
			Header = HeaderIndex;
		}
		return (
			<div className='page-wrapper'>
				<Head
					title=' '
					titleTemplate={'%s '+ C.SITE_TITLE + ' - ' + C.SITE_DESCRIPTION}
					meta={[
						{ "name": "viewport", "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},
						{ "name": "description", "content": C.SITE_META_DESCRIPTION },
						{ "name": "application-name", "content": C.SITE_TITLE },
						{ "name": "msapplication-TileColor", "content": "#FFFFFF" },
						{ "name": "msapplication-TileImage", "content": C.IMG.mstile144 },
						{ "name": "msapplication-square70x70logo", "content": C.IMG.mstile70 },
						{ "name": "msapplication-square150x150logo", "content": C.IMG.mstile150 },
						{ "name": "msapplication-wide310x150logo", "content": C.IMG.mstile310_150 },
						{ "name": "msapplication-square310x310logo", "content": C.IMG.mstile310 },
						{ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }
					]}
					link={[
						{"rel": "apple-touch-icon-precomposed", "sizes": "57x57", "href": C.IMG.appleTouch57 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "114x114", "href": C.IMG.appleTouch114 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "72x72", "href": C.IMG.appleTouch72 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "144x144", "href": C.IMG.appleTouch144 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "60x60", "href": C.IMG.appleTouch60 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "120x120", "href": C.IMG.appleTouch120 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "76x76", "href": C.IMG.appleTouch76 },
						{"rel": "apple-touch-icon-precomposed", "sizes": "152x152", "href": C.IMG.appleTouch152 },
						{"rel": "icon", "type": "image/png", "href": C.IMG.favicon196, "sizes": "196x196" },
						{"rel": "icon", "type": "image/png", "href": C.IMG.favicon96, "sizes": "96x96" },
						{"rel": "icon", "type": "image/png", "href": C.IMG.favicon32, "sizes": "32x32" },
						{"rel": "icon", "type": "image/png", "href": C.IMG.favicon16, "sizes": "16x16" },
						{"rel": "icon", "type": "image/png", "href": C.IMG.favicon128, "sizes": "128x128" }
					]}
				/>
				<div className='page-content'>
					<Header />
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = Frame;
