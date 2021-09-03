const path = require('path');

module.exports = function (env) {
	console.log(env);
	return {
		mode: 'production',
		entry: './library/index.js',
		output: {
			path: path.join(__dirname, '..', '/dist/library'),
			filename: '[name].js',
			clean: true,
			library: {
				type: 'umd',
				name: 'numbers',
			},
		},
		externals: {
			lodash: {
				commonjs: 'lodash',
				commonjs2: 'lodash',
				amd: 'lodash',
				root: '_',
			},
		},
	};
};
