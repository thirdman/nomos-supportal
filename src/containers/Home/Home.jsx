import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
	// import superagent from 'superagent';
import {
	// Link,
	browserHistory
	} from 'react-router';
import {
	Avatar,
	// Button,
	Column,
	HorizontalRule,
	// Icon,
	LoadingAnimation,
	ObjectInfo,
	ProgressBar,
	Row,
	Statistic,
	Section,
	SubNavWrap,
	TransitionAnimation,
	} from 'components';
import { Chat } from 'containers';

// const dataDetail = require('./data/dataDetail.js');
const styles = require('./Home.scss');
const Rebase = require('re-base');
const client = require('../../helpers/ApiClient.js');

const base = Rebase.createClass({
  apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
  authDomain: 'nomos-supportal.firebaseapp.com',
  databaseURL: 'https://nomos-supportal.firebaseio.com',
  storageBucket: 'nomos-supportal.appspot.com',
  messagingSenderId: '1011016910326'
}, 'myApp');

export default class Home extends Component {
	state = {
		// org: this.props.org,
		// activeOrg: this.props.activeOrg,
		// orgData: (this.props.activeOrg ? dataDetail[this.props.activeOrg.id] : null),
		activeOrgDataId: this.props.params.dataId,
		loading: true,
		transition: false,
		additionalDataLoading: false,
		activeIndex: this.props.activeIndex
	}
	componentWillMount() {
		// THINGS TO DO
		// get orgs.
		// set orgs to state?
		// get additional data
		// set additonal data
		// show the org select screen
		// on select, set active org Id and data
		// set active additonal id and data
		// transition to full page
		// set active subcontent to overview
		// this.setupPage();
		console.log('home will mount');
		if (this.props.params.sectionId) {
			console.log('sectionId Exists:', this.props.params.sectionId);
			} else {
			console.log('sectionId does not exist:');
		}
		this.setupPage(this.props.params.dataId);
		// console.log(dataDetail);
	}
	componentDidMount() {
		if	(this.state.activeOrgDataId) {
			this.getAdditionalData(this.state.activeOrgDataId);
		}
		this.toggleLoading();
	}

	render() {
		const { activeOrg, activeOrgDataId, agreements, users} = this.state;
		// console.log(activeOrgDataId, activeOrg);
		// console.log('home params', this.props.params);
		console.log('home props', this.props);
		console.log('home state', this.state);
		// const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		// const user = supportalStorage.user;
		// let agreements = this.state.orgAgreements;
		// let users = this.state.orgUsers && this.state.orgUsers.data;
		let activeAgreements = _.filter(agreements, function (o) { //eslint-disable-line
			return o.attributes.agreementMode === 'Active';
			});
		let leaseAgreements = _.filter(agreements, function (o) { //eslint-disable-line
			return o.attributes.agreementType === 'Lease';
			});
		console.log(leaseAgreements);
		let tempCss = {
			backgroundColor: (
			this.state.additionalData &&
			this.state.additionalData.color) || 'transparent'
		};
		return (
			<div className={styles.Home}>
					<Row>
						{this.state.transition ?
							<TransitionAnimation
								isActive={this.state.transition}
								isVisible={this.state.transition}
								reRender={this.state.loading}
							/>
							: null
						}
					</Row>
{!this.state.loading ?
	<span>
			<Row>
				<Column occupy={10}>
					{activeOrg ?
						<h2>
						<span className={styles.orgIconWrap} style={tempCss}>
							<Avatar
								size="medium"
								type="organisation"
								title={activeOrg && activeOrg.attributes.knownAs}
								defaultIconColor="#eee"
								/>
							</span>
							{activeOrg.attributes.knownAs}
						</h2>
						: <h2>Home</h2>
					}
				</Column>
				<Column occupy={2}>
					{activeOrg &&
						<span>
							<h4>Organisation Status</h4>
							<span>{activeOrg.attributes.organisationStatus}</span>
						</span>
					}
				</Column>
			</Row>
			<HorizontalRule color="black" />
			<Row>
				<Column occupy={3}>
					<Row>
						<SubNavWrap
							currentlySelected={1}
							selected={this.props.params.sectionId || 'overview'}
							classNameProps={['dark', 'inset']}
							listData={[
								{label: 'Overview', link: `/home/${this.props.params.dataId}/overview`, name: 'overview'}, //eslint-disable-line
								{label: 'Agreements', link: `/home/${this.props.params.dataId}/agreements`, name: 'agreements'}, //eslint-disable-line
								{label: 'Account', link: `/home/${this.props.params.dataId}/account`, name: 'Account'}, //eslint-disable-line
								{label: 'Files', link: `/home/${this.props.params.dataId}/files`, name: 'files'}, //eslint-disable-line
								{label: 'Messages', link: `/home/${this.props.params.dataId}/messages`, name: 'messages'} //eslint-disable-line
							]}
						/>
					</Row>
					<HorizontalRule />
					<Row>
						<h4>Users</h4>
						{users && users.map((item, index) => {
							return (
								<div className={styles.userItem} key={index} style={{width: '100%'}}>
									<Avatar
										size="small"
										type="user"
										title={`${item.attributes.firstName} ${item.attributes.surname}`}
										defaultIconColor="#eee"
										/>
									<span className={styles.userTitle}>
										{`${item.attributes.firstName} ${item.attributes.surname}`}
									</span>
								</div>
							);
						})
						}
						{this.state.additionalData ?
							(<div>
								<h4>Support Team</h4>
								<div className={styles.userItem} style={{width: '100%'}}>
									<Avatar
										size="small"
										type="user"
										imageUrl="https://pbs.twimg.com/profile_images/499700835509469185/OQgR3hvm_400x400.jpeg"
										title={`Onboarding Manager: ${this.state.additionalData.rep}`}
										defaultIconColor="#eee"
										/>
									<span className={styles.userTitle}>
										{this.state.additionalData.rep}
									</span>
								</div>
							</div>
							)
							: null
						}
					</Row>
					{this.state.additionalData && 'ggg' === 'bbb' ?
						(<span className={styles.additionalData}>
							<h3>Additional Data</h3>
							<Row>
								<Column occupy={12}>
									<h4 className="subtitle">contact</h4>
									<span>{this.state.additionalData.rep}</span>
								</Column>
								<Column occupy={12}>
									<h4 className="subtitle">id</h4>
									<span>{this.state.additionalData.dataId}</span>
								</Column>
								<Column occupy={12}>
									<h4 className="subtitle">color</h4>
									<span>{this.state.additionalData.color}</span>
								</Column>
								<Column occupy={12}>
									<h4 className="subtitle">Status</h4>
									<span>{this.state.additionalData.status}</span>
								</Column>
							</Row>
						</span>
						)
						: null
					}
					{this.state.additionalDataLoading ?
						<span><LoadingAnimation /> loading additional content...</span>
						: null
					}
				</Column>
				<Column occupy={9}>
					{!this.props.params.sectionId || this.props.params.sectionId === 'overview' ?
						<Section classNameProps={['isAnimated']} isAnimated>
							<Section title="Onboarding Progress">
							{agreements && agreements.length > 0 && this.state.additionalData ?
								<ProgressBar
									completed={agreements && (agreements.length / this.state.additionalData.projectedAgreementCount) * 100} // eslint-disable-line
									hasPadding />
								:
								<ProgressBar completed={agreements && (activeAgreements.length / agreements.length) * 100} hasPadding /> // eslint-disable-line
							}
							</Section>
							<Section title="Agreements" hasDivider>
								{agreements ?
									<Row>
										<Column occupy={3}>
											{agreements ?
											<Statistic
												content={agreements && agreements.length}
												title="Agreements"
												isAnimated
												hasDivider />
												: null }
										</Column>
										<Column occupy={3}>
											<Statistic
												content={agreements && activeAgreements.length}
												title="Active"
												isAnimated
												hasDivider />
										</Column>
										<Column occupy={3}>
											{agreements ?
												<Statistic
													content={agreements && (agreements.length - activeAgreements.length)}
													title="Inactive"
													isAnimated
													hasDivider />
												: null }
										</Column>
										<Column occupy={3}>
											{this.state.additionalData ?
												<Statistic
												content={this.state.additionalData &&
													this.state.additionalData.projectedAgreementCount}
												title="Projected Agreements"
												isAnimated
												hasDivider />
												:
												<Statistic
												content={users && users.length}
												title="Users"
												isAnimated
												hasDivider />
											}
										</Column>
									</Row>
									: null
								}
							</Section>
							<Section title="Account" hasDivider>
								{activeOrg ?
									<Row>
										<Column occupy={3}>
											{agreements ?
											<Statistic
												title="Created"
												content={moment(activeOrg.attributes.audit.insertedDate).format('DD MMM, YYYY')} //eslint-disable-line
												// isAnimated
												hasDivider />
												: null }
										</Column>
										<Column occupy={3}>
											<Statistic
												title="Updated"
												content={(moment(activeOrg.attributes.audit.updatedDate).format('DD MMM, YYYY')).toString()} //eslint-disable-line
												// isAnimated
												hasDivider />
										</Column>
										<Column occupy={3}>
												<Statistic
													content={users && users.length}
													title="Users"
													isAnimated
													hasDivider />
										</Column>
										<Column occupy={3}>
											{this.state.activeOrgDataId &&
												<Statistic
												content={activeOrgDataId}
												title="Organisation Id"
												hasDivider />
											}
										</Column>
									</Row>
									: null
								}
								</Section>
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'agreements' ?
						<Section title="Agreements">
							{agreements && agreements.map((item, index) => {
								return (
									<div className={styles.agreementItem} key={index}>
										<ObjectInfo
											title={item.attributes.knownAs}
											id={(item.id).toString()}
											type={'agreement'}
											subType={item.attributes.agreementType}
											// classNameProps={[item.attributes.agreementMode ? 'isInactive' : '']}
											// display="small"
											/>
									</div>
								);
							})
							}
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'account' ?
						<Section title="Account">
							{activeOrg ?
								<span>
									<Row>
										<Column occupy={3}>
											<h4>Contact Name</h4>
											<span>{activeOrg.attributes.contactDetails.contact}</span>
										</Column>
										<Column occupy={3}>
											<h4>Contact Email</h4>
											<span>{activeOrg.attributes.contactDetails.email}</span>
										</Column>
										<Column occupy={3}>
											<h4>Contact phone</h4>
											<span>{activeOrg.attributes.contactDetails.phone}</span>
										</Column>
										<Column occupy={3}>
											<h4>Website</h4>
											<span>{activeOrg.attributes.website}</span>
										</Column>
									</Row>
								</span>
								: null
							}
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'files' ?
						<Section title="Files">
							<span>Files will be here</span>
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'messages' ?
						<Section title="Messages">
							<Chat orgId={1} />
						</Section>
						: null
					}

				</Column>
			</Row>
	</span>
	:
			<section>
				(this.doLoadingItems())
			</section>
	}
			</div>
    );
  }
  setupPage = (dataId) => {
		console.log('setting up page with id of: ', dataId);
		if (!dataId) {
			browserHistory.push('/login');
			return false;
		}
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const theOrgs = supportalStorage.orgs;
		// const activeOrgId = supportalStorage.activeOrgId;
		let thisOrg;
		const thisthing = theOrgs.map((item, index) => { // eslint-disable-line
			if (item.id === parseFloat(dataId)) {
				thisOrg = item;
			}
		});
		this.setState({
			orgs: theOrgs,
			// activeOrgDataId: activeOrgId,
			activeOrg: thisOrg,
			orgData: thisOrg
		});
		this.getOrgData(dataId);
  }
	getOrgData = (orgId) => {
		this.setState({loading: true});
		client.get(`/organisations/${orgId}/agreements`).then((res) => {
			console.log('res is: ', res);
			// this.updateOrgs(res.data);
			this.setState({
				agreements: res.data,
				loading: false
				});
		}).catch((err) => {
			this.updateError(err.errors[0]);
		});
		client.get(`/organisations/${orgId}/users`).then((res) => {
			console.log('res is: ', res);
			// this.updateOrgs(res.data);
			this.setState({
				users: res.data
				});
		}).catch((err) => {
			this.updateError(err.errors[0]);
		});
	}

	getAdditionalData = (orgId) => {
		console.log('getAdditionalData triggerend with id of', orgId);
		this.setState({
			additionalDataLoading: true,
		});
		base.fetch(`orgs/${orgId}`, {
		context: this,
		asArray: false
		}).then(data => {
			console.log('retrieved data:', data);
			console.log('this:', this);
			this.setState({
				additionalData: data,
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
	}
/*
	setOrg = (orgId) => {
		if (orgId) {
			this.setState({
				activeOrg: orgId
			});
			this.getData(orgId);
		} else {
			this.setState({
				activeOrg: null
			});
		}
	}
*/
/*
	getOrgs = () => {
		console.log('getting orgs');
		console.log('dataOrgs: ', dataOrgs.data);
		const theData = dataOrgs.data;
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log('user', user);
		this.setState({
			orgs: theData
		});
	}
*/
		/*
		client.get('/organisations').then((res) => {
			console.log('got res: ', res);
			this.updateOrgs(res.data);
		}).catch((err) => {
			this.updateError(err.errors[0]);
		});
*/
/*
		const request = superagent.get('https://dev-api.nomosone.com/v1/organisations')
			// .send({ name: 'Manny', species: 'cat' })
			// .set('X-API-Key', 'foobar')
			// .set('Accept', 'application/json')
			.set('authorisation', user.authorization)
			.set('Content-Type', 'text/plain');
			console.log(request);
		request.end((err, res) => {
			if (err) throw err;
			console.log(res);
		});
*/
	/* OLD THINGS */
	doLoadingItems = () => {
		let rows = [];
		for (let i = 0; i < 3; i++) {
			rows.push(
				<div className={styles.beach} key={i}>
					<LoadingAnimation isVisbile />
					<h3>&nbsp;</h3>
					<p>&nbsp;</p>
				</div>
			);
		}
		return <section>{ rows }</section>;
	}
	doTranstion = (page) => {
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