const path = require('path');

module.exports = {
    entry: {
        app: {
            import: './client/App.jsx',
            dependOn: 'shared',
        },
        login: {
            import:'./client/login/login.jsx',
            dependOn: 'shared',
        },
        // battle: './client/battle.jsx',
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
        splitChunks: {
            chunks: 'all', 
        },
    },
    devServer: {
        hot: true,
    },
};