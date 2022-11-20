const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    context: __dirname, entry: [path.resolve(__dirname, "src/index.js"), path.resolve(__dirname, "src/stylesheet.scss")], module: {
        rules: [{
            test: /\.(js|jsx)$/, exclude: /node_modules/, use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.s[ac]ss$/i, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, "css-loader", {
                loader: "sass-loader"
            },],
        }]
    }, output: {
        path: path.resolve(__dirname, "../wwwroot/bundle"), filename: "vendor.min.js", library: "vendor"
    }, plugins: [new MiniCssExtractPlugin({
        filename: "styles.min.css"
    }),], optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                map: {
                    inline: false, annotation: true,
                },
            },
        }),],
    }
};