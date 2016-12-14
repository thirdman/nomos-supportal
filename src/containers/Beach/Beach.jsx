import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Icon, ImageHex } from 'components';
import ReactTooltip from 'react-tooltip';

const styles = require('./Beach.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyD3PzPDiOxzq9B2wyUEOzFhLukoXOrmhTE',
      authDomain: 'otago-beach-project.firebaseapp.com',
      databaseURL: 'https://otago-beach-project.firebaseio.com/',
      storageBucket: 'otago-beach-project.appspot.com',
});

export default class Beach extends Component {
	state = {
		test: 'this is a text',
		loading: true,
		dataId: (this.props.dataId || 'long'),
		beachData: this.props.beachData,
		mousePos: { x: 0, y: 0 },
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
	componentWillMount() {
		this.setState({
			dataId: this.props.params.dataId
		});
		this.getBeachData(this.props.params.dataId);
		this.getTags(this.props.params.dataId);
	}
	componentDidMount() {
		this.toggleLoading();
	}
	render() {
	const { beachData, tagged, tooltip } = this.state;
		let offset = {
      transform: `translate3d( ${this.state.mousePos.x / -100}px,
      	${this.state.mousePos.y / -100}px, 0 )`
    };
		return (
			<div
				className={`${styles.Beach} ${this.state.loading ? styles.loading : ''}`}
				onMouseMove={() => this.mouseMove()}
				ref={(c) => { this.beachPage = c; }}
			>
				<div className={styles.Row}>
					<h2>{beachData.name || 'beach Name here'}</h2>
				</div>
				<div className={`${styles.Row} ${styles.hasDivider}`}>
					<Link to={'/'}>
						<span className={styles.button}>back</span>
					</Link>
{/*
					<Link to={`/beach/${this.state.dataId}/edit`}>
						<span className={styles.button}>edit</span>
					</Link>
*/}
					{	tagged ?
							<div>
								{
									tagged.map((tag, index) => { // eslint-disable-line
										return (
												<span
													className={styles.iconItem}
													data-tip={tag}
													data-class={styles.iconItem}
													data-for={`ButtonTooltip${index}${tooltip}`}
												>
														<Icon icon={tag} size={80} key={index} classNameProps={['feature']} />
														<h5>{tag}</h5>
														<ReactTooltip id={`ButtonTooltip${index}${tooltip}`} type="light">
															{tag}
														</ReactTooltip>
												</span>
										);
									})
								}
							</div>
						: null
						}
				</div>
				<div className={`${styles.Row}`}>
					<h4>Description</h4>
					<p>{ beachData.description || 'description heree'}</p>
				</div>
				<div className={`${styles.Row}`}>
					<div className={styles.column} style={offset}>
						<h4>Distances</h4>
						<p>{ beachData.distance} km</p>
					</div>
					<div className={styles.column}>
						<h4>Travel Time</h4>
						<p>{ beachData.travel} min</p>
					</div>
					<div className={styles.column}>
						<h4>lng/lat</h4>
						<p>{ beachData.lng || 'lng'} / { beachData.lat || 'lat'}</p>
					</div>
					<div className={styles.column}>
						<h4>lng/lat</h4>
						<p>{ beachData.lng || 'lng'} / { beachData.lat || 'lat'}</p>
					</div>
				</div>
				{beachData.images ?
					<div className={`${styles.Row} ${styles.hasDivider}`}>
						{this.getImages(beachData)}
					</div>
					: null
				}
				{beachData.images ?
					<div className={`${styles.Row} ${styles.hasDivider} ${styles.hexRow}`}>
						{this.getHexImages(beachData)}
						<ImageHex
							// src={`https://api.mapbox.com/styles/v1/thirdman/civ9900g4001j2inpk3ozyo5b/static/${beachData.lat},${beachData.lng},16,7.12,0.00,0.00/250x250?access_token=pk.eyJ1IjoidGhpcmRtYW4iLCJhIjoidjBOQ0lrYyJ9.8zzETVcyoBg2nlMquUR1TA`}
							src={`https://api.mapbox.com/styles/v1/thirdman/civqln7ki004o2kkqs5xw0k2n/static/${beachData.lat},${beachData.lng},12,7.12,0.00,0.00/250x250?access_token=pk.eyJ1IjoidGhpcmRtYW4iLCJhIjoidjBOQ0lrYyJ9.8zzETVcyoBg2nlMquUR1TA`}
							/>
					</div>
					: null
				}
				<div className={styles.Row} style={{ opacity: 0 }}>
				<h4>test icons</h4>
				<Icon icon={'wild'} size={40} />
				<Icon icon={'exposed'} size={40} />
				<Icon icon={'photogenic'} size={40} />
				<Icon icon={'favourite'} size={40} />
				<Icon icon={'rockPools'} size={40} />
				<Icon icon={'swimming'} size={40} />
				<Icon icon={'walk'} size={40} />
				<Icon icon={'city'} size={40} />
				<Icon icon={'coffee'} size={40} />
				<Icon icon={'kids'} size={40} />
				<Icon icon={'short'} size={40} />
				<Icon icon={'long'} size={40} />
				<Icon icon={'tourists'} size={40} />
				<Icon icon={'wildlife'} size={40} />
				<Icon icon={'penguins'} size={40} />
				<Icon icon={'gulls'} size={40} />
				<Icon icon={'surfing'} size={40} />
				</div>
			</div>
    );
  }
	getBeachData = (dataId) => {
		const { beaches } = this.props;
		// console.log('beach dataId is:', dataId);
		let tempBeachData = beaches.filter(beach => beach.dataId === dataId);
		// console.log('trying to set ', tempBeachData[0]);
		this.setState({
			beachData: tempBeachData[0]
		});
		// console.log(this.state);
		return (
			tempBeachData
		);
	}
/*
	getTags = (item) => {
		let theTags = Object.keys(item.tags);
		let theOutput = theTags.map((tag, index) => { //eslint-disable-line
			return (
				<span className={styles.tag} key={index}>
					{tag}
				</span>
			);
		});
	};
*/
	getTags = (dataId) => {
		base.fetch(`tagged/${dataId}`, {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				tagged: data
			});
		}).catch(error => {
			console.log('App error is', error);
		});
	}
	getImages = (item) => {
		let theImages = Object.keys(item.images);
		const dataId = this.props.params.dataId;
		// console.log('theImages: ', theImages);
		let theOutput = theImages.map((img, index) => { //eslint-disable-line
			return (
				<span className={styles.imgWrap} key={index}>
					<img
					src={`https://res.cloudinary.com/thirdman-design/image/upload/c_limit,e_improve,w_300/obp/${dataId}/${img}.jpg`}
					role="presentation"
					/>
				</span>
			);
		});
		return (
			theOutput
		);
	};
	getHexImages = (item) => {
		let theImages = Object.keys(item.images);
		const dataId = this.props.params.dataId;
		// console.log('theImages: ', theImages);
		let theOutput = theImages.map((img, index) => { //eslint-disable-line
			return (
				<ImageHex
					src={`https://res.cloudinary.com/thirdman-design/image/upload/c_limit,e_improve,w_300/obp/${dataId}/${img}.jpg`}
					key={index}
				/>
			);
		});
		return (
			theOutput
		);
	};
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	}
	static propTypes = {
		beachData: PropTypes.object,
		dataId: PropTypes.string
	};
	mouseMove() {
		// console.log(e, window);
		// console.log(this.beachPage);
			// console.log(this);
    // this.setState({
      // mousePos: {
        // x: e.pageX - (window.innerWidth / 2),
        // y: e.pageY - (window.innerHeight / 2)
      // }
    // });
  }
}
/*
					<img
						className={styles.featMap}
						src={`https://api.mapbox.com/styles/v1/thirdman/civ9900g4001j2inpk3ozyo5b/static/${beachData.lat},${beachData.lng},14,7.12,0.00,0.00/400x400?access_token=pk.eyJ1IjoidGhpcmRtYW4iLCJhIjoidjBOQ0lrYyJ9.8zzETVcyoBg2nlMquUR1TA`} alt={`Beach at ${beachData.name}`}
					/>
*/