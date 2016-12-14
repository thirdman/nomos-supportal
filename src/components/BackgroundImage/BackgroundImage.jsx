import React, { Component, PropTypes } from 'react';

const styles = require('./BackgroundImage.scss');

export default class BackgroundImage extends Component {
	state = {
		loading: true,
		lng: (this.props.lng || -45.873684),
		lat: (this.props.lat || 170.503877),
		reRender: false
	}
	componentWillMount() {
	}
	componentDidMount() {
	}
	render() {
		const { lat, lng } = this.state;
		let backgroundImageUrl = `https://api.mapbox.com/styles/v1/thirdman/civn5c2fr000d2jrzratr4tns/static/${lat},${lng},9,7.12,0.00,0.00/1200x800?access_token=pk.eyJ1IjoidGhpcmRtYW4iLCJhIjoidjBOQ0lrYyJ9.8zzETVcyoBg2nlMquUR1TA`;
		let tempCss = {
			backgroundImage: `url(${backgroundImageUrl})`
		};
		return (
			<div className={styles.BackgroundImage}>
				<div className={styles.ImageWrap} style={tempCss} />
			</div>
    );
  }
	static propTypes = {
		lat: PropTypes.number,
		lng: PropTypes.number,
		reRender: PropTypes.bool
	};

}