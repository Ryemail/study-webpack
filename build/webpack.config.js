const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

// module.exports = {
// 	mode: 'production',
// 	entry: {
// 		index: './src/index.js',
// 	},
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: '[name].[hash].js',
// 	},
// 	plugins: [new webpack.ProgressPlugin()],
// };

module.exports = function (env, argv) {
	return {
		mode: 'development',
		entry: {
			index: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			publicPath: '/',
		},
		devServer: {
			// open: true,
			// client: {
			// 	logging: 'info',
			// 	overlay: true,
			// 	progress: true,
			// },
			static: './dist',
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: false,
							// drop_console: argv.mode === 'production',
						},
					},
				}),
			],
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|svg|jpe?g|gif)$/,
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					type: 'asset/resource',
				},
				{
					test: /\.json5$/,
					type: 'json',
					parser: {
						parse: json5.parse,
					},
				},
				{
					test: /\.yaml$/,
					type: 'json',
					parser: {
						parse: yaml.parse,
					},
				},
				{
					test: /\.toml$/,
					type: 'json',
					parser: {
						parse: toml.parse,
					},
				},
			],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new HtmlWebapckPlugin({
				template: './public/index.html',
			}),
		],
	};
};
