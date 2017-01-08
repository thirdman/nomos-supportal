import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import cx from 'classnames';
import { Avatar } from 'components';

const styles = require('./UiOrgSelect.scss');

export default class UiOrgSelect extends Component {
	state = {
		organisationData: this.props.organisationData
	}
	render() {
		const {
			organisationData,
			onClickProps
		} = this.props;

		if (!organisationData) {
			const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
			const theOrgs = supportalStorage.orgs;
			this.setState({
				organisationData: theOrgs
			});
		}

		return (
			<div
				className={cx(styles.UiOrgSelect)}
				onClick={onClickProps}
				>
				{
					organisationData && organisationData.map((item, index) => {
						let inlineCss = {
								background: ((item.additionalData && item.additionalData.color) || ''),
								border: '4px colid black'
						};
						return (
						<div
							className={styles.card}
							onClick={() => this.setOrg(item.id)}
							key={index}
							>
							<div
							className={styles.cardImage}
							style={inlineCss}
							>
								<Avatar
									size="medium"
									type="organisation"
									title={item.attributes.knownAs}
									defaultIconColor="#eee"
									/>
							</div>
							<div className={styles.cardContent}>
								<div className={styles.cardButton} />
								<h3>{item.attributes.knownAs}</h3>
								<span className={styles.subtitle}>Id: {item.id}</span>
								<span className={styles.subtitle}>Agreements: {item.additionalData &&
									item.additionalData.enteredAgreementCount}</span>
								<span className={styles.subtitle}>Projected: {item.additionalData &&
									item.additionalData.progectedAgreementCount}</span>
							</div>
						</div>
					);
				})
				}
			</div>
		);
	}

	// THIS CONTROLS WHAT HAPPENS
	setOrg = (orgId) => {
		this.setState({
			processingOrgs: false
		});
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const tempObject = supportalStorage;
		tempObject.activeOrgId = orgId;
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		// console.log('active org has been set: ', supportalStorage);
		// console.log('orgs have been set as: ', temporgs);
		const path = `/home/${orgId}`;
		const nextPath = path || '/';
		browserHistory.push(nextPath);
	}

	static propTypes = {
		organisationData: PropTypes.array
	}
}