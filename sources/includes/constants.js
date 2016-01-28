module.exports = {
	'API': {
		works: {
			location: '/collections/get/Works',
			filter: {
				filter: { Published: true },
				sort: { 'created': -1 }
			}
		},
		experiments: {
			location: '/collections/get/Experiments',
			filter: {
				filter: { Published: true },
				sort: { 'created': -1 }
			}
		},
		articles: {
			location: '/collections/get/Articles',
			filter: {
				filter: { Published: true },
				sort: { 'created': -1 }
			}
		}
	},
	'IMG': {
		favicon16: require('../media/icons/favicon-16x16.png'),
		favicon32: require('../media/icons/favicon-32x32.png'),
		favicon96: require('../media/icons/favicon-96x96.png'),
		favicon128: require('../media/icons/favicon-128.png'),
		favicon196: require('../media/icons/favicon-196x196.png'),
		mstile70: require('../media/icons/mstile-70x70.png'),
		mstile144: require('../media/icons/mstile-144x144.png'),
		mstile150: require('../media/icons/mstile-150x150.png'),
		mstile310_150: require('../media/icons/mstile-310x150.png'),
		mstile310: require('../media/icons/mstile-310x310.png'),
		appleTouch57: require('../media/icons/apple-touch-icon-57x57.png'),
		appleTouch114: require('../media/icons/apple-touch-icon-114x114.png'),
		appleTouch72: require('../media/icons/apple-touch-icon-72x72.png'),
		appleTouch144: require('../media/icons/apple-touch-icon-144x144.png'),
		appleTouch60: require('../media/icons/apple-touch-icon-60x60.png'),
		appleTouch120: require('../media/icons/apple-touch-icon-120x120.png'),
		appleTouch76: require('../media/icons/apple-touch-icon-76x76.png'),
		appleTouch152: require('../media/icons/apple-touch-icon-152x152.png')
	},
	'SITE_TITLE': 'Raul Glogovetan',
	'SITE_DESCRIPTION': 'Front-end Web Developer',
	'SITE_META_DESCRIPTION': 'For more than 10 years I’ve been working in this fast-paced industry, and in all this time I\'ve had the chance to build the most innovative web app and sites for amazing clients from all over the globe',
	'CONTACT_EMAIL': 'raul@glogovetan.com',
	'DEV_PATH': '/portfolio-snapshot/',
	'APP_NAME': 'portfolio-snapshot'
};
