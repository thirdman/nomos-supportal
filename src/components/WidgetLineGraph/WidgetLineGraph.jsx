import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import classSet from 'react-classset';
import {
	ResponsiveContainer,
	// Cell,
	LineChart,
	// Pie,
	Tooltip,
	Legend,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
	} from 'Recharts';
// import { Icon } from 'components';

const styles = require('./WidgetLineGraph.scss');

export default class WidgetLineGraph extends Component {
	state = {
		loading: true,
		isVisible: false
		}
	componentDidMount() {
		// this.setupComponent();
		this.toggleLoading();
	}
	render() {
		const {
			isVisible
		} = this.state;
		// const { tooltip } = this.state;
		let {
			title,
			data,
			hasDivider,
			isAnimated,
			hasBackground
			} = this.props;
		let classes;
		let toggleClasses;
		toggleClasses = classSet({
			[styles.hasDivider]: hasDivider,
			[styles.isAnimated]: isAnimated,
			[styles.hasBackground]: hasBackground
		});
		console.log('suypplied data is:', data);
		return (
			<div
				className={cx(
					styles.WidgetLineGraph,
					classes,
					toggleClasses,
					(isVisible ? styles.isVisible : '')
					)}
				>
				<div className={styles.divider} />
				<h4 className={styles.subtitle}>{title}</h4>
				<div className={styles.theContent}>
					{this.doChart()}
				</div>
			</div>
		);
	}
	setupComponent = () => {
	}
	doChart = () => {
		let { data } = this.props;
		const tempdata = [
			{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
			{name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
			{name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
			{name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
			{name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
			{name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
			{name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
		];
		if (!data) {
			data = tempdata;
		}
		const colors = [
			'#0A5B81',
			'#1181A7',
			'#1395C0',
			'#1CBADF'
		];
		return (
			<ResponsiveContainer width="100%" height={240}>
				<LineChart
					data={data}
					// margin={{ top: 4, right: 16, left: 16, bottom: 4 }}
					>
					<CartesianGrid strokeDasharray="3 3" stroke={'#ccc'} />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke={colors[0]} />
					<Line type="monotone" dataKey="uv" stroke={colors[1]} />
					<Line type="monotone" dataKey="value" stroke={colors[0]} fill={colors[0]} />
				</LineChart>
			</ResponsiveContainer>
		);
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading,
			isVisible: !this.state.isVisible
		});
	};
	// PROPS
	static propTypes = {
		title: PropTypes.string,
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