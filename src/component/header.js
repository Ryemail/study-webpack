import yaml from '../assets/data.yaml';

export function createHeader() {
	const header = document.querySelector('header');

	const style = 'padding-left:10px';

	header.innerHTML =
		'<span style=' + style + '>' + yaml.owner.name + '</span>';
}
