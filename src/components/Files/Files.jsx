import React, {Component} from 'react';
import cx from 'classnames';
import {
	Button,
	Column,
	Icon,
	LoadingAnimation,
	Row,
	Section
} from 'components';
// import entriesData from './entries.js';

const styles = require('./Files.scss');
const Dropbox = require('dropbox');
const Dropzone = require('react-dropzone');

const dbx = new Dropbox({
	accessToken: 'RPztR549R2QAAAAAAAAV62tQfqtCHPREklMFN_9qlGbfPy1IOI9vFSlHrml7EndF'
	});

export default class Files extends Component {
	// state = {
		// loading: true
	// }

	componentWillMount() {
		this.setupPage();
	}

	componentDidMount() {
		this.listFiles();
	}

	render() {
		const { loading, dbData } = this.state;
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
		// console.log('hard coded entries is: ', entriesData.entriesData.entries);
		// const tempData = entriesData.entriesData.entries;
		// console.log('tmp data is: ', tempData);
		return (
			<div className={cx(styles.Files, classes)}>
				<div className={styles.filesWrap}>
					<ul>
					{!dbData ?
						<LoadingAnimation />
						:
						<span>{dbData && dbData.map((item, index) => {
							const isFile = item.size;
									return (
										<div
										key={index}
										className={cx(styles.fileItem, isFile ? styles.file : styles.folder)}
										>
											<Row>
												<Column occupy={8}>
													<div className={styles.nameWrap}>
														{isFile ?
															<span className={styles.fileIconWrap} >
																<Icon icon="file-clean" size={20} color="black" />
															</span>
															:
															<span className={styles.fileIconWrap}>
																<Icon icon="folder" size={20} color="blue" />
															</span>
														}
														<div className={styles.fileName}>{item.name}</div>
													</div>
												</Column>
												<Column occupy={4}>
													{isFile ?
														<span className={styles.fileSize}>
															{this.formatBytes(item.size, 1)}
														</span>
														: null
													}
												</Column>
											</Row>
										</div>
									);
								})
						}</span>
					}
					</ul>
				</div>
				{!loading ?
					<Row>
						<Column>
							<Section title="Upload Files:" />
								<div>
									<Dropzone
										ref={(node) => { this.dropzone = node; }}
										onDrop={this.onDrop}
										style={{width: '100%'}}
										className={cx(styles.dropzone,
											this.state.uploading ? styles.uploadingActive : '')}
										>
											{this.state.uploading ?
												<span>uploading</span>
												:
												<div>
													<div className={styles.uploadIconWrap}>
														<Icon icon="upload" size={40} color="grey" />
													</div>
													<div>Drag & Drop files here, or <br /><br />
														<Button content="click to select" onClickProps={this.onOpenClick} />
													</div>
												</div>
											}
									</Dropzone>
									{this.state.files && this.state.files.length > 0 ?
										<div>
											<h2>Uploading {this.state.files && this.state.files.length} files...</h2>
											<div>
												{this.state.files.map(
													(file) => <img
														src={file.preview}
														role="presentation"
														className={styles.filePreview}
														/>)
												}
											</div>
										</div>
										: null
									}
								<div id="results" />
								</div>
						</Column>
					</Row>
					: null
				}
			</div>
		);
	}
	setupPage = () => {
		this.setState({
			loading: true,
			gareth: 'iscool'
		});
	}

	doData = (data) => {
		console.log('dodata data is: ', data);
		let entriesinfo = data.entries.map((item) => {
			console.log('entriesinfo.irem is: ', item);
			return (item);
		});
		console.log('entriesinfo', entriesinfo);
		this.setState({
			loading: false,
			gareth: 'isVeryVerycool',
			dbData: entriesinfo
		});
	}

	listFiles = () => {
		const { dbData } = this.state;
		console.log('dbData is : ', dbData);

		dbx.filesListFolder({path: '/nomosSupportal'})
		.then((data) => this.doData(data))
		.catch((error) => {
			this.setState({loading: false});
			console.error('dbx error is', error);
		});

		console.log('got to the end of the function');
	}

	onDrop = (files) => {
		console.log('Received files: ', files);
		this.setState({
			files,
			uploading: true
		});
		let theFile = files[0];
		dbx.filesUpload({path: '/nomosSupportal/' + theFile.name, contents: theFile})
			.then((response) => {
				const resultsDiv = document.getElementById('results');
				resultsDiv.appendChild(document.createTextNode('File uploaded!'));
				console.log('dbx response is', response);
				this.setState({
					files: '',
					uploading: false
				},
					() => this.listFiles()
				);
			})
			.catch((error) => {
				console.error(error);
			});
  }

	onOpenClick = () => {
		this.dropzone.open();
	}

	formatBytes = (bytes, decimals) => {
		if (bytes === 0) return '0 Byte';
		const k = 1000; // or 1024 for binary
		const dm = decimals + 1 || 3;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		let i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}

	static propTypes = {
		orgId: React.PropTypes.string,
		title: React.PropTypes.string,
		sourceFolder: React.PropTypes.string,
		classNameProps: React.PropTypes.array
	}
}
/*
		// ------
		dbx.filesListFolder({path: '/nomosSupportal'})
		.then(function(response) { // eslint-disable-line
			console.log('dbx response is', response);
			let theEntries = response.entries;
			console.log(theEntries);
				this.setState({
					dbData: theEntries,
					ggg: 'abc',
					loading: false
				}, function () {
					console.log('this.state: ', this.state);
				});

			return (
				this.setState({
					dbData: theEntries,
					ggg: 'abc',
					loading: false
				}, function () {
        console.log('this.state: ', this.state);
				})
			);
		})
		.catch(function(error) { // eslint-disable-line
			this.setState({loading: false});
			console.error('dbx error is', error);
		});
*/
/*
uploadFile = () => {
	// var ACCESS_TOKEN = document.getElementById('access-token').value;
	// var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
	let fileInput = document.getElementById('file-upload');
	let file = fileInput.files[0];
	dbx.filesUpload({path: '/' + file.name, contents: file})
		.then((response) => {
		const resultsDiv = document.getElementById('results');
		resultsDiv.appendChild(document.createTextNode('File uploaded!'));
		console.log('dbx response is', response);
		})
		.catch((error) => {
			console.error(error);
		});
		return false;
	}
*/