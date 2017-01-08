import React, { Component } from 'react';
import cx from 'classnames';
import { Button } from 'components';

const styles = require('./StatisticBars.scss');
// const globalStyles = require('../../containers/App/App.scss');


export default class StatisticBars extends Component {

static defaultProps = {
  title: 'null',
  units: null,
  showNames: false,
  showIcons: false,
  dev: false,
  hasBackground: false,
  classNameProps: ['normal'],
  source: [
	{
		_id: '579406a78a1fdc6b9b09923e',
		knownAs: '248 Cumberland St, Dunedin',
		amount: 2.34,
		units: 'm',
		showIcon: true,
		imageUrl: 'http://media.rightmove.co.uk/154k/153359/59035664/153359_40054_IMG_00_0000_max_135x100.jpg',
		icon: 'land',
		type: 'property',
		subType: 'land',
		subSubType: 'parcel',
		email: 'mcdaniel.callahan@architax.me',
		address: '882 Bristol Street, Moraida, Idaho, 7328',
		latitude: '-59.723301',
		longitude: '25.809023'
	},
	{
		_id: '2',
		knownAs: 'Unit 3, 234 Anderson road, South Dunedin, Dunedin, Otago, 2014',
		amount: 2.02,
		units: 'm',
		showIcon: true,
		imageUrl: 'http://www.windstarproperties.net/images/Highlands-Golfsmith-100x100.jpg',
		icon: 'land',
		type: 'property',
		subType: 'land',
		subSubType: 'parcel',
		email: 'mcdaniel.callahan@architax.me',
		address: '882 Bristol Street, Moraida, Idaho, 7328',
		latitude: '-59.723301',
		longitude: '25.809023'
	},
	{
		_id: '3',
		knownAs: 'Bromley House',
		amount: 1.89,
		units: 'm',
		showIcon: true,
		imageUrl: 'http://rigmonkeyapp.com/wp-content/uploads/2011/08/Untitled7-100x100.png',
		icon: 'land',
		type: 'property',
		subType: 'land',
		subSubType: 'parcel',
		email: 'mcdaniel.callahan@architax.me',
		address: '882 Bristol Street, Moraida, Idaho, 7328',
		latitude: '-59.723301',
		longitude: '25.809023'
	},
	{
		_id: '4',
		knownAs: 'Lot 234, Lawrence, Otago - James\'s place',
		amount: 0.76,
		units: 'm',
		showIcon: true,
		imageUrl: 'http://www.cdcrealestate.com/wp-content/uploads/2016/07/IMG_1941-100x100.jpg',
		icon: 'land',
		type: 'property',
		subType: 'land',
		subSubType: 'parcel',
		email: 'mcdaniel.callahan@architax.me',
		address: '882 Bristol Street, Moraida, Idaho, 7328',
		latitude: '-59.723301',
		longitude: '25.809023'
	}
	]
};

	handleWidth = (maxAmount, amount) => {
    const availableWidth = 0.9;
    const thisWidth = ((amount / maxAmount) * 100);
    // console.log(thisWidth);
    const actualWidth = (thisWidth * availableWidth) + '%';
    return {width: actualWidth};
  }

	handleTitleWidth = (maxAmount, amount) => {
    const thisWidth = ((amount / maxAmount) * 100);
    const availableWidth = 0.9;
    const actualWidth = (thisWidth * availableWidth) + '%';
    if (thisWidth <= 50) {
			// console.log('is less athan 50');
			return {width: actualWidth};
		} else {
			// console.log('is more then 50');
			return {width: actualWidth};
		}
  }
	nFormatter = (num) => {
		if (num >= 1000000) {
		return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		}
		if (num >= 1000) {
		return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		}
		return num;
	}

	render() {
		const {
			classNameProps = [],
			source,
			title,
			showIcons,
			isCurrency,
			hasBackground,
			// description
		} = this.props;

		let classes = classNameProps
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		const maxAmount = source[0].amount;
		return (
			<div
				className={cx(
					styles.StatisticBars,
					classes,
					(hasBackground ? styles.hasBackground : '')
				)}>
			<div className={styles.divider} />
			<h4 className={styles.subtitle}>{title}</h4>
			<div className={styles.list}>
			{
			source.map((bar) => {
				const {_id, knownAs, amount, units, showIcon, imageUrl} = bar;
				// unused variables: icon, type, subType, subSubType, email, address, latitude, longitude
				return (
				<div
					key={_id}
					className={cx(
						styles.barItem,
						styles.typeProperty,
						(showIcon ? styles.showIcon : '')
					)}
					>
						<div className={styles.bar} style={this.handleWidth(maxAmount, amount)}>
							{showIcons ?
								<div className={styles.iconWrap + ' ' + styles.type}>
									{imageUrl ?
										<img src={imageUrl} className={styles.iconImage} role="presentation" />
										: null }
								</div>
							: null }
						</div>
						{isCurrency ?
							<span className={styles.value}>{units}{this.nFormatter(amount)}</span>
							:
							<span className={styles.value}>{amount}{units}</span>
						}
						<span
							className={styles.name}
							style={this.handleTitleWidth(maxAmount, amount)}
						>
							{knownAs}
						</span>
					</div>
				);
			})
		}
		</div>
	<Button content="More Info" classNameProps={['text']} />
	</div>
	);
}

	static propTypes = {
		source: React.PropTypes.array,
		title: React.PropTypes.string,
		description: React.PropTypes.string,
		showNames: React.PropTypes.bool,
		showIcons: React.PropTypes.bool,
		isCurrency: React.PropTypes.bool,
		hasBackground: React.PropTypes.bool,
		dev: React.PropTypes.bool,
		classNameProps: React.PropTypes.array
	}
}