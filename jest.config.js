module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.scss$': 'identity-obj-proxy',
	},
};
