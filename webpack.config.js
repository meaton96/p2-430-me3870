require('dotenv').config();
const path = require('path');

module.exports = {
    entry: {
        app: {
            import: './client/App.jsx',
        },
        login: {
            import: './client/login/login.jsx',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
        ],
    },
    mode: process.env.NODE_ENV || 'development',
    devtool: 'source-map', // Avoid eval-based maps
    watchOptions: {
        aggregateTimeout: 200,
    },
    output: {
        path: path.resolve(__dirname, 'hosted/js'),
        filename: '[name]Bundle.js',
        clean: {
            keep: /^(img|styles)/, // Keep 'img' and 'styles' folders
        },
    },
    optimization: {
        splitChunks: false,
    },
    devServer: {
        hot: true,
    },
};