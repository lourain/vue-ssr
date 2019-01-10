const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

console.log(__dirname);

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.resolve(__dirname, '../entry/serve-entry.js'),
    devtool: 'source-map',
    output: {
        filename: 'serve-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'commonjs2',
        // globalObject:"this",  
    },
    // externals: nodeExternals({
    //     // 不要外置化 webpack 需要处理的依赖模块。
    //     // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    //     // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    //     whitelist: /\.css$/
    // }),
    plugins: [
        new CleanWebpackPlugin(['../dist']),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'template.html')
        // }),
        new VueLoaderPlugin(),
        new VueSSRServerPlugin()
    ],
    module: {

        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    }
};