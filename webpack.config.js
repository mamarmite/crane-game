const path = require('path');

const config = {
    mode: 'development',
    entry: [
        './src/engine.js'
    ],
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/game/scripts',
        filename: 'crane-game.js'
    },
    resolve: {
        extensions: ['.js']
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'game'),
        },
        compress: true,
        port: 9000,
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 600
    }
}
module.exports = config;