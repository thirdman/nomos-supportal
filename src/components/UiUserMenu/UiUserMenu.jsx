import React, { Component } from 'react';
import { Button, Icon, Avatar } from 'components';
import cx from 'classnames';
import { browserHistory } from 'react-router';
// import { autobind } from 'core-decorators';
// import { connect } from '../../../utils/state';

const styles = require('./UiUserMenu.scss');

// @connect('store')
export default class UiUserMenu extends Component {

	state = {
		isOpen: false,
		user: this.props.user
	};
	componentWillMount() {
		// console.log('usermenu mounting...');
	}

	render() {
		// const { auth } = this.context.store;
		const { isOpen, user } = this.state;
		// console.log(user, isOpen);
		// console.log(Button, isOpen);
		return (
			<div className={styles.UiUserMenu}>
				<div
					className={cx(
						styles.iconWrap,
						(this.state.isOpen ? styles.isOpen : ''))}
					onClick={this.toggleOpen}
				>
					<Avatar
						iconType="user"
						// imageUrl="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
						size="large"
						title={user && user.username}
						classNameProps={['medium', 'fill']} />
				</div>
				<span className={styles.arrowWrap} onClick={this.toggleOpen}>
					{isOpen ?
						<Icon icon="chevron-up" color="black" size={12} />
						: <Icon icon="chevron-down" color="blue" size={12} />
					}
				</span>
				{isOpen &&
					<div className={styles.actionItems}>
						<div className={styles.triangle} />
							<div className={styles.userActionHeader}>
								<h4 className={styles.subtitle}>USER</h4>
								<span className={styles.userNameText} >{user && user.username}</span>
							</div>
								<Button
									key={'optionProfile'}
									content={'Profile'}
									classNameProps={['btn', 'text', 'actionItem']} />
								<Button
									key={'optionLogout'}
									content={'Log out'}
									onClickProps={this.logout}
									classNameProps={['btn', 'text', 'actionItem']} />
					</div>
				}
			</div>
		);
	}

	toggleOpen = () => {
		// console.log(this.state);
		this.setState({ isOpen: !this.state.isOpen});
	}
	logout = () => {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		browserHistory.push('/login');
	}
}
// {user.username}
/*
						{isOpen ?
							<div className={styles.actionItems}>
								<div className={styles.triangle} />
								<div className={styles.userActionHeader}>
									<h4 className={styles.subtitle}>USER</h4>
									<span className={styles.userNameText} >aaa</span>
								</div>
								<Button
									key={'option-profile'}
									content={'Profile'}
									classNameProps={['btn', 'text', 'actionItem']} />
								<Button
									key={'option-logout'}
									content={'Log out'}
									classNameProps={['btn', 'text', 'actionItem']} />
							</div>
							: null
						}
*/
