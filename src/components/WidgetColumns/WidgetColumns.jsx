import React, { Component, PropTypes } from 'react';
import classSet from 'react-classset';
import _ from 'lodash';
// import CountTo from 'react-count-to';
import cx from 'classnames';
import ReactTooltip from 'react-tooltip';
// import _ from 'lodash';
import widgetData from './data/widgetData.jsx';

const styles = require('./WidgetColumns.scss');

export default class WidgetColumns extends Component {
	state = {
			tooltip: this.makeId(),
			loading: true
	}
	componentDidMount() {
		setTimeout(() => {
			this.toggleLoading();
		}, 300);
	}
	makeId() {
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	render() {
		const {
			classNameProps = [],
			units = '',
			title,
			// data, // done in the subfunction
			isAnimated = false,
			hasDivider = false,
			hasBackground = false,
			isHorizontal = false,
			// countTime = 700,
		} = this.props;
		const { tooltip } = this.state;
		// let { content } = this.props;
		let classes;
		let toggleClasses;
		// console.log(widgetData);
		// console.log(countTime);

		toggleClasses = classSet({
			[styles.hasDivider]: hasDivider,
			[styles.isAnimated]: isAnimated,
			[styles.isHorizontal]: isHorizontal,
			[styles.hasBackground]: hasBackground
		});

		classes = classNameProps
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		return (
			<div
				className={cx(
					styles.WidgetColumns,
					classes,
					toggleClasses
				)} >
				<div className={styles.divider} />
					<h4 className={styles.subtitle}>{title}</h4>
					<div className={styles.theContent}>
						<div className={cx(styles.chartWrap)}>
							{this.doData()}
							</div>
						</div>
					<div className={styles.theUnits}>
						{units}
					</div>
				<ReactTooltip id={`chartTip${tooltip}`} type="light" />
			</div>
		);
	}

	doData = () => {
		const { tooltip, loading } = this.state;
		const { data, trimLabels, isFlex } = this.props;
		console.log('data for widget is', data);
		let theData = data.values || widgetData.widgetData.values;
		let dataLength = theData.length;
		let itemWidth = (100 / dataLength);
		let sortedArray = _.sortBy(theData, (item) => {
			return (-item.amount);
		});
		let highestValue = sortedArray[0].amount;
		let dataArray = theData.map((item, index) => {
			let value = item.amount;
			let theUnits = this.props.units || '';
			let descriptionValue = `${item.label}: ${theUnits}${item.amount}`;
			// console.log(descriptionValue);
			let percent = (value / highestValue) * 100;
			let showValue = false;
			showValue = index === 0 || index === (dataLength - 1);
			// let leftValue = itemWidth * index;
			let tempItemCss = {
				// position: 'relative',
				// left: `${leftValue}%`,
				// marginRight: -itemWidth
				borderRadius: '4px',
				borderLeft: '1px solid transparent',
				width: (isFlex ? `${itemWidth}%` : '')
			};
			let tempCss = {
				height: `${percent}%`,
			};

			return (
				<div
					key={index}
					className={styles.item}
					style={tempItemCss}
					data-tip={descriptionValue}
					data-class={styles.tooltip}
					data-for={`chartTip${tooltip}`}
					onClick={() => (this.itemClick(value))}
					>
					<span
						className={
							cx(styles.bar,
								!loading ? styles.isVisible : ''
							)}
						style={tempCss}
					/>
					{showValue ?
						<span
							className={(styles.label)}
							>
							{trimLabels ?
								(item.label).substring(0, 3)
								: item.label
							}
						</span>
						: null
					}
				</div>
			);
		});
		return (dataArray);
	}
	itemClick = (value) => {
		console.info('the item clicked was worth: ', value);
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	};

	static propTypes = {
		title: PropTypes.string,
		// dataSource: PropTypes.object,
		data: PropTypes.object,
		units: PropTypes.string,
		count: PropTypes.number,
		trimLabels: PropTypes.bool,
		isAnimated: PropTypes.bool,
		isFlex: PropTypes.bool,
		hasDivider: PropTypes.bool,
		hasBackground: PropTypes.bool,
		countTime: PropTypes.number,
		classNameProps: PropTypes.array
	}
}