const VueLoaderPlugin = require('vue-loader/lib/plugin')
var path = require('path');

module.exports = {
    entry: {
        app: './app/app.js'
    },
    output: {
        path: path.resolve('static'),
        filename: "bundle.js",
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts', '.tsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}