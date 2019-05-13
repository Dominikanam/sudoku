const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: 'index.html',
		inject: 'body'
	})
];


module.exports = (env = 'production') => {
	if (env === 'production') {
        plugins.push(
            new OptimizeJsPlugin({
                sourceMap: false
            })
        )
    }

	return {
		mode: env,
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: `app.${env}.bundle.js`
		},
		plugins,
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: "babel-loader",
					options: {
						plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
					}
				},
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader'},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/,
					use: [
					  {
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name].[ext]'
						}
					  }
					]
				},
			]
		}
	};
};