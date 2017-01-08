import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	IndexRoute,
	// Link,
	browserHistory } from 'react-router';
import routeHelper from 'helpers/RouteHelper';
// import AuthHelper from 'helpers/Auth';

import {
	App,
	Admin,
	AdminEdit,
	Home,
	Login,
	Orgs,
	Profile,
	ProfileEdit
	} from 'containers';

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
				this.setUser()
				.then((res) => {
					const data = res.data[0];
					console.log('now on the res bit, data: ', data);
					console.log('now on the res bit, data: ', res);
					resolve();
				}).catch((err) => {
					console.log('an error happened in checkLogged in');
					reject(err);
				});
			}
		});
	},
	setUser() {
		console.log('setuser called, there should now be a user set (again!)');
	}
};

const requireLogin = (nextState, replace, cb) => {
	// Kick you back to login page if have not logged in
	AuthHelper.checkLoggedIn()
	.then(() => {
		console.log('+ checklogin is complete, now doing callback...');
		cb();
	})
	.catch(() => {
		console.log('+ checklogin is not done, now doing send to login...');
		routeHelper.updateNextPath(location.pathname);
		replace({
			pathname: '/login'
		});
		cb();
	});
};


	// UTILITES USED BELOW
	function isLoggedIn() {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		if (user) {
			return true;
		} else {
			return false;
		}
	}

	function logout() {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		// browserHistory.push('/login');
	}


	function requireAuth(nextState, replace, callback) {
		if (isLoggedIn()) {
			console.log('+ logged in so calling callback...');
			callback(); // When async finishes, do the redirect
		}
		if (!isLoggedIn()) {
			logout(); // blats all the data
			replace({
				pathname: '/login'
			});
		}
	}

	function updateData(nextState, replace, callback) {
		// thus function is for future use.
		// console.log(nextState, replace);
		callback();
	}

	console.log(typeof requireLogin);

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/orgs" component={Orgs} onEnter={requireAuth} />
			<Route path="/home" component={Home} onEnter={requireAuth} />
			<Route path="/home/:dataId" component={Home} onEnter={requireAuth} />
			<Route path="/home/:dataId(/:sectionId)" component={Home} onEnter={updateData} />
			<Route path="/admin" component={Admin} />
			<Route path="/admin/:dataId" component={AdminEdit} />
			<Route onEnter={requireAuth}>
				<Route path="/profile/" component={ProfileEdit} />
				<Route path="/profile/:dataId" component={Profile} />
			</Route>
			<Route onEnter={requireLogin}>
				<Route path="/upload/" component={Home} />
			</Route>
		</Route>
	</Router>,
	document.getElementById('root')
);
/* // history={browserHistory}
				<IndexRoute component={Home} />
				<Route path="*" component={Home} />
								<Route path="/beach" component={BeachListing} />
			<Route path="/beach/" component={BeachListing} />
			<Route path="/beach/:dataId" component={Beach} />
			<Route path="/beach/:dataId/edit" component={BeachEdit} />
			<Route path="/beach/:dataId/edit/" component={BeachEdit} />
			<Route path="/admin" component={AdminListing} />
*/