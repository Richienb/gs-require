// eslint-disable-next-line no-unused-vars
const require = file => {
	if (typeof file !== "string") {
		throw new TypeError(`Expected a string, got ${typeof file}`)
	}

	// From https://github.com/sindresorhus/is-url-superb/blob/6f77cc61abba9aa1bd03e10adc8a0b9a4dcb18ea/index.js and https://github.com/kevva/url-regex/blob/7313fb08c70a48b3dbd7d5816042273e8c2e63ff/index.js
	// eslint-disable-next-line unicorn/consistent-function-scoping
	const isUrl = url => /(?:^(?:(?:(?:[a-z]+:)?\/{2})|w{3}\.)(?:\S+(?::\S*)?@)?(?:localhost|(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)){3}|(?:[a-z\u00A1-\uffff\d][-_]*)*[a-z\u00a1-\uffff\d]+(?:\.(?:[a-z\u00a1-\uffff\d]-*)*[a-z\u00a1-\uffff\d]+)*\.[a-z\u00a1-\uffff]{2,}\.?)(?::\d{2,5})?(?:[/?#][^\s"]*)?$)/i.test(url)

	const module = {}
	module.exports = {}
	let exports = {}; // eslint-disable-line prefer-const

	(() => {
		eval(UrlFetchApp.fetch(isUrl(file) ? file : `https://unpkg.com/${file}`).getContentText()) // eslint-disable-line no-eval
	})()

	return Object.is(module.exports, {}) ? exports : module.exports
}
