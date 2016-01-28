let React = require('react');
let Head = require('react-helmet');

let NotFound = require('../pages/notfound.react');
let Cta = require('../common/cta.react');

let Pages = {
	commons: {
		loadComponents: function(data, pageTitle, componentsArray = []) {
			let createMarkup = function() {
				return {__html: data.Content};
			};
			return (
				<section className="article-section">
					<Head title={data.Name + ' ' + pageTitle} />
					<h1>{data.Name}</h1>
					{componentsArray.map((componentFunction, iterator) => componentFunction(iterator))}
					<div dangerouslySetInnerHTML={createMarkup()} />
				</section>
			);
		}
	},
	articles: React.createClass({
		propTypes: {
			data: React.PropTypes.array
		},
		getInitialState: function() {
			return {
				newdata: false
			};
		},
		outdatedWarningComponent: function(check) {
			return function(iterator) {
				if (check) {
					return (
						<p className="warning" key={iterator}>
							<span className="bold">Heads up: </span>
							This article is slowly getting outdated, but is still being kept as a reference. You can still find value in it, but the technologies used are of older generation. From here on, you are on your own.
						</p>
					);
				}
				return false;
			}
		},
		publishedDateComponent: function(createdEpoch, modifiedEpoch) {
			let modifiedDateComponent = function(check) {
				if (check) {
					return (
						<span className='edited'>Later Edited</span>
					);
				}
			};
			let returnFormatedDate = function(epochSecs) {
				let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				let date = new Date(epochSecs*1000);
				return date.getDay() + '-' + monthsArr[date.getMonth()] + '-' + date.getFullYear();
			};
			return function(iterator) {
				return (
					<p className="published" key={iterator}>
						<span>Published on:</span>
						<span className='date'>{returnFormatedDate(createdEpoch)}</span>
						<span>{modifiedDateComponent(createdEpoch !== modifiedEpoch)}</span>
					</p>
				);
			}
		},
		componentWillReceiveProps: function() {
			this.setState({ newdata: true });
		},
		componentDidMount: function() {
			if (this.props.data.length > 0) {
				this.setState({ newdata: true });
			}
		},
		render: function() {
			if (this.state.newdata) {
				let extraComponents = [
					this.publishedDateComponent(this.props.data[0].created, this.props.data[0].modified),
					this.outdatedWarningComponent(this.props.data[0].Archived_Warning)
				];
				return Pages.commons.loadComponents(this.props.data[0], '- Article by', extraComponents);
			}
			return <NotFound />
		}
	}),
	experiments: React.createClass({
		propTypes: {
			data: React.PropTypes.array
		},
		getInitialState: function() {
			return {
				newdata: false
			};
		},
		componentWillReceiveProps: function() {
			this.setState({ newdata: true });
		},
		componentDidMount: function() {
			if (this.props.data.length > 0) {
				this.setState({ newdata: true });
			}
		},
		render: function() {
			if (this.state.newdata) {
				return Pages.commons.loadComponents(this.props.data[0], '- Experiment by');
			}
			return <NotFound />
		}
	}),
	works: React.createClass({
		propTypes: {
			data: React.PropTypes.array
		},
		getInitialState: function() {
			return {
				newdata: false
			};
		},
		componentWillReceiveProps: function() {
			this.setState({ newdata: true });
		},
		componentDidMount: function() {
			if (this.props.data.length > 0) {
				this.setState({ newdata: true });
			}
		},
		render: function() {
			if (this.state.newdata) {
				return (
					<div>
						{Pages.commons.loadComponents(this.props.data[0], 'by')}
						<Cta />
					</div>
				)
			}
			return <NotFound />
		}
	})
};

module.exports = Pages;
