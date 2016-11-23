'use strict';

var path = require('path');

module.exports = {
	context: __dirname,
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
};
