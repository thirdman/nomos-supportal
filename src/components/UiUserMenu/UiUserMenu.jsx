import React, { Component } from 'react';
import {
	Avatar,
	Button,
	Icon,
	Section,
	ContentItem,
	InputText
	} from 'components';
import cx from 'classnames';
import { browserHistory } from 'react-router';
// import { autobind } from 'core-decorators';
// import { connect } from '../../../utils/state';

const styles = require('./UiUserMenu.scss');

// @connect('store')
export default class UiUserMenu extends Component {

	state = {
		isOpen: false,
		profileActive: false,
		user: this.props.user
	};
	componentWillMount() {
		// console.log('usermenu mounting...');
	}
	render() {
		// const { auth } = this.context.store;
		const { isOpen, user, profileActive } = this.state;
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
				{profileActive ?
					<div className={styles.profile}>
						<div className={styles.backdrop} >
							<div className={styles.profileWrap}>
								<Section
									title="Your Profile"
									description="This is your profile"
									>
									<h4>Username</h4>
									<div>{user.username}</div>
									<ContentItem title="Display Name">
										<InputText
											value={user.name}
										/>
									</ContentItem>
								<Button content="done" onClickProps={this.toggleProfile} />
								</Section>
							</div>
						</div>
					</div>
					: null
				}
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
									onClickProps={this.toggleProfile}
									classNameProps={['btn', 'text', 'actionItem']} />
								<Button
									key={'optionAdmin'}
									content={'Admin'}
									onClickProps={this.doAdmin}
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
	doAdmin = () => {
		browserHistory.push('/admin');
	}
	logout = () => {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		browserHistory.push('/login');
	}
	toggleProfile = () => {
		// const { profileActive } = this.state;
		console.info('toggling profile');
		this.setState({
			profileActive: !this.state.profileActive
		});
	}
}