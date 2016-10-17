export default {
	entry: './public/App.js',
	output: {
		path: '.public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}
		]
	}
};