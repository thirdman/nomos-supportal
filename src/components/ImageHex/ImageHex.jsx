import React, { Component, PropTypes } from 'react';

const styles = require('./ImageHex.scss');

export default class ImageHex extends Component {
	state = {
		src: 'http://placekitten.com/240/240',
    }
	componentWillMount() {
	}
	componentDidMount() {
	}
	render() {
		const theImage = (this.props.src || 'http://placekitten.com/240/240');
		const randomNumber1 = this.randomIntFromInterval(-3.5, 3.5, 1);
		const randomNumber2 = this.randomIntFromInterval(-4, 4, 1);
		const randomNumber3 = this.randomIntFromInterval(0.7, 1.2, 2);
		const tempCss = {
			backgroundImage: `url(${theImage})`
		};
		const tempWrapCss = {
			transform: `translate3d(${randomNumber1}em, ${randomNumber2}em, 0)
			 scale3d(${randomNumber3}, ${randomNumber3}, 1)`
		};
		console.log(tempWrapCss);
		return (
			<div
			className={styles.hexWrap}
			style={tempWrapCss}
			>
			<div className={`${styles.ImageHex} ${styles.hexagon1}`}>
				<div className={styles.hexInner1}>
					<div className={styles.hexInner2} style={tempCss} />
				</div>
			</div>
			</div>
    );
  }
	static propTypes = {
		src: PropTypes.string
	};
	randomIntFromInterval = (min, max, floatVal) => {
    // Math.floor(Math.random() * (max - min + 1) + min); //eslint-disable-line
    let randVal = min + (Math.random() * (max - min));
		return typeof floatVal === 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
	};
}