import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { SketchPicker } from 'react-color';
import {
	browserHistory
	} from 'react-router';
import {
	// Avatar,
	Button,
	Column,
	ContentItem,
	// Icon,
	InputText,
	MediaItem,
	// ObjectInfo,
	// HorizontalRule,
	Row,
	Section,
	LoadingAnimation,
	// TransitionAnimation
	} from 'components';

const styles = require('./AdminEdit.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class AdminEdit extends Component {
	state = {
		loading: true,
		transition: false,
		orgId: this.props.orgId,
		showColorPicker: false,
		additionalData: null
	}
	componentWillMount() {
		if (this.props.params.dataId) {
			console.log('coming from a url, so set the id this way');
			this.setupPage(this.props.params.dataId);
		} else {
			console.log('WillMount AdminEdit');
			this.setupPage();
		}
	}
	componentDidMount() {
		// this.getAdditionalData();
		this.syncData();
		this.getAdditionalUsers();
	}
	render() {
		// const { onExitProps} = this.props;
		const { orgId, orgData, additionalData } = this.state;
		// let thisAdditionalOrg = this.state.additionalDetailActiveOrg; //eslint-disable-line
		// let thisOrgData = this.state.detailActiveOrg; //eslint-disable-line
		console.log('additionalData is ', additionalData);

		return (
			<div className={styles.AdminEdit}>
					{!additionalData ?
							<LoadingAnimation />
						:
						<div className={styles.detailEdit}>
							<Section
								title={`Detail for ${orgData.attributes.knownAs}`}
								description={`Id: ${orgId}`}
								/>
									<Section
										title="Additional Content Settings"
										description={'These control the non-nomos type settings'}
										>
									<Row>
										<Column occupy={8}>
											<ContentItem title="RepId" type="text">
												<InputText
													placeholder="RepId"
													placeholderBelow
													value={additionalData && additionalData.repId && additionalData.repId.toString()} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, repId: value }
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
													value={additionalData && additionalData.rep} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, rep: value }
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
													value={additionalData && additionalData.initials} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, initials: value }
															}
													)}
												/>
											</ContentItem>
											<ContentItem title="Color">
												<InputText
													title="Color"
													label="the color of the icon and highlightes"
													placeholder="Color"
													value={additionalData && additionalData.color} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, color: value }
															}
													)}
												/>
												<div
													className={styles.colorDemo}
													onClick={this.toggleColorPicker}
													style={{
														backgroundColor: additionalData &&
														additionalData.color
														}}
													/>
												{this.state.showColorPicker ?
													<span className={styles.colorPickerWrap}>
														<SketchPicker
															color={additionalData &&
																additionalData.color}
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
													value={additionalData && additionalData.projectedAgreementCount && additionalData.projectedAgreementCount.toString()} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, projectedAgreementCount: parseFloat(value) }
															}
													)}
												/>
											</ContentItem>
											<Section hasBackground title="Admin Users">
												<Row>
													<Column>
														<h4>Assigned Users</h4>
														{ additionalData && additionalData.users ?
																<span>
																	{
																		additionalData && additionalData.users.map((includedUser) => {
																			console.log(includedUser.dataId);
																			return (includedUser.dataId);
																		})
																	}
																</span>
															: <span>loading users</span>
														}

														<h4>Available Users</h4>
														{
															additionalData && this.state.additionalUsers ?
															<span>
																{
																	this.state.additionalUsers &&
																	this.state.additionalUsers.map((item, index) => {
																		let userHasOrgs = item.orgs;
																		let isInOrg = false;
																		if (userHasOrgs) {
																			isInOrg = _.find(item.orgs, { 'dataId': parseFloat(orgId)}); //eslint-disable-line	
																		}
																		console.log('userhasorgs: ', userHasOrgs);
																		console.log('isInorg: ', isInOrg);
																		return (
																			<div
																				className={styles.userButton}
																				onClick={() => this.addUser(item.dataId)}
																				key={index}
																				>
																					{ isInOrg ?
																						<div>Yeah in this org</div>
																						:
																						<div>Nah no</div>
																					}
																				<MediaItem
																					content={item.fullName}
																					username={item.fullName}
																					imageUrl={item.img}
																					type="user"
																					key={index}
																					/>
																			</div>
																		);
																	})
																}
															</span>
															:
															<span>users do not exist</span>
														}
													</Column>
												</Row>
											</Section>
										</Column>
										<Column occupy={4}>
											<Section hasBackground>
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Icon</h4>
														<span
															className={styles.exampleIconWrap}
															style={
																additionalData &&
																additionalData.color ?
																	{
																		backgroundColor: additionalData.color,
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
															<span>{additionalData && additionalData.initials}</span>
														</span>
													</Column>
												</Row>
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Rep</h4>
														<span>{additionalData && additionalData.rep}</span>
													</Column>
												</Row>
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Id</h4>
														<span>{additionalData && additionalData.repId}</span>
													</Column>
												</Row>
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Initials</h4>
														<span>{additionalData && additionalData.initials}</span>
													</Column>
												</Row>
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Projected Agreement Count</h4>
														<span>{additionalData &&
															additionalData.projectedAgreementCount}</span>
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
										// onClickProps={() => this.saveDetail(orgId)}
										// onClickProps={onExitProps}
										onClickProps={this.doExit}
										/>
								</Section>
						</div>
					}
			</div>
    );
  }
  setupPage = (paramOrgId) => {
		console.log('setting up');
		let orgId = paramOrgId || this.props;
		console.log('set up org Id', orgId);
/*
	  if (paramOrgId) {
		  orgId = paramOrgId;
	  } else {
			orgId = this.props;
	  }
*/
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		const orgs = supportalStorage.orgs;
		// let thisAdditionalOrg = _.find(orgs, { dataId: parseFloat(orgId)}); //eslint-disable-line
		let orgData = _.find(orgs, { id: parseFloat(orgId)}); //eslint-disable-line
		console.log(orgData);
		this.setState({
			orgId,
			user,
			orgData,
			loading: false
		});
  }

	syncData = () => {
		const { orgId } = this.state;
		console.log(orgId);
		base.syncState(`orgs/${orgId}`, {
			context: this,
			state: 'additionalData',
			asArray: false
		});
	}

	getAdditionalUsers = () => {
		base.bindToState('users', {
			context: this,
			state: 'additionalUsers',
			asArray: true
		});
	}
	getCurrentUsers = () => {
		let currentUsers = [];
		currentUsers = this.state.additionalData && this.state.additionalData.users;
		if (currentUsers) {
			return (
				<span>dddd</span>
/*
					currentUsers.users((item, index) => {
						return (
							<div className={styles.assignedUser}>
							<MediaItem
								content={item.fullName}
								username={item.fullName}
								imageUrl={item.img}
								type="user"
								key={index}
								/>
								</div>
						);
					})
*/
			);
		}
	}
	addUser = (newDataId) => {
		const { additionalData, additionalUsers } = this.state;
		console.log(newDataId, additionalData, additionalUsers);
		let currentUsersObj = additionalData.users;
		console.log('current users are: ', currentUsersObj);
		let newUsers = currentUsersObj;
		let userIsCurrent = _.find(currentUsersObj, { 'dataId': newDataId}); // eslint-disable-line
		console.log(userIsCurrent);
		if (userIsCurrent) {
			console.log('then we should remove it');
			console.log('existing newUser array: ', newUsers);
			newUsers = _.pullAllWith(newUsers, [userIsCurrent], _.isEqual);
			console.log('now it is: ', newUsers);
		} else {
			console.log('then we should add it');
			additionalUsers.forEach((item) => {
				console.log('checking whether item.dataId', item.dataId);
				console.log('is the same as', newDataId);
				if (item.dataId === newDataId) {
					console.log('yes, it will exist', item);
					newUsers.push(item);
				}
			});
		}
		console.info('thus, the new user array is: ', newUsers);
		this.setState({
			additionalData: {
				...this.state.additionalData, users: newUsers }
			}, () => { console.log('its now updated'); }
		);
	}
	showAdditionalInfo = () => {
		const { additionalData } = this.state;
		if (!additionalData) {
			return null;
		} else {
			return (
				<span>
					<h4>Additional Id: {additionalData.dataId}</h4>
					<span>Rep: {additionalData.rep} </span>
					<span
						style={{
						backgroundColor: additionalData.color || 'transparent',
						borderRadius: '2px',
						width: '10px',
						height: '10px'}} />
					<span>
					Color: {additionalData.color}</span>
				</span>
			);
		}
	}

	doExit = () => {
		browserHistory.push('/admin');
	}

	handleChangeComplete = (color) => {
		console.log('color object is: ', color);
		this.setState({
			additionalData: {
				...this.state.additionalData, color: color.hex }
			});
		this.toggleColorPicker();
	}
	toggleColorPicker = () => {
		this.setState({
			showColorPicker: !this.state.showColorPicker
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

	// PROPS
	static propTypes = {
		orgId: PropTypes.number,
		orgDatad: PropTypes.object,
		onExitProps: React.PropTypes.func,
		classNameProps: React.PropTypes.array,
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node
		])
	};
}
// <Button content="cancel" onClickProps={onExitProps} />
/*
			this.setState({
				additionalData: {
					...this.state.additionalData, users: newUsers }
				});
			});
*/
