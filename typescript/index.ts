import _ from 'lodash';

function createApp() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'Webpack', 'Typescript'], '');

	element.onclick = function() {
		const that = this as HTMLDivElement;
		console.log(that.innerHTML);
	};

	return element;
}

document.body.appendChild(createApp());
