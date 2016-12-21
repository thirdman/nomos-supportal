import React, {Component} from 'react';
import cx from 'classnames';
import {
	// Column,
	Row
} from 'components';

const styles = require('./Files.scss');
const Dropbox = require('dropbox');

const dbx = new Dropbox({
	accessToken: 'RPztR549R2QAAAAAAAAV62tQfqtCHPREklMFN_9qlGbfPy1IOI9vFSlHrml7EndF'
	});

export default class Files extends Component {

	state = {
		loading: true,
		dbData: []
	}
	componentDidMount() {
		// this.listFiles();
	}

	render() {
		const { loading } = this.state;
		const {
			classNameProps = [],
			orgId,
			title,
			sourceFolder
		} = this.props;

		let classes;
		classes = classNameProps.slice();
		// classes = classes.concat(type, size, defaultIconColor);

		classes = classes
			.filter((cName) => { return !!cName; })
			.map((classV) => styles[classV]).join(' ');
		console.log(orgId, title, sourceFolder);

		dbx.filesListFolder({path: ''})
		.then(function(response) { // eslint-disable-line
			console.log('dbx response is', response);
			let theEntries = response.entries;
			console.log(theEntries);
/*
			let dataToShow = theEntries.map((item, index) => {
					return (
						<div key={index} className={styles.dbItem}>
							<span>{item.name} ({item.path_display})</span>
						</div>
					);
				});
			console.log(dataToShow);
*/
			this.setState({
				dbData: theEntries,
				loading: false
				});
		})
		.catch(function(error) { // eslint-disable-line
			this.setState({loading: false});
			console.error('dbx error is', error);
		});


		return (
			<div className={cx(styles.Files, classes)}>
			{this.state.loading ? 'loading' : 'notloading'}
			{loading ? 'loading' : 'notloading'}
				<div className={styles.filesWrap}>
					<ul>
					{!this.state.dbData ?
						<span>loading content</span>
						:
							this.state.dbData && this.state.dbData.map((item, index) => {
								return (
									<div key={index} className={styles.dbItem}>
										<span>{item.name} ({item.path_display})</span>
									</div>
								);
							})
					}
					</ul>
				</div>
				<Row>
					new thing row
				</Row>
			</div>
		);
	}

	listFiles = () => {
		dbx.filesListFolder({path: ''})
		.then(function(response) { // eslint-disable-line
			console.log('dbx response is', response);
			console.log(response.entries);
			let theEntries = response.entries;
			console.log(theEntries);
			let dataToShow = theEntries.map((item, index) => {
					return (
						<div key={index} className={styles.dbItem}>
							<span>{item.name} ({item.path_display})</span>
						</div>
					);
				});
			console.log(dataToShow);
			this.setState({dbData: theEntries, loading: false});
		})
		.catch(function(error) { // eslint-disable-line
			this.setState({loading: false});
			console.error('dbx error is', error);
		});
	}

	static propTypes = {
		orgId: React.PropTypes.string,
		title: React.PropTypes.string,
		sourceFolder: React.PropTypes.string,
		classNameProps: React.PropTypes.array
	}
}