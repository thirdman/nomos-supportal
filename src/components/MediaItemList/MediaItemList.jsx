import React, {Component} from 'react';
import cx from 'classnames';
import { browserHistory } from 'react-router';
import {
	// Column,
	MediaItem,
} from 'components';

const styles = require('./MediaItemList.scss');

export default class MediaItemList extends Component {

	state = {
		isLoading: true
	}
	componentDidMount() {
		this.setupPage();
	}
	render() {
		const {
			isLoading
		} = this.state;
		const {
			classNameProps = [],
			data,
			type = 'user',
			title,
		} = this.props;

		console.log('data is: ', data);
		let classes;
		classes = classNameProps.slice();
		classes = classes.concat(type);

		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		return (
			<div className={cx(styles.MediaItemList, classes)}>
				{title ?
					<h3>{title}</h3>
					: null
					}
				{
					data && data.map((item, index) => {
						return (
							<div
								className={cx(styles.mediaItemWrapper,
									(!isLoading ? styles.isVisible : '')
								)}
								key={index}>
								<MediaItem
									type={type}
									content={item.fullName}
									username={item.fullName}
									imageUrl={item.img}
									onClickProps={() => this.goTo(item.dataId)}
									/>
							</div>
						);
					})
				}
			</div>
		);
	}
	setupPage = () => {
		// THIS TURNS LOADING OFF AFTER 300 ms
		setTimeout(() => {
			this.setState({isLoading: false});
			}, 300);
	}
	goTo = (userId) => {
		browserHistory.push(`/profile/${userId}`);
	}

	makeId() {
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	static propTypes = {
		data: React.PropTypes.array,
		title: React.PropTypes.string,
		type: React.PropTypes.string,
		classNameProps: React.PropTypes.array,
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node
		])
	}
}

/*

	const activityItems = activityData.map((item, index) => (
    <div
      key={`activity-${index}`}
      className={styles.activityItem + ' ' +
      ( item.actionBy === 'system' ? styles.systemEvent : '' )
      + ' ' + ( item.uid === activeActivity ? styles.isActive : '')}
      // style={{left: item.percent + '%'}}
      // onClickProps={onClick(stage)}
      >
      <span className={styles.activityMarker}>
        <div className={styles.avatar}>{ item.actionBy === 'system' ?
        <Icon icon="variation" color="grey"/> :
        <IconImage imageUrl="https://randomuser.me/api/portraits/med/women/25.jpg"
        iconSize="medium" title={item.actionBy}/> }</div>
        <div className={styles.activity_type}><Icon
        icon="edit" color="green" borderColor="#fff"/></div>
			</span>
			<div className={styles.activityContent}>
        <h5>
        	<a href="#" className={styles.link + ' ' + styles.user_link}>
        	{item.actionBy}</a> {item.actionLong} <a href="#">Object Title</a>
				</h5>
				<time>{moment(parseFloat(item.createdDate)).fromNow()}</time>
			</div>
		</div>
    // {item.action}
  ));
*/
