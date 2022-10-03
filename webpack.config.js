const path = require('path');

let config = {
	mode: '',
	entry: './src/index.js',

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};

const build = {
	filename: 'build.js',
	path: path.resolve(__dirname, 'build'),
};

const distribute = {
	filename: 'main.js',
	path: path.resolve(__dirname, 'dist'),
};

const devServer = {
	static: {
		directory: path.resolve(__dirname, 'build'),
	},
	port: 3003,
	open: true,
	hot: true,
	compress: true,
	historyApiFallback: true,
};

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.output = build;
    config.devServer = devServer
	} else {
		config.output = distribute;
	}

	return config;
};
