const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const path = require('path');

const app = express();
const config = require('./build/webpack.middleware.config')();

const compiler = webpack(config);
app.use(
	webpackHotMiddleware(compiler, {
		heartbeat: 2000,
		log: console.log,
	})
);
app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);

app.use(express.static(config.output.publicPath));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
