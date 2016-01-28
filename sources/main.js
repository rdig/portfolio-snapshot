require('./styles/main.scss');

let React = require('react');
let ReactDOM = require('react-dom');
let Router = require('react-router').Router;
let createHistory = require('history').createHistory;
let useBasename = require('history').useBasename;

const C = require('./includes/constants');
const F = require('./includes/functions');

F.DBG.appStartNotification();

let Routes = require('./routes.js');

// This needs to be better documented.
// FYI This app assumes it lives in the root of your domain, hence the /
// You only use the C.DEV_PATH in dev mode
let baseHref = '/';
if (__DEV__) {
	baseHref = C.DEV_PATH;
}

let History = useBasename(createHistory)({ basename: baseHref });

ReactDOM.render(
	<Router history={History} routes={Routes} />
	, document.getElementById('c')
);
