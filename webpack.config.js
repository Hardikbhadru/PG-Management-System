var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
var config = {
    module: {}
};
module.sorceEnable = false;

returnAll = watchFile => {
    var reactApp = Object.assign({}, config, {
        entry: ["@babel/polyfill", "./react/index.js"],
        watch: watchFile,
        output: {
            path: __dirname,
            filename: "js/simply-react.js",
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(jpg|png)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", '@babel/preset-react'],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    }
                },
                {
                    test: /\.(png|j?g|svg|gif)?$/,
                    use: 'file-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },

                    ]
                },
            ]
        }
    });
    return [
        reactApp
    ];
}
// Return Array of Configurations
module.exports = (env, argv) => {
    let watchFile = false;
    if (argv.mode === "development") {
        watchFile = true;
    }
    return returnAll(watchFile);

};
