import React, { Component, PropTypes } from 'react';
// import _ from 'lodash';
import cx from 'classnames';
import { browserHistory	} from 'react-router';
import ReactTooltip from 'react-tooltip';
import {
	Achievements,
	Avatar,
	Button,
	Column,
	ContentItem,
	Icon,
	InputText,
	// MediaItem,
	// ObjectInfo,
	// HorizontalRule,
	ProfileAvatar,
	Row,
	Section,
	LoadingAnimation,
	// TransitionAnimation
	} from 'components';

const styles = require('./Profile.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class Profile extends Component {
	state = {
		loading: true,
		transition: false,
		userId: this.props.userId,
		additionalData: null,
		isEditing: false
	}
	componentWillMount() {
	}
	componentDidMount() {
		if (this.props.params.dataId) {
			this.setupPage(this.props.params.dataId);
		} else {
			this.setupPage();
		}
		// this.syncData();
	}

	render() {
		// const { onExitProps} = this.props;
		const {
			loading,
			userData,
			isEditing,
			achievements
			} = this.state;
		return (
			<div className={cx(styles.Profile, isEditing ? styles.isEditing : '')}>
					{loading ?
							<LoadingAnimation />
						: null
					}
					<div className={cx(styles.card, styles.front)}>
						<div className={styles.closeWrap} onClick={browserHistory.goBack}>
							<Icon icon="x" color="black" hoverColor="blue" size={16} />
						</div>
						<div className={styles.editWrap} onClick={this.toggleEditing}>
							<Icon icon="edit" color="black" hoverColor="blue" size={24} />
						</div>
						{userData ?
							<div
							className={cx(styles.avatarWrap,
								this.state.editAvatar ? styles.isEditing : ''
								)}
							id="avatarWrap"
							>
								{userData.currentFace ?
									<ProfileAvatar
										face={userData && userData.currentFace}
										hair={userData && userData.currentHair}
										feature={userData && userData.currentFeature}
									/>
								:
								<Avatar
									size="xlarge"
									type="user"
									imageUrl={(userData && userData.img) || null}
									title={userData.preferredName || userData.fullName || null}
									defaultIconColor="grey"
								/>
								}
							</div>
							: null
						}
						{userData ?
							<div className={styles.detailEdit}>
								<h1 className={styles.title}>
									{userData.preferredName || userData.fullName}
								</h1>
									<Section>
										<Row>
											<Column occupy={6}>
												<ContentItem title="Full Name" type="text">
													<span>{userData && userData.fullName}</span>
												</ContentItem>
												<ContentItem title="Nickname/Preferred Name" type="text">
													<span>{userData && userData.preferredName}</span>
												</ContentItem>
												<ContentItem title="Avatar Image" type="text">
													<Avatar type="user" imageUrl={userData.img} size="medium" />
												</ContentItem>
											</Column>
										</Row>
								</Section>
							</div>
						: null
						}
						<div
							className={styles.sideb}
							>
							<Row>
								<Column occupy={4}>
									<ContentItem title="Id" type="text">
										<span>{this.props.params.dataId}</span>
									</ContentItem>
								</Column>
								<Column occupy={4}>
									<ContentItem title="Nomos XP" type="text">
										<span>{userData && userData.xp}</span>
									</ContentItem>
								</Column>
								<Column occupy={4}>
									<ContentItem title="Role" type="text">
										<span>{userData && userData.role}</span>
									</ContentItem>
								</Column>
							</Row>
							<Row>
								{achievements && userData && userData.badges ?
									() => this.doBadges(userData.badges)
									: null
								}
							</Row>
						</div>
					</div>
					<div className={cx(styles.card, styles.back)}>
						<Section
							title="Settings"
							description={'Amin user only'}
							>
							<Row>
								<Column occupy={6}>
									<ContentItem title="Nomos XP" type="text">
										<InputText
											placeholder=""
											placeholderBelow
											value={userData && userData.xp}
											onChangeProps={(value) => this.setState({
												userData: {
													...userData, xp: value }
												}
											)}
										/>
									</ContentItem>
								</Column>
								<Column occupy={6}>
									<ContentItem title="Role" type="text">
										<InputText
											placeholder=""
											placeholderBelow
											value={userData && userData.role}
											onChangeProps={(value) => this.setState({
												userData: {
													...userData, role: value }
												}
											)}
										/>
									</ContentItem>
								</Column>
							</Row>
							<Button
								onClickProps={this.toggleEditing}
								content="done"
								classNameProps={['highlighted']}
							/>
						</Section>
						<Section
							title="Achievements"
							hasBackground
						>
						{isEditing ?
							<Achievements selected={[1, 2]} />
							: null
						}
						</Section>
					</div>
			</div>
    );
  }
  setupPage = (userId) => {
		console.log('fyi, the thisUser is: ', userId);
		base.syncState(`users/${userId}`, {
			context: this,
			state: 'userData',
			asArray: false
		}, () => this.setState({loading: false}));
		base.syncState('achievements', {
			context: this,
			state: 'achievements',
			asArray: false
		});
	/*
		base.fetch(`users/${userId}`, {
			context: this,
			asArray: false
			}).then(data => {
				this.setState({
					userId,
					userData: data,
					loading: false
				});
			}).catch(error => {
				console.log('Loading error is', error);
				this.setState({
					loading: false
				});
		});
	*/
	this.setState({
		loading: false
	});
	}

	doBadges = (badges) => {
		let achievements = this.state;
		badges.map((item, index) => {
			let hasAchieved = _.find(achievements, { 'dataId': parseFloat(item.dataId)}); //eslint-disable-line
			if (hasAchieved) {
				return (
							<div
								className={cx(styles.badge)}
								data-tip={`${item.description} (${item.reason})`}
								data-class={styles.tooltip}
								data-for={`AchievementTooltip${1}`}
								key={index}>
								<div className={styles.iconWrap}>
									<Icon icon="medal" size={64} />
								</div>
								<h4 style={{textAlign: 'center'}}>{item.name}</h4>
								<div style={{textAlign: 'center'}} className={styles.subtitle}>
									{item.subtitle}
								</div>
								<ReactTooltip id={`AchievementTooltip${1} `} type="light" />
							</div>
				);
			} else {
				return null;
			}
		});
	}

	toggleEditing = () => {
		console.log('will edit');
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	// UTILIITY FUNTIONS
	doTransition = (page) => {
		console.log(page);
		this.toggleTransition();
		setTimeout(() => {
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
	makeId() {
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	// PROPS
	static propTypes = {
		classNameProps: PropTypes.array,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(React.PropTypes.node),
			PropTypes.node
		])
	};
}