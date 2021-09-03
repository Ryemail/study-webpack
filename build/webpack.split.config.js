const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (env, argv) {
	return {
		mode: 'development',
		entry: {
			index: './split/index.js',
			// another: './split/another.js',
		},
		devtool: 'eval-cheap-module-source-map',
		// entry: {
		// 	shared: 'lodash',
		// 	index: {
		// 		import: './split/index.js',
		// 		dependOn: 'shared',
		// 	},
		// 	another: {
		// 		import: './split/another.js',
		// 		dependOn: 'shared',
		// 	},
		// },
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, '../dist/split'),
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
		],
		optimization: {
			runtimeChunk: 'single',
			moduleIds: 'deterministic',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
	};
};
