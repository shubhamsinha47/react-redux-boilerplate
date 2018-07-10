const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		"project-bundle": "./Components/index.js",
	},
	output: {
        filename: "./js/[name].js"
	},
  	devServer: {
		contentBase: "./public",
		hot: true,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|server.js)/,
				loader: 'babel-loader',
				query: {                 
		            presets: ['react', 'es2015', 'stage-3']
		        }
			},
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
		]
	},
	// uncomment this if you need the production build.
	// plugins: [
    //    new ExtractTextPlugin('./css/main.css', {
    //        allChunks: true
    //    }),
    //    new webpack.optimize.DedupePlugin(),
    //	new webpack.optimize.UglifyJsPlugin({
	//      	minimize: true,
	//      	compress: {
	//        	warnings: false
	//      	}
    //	}),
    //	new webpack.DefinePlugin({
    //  		'process.env': {
    //    		'NODE_ENV': JSON.stringify('production')
    //  		}
    //	})
    //]
};