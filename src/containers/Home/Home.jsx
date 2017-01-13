import React, { Component } from 'react';
import _ from 'lodash';
// import cx from 'classnames';
import moment from 'moment';
import {
	browserHistory
	} from 'react-router';
import {
	Avatar,
	// Button,
	Date,
	Column,
	Files,
	HorizontalRule,
	Icon,
	LoadingAnimation,
	ObjectInfo,
	ProgressBar,
	Row,
	Statistic,
	StatisticBars,
	Section,
	SubNavWrap,
	TransitionAnimation,
	WidgetColumns,
	WidgetPie,
	WidgetLineGraph
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
	}
	componentDidMount() {
		this.getOrgData(this.state.activeOrgDataId);
		if	(this.state.activeOrgDataId) {
			this.getAdditionalData(this.state.activeOrgDataId);
		}
		this.toggleLoading();
	}

	render() {
		const { activeOrg, activeOrgDataId, agreements, users, orgUsers} = this.state;
		// console.log('home props', this.props);
		// console.log('home state', this.state);
		let activeAgreements = _.filter(agreements, function (o) { //eslint-disable-line
			return o.attributes.agreementMode === 'Active';
			});
		let tempCss = {
			backgroundColor: (
			this.state.additionalData &&
			this.state.additionalData.color) || 'transparent'
		};
		const tempPieData = [
			{name: 'test 1', value: 24},
			{name: 'test 2', value: 10},
			{name: 'test 3', value: 3}
			];

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
								{label: 'Messages', link: `/home/${this.props.params.dataId}/messages`, name: 'messages'}, //eslint-disable-line
								{label: 'Graphs', link: `/home/${this.props.params.dataId}/graphs`, name: 'graphs'}, //eslint-disable-line
								{label: 'Pie', link: `/home/${this.props.params.dataId}/pie`, name: 'pie'} //eslint-disable-line
							]}
						/>
					</Row>
					<HorizontalRule />
					<Row>
						<h4>Users</h4>
						{users && users.map((item, index) => {
							return (
								<div
								className={styles.userItem}
								key={index}
								style={{width: '100%'}}
								>
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
						{this.state.thisOrgUsers && this.state.thisOrgUsers.map((item, index) => {
								return (
									<div className={styles.userItem} key={index} style={{width: '100%'}}>
										{item.id}
									</div>
								);
							})
						}
						{orgUsers && orgUsers[activeOrgDataId] ?
							(<div>
								<h4>Support Team</h4>
								{orgUsers[activeOrgDataId].map((item, index) => (
									<div
									className={styles.userItem}
									style={{width: '100%'}}
									key={index}
									onClick={() => this.goTo(item.dataId)}
									>
										<Avatar
											size="small"
											type="user"
											imageUrl={item.img || null}
											title={item.fullName || null}
											/>
										<span className={styles.userTitle}>
											{item.fullName || null}
										</span>
									</div>
									))
								}
							</div>
							)
							: null
						}
					</Row>
					{this.state.additionalDataLoading ?
						<span><LoadingAnimation /> loading additional content...</span>
						: null
					}
					{/* FAKE SUFF HERE */}
					<Date date={activeOrg.attributes.audit.insertedDate} />
					<Date date={activeOrg.attributes.audit.insertedDate} type="relative" />
					{/* ENDS FAKE STUFF */}
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
											{agreements ?
											<Statistic
												content={agreements && activeAgreements.length}
												title="Active"
												isAnimated
												hasDivider />
												: null
											}
										</Column>
										<Column occupy={3}>
											{agreements ?
												<Statistic
													content={agreements ? agreements.length - activeAgreements.length : 0}
													title="Inactive"
													isAnimated
													hasDivider />
												: null }
										</Column>
										<Column occupy={3}>
											{this.state.additionalData && this.state.additionalData.projectedAgreementCount ? //eslint-disable-line
												<Statistic
												content={this.state.additionalData &&
													this.state.additionalData.projectedAgreementCount}
												title="Projected Agreements"
												isAnimated
												hasDivider />
												: null
											}
										</Column>
									</Row>
									: null
								}
								{agreements ?
									<Row>
										<Column occupy={6}>
											{this.showTopAgreements()}
										</Column>
										<Column occupy={6}>
											{this.state.additionalData ?
												this.showAgreementsPie()
												: null
											}
										</Column>
									</Row>
									: null
								}
							</Section>
							<Section title="Account" hasDivider>
									<Row>
										<Column occupy={3}>
											{activeOrg ?
												<Statistic
													title="Created"
													content={moment(activeOrg.attributes.audit.insertedDate).format('DD MMM, YYYY')} //eslint-disable-line
													// isAnimated
													hasDivider />
													: null
												}
										</Column>
										<Column occupy={3}>
											{activeOrg ?
												<Statistic
														title="Updated"
														content={(moment(activeOrg.attributes.audit.updatedDate).format('DD MMM, YYYY')).toString()} //eslint-disable-line
														// isAnimated
														hasDivider />
													: null
												}
										</Column>
										<Column occupy={3}>
												<Statistic
													content={users && users.length}
													title="Users"
													isAnimated
													hasDivider />
										</Column>
										<Column occupy={3}>
												{activeOrgDataId ?
													<Statistic
													content={activeOrgDataId}
													title="Organisation Id"
													hasDivider />
													: null
												}
										</Column>
									</Row>
								</Section>
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'agreements' ?
						<Section title="Agreements">
							{agreements && agreements.map((item, index) => {
								let thisExtraData = () => {
									return (
										<Row>
											<Column occupy={3}>
												<h4>Created</h4>
												<span>{moment(item.attributes.insertedDate)
												.format('DD MMM, YYYY')}</span>
											</Column>
											<Column occupy={3}>
												<h4>Updated</h4>
												<span>{moment(item.attributes.updatedDate)
												.format('DD MMM, YYYY')}</span>
											</Column>
											<Column occupy={3}>
												<h4>Relative</h4>
												<span><Date
												date={item.attributes.updatedDate}
												type="relative" /></span>
											</Column>
											{item.attributes.agreementMode === 'Inactive' ?
											null
											:
											<Column occupy={3}>
												<h4>Annual Rent</h4>
												<span>{this.niceNumber(item.attributes.totalAnnualRent)}</span>
											</Column>
											}
										</Row>
									);
								};
								return (
									<div
										className={`${styles.agreementItem} ${item.attributes.agreementMode === 'Inactive' ? styles.isInactive : ''}`} // eslint-disable-line
										key={index}
										>
										<ObjectInfo
											title={item.attributes.knownAs}
											id={(item.id).toString()}
											type={'agreement'}
											subType={item.attributes.agreementType}
											additionalContent={
												<div className={styles.modeIndicator}>
													{item.attributes.agreementMode === 'Inactive' ?
														null
														:
														<Icon icon="tick" size={16} color="green" />
													}
													{item.attributes.agreementMode}
												</div>}
											// classNameProps={[item.attributes.agreementMode ? 'isInactive' : '']}
											// display="small"
											/>
											<div className={styles.detail}>
												{thisExtraData()}
											</div>
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
							<Files
								orgId={activeOrgDataId}
								title="dropbox"
								/>
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'messages' ?
						<Section title="Messages">
							<Chat orgId={1} />
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'graphs' ?
						<Section title="Graphs">
						{
							agreements ?
							this.showAgreements()
							: null
						}
						</Section>
						: null
					}
					{this.props.params.sectionId && this.props.params.sectionId === 'pie' ?
						<Section title="Pie">
							<WidgetPie title="Test percent" data={tempPieData} />
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

	// INITIAL PAGE SETUP OF DATA.
  setupPage = (dataId) => {
		console.log('setting up page with id of: ', dataId);
		if (!dataId) {
			browserHistory.push('/login');
			return false;
		}
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const theOrgs = supportalStorage.orgs;
		let thisOrg;
		const thisthing = theOrgs.map((item, index) => { // eslint-disable-line
			if (item.id === parseFloat(dataId)) {
				thisOrg = item;
			}
		});
		this.setState({
			orgs: theOrgs,
			activeOrg: thisOrg,
			orgData: thisOrg
		});
		this.updateAccounts(thisOrg);
		this.getOrgUsers(thisOrg);
  }

	// THIS GETS ALL THE ADDITIONAL DATA FROM FIREBASE
	getOrgData = (orgId) => {
		this.setState({loading: true});
		// AGREEMENTS
		client.get(`/organisations/${orgId}/agreements`).then((res) => {
			let orderedAgreements = _.sortBy(res.data, [
				function (item) {
					return -item.attributes.insertedDate;
				}
			]);
			this.setState({
				// agreements: res.data,
				agreements: orderedAgreements,
				loading: false
				});
		}).catch((err) => {
			this.updateError(err.errors[0]);
		});
	}

  updateAccounts = (orgData) => {
		let accountArray = orgData.relationships.accounts.data;
		// https://api.nomosone.com/v1/organisations/1/accounts/12
		let availableUserIds = accountArray.map((item) => {
			return {id: item.id};
		});
		this.setState({
			thisOrgUsers: availableUserIds
		});
	}

	getOrgUsers = (orgId) => {
		console.log('get users org id is: ', orgId);
		base.syncState('orgUsers', {
			context: this,
			state: 'orgUsers',
			asArray: false
		});
	}

	getAdditionalData = (orgId) => {
		console.log('getAdditionalData triggerend with id of', orgId);
		// this.setState({
			// additionalDataLoading: true,
		// });
		base.fetch(`orgs/${orgId}`, {
		context: this,
		asArray: false
		}).then(data => {
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

	showDate = (timestamp) => {
		return (
			<Date date={timestamp} type="absolute" />
		);
	}
	niceNumber = (num) => {
		if (num >= 1000000) {
		return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		}
		if (num >= 1000) {
		return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		}
		return num;
	}

	updateError = (err) => {
		console.log('There was an error', err);
		// console.log('oh yeah and here is the status..');
		// console.log(err.status);
		if (parseFloat(err.status) === 401) {
			console.log('You probably need to login, so....');
			browserHistory.push('/login');
		}
	}

	// GROUPS AGREEMENTS FOR BAR
	showTopAgreements = () => {
		const { agreements } = this.state;
		let orderedAgreements = _.sortBy(agreements, [(item) => {
				return -item.attributes.totalAnnualRent;
			}
		]);
		let topResults = _.take(orderedAgreements, 5);
		let barData = topResults.map((item, index) => {
			let dataIem = {
				_id: `topAgreement${index}`,
				knownAs: item.attributes.knownAs,
				amount: item.attributes.totalAnnualRent,
				units: '$',
				showIcon: true,
				// imageUrl: 'http://media.rightmove.co.uk/154k/153359/59035664/153359_40054_IMG_00_0000_max_135x100.jpg',
				icon: 'agreement',
				type: 'agreement',
				subType: 'Lease',
				subSubType: 'lease'
				};
			return (
				dataIem
			);
		});
		return (
			<span>
				<StatisticBars
					source={barData}
					title="Top Agreements (by annual rent)"
					isCurrency
					// hasBackground
					/>
			</span>
		);
	}
	// PERCENT AGREEMENTS FOR PIE
	showAgreementsPie = () => {
		const { agreements } = this.state;
		const activeAgreements = _.filter(agreements, function (o) { //eslint-disable-line
			return o.attributes.agreementMode === 'Active';
			});
		let additionalData = this.state.additionalData;
		console.log('additionalData.projectedAgreementCount',
			additionalData.projectedAgreementCount);
		let totalProjected = additionalData.projectedAgreementCount;
		if (!additionalData.projectedAgreementCount) {
			console.log('no projected total so, setting as agreemetns total');
			totalProjected = agreements && agreements.length;
		}
		const activeTotal = agreements && activeAgreements.length;
		const inactiveTotal = agreements && (agreements.length - activeAgreements.length);
		const uneneteredTotal = agreements && (totalProjected - agreements.length);
		const pieData = [
			{name: 'ActiveAgreements:', value: activeTotal},
			{name: 'Inactve Agreements:', value: inactiveTotal},
			{name: 'Projected Remaining:', value: uneneteredTotal}
		];
		return (
			<WidgetPie title="Agreement Progress" data={pieData} />
		);
	}


	// GROUPS AGREEMENTS FOR GRAPHS
	showAgreements = () => {
		const { agreements, additionalData } = this.state;
		const monthNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		const weekNumbers = [];
		const weekCount = 52;
		for (let i = 0; i < weekCount; i++) {
			weekNumbers.push(i);
		}

		let orderedAgreements = _.sortBy(agreements, [
			function (item) {
				return item.attributes.insertedDate;
			}
		]);
		let monthsArray = [];
		let weeksArray = [];
		let weeksArrayCumulative = [];
		let amountCumulative = 0;
		let yearsandmonthsArray = [];
		let currentYear;
		let groupByYear = _.groupBy(
			orderedAgreements,
				(item) => moment(item.attributes.insertedDate).year()
			);

		let tempGroupByMonth = _.forEach(groupByYear, (value, key) => {
			currentYear = key;
			let thisMonthsGrouped = _.groupBy(
				value, (item) => moment(item.attributes.insertedDate).month()
			);

			let monthSet1 = monthNumbers.map((number) => {
				let dataToReturn = {
					label: `${moment().month(number).format('MMM')} ${currentYear}`,
					amount: 0
					};
				let isInThis = _.find(thisMonthsGrouped,
					(avalue, akey) => {
						if (parseFloat(akey) === number) {
							dataToReturn = {
								label: `${moment().month(parseFloat(akey)).format('MMM')} ${currentYear}`,
								amount: avalue.length,
								data: avalue
								};
							return true;
						} else {
							return false;
						}
					}
				);
				console.info('isInThis', isInThis);
				monthsArray.push(dataToReturn);
				return dataToReturn;
			});
			console.log('monthSet1', monthSet1);
			let yearobject = {
				// label: groupByYear[key],
				label: currentYear,
				amount: value.length,
				data: groupByYear[key]
			};
			yearsandmonthsArray.push(yearobject);
			console.log('------');
		});
		let dataToReturnCumulative;
		let tempGroupByWeek = _.forEach(groupByYear, (value, key) => {
			currentYear = key;
			let thisWeekGrouped = _.groupBy(
				value, (item) => moment(item.attributes.insertedDate).week()
			);
			let weekset = weekNumbers.map((number) => {
				let dataToReturn = {
					label: `Week ${moment().week(number).format('gg')} ${currentYear}`,
					amount: 0
					};
				let isInThis = _.find(thisWeekGrouped,
					(avalue, akey) => {
						if (parseFloat(akey) === number) {
							dataToReturn = {
								label: `Week ${moment().week(parseFloat(akey)).format('gg')} ${currentYear}`,
								amount: avalue.length,
								data: avalue
								};
							let previousCumulative = amountCumulative;
							amountCumulative = amountCumulative + avalue.length; //eslint-disable-line
							if (previousCumulative !== amountCumulative) {
								dataToReturnCumulative = {
									label: `Week ${moment().week(parseFloat(akey)).format('gg')} ${currentYear}`,
									amount: avalue.length,
									amountCumulative: amountCumulative, //eslint-disable-line
									data: avalue
									};
							} else {
								dataToReturnCumulative = null;
							}
							return true;
						} else {
							return false;
						}
					}
				);
				console.info('isInThis', isInThis);
				weeksArray.push(dataToReturn);
				if (dataToReturnCumulative) {
					weeksArrayCumulative.push(dataToReturnCumulative);
				}
				return dataToReturn;
			});
			console.log('weekset', weekset);
			console.log('----e--');
		});
		console.log('tempGroupByMonth', tempGroupByMonth);
		console.log('tempGroupByWeek', tempGroupByWeek);
		console.log('yearsandmonthsArray', yearsandmonthsArray);
		console.log('final amount cumulative is', amountCumulative);
		console.log('weeksArrayCumulative is', weeksArrayCumulative);

		let yearData = Object.keys(groupByYear).map((key) => {
			let theValue = {
				amount: groupByYear[key].length,
				label: key
			};
			return (theValue);
		});
		yearData = {values: yearData};
		let monthData = {values: monthsArray};
		let weekData = {values: weeksArray};
		let monthDataForLine = monthsArray.map((item) => {
			return (
				{name: item.label,
					value: item.amount
				}
			);
		});
		let initialDate = additionalData && additionalData.startDate;
		console.log('initial date is: ', initialDate);
		let tempNumber = 0;
		let cumulativeDataForLine = weeksArrayCumulative.map((item) => {
			let doit = null;
			let newValue = amountCumulative - item.amountCumulative;
			if (newValue === tempNumber) {
				doit = ({
						name: item.label,
						value: (amountCumulative - item.amountCumulative)
					});
			} else {
				doit = ({
						name: item.label,
						value: (amountCumulative - item.amountCumulative)
					});
			}
			tempNumber = newValue;
				return doit;
		});
		// cumulativeDataForLine = cumulativeDataForLine.filter(function (n) {return n !== undefined});
		// cumulativeDataForLine = cumulativeDataForLine.filter(n => n);
		console.log('cumulativeDataForLine', cumulativeDataForLine);
		console.log('monthDataForLine', monthDataForLine);
		return (
			<span>
				<Row>
					<Column>
						<WidgetColumns
							title={'New Agreements by Year'}
							data={yearData}
							trimLabels={false}
							// hasBackground
							isAnimated
							isFlex
						/>
					</Column>
				</Row>
				<Row>
					<Column>
						<WidgetColumns
							title={'New Agreements by month'}
							data={monthData}
							trimLabels={false}
							// hasBackground
							isAnimated
							isFlex
						/>
					</Column>
				</Row>
				<Row>
					<Column>
						<WidgetColumns
							title={'New Agreements by week'}
							data={weekData}
							trimLabels={false}
							// hasBackground
							isAnimated
							isFlex
						/>
					</Column>
				</Row>
				<Row>
				<Column>
					<HorizontalRule />
				</Column>
				</Row>
				<Row>
				<Column>
					<WidgetLineGraph title="Monthly" data={monthDataForLine} />
				</Column>
				</Row>
				<Row>
				<Column>
					<WidgetLineGraph title="Weekly cumulative" data={cumulativeDataForLine} />
				</Column>
				</Row>
				<Row>
				<Column>
					<WidgetLineGraph title="test line" />
				</Column>
				</Row>
			</span>
		);
	}
	goTo = (userId) => {
		browserHistory.push(`/profile/${userId}`);
	}

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
