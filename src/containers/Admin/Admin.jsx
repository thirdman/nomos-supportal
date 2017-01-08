import React, { Component } from 'react';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import cx from 'classnames';
import {
	Avatar,
	// Button,
	Column,
	// ContentItem,
	Icon,
	// MediaItem,
	MediaItemList,
	// ObjectInfo,
	// HorizontalRule,
	ProfileAvatar,
	Row,
	Section,
	LoadingAnimation,
	TransitionAnimation
	} from 'components';

const styles = require('./Admin.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class Admin extends Component {
	state = {
		loading: true,
		transition: false,
		detailActiveId: false,
		showColorPicker: false,
		itemsLoading: true
	}
	componentWillMount() {
		console.log('WillMount Admin');
		this.setupPage();
	}
	componentDidMount() {
		this.getAdditionalData();
		this.getAdditionalUsers();
	}
/*
	addItem(newItem){
	  this.setState({
	    items: this.state.items.concat([newItem]) //updates Firebase and the local state
	  });
	}
*/

	render() {
	// let user = base.auth().currentUser;
		// const { filter } = this.state;
		// console.log('this.state', this.state);
		return (
			<div className={styles.Admin}>
				<div className={styles.Row}>
					{this.state.transition ?
						<TransitionAnimation
							isActive={this.state.transition}
							isVisible={this.state.transition}
							reRender={this.state.loading}
						/>
						: null
					}
				</div>
			<Row>
				<Column occupy={9}>
					{this.state.loading ?
							<LoadingAnimation />
						:
						(
							!this.state.detailActiveId && this.state.orgs
							// .sort((a, b) => a.distance - b.distance)
							.map((item, index) => { //eslint-disable-line
								return (
									<div
										className={
											cx(styles.adminItem,
												(!this.state.itemsLoading ? styles.isVisible : '')
												)
											}
										onClick={() => this.orgSelect(item.id)}
										key={index}>
										<Row>
											<Column occupy={5}>
												<h3>{item.attributes.knownAs}</h3>
												<span className={styles.subtitle}>ID: {item.id}</span>
											</Column>
											<Column occupy={5}>
												{this.state.orgUsers && this.state.additionalDataOrgs ?
													this.showAdditionalInfo(item.id)
													: null
												}
											</Column>
											<Column occupy={2}>
												<span className={styles.theButtons}>
													<div className={styles.iconWrap}>
														<Icon icon="chevron-right" />
														{/* icon="view" size={40} */}
													</div>
												</span>
											</Column>
										</Row>
									</div>
								);
							})
						)
					}
					</Column>
					<Column occupy={3}>
						<Section
							title="Admin Users"
							description="Admin users are nomos onboarding type people"
							>
								{
									this.state.additionalUsers ?
									<span>
										<MediaItemList
											data={this.state.additionalUsers}
											// title="test list"
											type="user"
										/>
									</span>
									:
									<span>Loading Users...</span>
								}

						</Section>
					</Column>
				</Row>
				{this.state.detailActiveId ?
					this.showDetailEdit(this.state.detailActiveId)
					: null
				}
			</div>
    );
  }

  setupPage = () => {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const theOrgs = supportalStorage.orgs;
		this.setState({
			orgs: theOrgs
		}, () => this.toggleItemsLoading()); // toggle visibliy after state is done
  }
	getAdditionalData = () => {
		this.setState({
			// additionalDataLoading: true,
		});
		base.fetch('orgs', {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				additionalDataOrgs: data,
				additionalDataLoading: false,
				loading: false
			});
		}).catch(error => {
			this.setState({
				additionalDataLoading: false,
				loading: false
			});
			console.error('App error is', error);
			console.log('the app data org is', error);
		});
		this.getOrgUsers();
/*
		base.bindToState('orgs', {
			context: this,
			state: 'additionalDataOrgs',
			asArray: true
		});
*/
	}

	getAdditionalUsers = () => {
		base.bindToState('users', {
			context: this,
			state: 'additionalUsers',
			asArray: true
		});
	}

	orgSelect = (orgId) => {
		browserHistory.push(`/admin/${orgId}`);
	}

	showAdditionalInfo = (orgId) => {
		const additionalOrgs = this.state.additionalDataOrgs;
		console.log('this Id of org is', orgId);
		const orgUsers = this.state.orgUsers;
		// console.log('additional info getting orgUsers:', orgUsers);
		// let thisOrgUsers = _.find(orgUsers, { dataId: parseFloat(orgId)}); //eslint-disable-line
		let thisOrgUsers;
		if (orgUsers[orgId]) {
			thisOrgUsers = [];
			thisOrgUsers = orgUsers[orgId];
		}
		console.log('thisOrgUsers', thisOrgUsers);

		let thisAdd = _.find(additionalOrgs, { dataId: parseFloat(orgId)}); //eslint-disable-line
		if (!thisAdd) {
			return null;
		} else {
			return (
				<div>
					<Row>
						<Column occupy={6}>
							<span
								style={{
								backgroundColor: thisAdd.color || 'transparent',
								borderRadius: '2px',
								width: '10px',
								height: '10px'}} />
						</Column>
						<Column occupy={6}>
							<div className={styles.userIconsWrap}>
								{thisOrgUsers ?
									thisOrgUsers.map((item, index) => {
											console.log('item user is: ', item);
											return (
												<span className={styles.userIconSlice} key={index}>
													{ item.currentHair ?
														<ProfileAvatar
															hair={item.currentHair}
															feature={item.currentFeature}
															face={item.currentFace}
															size={32}
															title={item.fullName || null}
														/>
													:
													<Avatar
														size="small"
														type="user"
														imageUrl={item.img || null}
														title={item.preferredName || item.fullName || null}
														defaultIconColor="grey"
														/>
													}
												</span>
											);
										})
									: null
								}
							</div>
						</Column>
					</Row>
				</div>
			);
		}
	}

	syncAdditionalData = (orgId) => {
		console.log('syncing garethState');
		this.setState({
			additionalDataLoading: true,
		});
		if (this.state.detailActiveId) {
			console.log('this is setting garethstate');
			base.syncState(`orgs/${orgId}`, {
				context: this,
				state: 'garethState',
				asArray: false
			});
		} else {
			// this.setState({garethState: null});
			console.log('this would set garethstate to null');
		}
	}

	getOrgUsers = () => {
		// const { orgId } = this.state;
		base.syncState('orgUsers', {
			context: this,
			state: 'orgUsers',
			asArray: false
		});
	}

	saveDetail = (orgId) => {
		// let thisOrgData = _.find(this.state.orgs, { id: parseFloat(orgId)}); //eslint-disable-line
		if (this.state.detailActiveId) {
			console.log('aditionalDetailActive: ', this.state.additionalDetailActiveOrg);
			console.log('saving with the id of ', orgId);
			console.log(this.state.garethState);
			console.log(`garethState${orgId}`);
			let tempObj = this.state.garethState;
			tempObj.dataId = orgId;
			console.log(tempObj);
			base.post(`orgs/${orgId}`, {
				data: tempObj
				}).then(() => {
					this.setState({
						detailActiveId: null,
						detailActiveOrg: null,
						additionalDetailActiveOrg: null,
						garethState: null
					});
				// Router.transitionTo('dashboard');
			}).catch(err => {
				console.log(err);
				// handle error
			});
		}
	}

	closeDetail = () => {
		this.setState({
			detailActiveId: null,
			detailActiveOrg: null,
			additionalDetailActiveOrg: null
		});
	}
	// EDIT FUNTIONS
	updateName = () => {
		console.log('this.updateName: ', this.repName.props.value);
		this.setState({
		additionalDetailActiveOrg: {
			...this.state.additionalDetailActiveOrg, rep: this.repName.props.value }
		});
	}
	// UTILIITY FUNTIONS
	doTransition = (page) => {
		console.log(page);
		this.toggleTransition();
		setTimeout(() => {
			// this.toggleLoading();
			this.toggleTransition();
			}, 800);
		setTimeout(() => {
			browserHistory.push(page);
			}, 800);
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	};
	toggleTransition = () => {
		this.setState({
			transition: !this.state.transition
		});
	};
	// THE INDIVIDUAL ITEMS
	toggleItemsLoading = () => {
		console.log('toggling Items Loading 2');
		// DELAYS TRANSITION BY 300ms
		setTimeout(() => {
			this.setState({
				// itemsLoading: !this.state.itemsLoading
				itemsLoading: false
			});
		}, 300);
	};
}
