// import { observable, computed, action } from 'mobx';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import client from './ApiClient';
import routeHelper from './RouteHelper.js';

export default class AuthStore {

	jwt = null;

	updateUser(data = null) {
		this.user = data || {};
		this.error = '';
	}

	updateError(error = null) {
		this.error = error;
	}

	updateOrgs(orgs = []) {
		this.orgs = orgs;
	}

	get check() {
		return !_.isEmpty(this.user);
	}


	login({ username, password }) {
		client.post('/login', {
			data: {
				username,
				password
			}
		}).then((res) => {
			const data = res.data[0];
			this.saveJwt(data.authorization);
			this.updateUser({ username });
			this.getOrgs();
			this.proceedToNextPath();
		}).catch((err) => {
			this.clearJwt();
			this.updateError(err.errors[0]);
		});
	}

	logout() {
		window.localStorage.token = '';
		this.updateUser({});
		this.updateOrgs([]);
		this.updateError('');
	}

	jwtAuth() {
		return new Promise((resolve, reject) => {
			client.post('/refresh').then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	checkLoggedIn() {
		return new Promise((resolve, reject) => {
			if (!window.localStorage.token) {
				reject();
			} else {
				client.setJwt(window.localStorage.token);
				this.jwtAuth()
				.then((res) => {
					const data = res.data[0];
					this.saveJwt(data.authorization);
					this.updateUser({ username: data.username });
					this.getOrgs();
					resolve();
				}).catch((err) => {
					this.clearJwt();
					reject(err);
				});
			}
		});
	}

	getOrgs() {
		client.get('/organisations').then((res) => {
			this.updateOrgs(res.data);
		}).catch((err) => {
			this.updateError(err.errors[0]);
		});
	}

	saveJwt(jwt) {
		window.localStorage.token = jwt;
		client.setJwt(jwt);
	}

	clearJwt() {
		window.localStorage.token = null;
		client.setJwt(null);
	}

	proceedToNextPath() {
		const nextPath = routeHelper.nextPath || '/';

		browserHistory.push(nextPath);
		routeHelper.clear();
	}

	getOrg(id) {
		let currentOrg = _.find(this.orgs, (org) => {
			return org.id === id;
		});
		return currentOrg;
	}
}
