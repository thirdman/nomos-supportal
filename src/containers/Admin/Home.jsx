import React, { Component } from 'react';
import {
	// Link,
	browserHistory
	} from 'react-router';
import {
	Icon,
	LoadingAnimation,
	TransitionAnimation
	} from 'components';

const styles = require('./Home.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyBLhVms5SJQKFQyAN4p6jUnJsukXhAXKH8',
      authDomain: 'nomos-supportal.firebaseapp.com',
      databaseURL: 'https://nomos-supportal.firebaseio.com/',
      storageBucket: 'nomos-supportal.appspot.com',
});

export default class Home extends Component {
	state = {
		org: '',
		loading: true,
		transition: false
	}
	componentWillMount() {
		console.log('WillMount Home');
		this.getTagged();
	}
	componentDidMount() {
		this.getBeaches();
	}
	getBeaches() {
		base.fetch('org', {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				beaches: data,
				loading: false,
				transition: false
			});
		}).catch(error => {
			console.log(error);
		});
	}
	getTagged() {
		base.fetch('tagged', {
		context: this,
		asArray: false
		}).then(data => {
			console.log('tagged data is: ', data);
			this.setState({
				tagged: data
			});
		}).catch(error => {
			console.log(error);
		});
	}
/*
	addItem(newItem){
	  this.setState({
	    items: this.state.items.concat([newItem]) //updates Firebase and the local state
	  });
	}
*/

	render() {
	// let user = base.auth().currentUser;
		// const { filter } = this.state;
		console.log('this.state', this.state);
		return (
			<div className={styles.Home}>
			<div className={styles.featHome}>
				<div className={styles.homeQuote}>
					{/* <span>&ldquo;99 problems but a beach ain&#39;t one&rdquo;</span> */}
				</div>
				<div className={styles.Row}>
					{this.state.transition ?
						<TransitionAnimation
							isActive={this.state.transition}
							isVisible={this.state.transition}
							reRender={this.state.loading}
						/>
						: null
					}
				</div>
			</div>
			<section>
				{this.state.loading ?
						(this.doLoadingBeaches())
					:
					(
						this.state.beaches
						// .sort((a, b) => a.distance - b.distance)
						.map((item, index) => { //eslint-disable-line
							return (
								<div
									className={styles.beach}
									key={index}
									onClick={() => this.doTranstion(`/beach/${item.dataId}`)}
								>
								<p className={styles.preText}>{item.distance} km</p>
								<div className={styles.imgRow}>
									{/* if there is a feature image...*/}
									{item.featImg ?
										<div className={styles.imgWrap} >
											<img
											src={`https://res.cloudinary.com/thirdman-design/image/upload/c_limit,e_improve,w_300/obp/${item.featImg}`}
											role="presentation"
											/>
										</div>
										: null
									}
									{/* if there is no feature image, but image...*/}
									{!item.featImg && item.dataId && item.images ?
										<div className={styles.imgWrap} >
											{ this.getImage(item, item.dataId) }
										</div>
										: null
									}
									<div className={`${styles.imgWrap} ${styles.mapWrap}`}>
										<img
											src={`https://api.mapbox.com/styles/v1/thirdman/civ9900g4001j2inpk3ozyo5b/static/${item.lat},${item.lng},13,7.12,0.00,0.00/300x300?access_token=pk.eyJ1IjoidGhpcmRtYW4iLCJhIjoidjBOQ0lrYyJ9.8zzETVcyoBg2nlMquUR1TA`} alt={`Beach at ${item.name}`}
										/>
									</div>
								</div>
									<h3>{item.name}</h3>
									<p className={styles.beachDescription}>{item.description}</p>
									<span className={styles.taggedWrap}>
										{item.dataId && this.getBeachTags(item.dataId)}
									</span>
								</div>
							);
						})
					)
				}
				</section>
			</div>
    );
  }
	getTags = (item) => { // eslint-disable-line
		let theTags = Object.keys(item.tags);
		let theOutput = theTags.map((tag, index) => { //eslint-disable-line
			return (
				<span className={styles.iconItem} key={index}>
					<Icon icon={tag} size={40} key={index} />
					<h5>{tag}</h5>
				</span>
			);
		});
	return (
			theOutput
		);
	}
	getBeachTags = (dataId) => { // eslint-disable-line
		let taggedArray = Object.values(this.state.tagged[dataId]);
		let theOutput = taggedArray.map((tag, index) => { //eslint-disable-line
				return (
					<span key={index} className={styles.iconItem}>
						<Icon icon={tag} size={40} key={index} />
						<h5>{tag}</h5>
					</span>
				);
			});
		return theOutput;
	}
	getImage = (item, dataId) => {
		let theImages = Object.keys(item.images);
		let theImageToReturn = theImages[0];
		// console.log('theImages: ', theImages);
		return (
			<img
			src={`https://res.cloudinary.com/thirdman-design/image/upload/c_limit,e_improve,w_300/obp/${dataId}/${theImageToReturn}.jpg`}
			role="presentation"
			/>
		);
	};
	doLoadingBeaches = () => {
		let rows = [];
		for (let i = 0; i < 6; i++) {
			rows.push(
				<div className={styles.beach} key={i}>
					<LoadingAnimation isVisbile />
					<h3>&nbsp;</h3>
					<p>&nbsp;</p>
				</div>
			);
		}
		return <section>{ rows }</section>;
	}
	doTranstion = (page) => {
		console.log(page);
		this.toggleTransition();
		setTimeout(() => {
			// this.toggleLoading();
			this.toggleTransition();
			}, 800);
		setTimeout(() => {
			browserHistory.push(page);
			}, 800);
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	};
	toggleTransition = () => {
		this.setState({
			transition: !this.state.transition
		});
	};
}
/*
<span
className={styles.button}
onClick={() => this.doTranstion('/admin')}
>
toggle loading
</span>
this state loading is: {this.state.loading ? 'true' : 'false'}
this state transition is: {this.state.transition ? 'true' : 'false'}
*/
/*
<Link to={'/admin'}>
<span className={styles.button}>edit</span>
</Link>
*/
/*
									<span>
										{item.tags ?
											<div>
												{this.getTags(item)}
											</div>
											: <span>no tags </span>
										}
									</span>
*/