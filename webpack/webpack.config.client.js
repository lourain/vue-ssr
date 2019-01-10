const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const VueSSRServerPlugin = require('vue-server-renderer/client-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(__dirname);

module.exports = {
    // target:'node',
    mode: 'development',
    entry: path.resolve(__dirname, '../entry/client-entry.js'),
    devtool: 'source-map',
    output: {
        filename: 'client-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // libraryTarget:'commonjs2'
    },
    devServer:{
        contentBase:"../dist",
        // history
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'development',
            template:path.resolve(__dirname,'../template.html')
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new VueLoaderPlugin(),
        new VueSSRServerPlugin(),
        // new ExtractTextPlugin("styles.css")
    ],
    module: {

        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test:/\.css$/,
                // use:ExtractTextPlugin.extract({
                    use:[
                        {loader:'style-loader'},
                        {loader:'css-loader'}
                    ]
                // })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            
        ]
    }
};