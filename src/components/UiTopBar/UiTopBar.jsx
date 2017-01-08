import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import cx from 'classnames';
import {
	Column,
	IconHamburger,
	Row,
	UiUserMenu
	} from 'components';

const styles = require('./UiTopBar.scss');

export default class UiTopBar extends Component {
	state = {
		loading: false,
		orgMenuActive: false
	}
	componentWillUpdate() {
	}

	render() {
		const {
			orgMenuActive,
			loading
			} = this.state;

		const {
			user,
			orgs,
			} = this.props;

		return (
			<div
				className={cx(styles.UiTopBar)}
				>
				{!loading ?
					<Row>
						<Column occupy={2}>
							<span className={`${styles.headerItem} ${styles.hamburgerWrap}`}>
							{orgs ?
								<IconHamburger
									width={16}
									height={15}
									menuClicked={this.doOrgs}
									isOpen={orgMenuActive}
								/>
								: null
							}
							</span>
						</Column>
						<Column occupy={8}>
							<span className={styles.title}><h3>Nomos One Supportal</h3></span>
						</Column>
						<Column occupy={2}>
							<span className={styles.headerItem}>
							{user ?
								<span>
									<UiUserMenu user={user} logout={this.logout} />
								</span>
								: null
							}
							</span>
						</Column>
					</Row>
				: null
				}
			</div>
		);
	}
	logout = () => {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		browserHistory.push('/login');
	}
	doOrgs = () => {
		browserHistory.push('/orgs');
	}
	static propTypes = {
		organisationData: PropTypes.array,
		orgs: PropTypes.array,
		user: PropTypes.object,
	}
}
