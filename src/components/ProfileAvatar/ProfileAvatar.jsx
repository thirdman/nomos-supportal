import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import classSet from 'react-classset';
import ReactTooltip from 'react-tooltip';

// import { Button } from 'components';

const styles = require('./ProfileAvatar.scss');
const avatarImages = require('./images/');

export default class ProfileAvatar extends Component {
	state = {
		loading: true,
		isVisible: false,
		currentFace: parseFloat(this.props.face),
		currentFeature: parseFloat(this.props.Feature),
		currentHair: parseFloat(this.props.hair),
		tooltip: this.makeId()
		}
	componentWillMount() {
		this.setupComponent();
	}
	componentDidMount() {
		this.toggleLoading();
	}
	render() {
		const {
			isVisible,
			tooltip,
			facesArray,
			featuresArray,
			hairArray,
		} = this.state;
		let {
			size,
			title,
			preset,
			color = 'black',
			hair,
			face,
			feature,
			nosemouth,
			eyes,
			hasBackground,
			classNameProps = []
			} = this.props;
		let classes;
		let currentDisplayFace;
		let currentDisplayFeature;
		let currentDisplayHair;

		classes = classNameProps
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');
		let toggleClasses;
		toggleClasses = classSet({
			[styles.hasBackground]: hasBackground
		});
		console.log(preset, color, hair, face, feature, nosemouth, eyes);
		console.log('size is', size);
		currentDisplayFace = avatarImages[facesArray[face]];
		currentDisplayFeature = avatarImages[featuresArray[feature]];
		currentDisplayHair = avatarImages[hairArray[hair]];
		let inlineCss;
		if (size) {
			inlineCss = {
				width: size,
				height: size,
				// color ? color : '',
			};
		}
		return (
			<div
				className={cx(
					styles.ProfileAvatar,
					classes,
					toggleClasses,
					(isVisible ? styles.isVisible : '')
					)}
				id="avatarItem"
				style={inlineCss}
				data-tip={title}
				data-for={`AvatarTooltip${tooltip}`}
				data-class={styles.tooltip}
				>
				<div className={styles.head}>
					<span
						dangerouslySetInnerHTML={{__html: avatarImages.head}}
						role="presentation"
						className={styles.facePart}
						/>
				</div>
					<span
						dangerouslySetInnerHTML={{__html: currentDisplayFace}}
						role="presentation"
						className={styles.facePart}
						/>
					<span
						dangerouslySetInnerHTML={{__html: currentDisplayFeature}}
						role="presentation"
						className={styles.facePart}
						/>
					<span
						dangerouslySetInnerHTML={{__html: currentDisplayHair}}
						role="presentation"
						className={styles.facePart}
						/>
				<ReactTooltip id={`AvatarTooltip${tooltip}`} type="light" />
			</div>
		);
	}
	setupComponent = () => {
		let facesArray = [
			'face1',
			'face2',
			'face3',
			'face4',
			'face5',
			'face6',
			'face8',
			'face9',
			'face10',
			'face11',
			'face12',
			'face13',
			'face14',
			'face15',
			'face16',
			'face17',
			'face18',
			'face19',
			'face20',
		];
		let hairArray = [
			'hair1',
			'hair2',
			'hair3',
			'hair4',
			'hair5',
			'hair6',
			'hair7',
			'hair8',
			'hair10',
			'hair11',
			'hair12',
			'hair13',
			'hair14',
			'hair15',
			'hair16',
			'hair17',
			'hair18',
			'hair19',
			'hair20',
		];
		let featuresArray = [
			'feature1',
			'feature2',
			'feature3',
			'feature4',
			'feature5',
			'feature9',
			'feature10',
			'feature11',
			'feature12',
			'feature15',
		];

		this.setState({
			facesArray,
			featuresArray,
			hairArray
		});
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading,
			isVisible: !this.state.isVisible
		});
	};
	makeId() {
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	// PROPS
	static propTypes = {
		size: PropTypes.number,
		title: React.PropTypes.string,
		color: PropTypes.string,
		preset: PropTypes.number,
		hair: PropTypes.number,
		face: PropTypes.number,
		feature: PropTypes.number,
		nosemouth: PropTypes.number,
		eyes: PropTypes.number,
		hasBackground: PropTypes.bool,
		classNameProps: PropTypes.array
	}
}
/*
	toggleFace = () => {
		const { currentFace, facesArray } = this.state;
		let newActiveIndex;
		console.log('facelength is: ', facesArray.length);
		console.log('initial indix is is: ', currentFace);
		// const facesLength = facesArray.length;
		let activeIndex = currentFace || 0;
		if (activeIndex === facesArray.length) {
			newActiveIndex = 0;
		} else {
			newActiveIndex = activeIndex + 1;
		}
		this.setState({
			currentFace: newActiveIndex
		});
	};
	toggleHair = () => {
		const { currentHair, hairArray } = this.state;
		let newActiveIndex;
		console.log('hairlength is: ', hairArray.length);
		console.log('initial indix of hair is: ', currentHair);
		let activeIndex = currentHair || 0;
		if (activeIndex === hairArray.length) {
			newActiveIndex = 0;
		} else {
			newActiveIndex = activeIndex + 1;
		}
		this.setState({
			currentHair: newActiveIndex
		});
	};
	toggleFeature = () => {
		const { currentFeature, featuresArray } = this.state;
		let newActiveIndex;
		console.log('featurelength is: ', featuresArray.length);
		console.log('initial feature indix is is: ', currentFeature);
		// const facesLength = facesArray.length;
		let activeIndex = currentFeature || 0;
		if (activeIndex === featuresArray.length) {
			newActiveIndex = 0;
		} else {
			newActiveIndex = activeIndex + 1;
		}
		this.setState({
			currentFeature: newActiveIndex
		});
	};
	saveAvatar = () => {
		const { currentHair, currentFace, currentFeature, userData } = this.state;
		let avatarData = {
			currentHair,
			currentFace,
			currentFeature
		};
		console.log('avatarData', avatarData);
		this.setState({
			userData: {
				...userData, avatarData: avatarData } // eslint-disable-line
			});
	}
*/