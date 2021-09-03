// import Print from './print';
import _ from 'lodash';

async function createApp() {
	const element = document.createElement('div');

	// const { default: _ } = await import('lodash');

	element.innerHTML = _.join(['Hello', 'Webpack'], '0');

	// element.onclick = Print.bind(null, 'Hell Webpack');

	return element;

	// return import('lodash')
	// 	.then(({ default: _ }) => {
	// 		element.innerHTML = _.join(['Hello', 'Webpack'], '');
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
}

createApp().then((ele) => {
	document.body.appendChild(ele);
});
