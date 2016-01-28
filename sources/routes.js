let React = require('react');
let Route = require('react-router').Route;
let Index = require('react-router').IndexRoute;

const C = require('./includes/constants');
const F = require('./includes/functions');
const CMP = require('./includes/components');

let Routes = (
	<Route path={CMP.Frame.path} component={CMP.Frame.component}>
		<Index component={CMP.Homepage.component} cmsApi={C.API.works} />
		<Route path={CMP.Contact.path} component={CMP.Contact.component} />
		<Route path={CMP.Works.path} component={CMP.Content.component} cmsApi={C.API.works} type={CMP.Works.path} />
		<Route path={CMP.Works.path + '/:slug'} component={CMP.Content.component} cmsApi={C.API.works} type={CMP.Works.path} />
		<Route path={CMP.Experiments.path} component={CMP.Content.component} cmsApi={C.API.experiments} type={CMP.Experiments.path} />
		<Route path={CMP.Experiments.path + '/:slug'} component={CMP.Content.component} cmsApi={C.API.experiments} type={CMP.Experiments.path} />
		<Route path={CMP.Articles.path} component={CMP.Content.component} cmsApi={C.API.articles} type={CMP.Articles.path} />
		<Route path={CMP.Articles.path + '/:slug'} component={CMP.Content.component} cmsApi={C.API.articles} type={CMP.Articles.path} />
		{CMP.REDIRECTS.map(F.redirectRoute)}
		<Route path={CMP.NotFound.path} component={CMP.NotFound.component} />
	</Route>
);

module.exports = Routes;
