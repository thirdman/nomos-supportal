import React, { Component } from 'react';
import _ from 'lodash';
import { SketchPicker } from 'react-color';
import {
	// Link,
	browserHistory
	} from 'react-router';
import {
	Button,
	Column,
	ContentItem,
	Icon,
	InputText,
	// ObjectInfo,
	// HorizontalRule,
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
		showColorPicker: false
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
				{this.state.loading ?
						<LoadingAnimation />
					:
					(
						!this.state.detailActiveId && this.state.orgs
						// .sort((a, b) => a.distance - b.distance)
						.map((item, index) => { //eslint-disable-line
							return (
								<div
									className={styles.adminItem}
									onClick={() => this.orgSelect(item.id)}
									key={index}>
									<Row>
										<Column occupy={6}>
											<h3>{item.attributes.knownAs}</h3>
											<span className={styles.subtitle}>ID: {item.id}</span>
										</Column>
										<Column occupy={3}>
											{this.state.additionalDataOrgs ?
												this.showAdditionalInfo(item.id)
												: null
											}
										</Column>
										<Column occupy={3}>
											<span className={styles.theButtons}>
												<div className={styles.iconWrap}>
													<Icon icon="chevron-right" />
												</div>
											</span>
										</Column>
									</Row>
								</div>
							);
						})
					)
				}
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
		});
  }
	getAdditionalData = () => {
		this.setState({
			// additionalDataLoading: true,
		});
		base.fetch('orgs', {
		context: this,
		asArray: true
		}).then(data => {
			console.log('retrieved data:', data);
			console.log('this:', this);
			this.setState({
				additionalDataOrgs: data,
				additionalDataLoading: false,
				loading: false
			});
			console.log('the app data org is', data);
		}).catch(error => {
			this.setState({
				additionalDataLoading: false,
				loading: false
			});
			console.log('App error is', error);
			console.log('the app data org is', error);
		});
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
		let thisAdditionalOrg = _.find(this.state.additionalDataOrgs, { dataId: parseFloat(orgId)}); //eslint-disable-line
		let thisOrgData = _.find(this.state.orgs, { id: parseFloat(orgId)}); //eslint-disable-line
		// console.log(this.state.orgs);
		// console.log(thisAdditionalOrg, thisOrgData);
		this.syncAdditionalData(orgId);
		this.setState({
			detailActiveId: orgId,
			detailActiveOrg: thisOrgData,
			additionalDetailActiveOrg: thisAdditionalOrg
		});
	}
	showAdditionalInfo = (orgId) => {
		const additionalOrgs = this.state.additionalDataOrgs;
		let thisAdd = _.find(additionalOrgs, { dataId: parseFloat(orgId)}); //eslint-disable-line
		if (!thisAdd) {
			return null;
		} else {
			return (
				<span>
					<h4>Additional Id: {thisAdd.dataId}</h4>
					<span>Rep: {thisAdd.rep} </span>
					<span
						style={{
						backgroundColor: thisAdd.color || 'transparent',
						borderRadius: '2px',
						width: '10px',
						height: '10px'}} />
					<span>
					Color: {thisAdd.color}</span>
				</span>
			);
		}
	}

	showDetailEdit = (orgId) => {
		let thisAdditionalOrg = this.state.additionalDetailActiveOrg; //eslint-disable-line
		let thisOrgData = this.state.detailActiveOrg; //eslint-disable-line
		// let garethStateId = `garethState${orgId}`;
		let garethState = this.state.garethState;
		// console.log('showing garethState: ', garethState);
		if (thisOrgData) {
			return (
				<div className={styles.detailEdit}>
					<Section
						title={`Detail for ${thisOrgData.attributes.knownAs}`}
						description={`Id: ${thisOrgData.id}`}
						/>

							<Section
								title="Additional Content Settings"
								// hasDivider
								// hasPadding
								description={'These control the non-nomos type settings'}
								>
							<Row>
								<Column occupy={8}>
									<ContentItem title="RepId" type="text">
										<InputText
											placeholder="RepId"
											placeholderBelow
											value={garethState && garethState.repId && garethState.repId.toString()} // eslint-disable-line
											onChangeProps={(value) => this.setState({
													garethState: {
														...garethState, repId: value }
													}
											)}
										/>
									</ContentItem>
									<ContentItem title="Rep Name" type="text">
										<InputText
											placeholder="Rep Name"
											// ref={(ref) => this.refInput = ref}
											// ref={(c) => { this.repName = c; }}
											placeholderBelow
											// onChangeProps={this.updateName}
											value={garethState && garethState.rep} // eslint-disable-line
											onChangeProps={(value) => this.setState({
													garethState: {
														...garethState, rep: value }
													}
											)}
										/>
									</ContentItem>
									<ContentItem title="Organisation initials" type="text">
										<InputText
											title="Org Initials"
											placeholder="Initials"
											placeholderBelow
											// ref={(c) => { this.addInitials = c; }}
											value={garethState && garethState.initials} // eslint-disable-line
											onChangeProps={(value) => this.setState({
													garethState: {
														...garethState, initials: value }
													}
											)}
										/>
									</ContentItem>
									<ContentItem title="Color">
										<InputText
											title="Color"
											label="the color of the icon and highlightes"
											placeholder="Color"
											value={garethState && garethState.color} // eslint-disable-line
											onChangeProps={(value) => this.setState({
													garethState: {
														...garethState, color: value }
													}
											)}
										/>
										<div
											className={styles.colorDemo}
											onClick={this.toggleColorPicker}
											style={{
												backgroundColor: garethState &&
												garethState.color
												}}
											/>
										{this.state.showColorPicker ?
											<span className={styles.colorPickerWrap}>
												<SketchPicker
													color={garethState &&
														garethState.color}
													onChangeComplete={this.handleChangeComplete}
													/>
											</span>
											: null
										}
									</ContentItem>
									<ContentItem title="Projected Agreement Count">
										<InputText
											label="the number of agreements expected"
											placeholder="Number of Agreements"
											placeholderBelow
											value={garethState && garethState.projectedAgreementCount && garethState.projectedAgreementCount.toString()} // eslint-disable-line
											onChangeProps={(value) => this.setState({
													garethState: {
														...garethState, projectedAgreementCount: parseFloat(value) }
													}
											)}
										/>
									</ContentItem>
								</Column>
								<Column occupy={4}>
									<Section hasBackground>
										<Row>
											<Column>
												<h4 className={styles.subtitle}>Icon</h4>
												<span
													className={styles.exampleIconWrap}
													style={
														garethState &&
														garethState.color ?
															{
																backgroundColor: garethState.color,
																color: '#fff'
															}
														:
														{
															backgroundColor: 'transparent',
															border: '1px dashed #ddd',
															color: '#777'
														}
													}
												>
													<span>{garethState && garethState.initials}</span>
												</span>
											</Column>
										</Row>
										<Row>
											<Column>
												<h4 className={styles.subtitle}>Rep</h4>
												<span>{garethState && garethState.rep}</span>
											</Column>
										</Row>
										<Row>
											<Column>
												<h4 className={styles.subtitle}>Id</h4>
												<span>{garethState && garethState.repId}</span>
											</Column>
										</Row>
										<Row>
											<Column>
												<h4 className={styles.subtitle}>Initials</h4>
												<span>{garethState && garethState.initials}</span>
											</Column>
										</Row>
										<Row>
											<Column>
												<h4 className={styles.subtitle}>Projected Agreement Count</h4>
												<span>{garethState &&
													garethState.projectedAgreementCount}</span>
											</Column>
										</Row>
									</Section>
								</Column>
								</Row>
							</Section>

						<Section>
							<Button
								content="Submit"
								classNameProps={['highlighted']}
								onClickProps={() => this.saveDetail(orgId)}
								/>
							<Button content="cancel" onClickProps={this.closeDetail} />
						</Section>
				</div>
			);
		}
	}
	syncAdditionalData = (orgId) => {
		this.setState({
			additionalDataLoading: true,
		});
		if (this.state.detailActiveId) {
			base.syncState(`orgs/${orgId}`, {
				context: this,
				state: 'garethState',
				asArray: false
			});
		} else {
			this.setState({garethState: null});
		}
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
	handleChangeComplete = (color) => {
		// let thisOrgData = _.find(this.state.orgs, { id: parseFloat(orgId)}); //eslint-disable-line
		console.log('color object is: ', color);
		this.setState({
			garethState: {
				...this.state.garethState, color: color.hex }
			});
		this.toggleColorPicker();
	}
	toggleColorPicker = () => {
		this.setState({
			showColorPicker: !this.state.showColorPicker
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
}
/*
				<HorizontalRule />
				{this.state.additionalDataOrgs ?
					<Row>
						<h4>Additional data:</h4>
						{this.state.additionalDataOrgs.map((item, index) => {
							return (
							<div key={index} className={styles.additionalItem}>
								{item.name}
							</div>
							);
						})}
					</Row>
					: null
				}
*/