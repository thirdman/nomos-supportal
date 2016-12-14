var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: __dirname + "/src/index.jsx",
	output: {
		path: __dirname + "/public/assets/",
		publicPath: 'localhost:8080/public/',
		contentBase: '/public/',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel?' + JSON.stringify(babelLoaderQuery), 'eslint-loader']},
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]___[local]___[hash:base64:5]!postcss-loader!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true' },
			{ test: /\.png$/, loader: "file-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "raw" },
			{ test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' }
/*
			{
			  test: /\.woff$/,
			  // Inline small woff files and output them below font/.
			  // Set mimetype just in case.
			  loader: 'url',
			  query: {
			    name: 'font/[hash].[ext]',
			    limit: 5000,
			    mimetype: 'application/font-woff'
			  },
			  include: PATHS.fonts
			},
			{
			  test: /\.ttf$|\.eot$/,
			  loader: 'file',
			  query: {
			    name: 'font/[hash].[ext]'
			  },
			  include: PATHS.fonts
			}
*/
		]
	},
	postcss: function (webpack) {
		return [
			require("postcss-import")({ addDependencyTo: webpack }), //handles sass that has @import lines. Triggers webpack when they are changed.
			//precss, 
			//require("postcss-url")(),
			//either use autoprefixer OR cssnext (which includes it)
			//autoprefixer({browsers: ["last 2 version", "ios 6", "android 4"]}),
			require('postcss-cssnext')({ 
				browsers: 'last 2 versions'
			}),
			// add your "plugins" here
			// ...
			// and if you want to compress,
			// just use css-loader option that already use cssnano under the hood
			//require('postcss-modules'),
			require('lost'),
			//require("postcss-browser-reporter")(),
			// require("postcss-reporter")()
		]
	},
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules'
		],
		extensions: ['', '.json', '.js', '.jsx']
	}
};