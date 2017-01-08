import React, { Component, PropTypes } from 'react';
// import _ from 'lodash';
import cx from 'classnames';
import { browserHistory	} from 'react-router';
import {
	Avatar,
	Column,
	ContentItem,
	// Icon,
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
		additionalData: null
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
			} = this.state;
		return (
			<div className={cx(styles.Profile)}>
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
										<Column occupy={6} />
									</Row>
									</Section>
						</div>
					: null
					}
					<div
						className={styles.sideb}
						>
						<ContentItem title="Id" type="text">
							<span>{this.props.params.dataId}</span>
						</ContentItem>
						<ContentItem title="Nomos XP" type="text">
							<span>{userData && userData.xp}</span>
						</ContentItem>
						<ContentItem title="Role" type="text">
							<span>{userData && userData.role}</span>
						</ContentItem>
					</div>
			</div>
    );
  }
  setupPage = (userId) => {
		console.log('fyi, the thisUser is: ', userId);
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
	}

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
		classNameProps: PropTypes.array,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(React.PropTypes.node),
			PropTypes.node
		])
	};
}