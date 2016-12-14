import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Icon, LoadingAnimation } from 'components';
// import { WithContext as ReactTags } from 'react-tag-input';
// import { Input, TextArea } from 'components';
// import ValueLink from 'valuelink';
// import { Input, TextArea, Select, Radio, Checkbox } from 'valuelink/tags.jsx';

const styles = require('./BeachEdit.scss');
const Rebase = require('re-base');

const base = Rebase.createClass({
      apiKey: 'AIzaSyD3PzPDiOxzq9B2wyUEOzFhLukoXOrmhTE',
      authDomain: 'otago-beach-project.firebaseapp.com',
      databaseURL: 'https://otago-beach-project.firebaseio.com/',
      storageBucket: 'otago-beach-project.appspot.com',
});

export default class BeachEdit extends Component {
	state = {
		test: 'this is a text',
		loading: true,
		dataId: this.props.params.dataId,
		tags: [{ id: 1, text: 'coffee' }, { id: 2, text: 'city' }],
	}
	componentWillMount() {
		this.setState({
			dataId: this.props.params.dataId
		});
		this.getBeaches(this.props.params.dataId);
		console.log('here2');
		this.getTags(this.props.params.dataId);
		this.getGlobalTags();
		console.log('here3');
		console.log('and end of willmount show the state', this.state);
	}
	componentDidMount() {
		// this.getTags(this.state.beachData);
		console.log('beginneing of didMount', this.state);
		this.toggleLoading();
	}
	render() {
		const { beachData, allTags } = this.state; // tagged
		let jsonOutput = JSON.stringify(this.state.beachData, null, 4);
		// let suggestionsOutput = JSON.stringify(this.state.suggestions, null, 4);
		let thisTagged = JSON.stringify(this.state.tagged, null, 4);
		// let allTagJson = JSON.stringify(this.state.allTags, null, 4);
		// let tags = this.state.tags;
		// let suggestions = this.state.suggestions;
		// beach/${this.state.dataId}/
		return (
			<div
				className={`${styles.BeachEdit} ${this.state.loading ? styles.loading : ''}`}
				ref={(c) => { this.beachEditPage = c; }}
			>
				<div className={styles.Row}>
					<h2>{this.state.beachData && this.state.beachData.name}</h2>
					<Link to={'/'}>
						<span className={styles.button}>home</span>
					</Link>
					<Link to={'/admin'}>
						<span className={styles.button}>DONE</span>
					</Link>

				</div>
				{!this.state.beachData ?
						<LoadingAnimation isVisible />
					:
					<span>
						<div className={`${styles.Row} ${styles.hasDivider}`}>
								<h4>Name</h4>
								<input
									type="text"
									value={this.state.beachData && this.state.beachData.name}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, name: e.target.value }
											}
									)}
									// this.setState({
									//	template: { ...this.state.template, templateName: theNameValue }
									// });
								/>
								<h4>Description</h4>
								<textarea
									value={beachData && beachData.description}
									rows={5}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, description: e.target.value }
											}
									)}
								/>
								<h4>Travel Time (min)</h4>
								<input
									type="text"
									value={beachData && beachData.travel}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, travel: e.target.value }
											}
									)}
								/>
								<h4>Distance (km)</h4>
								<input
									type="text"
									value={beachData && beachData.distance}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, distance: e.target.value }
											}
									)}
								/>
								<h4>lng</h4>
								<input
									type="text"
									value={beachData && beachData.lng}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, lng: e.target.value }
											}
									)}
								/>
								<h4>lat</h4>
								<input
									type="text"
									value={beachData && beachData.lat}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, lat: e.target.value }
											}
									)}
								/>
								<h4>FeatImg</h4>
								<input
									type="text"
									value={beachData && beachData.featImg}
									onChange={e => this.setState({
											beachData: {
												...this.state.beachData, featImg: e.target.value }
											}
									)}
								/>
						</div>
						<div className={`${styles.Row} ${styles.hasDivider}`}>
							<h4> All tags </h4>
								{allTags ?
									this.tagsInteraction()
									: null
								}
						</div>
						{beachData && beachData.images ?
							<div className={`${styles.Row} ${styles.hasDivider}`}>
								{this.getImages(beachData)}
							</div>
							: null
						}
						<div className={`${styles.Row} ${styles.hasDivider}`}>
							<h4>BeachData</h4>
							<pre>{jsonOutput}</pre>
						</div>
						<div className={`${styles.Row} ${styles.hasDivider}`}>
							<h4>thisTagged</h4>
							<pre>{thisTagged}</pre>
						</div>
					</span>
				}
			</div>
    );
  }
  tagsInteraction = () => {
		const { allTags, tagged } = this.state;
		let theTags = Object.keys(allTags);
		let thisTagged = Object.keys(tagged);
		let theOutput = theTags.map((tag, index) => { // eslint-disable-line
			let testFilter = thisTagged.filter(thistag => thistag === tag);
			return (
				<div
					className={
							`${styles.tag}
							${testFilter.length ? styles.isSelected : ''}`
					}
					key={index}
					onClick={() => this.toggleTag(tag)}
					>
					<Icon
						icon={testFilter.length ? 'tick' : 'cross'}
						size={16}
						classNameProps={['noBorder']}
						// onClick={() => this.toggleTag(tag.dataId)}
					/>
					{ tag }
				</div>
			);
		});
		return theOutput;
  }
	getBeaches = (dataId) => {
		base.syncState(`beaches/${dataId}`, {
		state: 'beachData',
		context: this,
		asArray: false
		});
	}
	addItem = (newItem) => {
		this.setState({
			items: this.state.beachData.concat([newItem]) // updates Firebase and the local state
		});
	}
/*
	getGlobalTags = () => {
		base.fetch('tags', {
		context: this,
		asArray: true
		}).then(data => {
			let tagArray = data.map((t) => t.dataId);
			this.setState({
				suggestions: tagArray,
				allTags: data
			});
			// console.log('so the suggestionstate is:', this.state.suggestions);
		}).catch(error => {
			console.log(error);
		});
	}
*/
	getGlobalTags = () => {
		base.syncState('tags', {
		state: 'allTags',
		context: this,
		asArray: false
		});
	}
	getTags = (dataId) => {
		base.syncState(`tagged/${dataId}`, {
		state: 'tagged',
		context: this,
		asArray: false
		});
	}
	isThisTag = (tagName) => {
		// console.log(this.state.allTags.filter(tag => tag.dataId === tagName));
		return (this.state.allTags.filter(tag => tag.dataId === tagName));
	}
	isThisTagActive = (dataId) => {
		let tagged = Object.keys(this.state.tagged);
		console.log('data id supplied is', dataId);
		console.log('this.state.tagged is', this.state.tagged);
		console.log(tagged.filter(tag => tag === dataId));
		return (tagged.filter(tag => tag === dataId));
	}
	toggleTag = (dataId) => {
		const { tagged } = this.state;
		let thisTagged = Object.keys(tagged);
		let exists = thisTagged.filter(thistag => thistag === dataId);
		if (exists.length) {
			this.removeItem(dataId);
		} else {
			this.addItem(dataId);
		}
	}
	addItem = (newItem) => {
		this.setState({
			tagged: {
				...this.state.tagged, [newItem]: newItem } // tags: tags
			});
	}
	removeItem = (dataId) => {
		let { tagged } = this.state;
		delete tagged[dataId];
    this.setState({ tagged });
	}
	matchesEl = (el) => {
		let thearray = this.state.tagged;
		return thearray === el;
	}

	getImages = (item) => {
		let theImages = Object.keys(item.images);
		const dataId = this.props.params.dataId;
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
	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	}
	static propTypes = {
		beachData: PropTypes.object,
		dataId: PropTypes.string
	};
}
/* UNUSED FIREBASE EDIT
	handleDelete(i) {
		let tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({ tags });
		this.setState({
			beachData: {
				...this.state.beachData, tags } // tags: tags
			});
	}
*/