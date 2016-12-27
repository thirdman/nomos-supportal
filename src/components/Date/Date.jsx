import React, {Component} from 'react';
import cx from 'classnames';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';

// import {
	// Column,
	// Row,
// } from 'components';

const styles = require('./Date.scss');

export default class Date extends Component {

	state = {
		tooltip: this.makeId()
	}

	render() {
		const { tooltip } = this.state;
		const {
			classNameProps = [],
			type = 'absolute',
			date,
		} = this.props;

		let classes;
		classes = classNameProps.slice();
		classes = classes.concat(type);

		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		return (
			<span
				className={cx(styles.Date, classes)}
				data-for={`Tooltip${tooltip}`}
				data-tip={'ggg fake placeholder'}
				data-class={styles.tooltip}
				>
				{type === 'absolute' ?
					moment(date).format('DD MMM, YYYY')
					:
					moment(date).fromNow()
				}
				<ReactTooltip id={`Tooltip${tooltip}`} type="light">
				{type === 'absolute' ?
					moment(date).fromNow()
					:
					moment(date).format('DD MMM, YYYY')
				}
				</ReactTooltip>

			</span>
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
		date: React.PropTypes.number,
		type: React.PropTypes.string,
		classNameProps: React.PropTypes.array
	}
}
