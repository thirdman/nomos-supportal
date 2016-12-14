import React from 'react';
import ReactDOM from 'react-dom';
// import ReactRouter from 'react-router';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { Link } from 'react-router';

import {
	App,
	Beach,
	BeachEdit,
	BeachListing,
	Home,
	AdminListing
	} from 'containers';

// <Route path="*" component={AdminListing} status={404} />
// <Route path="/home" component={Home} />
// <Route path="/test" name="test" component={Home} />
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/beach" component={BeachListing} />
			<Route path="/beach/" component={BeachListing} />
			<Route path="/beach/:dataId" component={Beach} />
			<Route path="/beach/:dataId/edit" component={BeachEdit} />
			<Route path="/beach/:dataId/edit/" component={BeachEdit} />
			<Route path="/admin" component={AdminListing} />
			<Route path="*" component={Home} />
		</Route>
	</Router>,
	document.getElementById('root')
);