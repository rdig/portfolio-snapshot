var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('c.js');
var definePlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
});
var LiveReload = require('webpack-livereload-plugin');
var liveReloadPlugin = new LiveReload({ appendScriptTag: true });
var CleanWebpack = require('clean-webpack-plugin');
var CleanWebpackPlugin = new CleanWebpack(['scripts'], { verbose: true, dry: false });


module.exports = [
	{
		entry: {
			'Main App': './sources/main.js',
		},
		output: {
			path: './scripts/',
			publicPath: './scripts/',
			filename: 'p.js'
		},
		module: {
			preLoaders: [
				{
					test: /\.js$/,
					loader: 'eslint-loader',
					exclude: /node_modules/
				}
			],
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'react']
					},
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
				{
					test: /\.(l|s)(e|c|a)ss$/,
					loader: 'style-loader!css-loader!sass-loader',
				},
				{
					test: /\.(jpe?g|png|gif|svgz?)(?:\?.*|)$/,
					loader: 'file-loader?limit=4096&name=../static/media/[hash:24].[ext]',
				},
				{
					test: /\.(ttf|woff2?|eot|svg)(?:\?.*|)$/,
					loader: 'file-loader?name=../static/fonts/[hash:24].[ext]'
				}
			]
		},
		resolve: {
			root: '/',
			extensions: ['','.js']
		},
		plugins: [commonsPlugin, liveReloadPlugin, CleanWebpackPlugin, definePlugin],
		eslint: {
			configFile: './eslint-rules.json'
		}
	}
];
