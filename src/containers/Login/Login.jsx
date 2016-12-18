import React, {Component} from 'react';
// import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import cx from 'classnames';
import { Button, ContentItem, Info, InputText, Row } from 'components';
// import { Full } from 'layouts';
// import { connect } from '../../../utils/state';
const styles = require('./Login.scss');
const globalStyles = require('../App/App.scss');
// const client = require('../../helpers/ApiClient.js');

// @connect('store')
export default class Login extends Component {

	state = {
		error: null
	}

	handleSubmit = (event) => {
		if (event) { event.preventDefault(); }
		// const { auth } = this.context.store;
		// const { auth } = this.state.auth;
		// console.log(this.usernameInput);
		// console.log(this.passwordInput);
		const username = this.usernameInput.textInput.value;
		const password = this.passwordInput.textInput.value;
		// console.log(username);
		// console.log(password);

		if (!this.validateInput(username, password)) {
			return false;
		}
		// this.login({username, password});
		// temp login
		this.tempLogin({username, password});
		this.usernameInput.value = '';
		this.passwordInput.value = '';
	}

	validateInput = (username, password) => {
		if (!username || !password) {
			this.setState({ error: 'Missing credential(s)' });
			return false;
		}
		return true;
	}

	quickSubmit = (event) => {
		if (event.keyCode === 13) {
			this.handleSubmit(event);
		}
	}

	logout = () => {
		// const { auth } = this.state.store;
		// auth.logout();
		console.log('remove called, there should now be no user after this');
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		this.proceedToNextPath('/login');
	}

	tempLogin = ({username, password}) => {
		console.log('templogin called, username and password:', username, password);
		const tempUser = {
			username: 'dave',
			password: 'Alasdair123',
			authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmUiLCJ1c2VyTG9naW5TeXNpZCI6MiwiaWF0IjoxNDgxOTQzNzM0LCJleHAiOjE0ODIxMTY1MzR9.2pxAcI7zT_OADjiZ5D5HqWOo0V9fqGyFo0A_CV5pU3s' // eslint-disable-line
			};
			const tempObject = {user: tempUser};
			localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
			this.proceedToNextPath();
	}

/*
	login = ({username, password}) => {
		console.log('about to try logging in');
		client.post('/login', {
			data: {
				username,
				password
			},
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			console.log('login res is', res);
			const data = res.data[0];
			console.log('data:', data);
			// this.saveJwt(data.authorization);
			// this.updateUser({ username });
			// this.getOrgs();
			// this.proceedToNextPath();
		}).catch((err) => {
			console.log('login err is', err);
			// this.clearJwt();
			// this.updateError(err.errors[0]);
		});
	}
*/
	check = () => {
		let supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		// console.log(this.state);
		console.log('checking user', user);
		// return !this.state.user;
		return true;
	}
	proceedToNextPath = (path) => {
		const nextPath = path || '/home';
		browserHistory.push(nextPath);
	}

	render() {
		// const { auth } = this.state;
		console.log(this.check());
		const { error } = this.state;
		let supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log(user);
		return (
		<span>
			<div key={'layoutHeader'} />
			<div className={cx(styles.loginPage, globalStyles.container)} key={'layoutMain'}>
				{!user &&
					<div className={styles.container}>
						<div className={cx(globalStyles.card, styles.loginCard)}>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h2>{'Login'}</h2>
									<div
										className={cx(globalStyles.contentItem,
											globalStyles.hasValidation,
											globalStyles.required)}>
										<ContentItem hasPadding={false}>
											<InputText
												placeholder="Username/Email"
												isRequired
												hasRequiredIcon={false}
												ref={(ref) => this.usernameInput = ref} // eslint-disable-line
												placeholderBelow
												onKeyDownProps={this.quickSubmit}
											/>
										</ContentItem>
{/*
										<input
											id="username"
											type="text"
											ref={(ref) => this.usernameInputOld = ref}
											required="required"
											onKeyDown={this.quickSubmit} />
										<label htmlFor="username">Username/Email</label>
*/}
									</div>
									<div
										className={cx(globalStyles.contentItem,
											globalStyles.hasValidation,
											globalStyles.required)}>
											<ContentItem hasPadding={false}>
												<InputText
													id="password"
													type="password"
													placeholder="Password"
													ref={(ref) => this.passwordInput = ref} // eslint-disable-line
													isRequired
													hasRequiredIcon={false}
													onKeyDownProps={this.quickSubmit}
												/>
											</ContentItem>
{/*
										<input
											id="password"
											type="password"
											ref={(ref) => this.passwordInputOld = ref}
											required="required"
											onKeyDown={this.quickSubmit} />
										<label htmlFor="password">Password</label>
*/}
									</div>
									{(error) &&
										<ContentItem>
											<Info content={error || 'Failed to log in'} />
										</ContentItem>
									}
									<Row>
										<ContentItem>
											<Button
												content="Log In"
												isHighlighted
												onClickProps={this.handleSubmit}
												/>
										</ContentItem>
									</Row>
								</div>
							</form>
							<div className={styles.formInstructions}>
								<p>{`For your security, we require you to 
									confirm your access details before 
									connecting your nomos one organisation 
									to external applications.`}</p>
							</div>
						</div>
					</div>
				}
				{user &&
					<div className={styles.container}>
						<p>{`You are currently logged in as "${supportalStorage.user.username}"`}</p>
						<ContentItem>
							<Button
								content="Log Out"
								onClickProps={this.logout}
								/>
						</ContentItem>
					</div>
				}
			</div>
		</span>
		);
	}
}
/* auth.user.username */