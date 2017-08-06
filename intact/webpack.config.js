var webpack = require('webpack');
var path = require('path');

var root = process.cwd();

module.exports = {
    entry: {
        'buddle': './main.js'
    },
    output: {
        path: path.resolve(root, './dist'),
        filename: '[name].js',
        chunkFilename: 'static/chunk/[chunkhash].js',
        publicPath: '/dist/'
    },
    devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(root, '.cache'),
                            presets: [['es2015', {"loose": true}]],
                            plugins: [
                                'add-module-exports',
                                "transform-remove-strict-mode"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.vdt$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(root, '.cache'),
                            presets: ['es2015'],
                        }
                    },
                    {
                        loader: 'vdt-loader',
                        options: {
                            delimiters: ['{', '}'],
                            skipWhitespace: true
                        }
                    },
                ]
            },
            {
                test: /\.(styl|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            'include css': true
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vdt'],
        mainFields: ['module', 'browserify', 'browser', 'main']
    },
    recordsInputPath: root + '/.cache/recordsInputPath.json',
    recordsOutputPath: root + '/.cache/recordsOutputPath.json',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks: 3
        }),
        new webpack.ProvidePlugin({
            Intact: 'intact',
            $: 'jquery'
        }),
        // new webpack.optimize.UglifyJsPlugin({
            // compress: {
                // warnings: false
            // }
        // })
    ],
    devServer: {
        contentBase: './',
        port: 9000
    }
};
