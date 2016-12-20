import React, {Component} from 'react';
import cx from 'classnames';
import moment from 'moment';
import {
	Column,
	Row,
	Avatar
} from 'components';

const styles = require('./ChatMessage.scss');

export default class ChatMessage extends Component {

	// state = {
		// tooltip: this.makeId()
	// }

	render() {
		// const { tooltip } = this.state;
		const {
			classNameProps = [],
			name,
			date,
			message,
			userId,
			// imgUrl
		} = this.props;

		let classes;
		classes = classNameProps.slice();
		// classes = classes.concat(type, size, defaultIconColor);

		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		return (
			<div className={cx(styles.ChatMessage, classes)}>
				<Row>
					<Column occupy={12}>
						<div className={styles.message}>
							<div className={styles.triangle} />
							{message}
						</div>
						<div className={styles.messageMeta}>
							<div className={styles.user} key={userId}>
								<Avatar
									type="user"
									size={'small'}
									title={name}
								/>
								<span className={styles.username}>{name}</span>
							</div>
							<div className={styles.date}>
							<h4 className={styles.subtitle}>
								{moment(date).fromNow()}
							</h4>
							</div>
						</div>
					</Column>
				</Row>
			</div>
		);
	}

	getImgSrc() {
		const {
			base64,
			imageUrl
		} = this.props;
		if (base64) {
			return `data:image/png;base64,${base64}`;
		} else {
			return imageUrl;
		}
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
		type: React.PropTypes.string,
		size: React.PropTypes.string,
		imageUrl: React.PropTypes.string,
		title: React.PropTypes.string,
		defaultIconColor: React.PropTypes.string,
		sourceFolder: React.PropTypes.string,
		classNameProps: React.PropTypes.array
	}
}
