// import uglify from 'rollup-plugin-uglify';

export default {
	input: 'src/base64.js',
	sourceMap: true,
	output: {
		file: 'dist/base64.js',
		format: 'umd'
	}
};
