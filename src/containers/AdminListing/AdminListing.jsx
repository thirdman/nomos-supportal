import React, { Component } from 'react';
import { Link } from 'react-router';
import { LoadingAnimation } from 'components';

const styles = require('./AdminListing.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyD3PzPDiOxzq9B2wyUEOzFhLukoXOrmhTE',
      authDomain: 'otago-beach-project.firebaseapp.com',
      databaseURL: 'https://otago-beach-project.firebaseio.com/',
      storageBucket: 'otago-beach-project.appspot.com',
});

export default class AdminListing extends Component {
	state = {
		test: 'this is a text',
		beaches: '',
		showNew: false,
		showSuccess: false,
		loading: true
	}
	componentWillMount() {
		// console.log('hello');
	}
	componentDidMount() {
		this.getBeaches();
	}
	getBeaches() {
		base.fetch('beaches', {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				beaches: data,
				loading: false
			});
			console.log(data);
		}).catch(error => {
		// handle error
			console.log(error);
		});
	// console.log('base.storage', base.storage);
	}
	render() {
		let user = base.auth().currentUser;
		console.log('user is: ', user);
		return (
			<div
				className={`${styles.AdminListing} ${this.state.loading ? styles.loading : ''}`}
			>
			<h2>Admin</h2>
			<div className={styles.Row}>
					<span
					className={`${styles.button} ${styles.left}`}
					onClick={this.toggleNew}
					>
						New Listing
					</span>
				{!user ?
					<span
						className={`${styles.link} ${styles.button} ${styles.left}`}
						onClick={this.doLogin}
					>
						login
					</span>
					:
					<span
						className={`${styles.link} ${styles.button} ${styles.left}`}
						onClick={this.doLogout}
					>
						Logout
					</span>
				}
			</div>
			{this.state.loading ?
					<LoadingAnimation isVisbile />
				: null
			}
			{this.state.showNew ?
				<div className={styles.Row}>
					<div className={styles.alt}>
					<h3>New Listing</h3>
							<h4>Name</h4>
							<input
								type="text"
								onChange={e => this.setState({
										newBeachData: {
											...this.state.newBeachData, name: e.target.value }
										}
								)}
							/>
							<h4>dataId</h4>
							<input
								type="text"
								onChange={e => this.setState({
										newBeachData: {
											...this.state.newBeachData, dataId: e.target.value }
										}
								)}
							/>
							<div className={styles.Row}>
								<div
									className={`${styles.button} ${styles.left}`}
									onClick={this.doAdd}
								>
									Add Listing
								</div>
							</div>
					</div>
				</div>
				: null
			}
			{this.state.showSuccess ?
				<div className={styles.Row}>
					<div className={styles.success}>
						<span
							className={styles.button}
							onClick={this.toggleSuccess}
						>
							Close
						</span>
					<h3>Success! new listing added</h3>
					</div>
				</div>
				: null
			}
			{this.state.showError ?
				<div className={styles.Row}>
					<div className={styles.error}>
						<span
							className={styles.button}
							onClick={this.toggleError}
						>
							Close
						</span>
					<h3>Error! </h3>
					{this.state.error}
					</div>
				</div>
				: null
			}
			<div className={styles.Row}>
				{
					this.state.beaches && this.state.beaches.map((item, index) => { //eslint-disable-line
						return (
							<span
								className={
								`${styles.listing} ${!this.state.loading ? styles.isVisible : ''}`
								}
								key={index}
							>
								{user ?
									<Link to={`/beach/${item.dataId}/edit`}>
										<span className={styles.button}>edit</span>
									</Link>
									: null }
									<Link to={`/beach/${item.dataId}`}>
										<span className={styles.button}>View</span>
									</Link>
								{item.featImg ?
									<div className={styles.imgWrap} >
										<img
										src={`https://res.cloudinary.com/thirdman-design/image/upload/c_limit,e_improve,w_300/obp/${item.featImg}`}
										role="presentation"
										/>
									</div>
									: <div className={`${styles.imgWrap} ${styles.empty}`} >
											No Image -{item.dataId}
										</div>
								}
							<p className={styles.preText}>{item.distance} km</p>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
							</span>
						);
					})
				}
				</div>
			</div>
    );
  }

	doLogin = () => {
		let provider = new base.auth.GoogleAuthProvider();
		base.auth().signInWithRedirect(provider).then(((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			let token = result.credential.accessToken;
			console.log(token);
			// The signed-in user info.
			let user = result.user;
			console.log(user);
		// ...
		})).catch(((error) => {
			// Handle Errors here.
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
	doAdd = () => {
		let newBeachData = {
			name: this.state.newBeachData.name,
			dataId: (this.state.newBeachData.dataId).replace(/\s+/g, '')
		};
		console.log('addingdata will be: ', newBeachData);
		base.post(`beaches/${this.state.newBeachData.dataId}`, {
			data: {
				name: this.state.newBeachData.name,
				dataId: (this.state.newBeachData.dataId).replace(/\s+/g, '')
			}
		}).then(() => {
		// Router.transitionTo('dashboard');
			this.setState({
				showNew: false,
				showSuccess: true,
				newBeachData: null
			});
		}).catch(err => {
		// handle error
			console.log(err);
			this.setState({
				showError: true,
				error: err
			});
		});
	}
	getTags = (item) => {
		let theTags = Object.keys(item.tags);
		let theOutput = theTags.map((tag, index) => { //eslint-disable-line
			return (
				<span className={styles.tag} key={index}>
					{tag}
				</span>
			);
		});
	return (
			theOutput
		);
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	}
	toggleNew = () => {
		this.setState({
			showNew: !this.state.showNew
		});
	}
	toggleSuccess = () => {
		this.setState({
			showSuccess: !this.state.showSuccess
		});
	}
	toggleError = () => {
		this.setState({
			showError: !this.state.showError
		});
	}
}