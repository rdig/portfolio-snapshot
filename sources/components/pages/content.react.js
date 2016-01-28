let React = require('react');

let F = require('../../includes/functions');

let Articles = React.createClass({
	propTypes: {
		route: React.PropTypes.object,
		params: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			data: [],
			'type': ''
		};
	},
	updateStateData: function(data) {
		if (this.isMounted()) {
			this.setState({ data: data });
		}
	},
	componentWillMount: function() {
		this.setState({ type: this.props.route.type	});
	},
	componentDidMount: function() {
		F.fetchData(this.props.params.slug, this.props.route.cmsApi.location, this.props.route.cmsApi.filter, this.updateStateData);
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({ type: nextProps.route.type });
		F.fetchData(nextProps.params.slug, nextProps.route.cmsApi.location, nextProps.route.cmsApi.filter, this.updateStateData);
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		if (nextState.data !== this.state.data) {
			return true;
		}
		return false;
	},
	render: function() {
		let List = require('../common/lists.react')[this.state.type];
		let Page = require('../common/pages.react')[this.state.type];
		if (this.props.params.slug) {
			return <Page data={this.state.data} />
		}
		return <List data={this.state.data} />
	}
});

module.exports = Articles;
