import React, {Component} from 'react';
import cx from 'classnames';
import moment from 'moment';
import {
	// Column,
	// Row,
	Avatar
} from 'components';

const styles = require('./MediaItem.scss');

export default class MediaItem extends Component {

	// state = {
		// tooltip: this.makeId()
	// }

	render() {
		// const { tooltip } = this.state;
		const {
			classNameProps = [],
			content,
			username,
			type = 'user',
			userId,
			timestamp,
			imageUrl
		} = this.props;

		let classes;
		classes = classNameProps.slice();
		// classes = classes.concat(type, size, defaultIconColor);

		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		return (
			<div className={cx(styles.MediaItem, classes)} key={userId}>
				<div className={styles.figure}>
					<Avatar
						type={type}
						size={'small'}
						title={username}
						imageUrl={imageUrl || null}
					/>
				</div>
				<div className={styles.mediaContent}>
					{content}
					{timestamp ?
						<h4 className={styles.subtitle}>{moment(timestamp).fromNow()}</h4>
						: null
					}
				</div>
			</div>
		);
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
		content: React.PropTypes.string,
		timestamp: React.PropTypes.string,
		type: React.PropTypes.string,
		username: React.PropTypes.string,
		imageUrl: React.PropTypes.string,
		title: React.PropTypes.string,
		defaultIconColor: React.PropTypes.string,
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
