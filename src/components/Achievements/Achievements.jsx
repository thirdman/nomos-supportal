import React, {Component} from 'react';
import cx from 'classnames';
import { browserHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';
import {
	// Column,
	Icon,
} from 'components';

const styles = require('./Achievements.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});


export default class Achievements extends Component {

	state = {
		isLoading: true
	}
	componentDidMount() {
		this.setupPage();
	}
	render() {
		const {
			// tooltip,
			isLoading,
			achievements
		} = this.state;
		const {
			classNameProps = [],
			selected,
			type = 'user',
			title,
		} = this.props;

		console.log('selected is: ', selected);
		let classes;
		classes = classNameProps.slice();
		classes = classes.concat(type);

		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');

		return (
			<div className={cx(styles.Achievements, classes)}>
				{title ?
					<h3>{title}</h3>
					: null
					}
				{
					achievements && achievements.map((item, index) => {
						return (
							<div
								className={cx(styles.badge,
									(!isLoading ? styles.isVisible : '')
								)}
								data-tip={`${item.description} (${item.reason})`}
								data-class={styles.tooltip}
								data-for={`AchievementTooltip${1}`}
								key={index}>
								<div className={styles.iconWrap}>
									<Icon icon="medal" size={64} />
								</div>
								<h4 style={{textAlign: 'center'}}>{item.name}</h4>
								<div style={{textAlign: 'center'}} className={styles.subtitle}>
									{item.subtitle}
								</div>
								<ReactTooltip id={`AchievementTooltip${1} `} type="light" />
							</div>
						);
					})
				}
			</div>
		);
	}
	setupPage = () => {
		base.fetch('achievements', {
			context: this,
			asArray: false
			}).then(data => {
				this.setState({
					achievements: data,
					loading: false
				});
			}).catch(error => {
				console.log('Loading error is', error);
				this.setState({
					loading: false
				});
		});

		// THIS TURNS LOADING OFF AFTER 300 ms
		setTimeout(() => {
			this.setState({isLoading: false});
			}, 300);
	}
	goTo = (userId) => {
		browserHistory.push(`/profile/${userId}`);
	}

	makeId() {
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	static propTypes = {
		selected: React.PropTypes.array,
		title: React.PropTypes.string,
		type: React.PropTypes.string,
		classNameProps: React.PropTypes.array,
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node
		])
	}
}
