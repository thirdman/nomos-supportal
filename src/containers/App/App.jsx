import React, { Component, PropTypes } from 'react';
// import Helmet from 'react-helmet';
import { BackgroundImage, LoadingAnimation } from 'components';

const styles = require('./App.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyD3PzPDiOxzq9B2wyUEOzFhLukoXOrmhTE',
      authDomain: 'otago-beach-project.firebaseapp.com',
      databaseURL: 'https://otago-beach-project.firebaseio.com/',
      storageBucket: 'otago-beach-project.appspot.com',
});

export default class App extends Component {
	static propTypes = {
		children: PropTypes.object // isRequired
	};
	state={
		isConnecting: false,
		isLoading: false
	}
	componentDidMount() {
		this.getBeaches();
	}
	render() {
		// const { routeParams } = this.props;
		// console.log('App Props', this.props);
		// console.log('App params', this.props.params);
		let childrenWithProps = React.cloneElement(
			this.props.children, {
					beaches: this.state.beaches
				}
			);
		// let user = base.auth().currentUser;
		// console.log(user); // use this later for login/logout
		return (
			<div
				className={`${styles.App}
					${this.state.isLoading ? styles.isLoading : ''}
					${this.state.isConnecting ? styles.isConnecting : ''}`}
			>
				<BackgroundImage lng={this.state.lat} lat={this.state.lng} />
				<div className={`${styles.appLoading} ${styles.centered}`} >
					<div className={styles.loadingMessage}>
						{this.state.isConnecting || this.state.isLoading ?
							<span>
								<LoadingAnimation isVisbile />
								<span>Loading ...</span>
							</span>
							: null
						}
						</div>
				</div>
				<div className={styles.appContent}>
					<div className={styles.header}>
						<div className={styles.headerMain}>
							<h1>Otago Beaches</h1>
						</div>
						<div className={styles.userWrap}>
						{/* 99 problems but a beach aint one */}
						</div>
					</div>
					<div key={this.props.params.dataId} >
					{
						childrenWithProps
					}
					</div>
					<div className={styles.footer} />
				</div>
			</div>
		);
	}

	getBeaches = () => {
		base.fetch('beaches', {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				beaches: data,
				loading: false
			});
			// console.log('App beach data is', data);
			// console.log('theerefore app state is', this.state);
		}).catch(error => {
		// handle error
			console.log('App error is', error);
		});
	}
	doLogin = () => {
		let provider = new base.auth.GoogleAuthProvider();
		base.auth().signInWithRedirect(provider).then(((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			// let token = result.credential.accessToken;
			// console.log(token);
			// The signed-in user info:
			let user = result.user;
			console.log(user);
		})).catch(((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential;
			console.log(error, errorCode, errorMessage, email, credential);
		}));
	}
	doLogout = () => {
		base.auth().signOut().then(() => {
			// Sign-out successful.
		}, ((error) => {
			// An error happened.
			console.log(error);
		}));
	}
}
/*
	{!user ?
		<span
			className={styles.link}
			onClick={this.doLogin}
		>
			login
		</span>
		: 'logout'
	}
*/