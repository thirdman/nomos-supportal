import React, { Component, PropTypes } from 'react';
import classSet from 'react-classset';
import CountTo from 'react-count-to';
import cx from 'classnames';
import _ from 'lodash';

const styles = require('./Statistic.scss');
// const globalStyles = require('../../pages/App/App.scss');

export default class Statistic extends Component {

	shouldComponentUpdate(nextProps) {
		if (_.isEqual(this.props, nextProps)) {
			return false;
		}
		return true;
	}

	render() {
		const {
			classNameProps = [],
			units,
			title,
			isAnimated = false,
			hasDivider = false,
			isHorizontal = false,
			countTime = 700
		} = this.props;
		let { content } = this.props;
		let classes;
		let toggleClasses;

		toggleClasses = classSet({
			[styles.hasDivider]: hasDivider,
			[styles.isHorizontal]: isHorizontal
		});

		classes = classNameProps
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		let contentNumber;
		let digitCount = 0;
		let trimContent;

		if (this.isNumber(parseFloat(content))) {
			contentNumber = parseFloat(content);
			digitCount = this.countDecimals(contentNumber);
		} else if (this.isNumber(content.substring(1).replace(/[, ]+/g, ''))) {
			trimContent = content.substring(0, 1);
			contentNumber = content.substring(1).replace(/[, ]+/g, '');
			contentNumber = parseFloat(contentNumber.replace(/[, ]+/g, '').trim());
			digitCount = this.countDecimals(parseFloat(contentNumber));
		} else if (parseFloat(content.replace(/[, ]+/g, '').trim())) {
			contentNumber = content.replace(/[, ]+/g, '').trim();
			contentNumber = contentNumber.replace(/[, ]+/g, '').trim();
			digitCount = this.countDecimals(contentNumber);
		} else {
			contentNumber = null;
		}

		return (
			<div
				className={cx(
					styles.Statistic,
					classes,
					toggleClasses
				)} >
				<div className={styles.divider} />
				<h4 className={styles.subtitle}>{title}</h4>
				<div className={styles.theContent}>
					{isAnimated && trimContent ?
						trimContent
						: null
					}
					{isAnimated && contentNumber && countTime ?
						<CountTo to={contentNumber} speed={1000} digits={digitCount} />
						: null
					}
					{!isAnimated ? content : null }
				</div>
				<div className={styles.theUnits}>
					{units}
				</div>
			</div>
		);
	}

	countDecimals(value) {
		if (Math.floor(value) !== value) {
			return value.toString().split('.')[1].length || 0;
			} else {
		return 0;
		}
	}

	isNumber(number) {
		return !isNaN(parseFloat(number)) && isFinite(number);
	}

	static propTypes = {
		title: PropTypes.string,
		units: PropTypes.string,
		isAnimated: PropTypes.bool,
		hasDivider: PropTypes.bool,
		isHorizontal: PropTypes.bool,
		countTime: PropTypes.number,
		classNameProps: PropTypes.array
	}
}