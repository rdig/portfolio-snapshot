var React = require('react');
var Link = require('react-router').Link;

var constants = require('../../includes/constants');

var Header = React.createClass({
	getInitialState: function() {
		return {
			menuState: ''
		}
	},
	componentDidMount: function() {
		window.addEventListener('mousedown', this.closeMenuOnClickOut, false);
		this.refs.navlink.addEventListener('mousedown', this.openMenu, false);
	},
	openMenu: function(evt) {
		if (this.state.menuState === 'open') {
			this.setState({ menuState: '' });
		} else {
			this.setState({ menuState: 'open' });
		}
		evt.stopPropagation();
	},
	closeMenuOnClickOut: function(evt) {
		if (this.state.menuState === 'open') {
			this.setState({ menuState: '' });
		}
		evt.stopPropagation();
	},
	render: function() {
		return (
			<header>
				<Link to='/' alt={constants.SITE_TITLE} title={constants.SITE_TITLE}>
					<span className='logo' />
					<p className="name">
						Raul <span className="no-small">Glogovetan</span>
					</p>
				</Link>
				<a id='nav-link' className='nav-link' alt='Menu' title='Menu' ref="navlink">
					<div className={'animated-hamburger ' + this.state.menuState} >
						<span />
						<span />
						<span />
					</div>
				</a>
				<nav id='nav-list' className={this.state.menuState} >
					<ul>
						<li><Link to='works' title='Works' className='gradient' activeClassName='active'>Works</Link></li>
						<li><Link to='experiments' title='Experiments' className='gradient' activeClassName='active'>Experiments</Link></li>
						<li><Link to='articles' title='Articles' className='gradient' activeClassName='active'>Articles</Link></li>
						<li><Link to='contact' title='Contact' className='gradient' activeClassName='active'>Contact</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
});

module.exports = Header;
