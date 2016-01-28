let React = require('react');
let Link = require('react-router').Link;

let Homepage = React.createClass({
	propTypes: {
		route: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			'works': []
		};
	},
	componentDidMount: function() {
		let promise = new Promise(function(resolve) {
			Cockpit.request(this.props.route.cmsApi.location, this.props.route.cmsApi.filter ).success(function(items){
				resolve(items);
			});
		}.bind(this));
		promise.then(function(data) {
			if (this.isMounted()) {
				this.setState({ works: data });
			}
		}.bind(this));
	},
	render: function() {
		let createCardComponentInitial = function() {
			return (
				<Link to='#'>
					<div className="work-card">
						<div className="teaser-image" style={{
							'backgroundColor': 'lightgray'
						}} />
						<h3></h3>
						<p>Loading...</p>
					</div>
				</Link>
			);
		};
		let createCardComponent = function(card) {
			return (
				<Link to={'works/' + card.Name_slug} alt={card.Metatitle} title={card.Metatitle} key={card._id}>
					<div className="work-card">
						<div className="teaser-image" style={{
							'backgroundImage': 'url(' + card.Teaser_Image.replace(/site:/ig, '') + ')'
						}} />
						<h3>{card.Name}</h3>
						<p>{card.Short_Description}</p>
					</div>
				</Link>
			);
		};
		let loadCardComponent = function() {
			if (this.state.works) {
				let filterWorks = this.state.works.slice(0,2);
				return filterWorks.map(createCardComponent);
			}
			return createCardComponentInitial();
		}.bind(this);
		return (
			<div>
				<section className="portfolio-highlight">
					<p>In the last years I've been focused on the development of single-page applications using the Javascript tech stack, and most recently started building with React.</p>
					<p>Coming from a diverse technological background, I have experience working with PHP on the back-end, with MySQL on databases and a lot of my time was spent solving server configuration and scalability issue.</p>
					<p className="last">Below you'll find my latest projects that I could share publicly. And for the full list, you can check out the&nbsp;
						<Link to="works" alt="Works" title="Works">works section</Link>.
					</p>
					{loadCardComponent()}
				</section>
			</div>
		);
	}
});

module.exports = Homepage;
