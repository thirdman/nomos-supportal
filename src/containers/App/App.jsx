import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
	Avatar,
	// Button,
	Column,
	// HorizontalRule,
	IconHamburger,
	Row,
	LoadingAnimation,
	UiOrgSelect,
	UiUserMenu
	} from 'components';
// import { Home } from 'containers';
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
		this.getAllAdditionalData();
	}
	render() {
		// const { routeParams } = this.props;
		// console.log('# App Props', this.props);
		// console.log('App params', this.props.params);
		// console.log('routeParams', routeParams);
		const { activeOrg, orgs } = this.state;
		// const orgData = this.props.params;
		// console.log('# state orgs is', orgs);
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		// const orgs = supportalStorage.orgs;
		// this.setState({orgs});
		// console.log('appuser: ', user);
		// console.log('orgs: ', orgs);
		// console.log('this.state: ', this.state);
		// console.log('this.props: ', this.props);
		let childrenWithProps = React.cloneElement(
			this.props.children, {
				orgs: this.state.orgs
				}
			);
/*
		let orgList = orgs && orgs.map((item) => {
				return item.attributes.knownAs;
		});
*/
		let tempCss = {
			backgroundColor: (this.state.org && this.state.org.color) || ''
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
							<span className={`${styles.headerItem} ${styles.hamburgerWrap}`}>
							{orgs ?
								<IconHamburger
									width={16}
									height={15}
									// menuClicked={this.toggleOrgMenu}
									menuClicked={this.doOrgs}
									isOpen={this.state.orgMenu}
								/>
								: null
							}
							</span>
						</Column>
						<Column occupy={8}>
							<span className={styles.title}><h3>Nomos One Supportal</h3></span>
						</Column>
						<Column occupy={2}>
							<span className={styles.headerItem}>
							{user ?
								(<span>
									<UiUserMenu user={user} logout={this.logout} />
									</span>
								)
								: null
							}
							</span>
						</Column>
					</Row>
				</div>
				<div className={styles.appContent}>
					<Row>
						{this.state.orgMenu &&
							<UiOrgSelect organisationData={this.state.orgs} onClickProps={this.toggleOrgMenu} />
						}
						{user && !activeOrg && 'ggg' === 'sss' ?
							<div className={styles.orgNav}>
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
												<span className={styles.subtitle}>Id: {item.id}</span>
											</div>
										</div>
									))
								}
							</div>
							: null
						}
					</Row>
					<span>
						{childrenWithProps}
					</span>
					<div className={styles.footer} />
				</div>
			</div>
		);
	}
	setupData = () => {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const theOrgs = supportalStorage.orgs;
		// const theData = dataOrgs.data;
		this.setState({
			orgs: theOrgs
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
			this.getAllAdditionalData();
			browserHistory.push(`/home/${orgId}`);
		} else {
			this.setState({
				activeOrg: null,
				orgMenu: true
			});
		}
	}
	logout = () => {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		browserHistory.push('/login');
	}

	toggleOrgMenu = () => {
		this.setState({
			orgMenu: !this.state.orgMenu,
			// activeOrg: this.state.activeOrg ? null : this.state.activeOrg
		});
	};

	doOrgs = () => {
		this.toggleOrgMenu();
		browserHistory.push('/orgs');
	};

	getAllAdditionalData = () => {
		base.fetch('orgs', {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				additionalOrgs: data,
				loading: false
			});
		}).catch(error => {
			console.log('App Additonal error is', error);
		});
	}

	// SET UP PROPTYPES
	static propTypes = {
		children: PropTypes.object // isRequired
	};
}
/*
						{user && activeOrg ?
							<Home
								activeIndex={this.state.activeIndex}
								activeOrg={orgs[this.state.activeIndex]}
							/>
							: null
						}
*/
/*
										<Avatar
										size="small"
										type="user"
										title="example gb"
									/>
										{user.username}
										<span onClick={this.logout}>logout</span>
	*/
