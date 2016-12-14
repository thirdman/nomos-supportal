import React, { Component, PropTypes } from 'react';

const styles = require('./LoadingAnimation.scss');

export default class LoadingAnimation extends Component {
	state = {
		isVisible: true
	}
	componentWillMount() {
	}
	render() {
		const {
			isVisible
		} = this.props;
		return (
			<div className={`${styles.LoadingAnimation} ${isVisible ? styles.isVisible : ''}`}>

				<div className={styles.blobs} filter={'url(#goo)'}>
					<div className={styles.blob_left} />
					<div className={styles.blob_right} />
					<div className={styles.blob_top} />
					<div className={styles.blob_bottom} />
				</div>

				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
						</filter>
					</defs>
				</svg>
			</div>
		);
  }
	static propTypes = {
		isVisible: PropTypes.bool
	};

}