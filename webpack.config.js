var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');

var paths = {
    src: './src/',
    dist: './'
};

module.exports = {
    entry: {
        'vtree': paths.src + 'vtree.js'
    },
    output: {
        path: paths.dist,
        publicPath: paths.dist,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.less'],
        alias: {
            'src': path.resolve(__dirname, '')
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel',
            query: {
                compact: false
            }
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.less$/,
            loader: 'less-loader!css-loader!less-loader'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};