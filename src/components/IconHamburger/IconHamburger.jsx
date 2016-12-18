import React, { Component } from 'react';

const styles = require('./IconHamburger.scss');

export default class IconHamburger extends Component {
	static propTypes = {
		isOpen: React.PropTypes.bool,
		isDocked: React.PropTypes.bool,
		menuClicked: React.PropTypes.func, // .isRequired
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		strokeWidth: React.PropTypes.number,
		rotate: React.PropTypes.number,
		color: React.PropTypes.string,
		borderRadius: React.PropTypes.number,
		animationDuration: React.PropTypes.number,
		classNameProps: React.PropTypes.array
	}

	static defaultProps = {
		isOpen: false,
		isDocked: false,
		width: 36,
		height: 30,
		strokeWidth: 2,
		rotate: 0,
		color: 'black',
		borderRadius: 0,
		animationDuration: 0.5
	}
	state = {
		isOpen: this.props.isOpen,
		isDocked: this.props.isDocked
	}
	componentDidMount() {
	}
	componentWillUpdate() {
	}
	toggleSelected = () => {
		this.setState({ isOpen: !this.state.isOpen});
	}

render() {
	const {
		classNameProps = [],
		width,
		height,
		strokeWidth,
		rotate,
		color,
		borderRadius,
		animationDuration,
		menuClicked,
		isOpen,
		isDocked} = this.props;
	const className = classNameProps.map((classV) => styles[classV]).join(' ');
	const cssWidth = `${width || 36}px`;
	const cssHeight = `${height || 30}px`;
	const halfHeight = `${height / 2}px`;
	const halfStrokeWidth = `-${strokeWidth / 2}px`;
	const getTransformValue = (isThisOpen, defaultPos, rotateVal) => ( // , isOpen
		`translate3d(0,${isThisOpen ? halfHeight : defaultPos},0) rotate(${isThisOpen ? `${rotateVal}deg` : '0'})` // eslint-disable-line
	);
	const thisStyles = {
		container: {
			height: cssHeight,
			width: cssWidth,
			position: 'relative',
			transform: `rotate(${rotate || 0}deg) translateX(${isDocked ? '-180px' : '0px'})`,
      transitionTimingFunction: 'ease-in-out',
			transitionDuration: '.3s',
		},
		lineBase: {
			display: 'block',
			height: `${strokeWidth}px`,
			width: '100%',
			background: color || '#000',
			transitionTimingFunction: 'ease',
			transitionDuration: `${animationDuration}s`,
			borderRadius: `${borderRadius || 0}px`,
			transformOrigin: 'center',
			position: 'absolute'
		},
		firstLine: {
			transform: getTransformValue(isOpen, 0, 45),
			marginTop: halfStrokeWidth,
		},
		secondLine: {
      transitionTimingFunction: 'ease-out',
			transitionDuration: `${animationDuration / 4}s`,
			opacity: isOpen ? '0' : '1',
			top: halfHeight,
			marginTop: halfStrokeWidth
		},
		thirdLine: {
			transform: getTransformValue(isOpen, cssHeight, -45),
			marginTop: halfStrokeWidth
		}
	};
	return (
		<div
			style={thisStyles.container}
			className={className + ' ' + styles.IconHamburger}
			onClick={menuClicked}
		>
			<span style={Object.assign({}, thisStyles.lineBase, thisStyles.firstLine)} />
			<span style={Object.assign({}, thisStyles.lineBase, thisStyles.secondLine)} />
			<span style={Object.assign({}, thisStyles.lineBase, thisStyles.thirdLine)} />
		</div>
   );
 }
}

// onClick={this.props.menuClicked}