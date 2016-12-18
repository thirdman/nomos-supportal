class RouteHelper {
	nextPath = '';

	updateNextPath(nextPath = '') {
		console.log('got to updating next path...');
		this.nextPath = nextPath;
	}

	clear() {
		this.nextPath = '';
	}
}

export default new RouteHelper();