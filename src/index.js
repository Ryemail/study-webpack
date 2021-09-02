import { date } from './test';
import yaml from './assets/data.yaml';
import toml from './assets/data.toml';
import json from './assets/data.json5';

import './styles/index.css';

const el = document.createElement('div');

el.innerHTML = '千江有水千江月';

const dateEl = document.createElement('div');

document.body.appendChild(el);

el.appendChild(dateEl);

// console.log(json, yaml, toml);

date(function () {
	dateEl.innerHTML = '<div class="date">' + new Date() + '</div>';
});
