import React, { Component } from 'react';
import { Link } from 'react-router';
import { LoadingAnimation } from 'components';

const styles = require('./BeachListing.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyD3PzPDiOxzq9B2wyUEOzFhLukoXOrmhTE',
      authDomain: 'otago-beach-project.firebaseapp.com',
      databaseURL: 'https://otago-beach-project.firebaseio.com/',
      storageBucket: 'otago-beach-project.appspot.com',
});

export default class BeachListing extends Component {
	state = {
		test: 'this is a text',
		beaches: '',
		showNew: false,
		showSuccess: false,
		loading: true
	}
	componentWillMount() {
		console.log('hello');
	}
	componentDidMount() {
		this.getBeaches();
		// this.toggleLoading();
		// console.log(theBeaches);
		console.log(this.state);
	}
	getBeaches() {
		base.fetch('beaches', {
		context: this,
		asArray: true
		}).then(data => {
			this.setState({
				beaches: data,
				loading: false
			});
			console.log(data);
		}).catch(error => {
		// handle error
			console.log(error);
		});
	// console.log('base.storage', base.storage);
	}
	render() {
		let user = base.auth().currentUser;
		console.log('user is: ', user);
		return (
			<div
				className={`${styles.BeachListing} ${this.state.loading ? styles.loading : ''}`}
			>
			<h2>Beaches</h2>
			{this.state.loading ?
					<LoadingAnimation isVisbile />
				: null
			}
			<div className={styles.Row}>
				{
					this.state.beaches && this.state.beaches.map((item, index) => {
						return (
							<span
								className={
								`${styles.listing} ${!this.state.loading ? styles.isVisible : ''}`
								}
								key={index}
							>
								<Link to={`/beach/${item.dataId}`}>
									<span className={styles.button}>View</span>
								</Link>
								{item.featImg ?
									<div className={styles.imgWrap} >
										<img
										src={`https://res.cloudinary.com/thirdman-design/image/upload/c_limit,e_improve,w_300/obp/${item.featImg}`}
										role="presentation"
										/>
									</div>
									: <div className={`${styles.imgWrap} ${styles.empty}`} >
											No Image
										</div>
								}
							<p className={styles.preText}>{item.distance} km</p>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
							</span>
						);
					})
				}
				</div>
			</div>
    );
  }
	getTags = (item) => {
		let theTags = Object.keys(item.tags);
		let theOutput = theTags.map((tag, index) => { //eslint-disable-line
			return (
				<span className={styles.tag} key={index}>
					{tag}
				</span>
			);
		});
	return (
			theOutput
		);
	}
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	}
}