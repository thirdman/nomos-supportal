import React, { Component, PropTypes } from 'react';
// import { browserHistory } from 'react-router';
import {
	Row,
	LoadingAnimation,
	UiOrgSelect,
	UiTopBar,
	// UiUserMenu
	} from 'components';
// import { Home } from 'containers';
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
		isLoading: true,
		activeOrg: null,
		activeIndex: null,
		orgMenu: false,
		org: 1
	}
	componentWillMount() {
	}
	componentDidMount() {
		this.toggleLoading();
		// this.getAllAdditionalData();
	}
	componentWillUpdate() {
		console.info('app updating.');
		console.info('this.state.isLoading', this.state.isLoading);
	}

	render() {
		const { isLoading, isConnecting } = this.state;
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		const orgs = supportalStorage.orgs;
		// const { routeParams } = this.props;
		// console.log('# App Props', this.props);
		// console.log('App params', this.props.params);
		// console.log('routeParams', routeParams);
		// const { orgs, user } = this.state;
		// const orgs = supportalStorage.orgs;
		// this.setState({orgs});
		// console.log('appuser: ', user);
		console.log('orgs: ', orgs);
		// console.log('this.state: ', this.state);
		// console.log('this.props: ', this.props);
		let childrenWithProps = React.cloneElement(
			this.props.children, {
				// orgs: this.state.orgs
				orgs: orgs // eslint-disable-line
				}
			);
/*
		let tempCss = {
			backgroundColor: (this.state.org && this.state.org.color) || ''
		};
*/
		return (
			<div
				className={`${styles.App}
					${this.state.isLoading ? styles.isLoading : ''}
					${this.state.isConnecting ? styles.isConnecting : ''}`}
			>
			{isLoading || isConnecting ?
				<div className={`${styles.appLoading} ${styles.centered}`} >
					<div className={styles.loadingMessage}>
							<span>
								<LoadingAnimation isVisbile />
								<span className={styles.loadingText}>Loading</span>
							</span>
						</div>
				</div>
				:
				<span>
					<UiTopBar update={this.state.isLoading} user={user} orgs={orgs} />
					<div className={styles.appContent}>
						<Row>
							{this.state.orgMenu &&
								<UiOrgSelect organisationData={this.state.orgs} onClickProps={this.toggleOrgMenu} />
							}
						</Row>
						<span>
							{childrenWithProps}
						</span>
						<div className={styles.footer} />
					</div>
				</span>
			}
			</div>
		);
	}

	toggleLoading = () => {
		this.setState({
			isLoading: !this.state.isLoading
		});
	};
	toggleOrgMenu = () => {
		this.setState({
			orgMenu: !this.state.orgMenu,
			// activeOrg: this.state.activeOrg ? null : this.state.activeOrg
		});
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

	// PROPTYPES
	static propTypes = {
		children: PropTypes.object // isRequired
	};
}