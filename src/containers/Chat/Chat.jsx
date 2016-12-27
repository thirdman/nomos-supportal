import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { browserHistory } from 'react-router';
// import test from 'slack/methods/api.test';
import slack from 'slack';
import {
	// Avatar,
	Button,
	Column,
	ChatMessage,
	// ContentItem,
	// Icon,
	// InputText,
	InputTextarea,
	// ObjectInfo,
	// HorizontalRule,
	Row,
	// Section,
	LoadingAnimation,
	TransitionAnimation
	} from 'components';

const styles = require('./Chat.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class Chat extends Component {
	state = {
		loading: true,
		messagesLoading: true,
		transition: false,
		detailActiveId: false,
		messages: null
	}
	componentWillMount() {
		console.log('WillMount Chat');
		// this.setupPage();
	}
	componentDidMount() {
		// this.getAdditionalData();
		// this.getAdditionalUsers();
		this.setupChat(this.props.orgId);
	}
	render() {
		const { orgId = 1 } = this.props;
		const { messages, messagesLoading } = this.state;
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log(orgId, user);
		return (
			<div className={styles.Chat}>
				<div className={styles.Row}>
					{this.state.transition ?
						<TransitionAnimation
							isActive={this.state.transition}
							isVisible={this.state.transition}
							reRender={this.state.loading}
						/>
						: null
					}
				</div>
			<Row>
				{this.state.loading ?
						<LoadingAnimation />
					:
					<span className={styles.messagesContainer}>
						{this.getChat()}
						<div className={styles.messagesWrap}>
							{this.chatInput()}
							{
								!messages && messagesLoading ?
									<div className={styles.messagesLoadingWrap}>
										<span>Loading Messages</span>
										<LoadingAnimation />
									</div>
									: null
							}
							{messages ?
								<span className={styles.messagesListWrap}>
									{
										messages
										.sort(this.dynamicSort('-timestamp'))
										.map((item, index) => {
											return (
													<ChatMessage
														key={index}
														name={item.user}
														date={item.timestamp}
														message={item.message}
														userId={item.userId}
														// imgUrl={itme.url}
													/>
											);
										})
									}
								</span>
								: null
							}
						</div>
					</span>
				}
				</Row>
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
  getChat = () => {
		// const { orgId } = this.props;
		let orgId = 1;
		console.log(orgId);
  }
	setupChat = (orgId) => {
		this.setState({loading: false });
		base.syncState(`messages/${orgId}`, {
			context: this,
			state: 'messages',
			asArray: true
		});
	}
	chatInput = () => {
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		return (
			<div className={styles.inputZone}>
			<Row>
				<Column>
				<p>logged in as: {user.username}</p>
				<InputTextarea
					rows={3}
					value={this.newMessageText && this.newMessageText.state.textValue}
					ref={(c) => { this.newMessageText = c; }}
					onChangeProps={(value) => this.updateCurrentText(value)}
				/>

				<div className={styles.buttonWrap}>
					<Button content="Submit" onClickProps={this.addMessage} isHighlighted />
				</div>
				</Column>
			</Row>
			</div>
		);
	}
	addMessage = () => {
		let orgId = this.props.orgId;
		console.log(this.props);
		console.log(this.newMessageText);
		console.log(this.newMessageText.props.value);
		console.log(this.newMessageText.state.textValue);
		// let myDate = moment.unix(Number);
		let myDate = moment().valueOf();
		console.log('myDate is: ', myDate);
		const textValue = this.newMessageText && this.newMessageText.state.textValue;
		const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
		const user = supportalStorage.user;
		console.log(user);
		// let messageChannel = `/messages/${orgId}`;
		let immediatelyAvailableReference = base.push(`/messages/${orgId}`, {
			data: {
				uid: '1',
				user: user.username,
				message: textValue,
				timestamp: myDate
				}
		}).then(newLocation => {
			let generatedKey = newLocation.key;
			console.log('generatedKey: ', generatedKey);
			this.slackIt(textValue, user);
			this.newMessageText.value = null;
		}).catch(err => {
			console.log(err);
			// handle error
		});
		// available immediately, you don't have to wait for the Promise to resolve
		let generatedKey = immediatelyAvailableReference.key;
		console.log('initial generated key: ', generatedKey);
	}

	slackIt = (theText, user) => {
		// console.info('theText: ', theText);
		// console.info('user: ', user);
		let theToken = 'xoxp-2179780513-2179780515-119964565108-db83ff94a5af117dab3fc4ca80652c51';
		// let theChannel = '#devtest';
		// let theChannel = '@rachel';
		let theChannel = '#supportal';
		let theMessage = theText;
		let theUsername = `Supportal User: ${user.username}`;
		let theImage = 'http://animal-dream.com/data_images/turtle/turtle4.jpg';
		let theUrl = 'https://slack.com/api/chat.postMessage';
		let theEmoji = ':party:';
		// https://slack.com/api/chat.postMessage?token=xoxp-2179780513-2179780515-119964565108-db83ff94a5af117dab3fc4ca80652c51&channel=%23devtest&text=gareth%20is%20good&pretty=1
		console.log(theToken, theChannel, theMessage, theUsername, theUrl);
		// test({ hyper: 'card' }, console.log);
		slack.chat.postMessage({
			token: theToken,
			channel: theChannel,
			text: theMessage,
			username: theUsername,
			icon_url: theImage,
			icon_emoji: theEmoji
		}, (err, data) => (
			console.log(err, data)
		));
	}
/*
addItem(newItem){
  this.setState({
    items: this.state.items.concat([newItem]) //updates Firebase and the local state
  });
}
*/
	updateCurrentText = (value) => {
		console.log(value);
	}
	getAdditionalData = () => {
		this.setState({
			// additionalDataLoading: true,
		});
		base.fetch('orgs', {
		context: this,
		asArray: true
		}).then(data => {
			// console.log('retrieved data:', data);
			// console.log('this:', this);
			this.setState({
				additionalDataOrgs: data,
				additionalDataLoading: false,
				loading: false
			});
			// console.log('the app data org is', data);
		}).catch(error => {
			this.setState({
				additionalDataLoading: false,
				loading: false
			});
			console.log('App error is', error);
			// console.log('the app data org is', error);
		});
	}

	getAdditionalUsers = () => {
		base.bindToState('users', {
			context: this,
			state: 'additionalUsers',
			asArray: true
		});
	}

	showAdditionalInfo = (orgId) => {
		const additionalOrgs = this.state.additionalDataOrgs;
		let thisAdd = _.find(additionalOrgs, { dataId: parseFloat(orgId)}); //eslint-disable-line
		if (!thisAdd) {
			return null;
		} else {
			return (
				<span>
					<h4>Additional Id: {thisAdd.dataId}</h4>
					<span>Rep: {thisAdd.rep} </span>
					<span
						style={{
						backgroundColor: thisAdd.color || 'transparent',
						borderRadius: '2px',
						width: '10px',
						height: '10px'}} />
					<span>
					Color: {thisAdd.color}</span>
				</span>
			);
		}
	}
	// UTILIITY FUNTIONS
	dynamicSort = (property) => {
		let sortOrder = 1;
		if (property[0] === '-') {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a, b) {
			let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0; // eslint-disable-line
			return result * sortOrder;
		};
	}
	doTransition = (page) => {
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
	// PROPS
	static propTypes = {
		orgId: React.PropTypes.number,
		isLoading: React.PropTypes.bool
	};
}
