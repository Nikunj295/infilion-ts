const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: process.env.NODE_ENV ?? 'development',
	entry: {
		index: './src/index.tsx',
	},
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', 'scss'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: resolve(__dirname),
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css',
		}),
	],
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		stats: 'errors-only',
		overlay: true,
	},
};

module.exports = config;
