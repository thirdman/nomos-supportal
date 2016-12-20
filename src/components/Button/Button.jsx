import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Icon } from 'components';
import classSet from 'react-classset';
import cx from 'classnames';

const styles = require('./Button.scss');

export default class Button extends Component {
	state = {
		tooltip: this.makeId()
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
			classNameProps = ['normal'],
			content,
			helpContent,
			type,
			color,
			onClickProps,
			icon,
			iconColor,
			iconPosition = 'left',
			iconSize,
			isActive = false,
			isDisabled = false,
			isHighlighted = false
		} = this.props;

		const { tooltip } = this.state;
		let toggleClasses;
		let classes;
		let iconWrapStyles;
		let tempSize = iconSize ? (iconSize + 'px') : null;


		toggleClasses = classSet({
			[styles.isDisabled]: isDisabled,
			[styles.isHighlighted]: isHighlighted
		});
		classes = classNameProps.slice();
		classes = classes.concat(type || '');
		classes = classes.concat(color || '');
		classes = classes.concat(iconPosition ? `icon-${iconPosition}` : '');
		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		// Only applies if we explicitly set icon size
		if (iconSize) {
			iconWrapStyles = {
				width: tempSize,
				height: tempSize
			};
		}
		return (
			<span
				onClick={!this.props.isDisabled ? onClickProps : ''}
				className={cx(styles.Button, classes, toggleClasses)}
				data-tip={helpContent || null}
				data-class={styles.tooltip}
				data-for={`ButtonTooltip${tooltip}`}
				>
				{isActive ?
					<span className={styles.isActive}>
						<Icon
							icon="loading"
							color="white"
							// source="icons/interface/"
							classNameProps={['white']} />
					</span>
					: null
				}
				{icon && iconPosition === 'left' ?
					<span className={styles.iconWrap} style={iconWrapStyles}>
						<Icon
							icon={icon || 'view'}
							color={iconColor || 'white'}
							size={iconSize}
							classNameProps={[iconColor || 'white']} />
					</span>
					: null
				}
				{this.props.children ?
					this.props.children
					: null
				}
				<span className={styles.btnContent}>
					{content || 'button'}
				</span>
				{icon && iconPosition === 'right' ?
					<span className={styles.iconWrap} style={iconWrapStyles}>
						<Icon
							icon={icon || 'view'}
							color={iconColor || 'white'}
							size={iconSize}
							classNameProps={[iconColor || 'white']} />
					</span>
					: null
				}
				<ReactTooltip id={`ButtonTooltip${tooltip}`} type="light">
					{helpContent}
				</ReactTooltip>
			</span>
		);
	}

	static propTypes = {
		content: React.PropTypes.string,
		helpContent: React.PropTypes.string,
		type: React.PropTypes.string,
		icon: React.PropTypes.string,
		color: React.PropTypes.string,
		iconColor: React.PropTypes.string,
		iconPosition: React.PropTypes.string,
		iconSize: React.PropTypes.number,
		isActive: React.PropTypes.bool,
		isHighlighted: React.PropTypes.bool,
		isDisabled: React.PropTypes.bool,
		classNameProps: React.PropTypes.array,
		onClickProps: React.PropTypes.func,
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node
		]),
	};

}
