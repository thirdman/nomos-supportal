import React, { Component } from 'react';
import {
	Avatar,
	Button,
	Icon,
	ProfileAvatar,
	} from 'components';
import cx from 'classnames';
import { browserHistory } from 'react-router';

const styles = require('./UiUserMenu.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class UiUserMenu extends Component {

	state = {
		isOpen: false,
		user: this.props.user
	};
	componentWillMount() {
	}
	componentDidMount() {
		this.setupComponent(this.props.user);
	}

	render() {
		const { isOpen, user, userData } = this.state;
		return (
			<div className={styles.UiUserMenu}>
				<div
					className={cx(
						styles.iconWrap,
						(this.state.isOpen ? styles.isOpen : ''))}
					onClick={this.toggleOpen}
				>
					{ userData && userData.currentHair ?
						<ProfileAvatar
							hair={userData.currentHair}
							feature={userData.currentFeature}
							face={userData.currentFace}
							size={32}
							title={userData.fullName || null}
						/>
					:
						<Avatar
							size="medium"
							type="user"
							imageUrl={(userData && userData.img) || null}
							title={user.username || null}
							defaultIconColor="grey"
							/>
					}
				</div>
				<span className={styles.arrowWrap} onClick={this.toggleOpen}>
					{isOpen ?
						<Icon icon="chevron-up" color="blue" size={10} />
						: <Icon icon="chevron-down" color="black" size={10} />
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
									onClickProps={this.doProfile}
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
	setupComponent = (user) => {
		let userId;
		let thisUser;
		base.fetch('users', {
			context: this,
			asArray: false
			}).then(data => {
				thisUser = _.find(data, { username: user.username}); //eslint-disable-line
				userId = thisUser.dataId;
				this.setState({
					userId,
					userData: thisUser,
					loading: false
				}, () => this.syncUser(userId));
			}).catch(error => {
				console.log('Loading error is', error);
		});
	}
	syncUser = (userId) => {
		base.syncState(`users/${userId}`, {
			context: this,
			state: 'userData',
			asArray: false
		});
	}
	toggleOpen = () => {
		// console.log(this.state);
		this.setState({ isOpen: !this.state.isOpen}, () => this.doTimeout());
	}
	doTimeout = (time) => {
		let timeDelay = time || 5000;
		console.log('starting timeout of ', timeDelay);
		setTimeout(() => {
		console.log('doing timeout');
			this.setState({
				isOpen: false
			});
		}, timeDelay);
	}
	doAdmin = () => {
		browserHistory.push('/admin');
	}
	doProfile = () => {
		browserHistory.push('/profile/');
	}
	logout = () => {
		const tempObject = {user: null};
		localStorage.setItem('nomosSupportal', JSON.stringify(tempObject));
		browserHistory.push('/login');
	}
}
/*
	toggleProfile = () => {
		// const { profileActive } = this.state;
		console.info('toggling profile');
		this.setState({
			profileActive: !this.state.profileActive
		});
	}
*/
/*
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
*/

/*
								<Button
									key={'optionProfile'}
									content={'Profile'}
									onClickProps={this.toggleProfile}
									classNameProps={['btn', 'text', 'actionItem']} />

*/
/*
					<Avatar
						iconType="user"
						// imageUrl="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
						size="large"
						title={user && user.username}
						classNameProps={['medium', 'fill']} />
*/