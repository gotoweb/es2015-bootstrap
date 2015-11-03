var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: 'build/scripts',
		filename: 'script.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			query: {
				cacheDirectory: true,
				presets: ['es2015']
			}
		}]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
}