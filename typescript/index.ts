import _ from 'lodash';

function createApp() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'Webpack'], '0');

	return element;
}

document.body.appendChild(createApp());
