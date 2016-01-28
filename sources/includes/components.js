module.exports = {
	Frame: {
		component: require('../components/frame.react'),
		path: '/'
	},
	Homepage: {
		component: require('../components/pages/homepage.react'),
		path: ''
	},
	Contact: {
		component: require('../components/pages/contact.react'),
		path: 'contact'
	},
	Content: {
		component: require('../components/pages/content.react'),
		path: ''
	},
	Works: {
		component: '',
		path: 'works'
	},
	Experiments: {
		component: '',
		path: 'experiments'
	},
	Articles: {
		component: '',
		path: 'articles'
	},
	NotFound: {
		component: require('../components/pages/notfound.react'),
		path: '*'
	},
	REDIRECTS: [
		{
			from: 'portofolio',
			to: 'works'
		},
		{
			from: 'work',
			to: 'works'
		}
	]
}
