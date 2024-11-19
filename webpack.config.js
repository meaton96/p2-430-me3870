const path = require('path');

module.exports = {
    entry: {
        app: {
            import: './client/App.jsx',
        },
        login: {
            import:'./client/login/login.jsx',
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
    mode: 'production',
    watchOptions: {
        aggregateTimeout: 200,
    },
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]Bundle.js',
    },
    optimization: {
        splitChunks: false,
    },
    devServer: {
        hot: true,
    },
};