import React, { Component, PropTypes } from 'react';

const styles = require('./TransitionAnimation.scss');

export default class TransitionAnimation extends Component {
	state = {
		isActive: true,
		isVisible: true,
		height: '100px',
		width: '100px',
		tempCss: {}
	}
	componentWillMount() {
		this.setLayerDimensions();
		let tempHeight = `${window.innerHeight}px`;
		let tempWidth = `${window.innerWidth}px`;
		this.setState({
			height: tempHeight,
			width: tempWidth
		});
	}
	render() {
		const {
			isVisible,
			isActive
		} = this.props;
		let tempCss = this.state.tempCss;
		return (
			<div
				className={`${styles.TransitionAnimation} ${isVisible ? styles.isVisible : ''}`}
				style={tempCss}
			>
				<div className={`${styles.bgLayer} ${isActive ? styles.isActive : ''}`} />
			</div>
    );
  }
	static propTypes = {
		isVisible: PropTypes.bool,
		isActive: PropTypes.bool
	};

	setLayerDimensions = () => {
		const frameProportion = 1.78; // png frame aspect ratio
		const frames = 13; // number of png frames
		// let resize = false;
		let windowWidth = this.state.width;
		let windowHeight = this.state.height;
		let layerHeight;
		let layerWidth;

		if (windowWidth / windowHeight > frameProportion) {
			layerWidth = windowWidth;
			layerHeight = layerWidth / frameProportion;
		} else {
			layerHeight = windowHeight;
			layerWidth = layerHeight * frameProportion;
		}

		let tempCss = {
			width: `${layerWidth * frames}px`,
			height: `${layerHeight}px`
		};
		this.setState(
			{
				tempCss
			}
		);

		// resize = false;
	}
}