import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import cx from 'classnames';
import {
	Button,
	ContentItem,
	Info,
	InputText,
	Row,
	UiOrgSelect
	} from 'components';

const styles = require('./Login.scss');
const globalStyles = require('../App/App.scss');
const client = require('../../helpers/ApiClient.js');

export default class Login extends Component {

	state = {
		orgs: null,
		error: null,
		processing: false,
		processingOrgs: false
	}

	handleSubmit = (event) => {
		if (event) { event.preventDefault(); }
		this.setState({error: null});
		const username = this.usernameInput.textInput.value;
		const password = this.passwordInput.textInput.value;
		if (!this.validateInput(username, password)) {
			return false;
		}
		this.login({username, password});
		// this.tempLogin({username, password});
		this.usernameInput.value = '';
		this.passwordInput.value = '';
	}

	login = ({username, password}) => {
		this.setState({
			processing: true
		});
		client.post('/login', {
			data: {
				username,
				password
			},
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			this.setState({processing: false});
			const data = res.data[0];
			// this.saveJwt(data.authorization);
			client.setJwt(data.authorization);
			const tempObject = {user: data};
			localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
			const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
			console.log('supportalStorage have been set as: ', supportalStorage);
			this.getOrgs();
			// this.proceedToNextPath();

			// UNUSED THINGS FROM V5 TO DO LATER
			// this.saveJwt(data.authorization);
			// this.updateUser({ username });
			// this.getOrgs();
		}).catch((err) => {
			console.log('login err is', err);
			this.setState({
				processing: false,
				error: err.errors[0]
			});
			// this.clearJwt();
			// this.updateError(err.errors[0]);
		});
	}


	render() {
		// const { auth } = this.state;
		// const check = this.check();
		const { error } = this.state;
		let supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		console.log('hey, supportalStorage: ', supportalStorage);
		const user = supportalStorage.user;
		const orgs = supportalStorage.orgs;
		if (orgs) {
			this.setState({
				hasOrgs: false,
				orgs
			});
		}
		console.log(user, orgs);
		return (
		<span>
			<div
				className={
					cx(
						styles.loginPage,
						globalStyles.container,
						this.state.processing ? styles.processing : ''
						)
					}
				key={'layoutMain'}
				>
				{!user &&
					<div className={styles.container}>
						<div className={cx(styles.loginCard)}>
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
													placeholderBelow
													hasRequiredIcon={false}
													onKeyDownProps={this.quickSubmit}
												/>
											</ContentItem>
									</div>
									<Row>
										<ContentItem>
											<Button
												content="Log In"
												isHighlighted
												classNameProps={['large']}
												isActive={this.state.processing || false}
												onClickProps={this.handleSubmit}
												/>
										</ContentItem>
									</Row>
								</div>
							</form>
							<div
								className={
									cx(styles.formInstructions,
										this.state.error ? styles.errorInstructions : ''
									)}
								>
								{(this.state.error) &&
									<ContentItem>
										{error.title ?
											<h2>{error.title}</h2>
											: null }
										{
											error.detail ?
											<Info content={error.detail} />
											:
											<Info content={error || 'Failed to log in'} />
										}
									</ContentItem>
								}
								{ !error ?
									<p>{`The nomos one supportal allows you to see the
										process of onboarding your data. Please use the supplied
										email and password details to login.`}</p>
									: null
								}
							</div>
						</div>
					</div>
				}
				{this.state.orgs ?
					<span>
						<UiOrgSelect organisationData={this.state.orgs} />
					</span>
					:
					null
				}
				{user && 'ggg' === 'bbb' &&
					<div className={styles.container}>
						{supportalStorage.user ?
							<p>{`You are currently logged in as "${supportalStorage.user.username}"`}</p>
							:
							<p>{'You are currently logged in'}</p>
						}
						<ContentItem>
							<Button
								content="Log Out"
								onClickProps={this.logout}
								/>
						</ContentItem>
					</div>
				}
				{this.state.processingOrgs ?
					<div>Loading Orgs</div>
					: null
				}
			</div>
		</span>
		);
	}
	// UTILITY FUNCTIONS
	check = () => {
		let supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log('@ user:', supportalStorage);
		console.log('@ should return true if there is no local user set');
		if (user) {
			return true;
			} else {
			return false;
		}
	}

	logout = () => {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		this.proceedToNextPath('/login');
	}


	proceedToNextPath = (path) => {
		// const nextPath = path || '/home';
		const nextPath = path || '/';
		browserHistory.push(nextPath);
	}

	validateInput = (username, password) => {
		if (!username || !password) {
			const errorObject = {
				title: 'Missing credentials',
				detail: 'Email/Username or password were not submitted. Try again.',
			};
			this.setState({ error: errorObject });
			return false;
		}
		return true;
	}

	quickSubmit = (event) => {
		if (event.keyCode === 13) {
			this.handleSubmit(event);
		}
	}

	getOrgs = () => {
		this.setState({processingOrgs: true});
		client.get('/organisations').then((res) => {
			this.updateOrgs(res.data);
		}).catch((err) => {
			this.updateError(err.errors[0]);
		});
	}
	updateOrgs = (orgs = []) => {
		// this.orgs = orgs;
		this.setState({
			orgs,
			hasOrgs: true,
			processingOrgs: false
		});
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		console.log(supportalStorage);
		const tempObject = supportalStorage;
		tempObject.orgs = orgs;
		console.log(tempObject);
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		// const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		// const temporgs = supportalStorage.orgs;
		console.log('supportalStorage have been set as: ', supportalStorage);
		// console.log('orgs have been set as: ', temporgs);
	}

/*
	getOrgs = () => {
		const theData = dataOrgs.data;
		// const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		// const user = supportalStorage.user;
		this.setState({
			orgs: theData
		});
	}
*/

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

}
/* auth.user.username */