import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { Link } from 'react-router';
import routeHelper from 'helpers/RouteHelper';
// import AuthHelper from 'helpers/Auth';

import {
	App,
	Admin,
	Home,
	Login
	} from 'containers';

// const AuthSupportal = require('helpers/AuthSupportal.js');

// <Route path="*" component={AdminListing} status={404} />
// <Route path="/home" component={Home} />
// <Route path="/test" name="test" component={Home} />
const AuthHelper = {
	checkLoggedIn() {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log('got to checkk logged in');
		console.log('user is: ', user);
		return new Promise((resolve, reject) => {
			if (!user) {
				console.log('rejecting user');
				reject();
			} else {
				console.log('accepting user');
				// client.setJwt(window.localStorage.token);
				// this.jwtAuth()
				// TEMPORARY CREATE USER
				this.setUser()
				.then((res) => {
					const data = res.data[0];
					console.log('now on the res bit, data: ', data);
					console.log('now on the res bit, data: ', res);
					// this.saveJwt(data.authorization);
					// this.updateUser({ username: data.username });
					// this.getOrgs();
					resolve();
				}).catch((err) => {
					// this.clearJwt();
					console.log('an error happened in checkLogged in');
					reject(err);
				});
			}
		});
	},
	setUser() {
	console.log('setuser called, there should now be a user set (again!)');
		const tempUser = {
			username: 'dave',
			password: 'Alasdair123',
			authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmUiLCJ1c2VyTG9naW5TeXNpZCI6MiwiaWF0IjoxNDgxOTQzNzM0LCJleHAiOjE0ODIxMTY1MzR9.2pxAcI7zT_OADjiZ5D5HqWOo0V9fqGyFo0A_CV5pU3s' // eslint-disable-line
			};
			const tempObject = {user: tempUser};
			localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
	}
};

const requireLogin = (nextState, replace, cb) => {
	// Kick you back to login page if have not logged in
	AuthHelper.checkLoggedIn()
	.then(() => {
		console.log('checklogin is complete, now doing callback...');
		cb();
	})
	.catch(() => {
		console.log('checklogin is not done, now doing send to login...');
		routeHelper.updateNextPath(location.pathname);
		replace({
			pathname: '/login'
		});
		cb();
	});
};

/*
	const onLogin = () => {
		console.log('onLogin called');
		console.log('will now redirect.');
		return true;
	};
*/
	const onLogin = (nextState, replace, cb) => {
		console.log('onLogin2 called');
		AuthHelper.checkLoggedIn()
			.then(() => {
				console.log('checkked, now showing login page?');
				cb();
			})
			.catch(() => {
				console.log('checkked error, now showing login page?');
				cb();
			});
	};
	function loggedIn() {
		console.log('login function, returngin true');
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log('does user esist? supportalStorage.user: ', user);
		return true;
	}
	function requireAuth(nextState, replace, callback) {
		console.log('requireauth nextState, replace:', nextState, replace);
		console.log('callback:', callback);
		if (loggedIn()) {
			console.log('logged in so calling callback...');
			callback(); // When async finishes, do the redirect
		}
		if (!loggedIn()) {
			console.log(this);
			// this.props.history && this.props.history.push('/testi');
			replace({
				pathname: '/login'
			});
		}
	}
	console.log(typeof requireLogin);
	console.log(onLogin);

ReactDOM.render(
/*
	const onLogin = (nextState, replace, cb) => {
		const { auth } = store;
		auth.checkLoggedIn()
		.then(() => { cb(); })
		.catch(() => { cb(); });
	};
*/
	<Router history={browserHistory}>
		<Route path="/" component={App} history={browserHistory}>
			<IndexRoute component={App} />
			<Route path="/home" component={Home} onEnter={requireAuth} />
			<Route path="/home/:dataId" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/admin" component={Admin} />
			<Route onEnter={requireLogin}>
				<Route path="/upload/" component={Home} />
			</Route>
		</Route>
	</Router>,
	document.getElementById('root')
);
/*
				<Route path="*" component={Home} />
								<Route path="/beach" component={BeachListing} />
			<Route path="/beach/" component={BeachListing} />
			<Route path="/beach/:dataId" component={Beach} />
			<Route path="/beach/:dataId/edit" component={BeachEdit} />
			<Route path="/beach/:dataId/edit/" component={BeachEdit} />
			<Route path="/admin" component={AdminListing} />
*/