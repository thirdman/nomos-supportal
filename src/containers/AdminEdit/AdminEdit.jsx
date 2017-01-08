import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { SketchPicker } from 'react-color';
import cx from 'classnames';
import {
	browserHistory
	} from 'react-router';
import {
	// Avatar,
	Button,
	Column,
	ContentItem,
	Icon,
	InputText,
	MediaItem,
	MediaItemList,
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
		this.getActiveUsers();
		// this.doUpdateActiveUsers();
	}
	componentDidUpdate() {
		this.doUpdateRefresh();
	}

	render() {
		// const { onExitProps} = this.props;
		const { orgData, additionalData, activeUsers, inactiveUsers } = this.state;
		const orgId = this.props.params.dataId;
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
											<ContentItem title="Entered Agreement Count">
												<InputText
													label="The number of agreements entered but not reviewed yet"
													placeholder="Number of Entered"
													placeholderBelow
													value={additionalData && additionalData.enteredAgreementCount && additionalData.enteredAgreementCount.toString()} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, enteredAgreementCount: parseFloat(value) }
															}
													)}
												/>
											</ContentItem>
											<ContentItem title="Project Start Date">
												<InputText
													label="Date expected to begin entering agreements"
													placeholder="Date"
													placeholderBelow
													value={additionalData && additionalData.startDate && additionalData.startDate.toString()} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, startDate: parseFloat(value) }
															}
													)}
												/>
											</ContentItem>
											<ContentItem title="Project End Date">
												<InputText
													label="Expected finish date"
													placeholder="Date"
													placeholderBelow
													value={additionalData && additionalData.endDate && additionalData.endDate.toString()} // eslint-disable-line
													onChangeProps={(value) => this.setState({
															additionalData: {
																...additionalData, endDate: parseFloat(value) }
															}
													)}
												/>
											</ContentItem>
											<Section hasBackground title="Admin Users">
												<Row>
													<Column>
														<h4>Available Users</h4>
														{
															additionalData && this.state.additionalUsers ?
															<span>
																{
																	this.state.additionalUsers &&
																	this.state.additionalUsers.map((item, index) => {
																		// let { activeUsers, inactiveUsers } = this.state;
																		let userHasOrgs = activeUsers;
																		let isInOrg = false;
																		console.log('activeUsers, inactiveUsers: ',
																			activeUsers, inactiveUsers, item);
																		if (userHasOrgs) {
																			isInOrg = _.find(activeUsers, { 'dataId': parseFloat(item.dataId)}); //eslint-disable-line
																			console.log('isinorg, and fins users, ', isInOrg,
																			_.find(activeUsers, { 'dataId': parseFloat(item.dataId)}));//eslint-disable-line
																		}
																		console.log('difference is: ',
																			_.difference(this.state.additionalUsers, activeUsers));
																		// console.log('userhasorgs: ', userHasOrgs);
																		// console.log('isInOrg: ', isInOrg);
																		return (
																			<div
																				className={
																					cx(styles.userButton,
																						(isInOrg ? styles.active : '')
																					)}
																				onClick={() => this.toggleUser2(
																					item,
																					(isInOrg ? 'remove' : 'add')
																					)}
																				key={index}
																				>
																					{ isInOrg ?
																						<div className={styles.userAction}>
																							<Icon icon="cross" size={12} color="green" />
																						</div>
																						:
																						<div className={styles.userAction}>
																							<Icon icon="plus" size={12} color="white" />
																						</div>
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
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Entered Agreement Count</h4>
														<span>{additionalData &&
															additionalData.enteredAgreementCount}</span>
													</Column>
												</Row>
											</Section>
											<Section hasDivider>
													<h4> Admin Users</h4>
														<MediaItemList
															data={this.state.activeUsers}
															type="user"
														/>
													<h4>Inactive Users</h4>
													{
														inactiveUsers ?
														inactiveUsers.map((item) => {
															return (
																<div>{item.dataId}</div>
															);
														})
														: null
													}
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
		let orgId = paramOrgId || this.props;
		console.log('set up org Id', orgId);
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		const orgs = supportalStorage.orgs;
		// let thisAdditionalOrg = _.find(orgs, { dataId: parseFloat(orgId)}); //eslint-disable-line
		let orgData = _.find(orgs, { id: parseFloat(orgId)}); //eslint-disable-line
		// console.log(orgData);
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
		}, function () {
			this.adminUsers();
		});
	}
	getActiveUsers = () => {
		const { orgId } = this.state;
		base.syncState(`orgUsers/${orgId}`, {
			context: this,
			state: 'activeUsers',
			asArray: true
		});
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
	adminUsers = () => {
		const { additionalUsers, additionalData, activeUsers, inactiveUsers } = this.state;
		console.log('additionalUsers, additionalData, activeUsers, inactiveUsers',
			additionalUsers, additionalData, activeUsers, inactiveUsers);
		// const orgId = this.props.params.dataId;
			// let indexToDelete = _.findIndex(tempArray, {dataId: 9}); //eslint-disable-line
			// console.log('indexToDelete is :', indexToDelete);
			let splicedData = additionalUsers.slice();
			// splicedData = splicedData.filter((arr, i) => i !== indexToDelete);
			// console.log('splicedData is :', splicedData);
			this.setState({inactiveUsers: splicedData}); // update state
		}

	doExit = () => {
		browserHistory.push('/admin');
	}

	toggleUser2 = (userObject, action) => {
		const { orgId } = this.state;
		let useData = {[userObject.dataId]: userObject}; // eslint-disable-line
		console.log('useData: ', useData);
		if (action === 'add') {
			base.update(`orgUsers/${orgId}`, {
			data: useData,
			then(err) {
				if (!err) {
					console.log('done adding user');
				} else {
					console.error(err);
				}
			}
			});
		}
		if (action === 'remove') {
			const { activeUsers } = this.state;
			let thisId = userObject.dataId;
			let tempArray = Object.values(activeUsers);
			let indexToDelete = _.findIndex(tempArray, {dataId: thisId}); //eslint-disable-line
			let splicedData = activeUsers.slice();
			splicedData = splicedData.filter((arr, i) => i !== indexToDelete);
			this.setState({activeUsers: splicedData}); // update state
		}
	}

	toggleUser = (userId, action) => {
		const { orgId } = this.state;
		console.log('userId and org id are: ', userId, orgId);
		if (action === 'add') {
			// let useData = {[orgId]: {'dataId': orgId}}; // eslint-disable-line
			let useData = {[userId]: {'dataId': userId}}; // eslint-disable-line
			console.log(useData);
			// base.update(`orgUsers/${orgId}/${userId}`, {
			base.update(`orgUsers/${orgId}`, {
			data: useData,
			then(err) {
				if (!err) {
					console.log('done');
				} else {
					console.error(err);
				}
			}
			});
		}
		if (action === 'remove') {
			const { activeUsers } = this.state;
			console.log('set of activeUsers to remove', activeUsers);
			let tempArray = Object.values(activeUsers);
			console.log('tempArray is: ', tempArray);
			let indexToDelete = _.findIndex(tempArray, {dataId: 9}); //eslint-disable-line
			console.log('indexToDelete is :', indexToDelete);
			let splicedData = activeUsers.slice();
			splicedData = splicedData.filter((arr, i) => i !== indexToDelete);
			console.log('splicedData is :', splicedData);
			this.setState({activeUsers: splicedData}); // update state
		}
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
	doUpdateRefresh = () => {
		console.info('Edit component updated');
	}
	doUpdateActiveUsers = () => {
		const { additionalUsers, activeUsers } = this.state;
		console.log('additionalUsers, activeUsers, ', additionalUsers, activeUsers);
		const orgId = this.props.params.dataId;
		const tempActiveUsers = [];
		let activeUserSet = tempActiveUsers.map((item) => {
			let userHasOrgs = item.orgs;
			let isInOrg = false;
			if (userHasOrgs) {
				isInOrg = _.find(item.orgs, { 'dataId': parseFloat(orgId)}); //eslint-disable-line	
			}
			return (isInOrg);
		});

		console.log('activeUserSet', activeUserSet);
		this.setState({
			activeUsers: activeUserSet
		});
	}

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
/*
	adminUsers = () => {
		const { additionalUsers, additionalData, activeUsers } = this.state;
		console.log('additionalUsers, additionalData, activeUsers',
			additionalUsers, additionalData, activeUsers);
		const orgId = this.props.params.dataId;
		let thisUserList = additionalUsers.map((item, index) => {
					let userHasOrgs = item.orgs;
					let isInOrg = false;
					if (userHasOrgs) {
						isInOrg = _.find(item.orgs, { 'dataId': parseFloat(orgId)}); //eslint-disable-line
					}
					return (
						<span
							key={index}
							>
						{ isInOrg ?
							<MediaItem
								content={item.fullName}
								username={item.fullName}
								imageUrl={item.img}
								type="user"
								/>
						: null
						}
						</span>
					);
				});

		return (
			<span> testing
			{thisUserList}
			</span>
		);
	}
	*/
/*

<h4>AdminUsers2 </h4>
	{this.adminUsers()}
*/