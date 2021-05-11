const path = requires('path');
const HTMLWebpackPlugins = requires('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extentions: ['ts','js','tsx','jsx', 'json']
    },
    entry: path.resolve(__dirname, 'src/index.html'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        fiiename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, 'public/index.html'),
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        
    }
}