module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-max-line-length': [2, 'always', 140],
		'footer-max-line-length': [2, 'always', 140],
		'header-max-length': [2, 'always', 140]
	}
};
