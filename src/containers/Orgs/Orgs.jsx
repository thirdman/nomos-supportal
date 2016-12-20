import React, { Component } from 'react';
import {
	// Link,
	browserHistory
	} from 'react-router';
import {
	// Button,
	// Column,
	// Icon,
	// LoadingAnimation,
	Row,
	TransitionAnimation,
	UiOrgSelect
	} from 'components';

// const dataDetail = require('./data/dataDetail.js');
const styles = require('./Orgs.scss');
// const client = require('../../helpers/ApiClient.js');


export default class Orgs extends Component {
	state = {
		// org: this.props.org,
		// activeOrg: this.props.activeOrg,
		// orgData: (this.props.activeOrg ? dataDetail[this.props.activeOrg.id] : null),
		// activeOrgDataId: this.props.params.dataId,
		loading: false,
		transition: false,
		// activeIndex: this.props.activeIndex
	}
	componentWillMount() {
		this.setupPage();
	}
	componentDidMount() {
		// this.toggleLoading();
	}

	render() {
		return (
			<div className={styles.Orgs}>
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
							{this.state.orgs ?
									<UiOrgSelect organisationData={this.state.orgs} />
								:
								null
							}
					</Row>
			{!this.state.loading ?
				<span>
						<Row>
							{this.state.orgs ?
									<UiOrgSelect organisationData={this.state.orgs} />
								:
								null
							}
						</Row>
				</span>
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