var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtoll: debug ? "inline-sourcemap" : null,
    entry: "./src/js/root.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'],
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    }
}
