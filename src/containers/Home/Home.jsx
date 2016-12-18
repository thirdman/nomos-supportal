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
	Row,
	Statistic,
	SubNavWrap,
	TransitionAnimation,
	} from 'components';

const dataDetail = require('./data/dataDetail.js');
const styles = require('./Home.scss');
const Rebase = require('re-base');
// const client = require('../../helpers/ApiClient.js');

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
		activeOrg: this.props.activeOrg,
		orgData: dataDetail[this.props.activeOrg.id],
		activeOrgDataId: null,
		loading: true,
		transition: false,
		activeIndex: this.props.activeIndex
	}
	componentWillMount() {
		// this.setupPage();
		console.log('home will mount');
		// console.log(dataDetail);
	}
	componentDidMount() {
		this.getAdditionalData(this.props.activeOrg.id);
		this.toggleLoading();
	}

	render() {
		const { activeOrg, activeOrgDataId } = this.state;
		// console.log(activeOrgDataId, activeOrg);
		// console.log('home params', this.props.params);
		console.log('home props', this.props);
		console.log('home state', this.state);
		// const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		// const user = supportalStorage.user;
		const agreements = this.state.orgData.agreements.data;
		const users = this.state.orgData && this.state.orgData.users.data;
		const activeAgreements = _.filter(agreements, function (o) { //eslint-disable-line
			return o.attributes.agreementMode === 'Active';
			});
		const leaseAgreements = _.filter(agreements, function (o) { //eslint-disable-line
			return o.attributes.agreementType === 'Lease';
			});
		// console.log(activeAgreements);
		// console.log(leaseAgreements);
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
				<Row>
					<Column occupy={12}>
						{activeOrg ?
							<h2>
							<span className={styles.orgIconWrap} style={tempCss}>
								<Avatar
									size="medium"
									type="organisation"
									title={activeOrg.attributes.knownAs}
									defaultIconColor="#eee"
									/>
								</span>
								{activeOrg.attributes.knownAs}
							</h2>
							: <h2>Home</h2>
						}
						<HorizontalRule color={'#ccc'} />
						{this.state.activeOrgDataId ?
							<span>active orgid: {activeOrgDataId}</span>
							: null
						}
						{activeOrg ?
							<span>
								<Row>
									<Column occupy={3}>
										<h4>Organisation Status</h4>
										<span>{activeOrg.attributes.organisationStatus}</span>
									</Column>
									<Column occupy={3}>
										<h4>Created</h4>
										<span>
											{moment(activeOrg.attributes.audit.insertedDate).format('DD MMM, YYYY')}
										</span>
									</Column>
									<Column occupy={3}>
										<h4>Last Edited</h4>
										<span>
											{moment(activeOrg.attributes.audit.updatedDate).format('DD MMM, YYYY')}
										</span>
									</Column>
									<Column occupy={3}>
										<h4>Currency</h4>
										<span>{activeOrg.attributes.defaultCurrency}</span>
									</Column>
								</Row>
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
					</Column>
				</Row>
			<HorizontalRule color="#ccc" />
			<Row>
				<Column occupy={3}>
					<Row>
						<SubNavWrap
							currentlySelected={1}
							selected={'Overview'}
							listData={[
								{label: 'Overview', link: `${location.pathname}/overview`},
								{label: 'Agreements', link: `${location.pathname}/agreements`},
								{label: 'Account', link: `${location.pathname}/account`},
								{label: 'Files', link: `${location.pathname}/files`}
							]}
						/>
					</Row>
					<HorizontalRule />
					<Row>
						<h4>Users</h4>
						{users && users.map((item, index) => {
							return (
								<div className={styles.userItem} key={index}>
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
							(<span>
								<h4>Support Team</h4>
								<div className={styles.userItem}>
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
							</span>
							)
							: null
						}
					</Row>
					{this.state.additionalData ?
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
					{!this.state.additionalData ?
						<span>loading additional content...</span>
						: null
					}
				</Column>
				<Column occupy={9}>
					<h3>Agreements</h3>
						{this.state.orgData ?
							<Row>
								<Column occupy={3}>
									<Statistic
										content={agreements.length}
										title="Agreements"
										isAnimated
										hasDivider />
								</Column>
								<Column occupy={3}>
									<Statistic
										content={activeAgreements.length}
										title="Active"
										isAnimated
										hasDivider />
								</Column>
								<Column occupy={3}>
									<Statistic
										content={agreements.length - activeAgreements.length}
										title="Inactive"
										isAnimated
										hasDivider />
								</Column>
								<Column occupy={3}>
									{this.state.additionalData ?
										<Statistic
										content={this.state.additionalData.projectedAgreementCount}
										title="Projected Agreements"
										isAnimated
										hasDivider />
										:
										<Statistic
										content={users.length}
										title="Users"
										isAnimated
										hasDivider />
									}
								</Column>
							</Row>
							: null
						}
					<Row>
						{agreements && agreements.map((item, index) => {
							return (
								<div className={styles.agreementItem} key={index}>
									<ObjectInfo
										title={item.attributes.knownAs}
										id={(item.id).toString()}
										type={'agreement'}
										subType={item.attributes.agreementType}
										// classNameProps={[item.attributes.agreementMode ? 'isInactive' : '']}
										display="small" />
								</div>
							);
						})
						}
					</Row>
				</Column>
			</Row>
			<section>
				{this.state.loading ?
						(this.doLoadingItems())
					: null
				}
				</section>
			</div>
    );
  }
	getAdditionalData = (orgId) => {
		console.log('getAdditionalData triggerend with id of', orgId);
		base.fetch(`orgs/${orgId}`, {
		context: this,
		asArray: false
		}).then(data => {
			console.log('retrieved data:', data);
			console.log('this:', this);
			this.setState({
				additionalData: data,
				loading: false
			});
			console.log('the app data org is', data);
		}).catch(error => {
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