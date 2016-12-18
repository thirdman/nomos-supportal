// import { observable, computed, action } from 'mobx';
// import { browserHistory } from 'react-router';
// import _ from 'lodash';

// import client from './ApiClient';
// import routeHelper from './RouteHelper.js';
let AuthHelper = {

	checkLoggedIn(){
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;

		console.log('got to checkk logged in');
		return new Promise((resolve, reject) => {
			if (!user) {
				reject();
			} else {
				// client.setJwt(window.localStorage.token);
				// this.jwtAuth()
				// TEMPORARY CREATE USER
				this.setUser(user)
				.then((res) => {
					const data = res.data[0];
					console.log(data);
					// this.saveJwt(data.authorization);
					// this.updateUser({ username: data.username });
					// this.getOrgs();
					resolve();
				}).catch((err) => {
					// this.clearJwt();
					reject(err);
				});
			}
		});
	}
	setUser(user){
		console.log('passed in user:', user);
		const tempUser = {
			username: 'dave',
			password: 'Alasdair123',
			authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmUiLCJ1c2VyTG9naW5TeXNpZCI6MiwiaWF0IjoxNDgxOTQzNzM0LCJleHAiOjE0ODIxMTY1MzR9.2pxAcI7zT_OADjiZ5D5HqWOo0V9fqGyFo0A_CV5pU3s' // eslint-disable-line
			};
			const tempObject = {user: tempUser};
			localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
	}
}
