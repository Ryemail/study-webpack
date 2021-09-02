export function test() {
	return {
		id: Date.now(),
	};
}

export function date(callback) {
	window.requestAnimationFrame(() => {
		callback && callback();

		date(callback);
	});
}
