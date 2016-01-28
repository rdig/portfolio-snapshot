let React = require('react');
let Head = require('react-helmet');
let Link = require('react-router').Link;

let Lists = {
	commons: {
		loading: function() {
			return <div>Still loading...</div>;
		},
		loadComponents: function(data, createComponent, showLoading = this.loading) {
			if (data) {
				return data.map(createComponent);
			}
			return showLoading();
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
		returnFormatedDate: function(epochSecs) {
			let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			let date = new Date(epochSecs*1000);
			return date.getDay() + '-' + monthsArr[date.getMonth()] + '-' + date.getFullYear();
		},
		createArticleListComponent: function(article) {
			return (
				<div key={article._id}>
					<div className="line-separator">
						<span className="line" />
					</div>
					<h2>
						<Link to={'articles/' + article.Name_slug} title={article.Name}>{article.Name}</Link>
					</h2>
					<p>{article.Short_Description}</p>
					<p className="article-attributes">
						<span className="published">Published:</span>
						{this.returnFormatedDate(article.created)}
					</p>
				</div>
			);
		},
		componentDidMount: function() {
			this.setState({ newdata: true });
		},
		render: function() {
			if (this.state.newdata) {
				return (
					<section>
						<Head title='Articles by' />
						<h1>Articles on Development &amp; Computing</h1>
						<p>These are articles that I've written over time, and are, in one way or another, related to my work.</p>
						<div className="articles-list">
							{Lists.commons.loadComponents(this.props.data, this.createArticleListComponent)}
						</div>
					</section>
				);
			}
			return Lists.commons.loading();
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
		createLanguageComponent: function(lang, iterator) {
			return <span className="language" key={iterator}>{lang.value}</span>;
		},
		createRepoLink: function(repoData) {
			if (repoData.Repo_Link) {
				return <a href={repoData.Repo_Link} title={repoData.Metatitle + " Repository"} target="_blank" rel="nofollow">Link to repository</a>;
			}
			return false;
		},
		createDemoLink: function(demoData) {
			if (demoData.Demo_Link) {
				return <a href={demoData.Demo_Link} title={demoData.Metatitle + " Demo"} target="_blank" rel="nofollow">Live demo</a>;
			}
			return false;
		},
		createLinkComponents: function(linkData) {
			if (linkData.Repo_Link || linkData.Demo_Link) {
				return (
					<div className="line">
						{this.createRepoLink(linkData)}
						{this.createDemoLink(linkData)}
					</div>
				);
			}
			return false;
		},
		createExperimentListComponent: function(experiment) {
			return (
				<div key={experiment._id}>
					<div className="line-separator">
						<span className="line" />
					</div>
					<h2>
						<Link to={'experiments/' + experiment.Name_slug} alt={experiment.Metatitle} title={experiment.Metatitle}>
							<span className="icon beaker" alt="Experiment" title="Experiment" />
							{experiment.Name}
						</Link>
					</h2>
					<p className="subtitle">{experiment.Subtitle}</p>
					<p>{experiment.Short_Description}</p>
					<div className="dev-attributes">
						{experiment.Prog_Lang.map(this.createLanguageComponent)}
						{this.createLinkComponents(experiment)}
					</div>
				</div>
			);
		},
		componentDidMount: function() {
			this.setState({ newdata: true });
		},
		render: function() {
			if (this.state.newdata) {
				return (
					<section>
						<Head title='Experiments by' />
						<h1>Various experiments</h1>
						<p>Here you'll find various experiments I did over time, more or less related to development. Usually their goal is to learn, test or showcase a new feature, language or concept.</p>
						<div className="experiments-list">
							{Lists.commons.loadComponents(this.props.data, this.createExperimentListComponent)}
						</div>
					</section>
				);
			}
			return Lists.commons.loading();
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
		createCardComponentInitial: function() {
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
		},
		createCardComponent: function(card) {
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
		},
		componentDidMount: function() {
			this.setState({ newdata: true });
		},
		render: function() {
			if (this.state.newdata) {
				return (
					<div>
						<Head title='Works by' />
						<h1>Past works &amp; projects</h1>
						<p>Below, you'll find a selection of past projects I have developed, either as a sole developer, or working within a larger team.</p>
						<div className="portfolio-highlight own-page">
							<div className="alignment">
							{Lists.commons.loadComponents(this.props.data, this.createCardComponent, this.createCardComponentInitial)}
							</div>
						</div>
					</div>
				);
			}
			return Lists.commons.loading();
		}
	})
};

module.exports = Lists;
