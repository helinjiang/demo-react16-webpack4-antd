const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        // port: 9001,
        hot: true,
        inline: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|svgz)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name]_[hash:8].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
};