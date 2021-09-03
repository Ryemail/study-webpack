import { date, test } from './test';
import { createHeader } from './component/header';
import yaml from './assets/data.yaml';
import toml from './assets/data.toml';
import json from './assets/data.json5';

import './styles/index.css';

function createRootElement() {
	const app = document.querySelector('#app');

	if (app) return app;

	const el = document.createElement('div');

	el.id = 'app';

	return el;
}

function createApp() {
	const root = createRootElement();

	root.innerHTML = '千江有水千江月 万里无云万里天';

	root.innerHTML = root.innerHTML;

	document.body.appendChild(root);

	const dateEl = document.createElement('div');

	root.appendChild(dateEl);

	console.log(json, yaml);

	date(function () {
		dateEl.innerHTML = '<div class="date">' + new Date() + '</div>';
	});
}

createApp();
createHeader();

if (module.hot) {
	module.hot.accept();
}
