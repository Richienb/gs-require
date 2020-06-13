// eslint-disable-next-line no-unused-vars
const require = file => {
	if (typeof file !== "string") {
		throw new TypeError(`Expected a string, got ${typeof file}`)
	}

	// eslint-disable-next-line unicorn/consistent-function-scoping
	const isUrl = url => {
		try {
			// eslint-disable-next-line no-new
			new URL(url)
			return true
		} catch (_) {
			return false
		}
	}

	const module = {}
	module.exports = {}
	let exports = {}; // eslint-disable-line prefer-const

	(() => {
		eval(UrlFetchApp.fetch(isUrl(file) ? file : `https://unpkg.com/${file}`).getContentText()) // eslint-disable-line no-eval
	})()

	return Object.is(module.exports, {}) ? exports : module.exports
}
