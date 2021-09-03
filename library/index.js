import _ from 'lodash';
import data from './data.json';

export function numToWord(num) {
	return _.reduce(
		data,
		(prev, curr) => {
			return curr.num === num ? curr.word : prev;
		},
		''
	);
}

export function wordToNum(word) {
	return _.reduce(
		data,
		(prev, curr) => {
			return curr.word === word ? curr.num : prev;
		},
		-1
	);
}
