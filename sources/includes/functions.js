let React = require('react');
let Redirect = require('react-router').Redirect;

const C = require('./constants');

module.exports = {
	ERR: {
		apiRequestFail: function(apiLocation, failMessage) {
			if (__DEV__) {
				let status = JSON.parse(failMessage);
				console.error('['+C.APP_NAME+']','Cannot fetch API data from', apiLocation+',', 'look in the constants file to correct the problem -', 'Status:', status.error, 'Error:', status.message);
			}
		}
	},
	DBG: {
		log: function() {
			if (__DEV__) {
				for(var i = 0, l = arguments.length; i < l; i += 1) {
					console.log('['+C.APP_NAME+']','DBG:', arguments[i]);
				}
			}
		},
		appStartNotification: function() {
			if (__DEV__) {
				let d = new Date();
				console.log('['+C.APP_NAME+']','React app started successfully', '['+d.toDateString(), '-', d.toTimeString()+']');
			}
		}
	},
	redirectRoute: function(redirect, i) {
		return <Redirect from={redirect.from} to={redirect.to} key={i} />;
	},
	fetchData: function(slug, api, filter, callback) {
		let articleFilter = filter;
		if (slug) {
			articleFilter = {
				filter: {
					Published: true,
					Name_slug: slug
				}
			};
		}
		let promise = new Promise(function(resolve, reject) {
			Cockpit.request(api, articleFilter).success(function(items){
				resolve(items);
			}).fail(function(errObj) {
				reject(errObj);
			});
		});
		promise.then(function(data) {
			callback(data);
		}).catch(function(msg) {
			this.ERR.apiRequestFail(api, msg);
		}.bind(this));
	}
};
