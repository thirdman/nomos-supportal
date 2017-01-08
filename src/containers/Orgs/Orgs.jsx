import React, { Component } from 'react';
import { browserHistory} from 'react-router';
import _ from 'lodash';
import {
	Row,
	UiOrgSelect
	} from 'components';

const styles = require('./Orgs.scss');
const client = require('../../helpers/ApiClient.js');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class Orgs extends Component {
	state = {
		loading: true,
		transition: false,
	}
	componentWillMount() {
		this.setupPage();
	}
	componentDidMount() {
		// this.toggleLoading();
		this.getAdditionalData();
	}

	render() {
		const { loading, orgs } = this.state;
		// const { orgs } = this.props;
		return (
			<div className={styles.Orgs}>
				<Row>
						{orgs && !loading ?
								<UiOrgSelect organisationData={orgs} />
							:
							<p>No organisations found</p>
						}
				</Row>
			</div>
    );
  }
  setupPage = () => {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const theOrgs = supportalStorage.orgs;
		if (theOrgs) {
			this.setState({
				orgs: theOrgs,
				loading: false
			});
		} else {
			this.setState({
				loading: true
			});
			client.get('/organisations').then((res) => {
				this.updateOrgs(res.data);
			}).catch((err) => {
				console.error('err is', err);
				this.updateError(err.errors[0]);
			});
		}
	}
	updateOrgs = (orgs = []) => {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const tempObject = supportalStorage;
		tempObject.orgs = orgs;
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		this.setState({
			orgs,
			loading: false,
		});
	}
	getAdditionalData = () => {
		base.fetch('orgs', {
			context: this,
			asArray: true
			}).then(data => {
				this.setState({
					additionalData: data,
					loading: false
				}, () => this.updateAdditionalOrgs(data));
			}).catch(error => {
				console.log('Loading error is', error);
		});
	}
	updateAdditionalOrgs = (data) => {
		const { orgs } = this.state;
		let orgArray = orgs;
		console.log('orgs', orgs);
		console.log('about to update the orgs with data', data);
		data.map((item) => {
			let thisOrgData = _.find(orgs, { id: parseFloat(item.dataId)}); //eslint-disable-line
			let thisOrgDataindex = _.findIndex(orgs, { id: parseFloat(item.dataId)}); //eslint-disable-line
			console.log('thisOrgDataindex', thisOrgDataindex);
			console.log('thisOrgData', thisOrgData);
			console.log('thisAdditionalOrgData', item);
			if (thisOrgData) {
				console.log('thisOrgDataindex', thisOrgDataindex);
				console.log('orgArray[thisOrgDataindex]', orgArray[thisOrgDataindex]);
				orgArray[thisOrgDataindex].additionalData = item;
			}
				return true;
		});
		console.log(orgArray);
		this.setState({
			orgs: orgArray
		});
	}
	updateError = (err) => {
		console.log('there was an error', err);
		if (err.status === 401) {
			console.log('You probably need to login, so....');
			browserHistory.push('/login');
		}
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