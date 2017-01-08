import React, { Component, PropTypes } from 'react';
// import _ from 'lodash';
import cx from 'classnames';
import { browserHistory	} from 'react-router';
import domtoimage from 'dom-to-image';
import {
	Avatar,
	Button,
	Column,
	ContentItem,
	// Icon,
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

const styles = require('./ProfileEdit.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class ProfileEdit extends Component {
	state = {
		loading: true,
		transition: false,
		userId: this.props.userId,
		additionalData: null,
		editAvatar: false
	}
	componentWillMount() {
	}
	componentDidMount() {
		if (this.props.params.dataId) {
			console.log('coming from a url, so set the id this way');
			this.setupPage(this.props.params.dataId);
		} else {
			console.log('Coming inline, so check the prop data Id');
			this.setupPage();
		}
		// this.syncData();
	}

	render() {
		// const { onExitProps} = this.props;
		const {
			loading,
			userData,
			} = this.state;
		// const userId = this.props.params.dataId;
		// const userId = this.state.userId;
		return (
			<div className={cx(styles.ProfileEdit)}>
					{loading ?
							<LoadingAnimation />
						: null
					}
					{userData ?
						<div
						className={cx(styles.avatarWrap,
							this.state.editAvatar ? styles.isEditing : ''
							)}
						id="avatarWrap"
						>
							<ProfileAvatar
								face={userData && userData.currentFace}
								hair={userData && userData.currentHair}
								feature={userData && userData.currentFeature}
							/>
							{!this.state.editAvatar ?
								<span className={styles.avatarEditButtonWrap}>
									<Button
										onClickProps={this.toggleAvatarEdit}
										classNameProps={['text']}
										content="Edit" />
								</span>
							: null
							}
						</div>
						: null
					}
					{this.state.editAvatar ?
						<div className={styles.editAvatarWrap}>
							<Section hasBackground title={'Edit Avatar'}>
								<Button
									onClickProps={this.toggleFace}
									classNameProps={['full']}
									content="Toggle face" />
								<Button
									onClickProps={this.toggleHair}
									classNameProps={['full']}
									content="Toggle Hair" />
								<Button
									onClickProps={this.toggleFeature}
									classNameProps={['full']}
									content="Toggle Features" />
								<Button
									onClickProps={this.toggleAvatarEdit}
									classNameProps={['highlighted']}
									content="Save" />
								<Button
									onClickProps={this.saveToImage}
									classNameProps={['green']}
									content="Save as my Icon" />
							</Section>
						</div>
						: null
					}
					{!this.state.editAvatar && userData ?
						<div className={styles.detailEdit}>
							<Section
								title={`Profile: ${userData.fullName}`}
								/>
									<Section>
									<Row>
										<Column occupy={8}>
											<ContentItem title="Nickname/Preferred Name" type="text">
												<InputText
													placeholder="Eg, Coolio"
													placeholderBelow
													value={userData && userData.preferredName} // eslint-disable-line
													onChangeProps={(value) => this.setState({
														userData: {
															...userData, preferredName: value }
														}
													)}
												/>
											</ContentItem>
											<ContentItem title="Full Name" type="text">
												<InputText
													placeholder="Eg. David Bromley"
													placeholderBelow
													value={userData && userData.fullName} // eslint-disable-line
													onChangeProps={(value) => this.setState({
														userData: {
															...userData, fullName: value }
														}
													)}
												/>
											</ContentItem>
											<ContentItem title="Avatar Image" type="text">
												<Avatar type="user" imageUrl={userData.img} size="medium" />
												<InputText
													placeholder="http://..."
													placeholderBelow
													value={userData && userData.img} // eslint-disable-line
													onChangeProps={(value) => this.setState({
														userData: {
															...userData, img: value }
														}
													)}
												/>
											</ContentItem>
										</Column>
										<Column occupy={4}>
											<Section hasBackground>
												<Row>
													<Column>
														<h4 className={styles.subtitle}>Temporary information section</h4>
														<span>content might be here</span>
													</Column>
												</Row>
											</Section>
										</Column>
										</Row>
									</Section>
								<Section>
									<Button
										content="Submit"
										classNameProps={['highlighted']}
										// onClickProps={() => this.saveDetail(orgId)}
										// onClickProps={onExitProps}
										onClickProps={this.doExit}
										/>
								</Section>
								<Section
									title="Admin Settings"
									description={'Amin user only'}
									hasBackground
									hasMargin
									>
									<ContentItem title="Nomos XP" type="text">
										<InputText
											placeholder=""
											placeholderBelow
											value={userData && userData.xp} // eslint-disable-line
											onChangeProps={(value) => this.setState({
												userData: {
													...userData, xp: value }
												}
											)}
										/>
									</ContentItem>
									<ContentItem title="Role" type="text">
										<InputText
											placeholder=""
											placeholderBelow
											value={userData && userData.role} // eslint-disable-line
											onChangeProps={(value) => this.setState({
												userData: {
													...userData, role: value }
												}
											)}
										/>
									</ContentItem>
									<Row>
										<Column occupy={4}>
											<ContentItem title="Current Face" type="text">
												<InputText
													value={userData && userData.currentFace} // eslint-disable-line
													onChangeProps={(value) => this.setState({
														userData: {
															...userData, currentFace: parseFloat(value) }
														}
													)}
												/>
											</ContentItem>
										</Column>
										<Column occupy={4}>
											<ContentItem title="Current Hair" type="text">
												<InputText
													value={userData && userData.currentHair} // eslint-disable-line
													onChangeProps={(value) => this.setState({
														userData: {
															...userData, currentHair: parseFloat(value) }
														}
													)}
												/>
											</ContentItem>
										</Column>
										<Column occupy={4}>
											<ContentItem title="Current Feature" type="text">
												<InputText
													value={userData && userData.currentFeature} // eslint-disable-line
													onChangeProps={(value) => this.setState({
														userData: {
															...userData, currentFeature: parseFloat(value) }
														}
													)}
												/>
											</ContentItem>
										</Column>
									</Row>
								</Section>
						</div>
					: null
					}
			</div>
    );
  }
  setupPage = (paramOrgId) => {
		console.log('fyi, the thisUser is: ', paramOrgId);
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		let thisUser;
		let userId;
		base.fetch('users', {
			context: this,
			asArray: false
			}).then(data => {
				console.log('users are', data);
				console.log('theusername is', user.username);
				thisUser = _.find(data, { username: user.username}); //eslint-disable-line
				console.log('thisUser', thisUser);
				userId = thisUser.dataId;
				console.log('so, the userdata is', thisUser);
				console.log('setting up user Id', userId);
				console.log('the user username is:', user);
				this.setState({
					userId,
					user,
					userData: thisUser,
					loading: false
				}, () => this.syncUser());
			}).catch(error => {
				console.log('Loading error is', error);
				this.setState({
					loading: false
				});
		});
		let facesArray = [
			'face1',
			'face2',
			'face3',
			'face4',
			'face5',
			'face6',
			'face8',
			'face9',
			'face10',
			'face11',
			'face12',
			'face13',
			'face14',
			'face15',
			'face16',
			'face17',
			'face18',
			'face19',
			'face20',
		];
		let hairArray = [
			'hair1',
			'hair2',
			'hair3',
			'hair4',
			'hair5',
			'hair6',
			'hair7',
			'hair8',
			'hair10',
			'hair11',
			'hair12',
			'hair13',
			'hair14',
			'hair15',
			'hair16',
			'hair17',
			'hair18',
			'hair19',
			'hair20',
		];
		let featuresArray = [
			'feature1',
			'feature2',
			'feature3',
			'feature4',
			'feature5',
			'feature9',
			'feature10',
			'feature11',
			'feature12',
			'feature15',
		];
		this.setState({
			facesArray,
			featuresArray,
			hairArray
		});
	}
  // , () => this.syncUser()

	syncUser = () => {
		const { userId } = this.state;
		base.syncState(`users/${userId}`, {
			context: this,
			state: 'userData',
			asArray: false
		});
	}

	doExit = () => {
		browserHistory.push('/admin');
	}
	toggleFace = () => {
		const { facesArray, userData } = this.state;
		// currentFace,
		let newActiveIndex;
		let activeIndex = parseFloat(userData.currentFace) || 0;
		if (activeIndex === facesArray.length) {
			newActiveIndex = 0;
		} else {
			newActiveIndex = activeIndex + 1;
		}
		this.setState({
			userData: {
				...userData, currentFace: newActiveIndex }
		});
	};
	toggleHair = () => {
		const { hairArray, userData } = this.state;
		// currentHair,
		let newActiveIndex;
		let activeIndex = parseFloat(userData.currentHair) || 0;
		if (activeIndex === hairArray.length) {
			newActiveIndex = 0;
		} else {
			newActiveIndex = activeIndex + 1;
		}
		this.setState({
			userData: {
				...userData, currentHair: newActiveIndex }
		});
	};
	toggleFeature = () => {
		const { featuresArray, userData } = this.state;
		// currentFeature,
		let newActiveIndex;
		let activeIndex = parseFloat(userData.currentFeature) || 0;
		if (activeIndex === featuresArray.length) {
			newActiveIndex = 0;
		} else {
			newActiveIndex = activeIndex + 1;
		}
		this.setState({
			userData: {
				...userData, currentFeature: newActiveIndex }
		});
	};
	toggleAvatarEdit = () => {
		this.setState({
			editAvatar: !this.state.editAvatar
		});
	};
	saveToImage = () => {
		console.log('this will save it');
		// let node = document.getElementById('testbit');
		let node2 = document.getElementById('avatarItem');
		// let options1 = {quality: 0.25};
		let theStyle = {
			background: 'transparent',
			width: '400px',
			height: '400px'
			// border: '4px solid orange'
		};
		let options2 = {
			style: theStyle,
			width: 200,
			height: 200
			};
/*
		domtoimage.toJpeg(node, options1)
			.then((dataUrl) => {
				let img = new Image();
				img.src = dataUrl;
				document.body.appendChild(img);
				console.log(img);
			});
*/
		domtoimage.toPng(node2, options2)
			.then((dataUrl) => {
				let img = new Image();
				img.src = dataUrl;
				document.body.appendChild(img);
				console.log(img);
			})
			.catch((error) => {
			console.error('oops, something went wrong!', error);
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

	// PROPS
	static propTypes = {
		orgId: PropTypes.number,
		orgDatad: PropTypes.object,
		onExitProps: React.PropTypes.func,
		classNameProps: React.PropTypes.array,
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node
		])
	};
}