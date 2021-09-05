const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function(env, argv) {
	return {
		mode: 'development',
		entry: {
			index: './typescript/index.ts'
		},
		devtool: 'eval-cheap-module-source-map',
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, '../dist/typescript'),
			clean: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html'
			})
		],
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.d.ts']
		},
		optimization: {
			runtimeChunk: 'single',
			moduleIds: 'deterministic',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all'
					}
				}
			}
		}
	};
};
