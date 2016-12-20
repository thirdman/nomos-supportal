import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import cx from 'classnames';
import { Avatar } from 'components';

const styles = require('./UiOrgSelect.scss');

export default class UiOrgSelect extends Component {
	static propTypes = {
		organisationData: PropTypes.array
	}

	render() {
		const {
			organisationData = [],
			onClickProps
		} = this.props;
		return (
			<div className={cx(styles.UiOrgSelect)} onClick={onClickProps}>
				{
					organisationData && organisationData.map((item, index) => (
						<div
							className={styles.card}
							onClick={() => this.setOrg(item.id)}
							// onClick={onClickProps(item.id, index)}
							key={index}
							>
							<div className={styles.cardImage}>
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
							</div>
						</div>
					))
				}
			</div>
		);
	}
	setOrg = (orgId) => {
		this.setState({
			processingOrgs: false
		});
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const tempObject = supportalStorage;
		tempObject.activeOrgId = orgId;
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		console.log('active org has been set: ', supportalStorage);
		// console.log('orgs have been set as: ', temporgs);
		const path = `/home/${orgId}`;
		const nextPath = path || '/';
		browserHistory.push(nextPath);
	}
}