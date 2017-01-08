import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import classSet from 'react-classset';
import {
	ResponsiveContainer,
	Cell,
	PieChart,
	Pie,
	Tooltip,
	Legend } from 'Recharts';
// import { Icon } from 'components';

const styles = require('./WidgetPie.scss');

export default class WidgetPie extends Component {
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
					styles.WidgetPie,
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
			{name: 'Test Actove', value: 400},
			{name: 'Test Inactive', value: 300},
			{name: 'Test Projected', value: 300},
			{name: 'Test Inactive2', value: 100}
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
		const RADIAN = Math.PI / 180;
		const renderCustomizedLabel = ({
				cx, cy, midAngle, innerRadius, outerRadius, percent, index // eslint-disable-line no-shadow
			}) => {
			console.log(index);
			const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // eslint-disable-line
			const x = cx + (1.8 * radius) * Math.cos(-midAngle * RADIAN); // eslint-disable-line
			const y = cy + (1.8 * radius) * Math.sin(-midAngle * RADIAN); // eslint-disable-line
			console.log('radius', radius);
			console.log('x and y are: ', x, y);
			return (
				<text
					x={x}
					y={y}
					// fill="white"
					// fill={colors[index]}
					fill="#777"
					textAnchor={x > cx ? 'start' : 'end'}
					dominantBaseline="central"
					>
					{`${(percent * 100).toFixed(0)}%`}
				</text>
			);
		};
		return (
			<ResponsiveContainer width="100%" height={240}>
				<PieChart>
					<Legend
						layout="vertical"
						align="right"
						verticalAlign="top"
						iconSize={16}
						width={160}
						wrapperStyle={{
								// background: 'rgba(0,0,0,.03)',
								padding: '8px',
								borderRadius: '4px',
								textAlign: 'left',
								color: '#777',
								fontSize: '12px'
							}}
						/>
					<Pie
						data={data}
						cx="25%"
						cy="50%"
						innerRadius={35}
						outerRadius={60}
						fill="#000"
						stroke="#ddd"
						label={renderCustomizedLabel}
						legendType="circle"
						animationDuration={700}
						// paddingAngle={15}
					>
						{data.map((entry, index) => (
							<Cell
							key={`cell-${index}`}
							fill={colors[index]}
							stroke-width="2"
							stroke="#ddd"
							/>
						))
						}
					</Pie>
					<Tooltip />
				</PieChart>
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