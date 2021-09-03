const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

const hotMiddlewareScript =
	'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000&reload=true';

module.exports = function (env, argv) {
	return {
		mode: 'development',
		entry: {
			app: ['./src/middleware.js', hotMiddlewareScript],
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			publicPath: '/',
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
			new HtmlWebapckPlugin({
				template: './public/index.html',
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.ProgressPlugin(),
		],
	};
};
