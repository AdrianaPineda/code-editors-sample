const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    entry: './src/index',
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // devServer: {
    //     contentBase: "./public",
    //     hot: true
    // },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: "url-loader",
                    // this loader will convert the files into a base64 format
                    // and will embed it into the js code (inline)
                    // not recommended for big files
                    options: {
                        limit: 90000 // max bytes supported
                    }
                }
            }
            // {
            //     test: /\.(png|j?g|svg|gif)?$/,
            //     use: 'file-loader'
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./public/index.html"
        }),
        new MonacoWebpackPlugin()
    ]
};