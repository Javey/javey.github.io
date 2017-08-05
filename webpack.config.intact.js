var webpack = require('webpack');
var path = require('path');

var root = process.cwd();

module.exports = {
    entry: {
        'buddle': './intact/main.js'
    },
    output: {
        path: path.resolve(root, './dist'),
        filename: '[name].js',
        chunkFilename: 'static/chunk/[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(root, '.cache'),
                            presets: ['es2015'],
                            plugins: ['add-module-exports']
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
                            plugins: ['add-module-exports']
                        }
                    },
                    {
                        loader: 'vdt-loader',
                        options: {
                            delimiters: ['{{', '}}'],
                            skipWhitespace: true
                        }
                    },
                ]
            },
            {
                test: /\.(styl|css)$/,
                loader: 'style-loader!css-loader!stylus-loader?include css'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vdt']
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    recordsInputPath: root + '/.cache/recordsInputPath.json',
    recordsOutputPath: root + '/.cache/recordsOutputPath.json',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks: 3
        }),
        // new webpack.optimize.UglifyJsPlugin({
            // compress: {
                // warnings: false
            // }
        // })
    ],
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};
