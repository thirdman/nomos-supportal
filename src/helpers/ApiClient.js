import superagent from 'superagent';
// import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];
const supportalStorage = JSON.parse(localStorage.getItem('nomosSupportal')) || [];
const user = supportalStorage.user;

/*
 *  If we are on client, append /api so when the request get to the server,
 *	it knows and proxy the request to api server
 */
function formatUrl(path) {
	const adjustedPath = path[0] !== '/' ? '/' + path : path;
	const isServer = true;
/*
	if (__SERVER__) {
		// Prepend host and port of the API server to the path.
		if (process.env.MODE === 'local') {
			return config.apiHost + ':' + process.env.APIPORT + adjustedPath;
		} else {
			return config.apiHost + adjustedPath;
		}
	}
*/
		if (isServer) {
			return 'https://dev-api.nomosone.com/v1' + adjustedPath;
		}
	// Prepend `/api` to relative URL, to proxy to API server.
	return '/v1' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious
 * "ReferenceError: ApiClient is not defined" error
 * Remove it at your own risk.
 */
class _ApiClient {
	jwt = null;
	constructor(req) { // eslint-disable-line
		methods.forEach((method) => // eslint-disable-line
			this[method] = (path, { params, data, headers } = {}) => new Promise((resolve, reject) => {
				const request = superagent[method](formatUrl(path));
				// console.log('* client request: ', request);
				// if header are supplied, set header
				// console.log('* client headers:', headers);
				if (headers && headers.length) {
					headers.map(({tag, value}) => { // eslint-disable-line
						request.set(tag, value);
					});
				}
				// request.set('Content-Type', 'text/plain');
				// always set authorisation header if we have jwt
				if (this.jwt) {
					request.set('authorization', this.jwt);
				}
				if (user) {
					// console.log('* client user: ', user);
					request.set('authorisation', user.authorization);
				}
				// if params are supplied, send with params
				if (params) { request.query(params); }
				// if data are supplied, send with data
				if (data) { request.send(data); }
				// if on server and the req has cookie, set cookie
				// if (__SERVER__ && req.get('cookie')) {
					// request.set('cookie', req.get('cookie'));
				// }
				// console.log(req); // logged here to stop error
				request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body)); // eslint-disable-line
			})
		);
	}

	setJwt(token) {
		this.jwt = token;
	}
}

const ApiClient = _ApiClient;

export default new ApiClient();
