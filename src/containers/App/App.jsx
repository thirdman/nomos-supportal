import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
	Avatar,
	Button,
	Column,
	// HorizontalRule,
	InputSelect,
	IconHamburger,
	Row,
	LoadingAnimation } from 'components';
import { Home } from 'containers';
import { dataOrgs } from './data/orgData.js';
// import firebase from 'firebase';
// import Rebase from 're-base';
// BackgroundImage,

const styles = require('./App.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
}, 'base');

export default class App extends Component {
	state={
		isConnecting: false,
		isLoading: false,
		activeOrg: null,
		activeIndex: null,
		orgMenu: false,
		org: 1
	}
	componentWillMount() {
		this.setupData();
	}
	componentDidMount() {
		// this.getAdditionalData(this.props.activeOrg.id);
	}
	render() {
		const { routeParams } = this.props;
		console.log('App Props', this.props);
		console.log('App params', this.props.params);
		console.log('routeParams', routeParams);
		const { activeOrg, orgs } = this.state;
		// const orgData = this.props.params;
		console.log('state orgs is', orgs);
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		// const orgs = supportalStorage.orgs;
		// this.setState({orgs});
		// console.log('orgs: ', orgs);
/*
		let childrenWithProps = React.cloneElement(
			this.props.children, {
				orgs: this.state.orgs
				}
			);
*/
		// let orgListArray = [];
		let orgList = orgs && orgs.map((item) => {
				return item.attributes.knownAs;
		});
		let tempCss = {
			backgroundColor: (this.state.org && this.state.org.color) || 'transparent'
		};
		return (
			<div
				className={`${styles.App}
					${this.state.isLoading ? styles.isLoading : ''}
					${this.state.isConnecting ? styles.isConnecting : ''}`}
			>
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
				<div className={styles.topBar}>
					<Row>
						<Column occupy={2}>
							<span className={styles.headerItem}>
							{orgs ?
								(
								<InputSelect
									content="org"
									color="white"
									classNameProps={['normal']}
									// options={['one', 'two', 'three']}
									options={orgList}
									btnClassNameProps={['select', 'btn', 'white']}
									/>
								)
								:
									<span>no orgs</span>
							}
							<IconHamburger
								width={16}
								height={15}
								menuClicked={this.toggleOrgMenu}
								isOpen={this.state.orgMenu}
							/>
							</span>
						</Column>
						<Column occupy={8}>
							<span className={styles.title}><h3>Nomos One Supportal</h3></span>
						</Column>
						<Column occupy={2}>
							<span className={styles.headerItem}>
							{user ?
								(<span>
									<Avatar
										size="small"
										type="user"
										title="example gb"
									/>
										{user.username}
									</span>
								)
								: 'no user'
							}
							</span>
						</Column>
					</Row>
				</div>
				<div className={styles.appContent}>
					<Row>
						{!orgs ?
							<span>
								<div>
									<Button
										content="Get orgs"
										onClickProps={this.getOrgs}
									/>
								</div>
							</span>
							: null
						}
						{orgs && !activeOrg ?
							<span>
								{
									orgs.map((item, index) => (
										<div
											className={styles.card}
											onClick={() => this.setOrg(item.id, index)}
											key={index}
											>
											<div className={styles.cardImage} style={tempCss}>
												<Avatar
													size="medium"
													type="organisation"
													title={item.attributes.knownAs}
													defaultIconColor="#eee"
													/>
											</div>
											<div className={styles.cardContent}>
												<div className={styles.cardButton} />
												<h3>{item.attributes.knownAs}</h3>
												<span className={styles.subtitle}>subtitle {item.id}</span>
											</div>
										</div>
									))
								}
							</span>
							: null
						}
						{user && activeOrg ?
							<Home
								activeIndex={this.state.activeIndex}
								activeOrg={orgs[this.state.activeIndex]}
							/>
							: null
						}
					</Row>
					<div className={styles.footer} />
				</div>
			</div>
		);
	}
	setupData = () => {
		const theData = dataOrgs.data;
		this.setState({
			orgs: theData
		});
	}
	getOrgs = () => {
		const theData = dataOrgs.data;
		// const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		// const user = supportalStorage.user;
		this.setState({
			orgs: theData
		});
	}

	setOrg = (orgId, index) => {
		console.log('passed info:', orgId);
		if (orgId) {
			this.setState({
				activeOrg: orgId,
				activeIndex: index,
				orgMenu: false
			});
			this.getData(orgId);
			browserHistory.push(`/home/${orgId}`);
		} else {
			this.setState({
				activeOrg: null,
				orgMenu: true
			});
		}
	}
	toggleOrgMenu = () => {
		this.setState({
			orgMenu: !this.state.orgMenu,
			activeOrg: this.state.activeOrg ? null : this.state.activeOrg
		});
	};

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
/*
	doAddLocalStorage = (object) => {
		localStorage.setItem('nomosSupportal', JSON.stringify(object));
	}
*/

	// SET UP PROPTYPES
	static propTypes = {
		children: PropTypes.object // isRequired
	};
}
/*
						{this.state.org ?
							(<span>
								<h1>
									<span className={styles.orgIconWrap} style={tempCss}>
									<Avatar
										size="medium"
										type="organisation"
										title="DB company"
										defaultIconColor="#eee"
										/>
									</span>
									{this.state.org[0].title}
								</h1>
								<Row>
									<Column occupy={3}>
										<h4>contact</h4>
										<p>{this.state.org[0].clientRepId}</p>
									</Column>
									<Column occupy={3}>
										<h4>id</h4>
										<p>{this.state.org[0].nomosId}</p>
									</Column>
									<Column occupy={3}>
										<h4>color</h4>
										<p>{this.state.org[0].color}</p>
									</Column>
									<Column occupy={3}>
										<h4>Status</h4>
										<p>{this.state.org[0].status}</p>
									</Column>
								</Row>
							</span>
							)
							: 'loading...'
						}
					<HorizontalRule color="#ccc" />
*/
/*
	<BackgroundImage lng={this.state.lat} lat={this.state.lng} />
*/
/*
					<div key={this.props.params.dataId} >
						{childrenWithProps}
					</div>
*/
