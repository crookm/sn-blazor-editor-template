const {resolve} = require("path");

module.exports = {
    context: __dirname,
    entry: [resolve(__dirname, "src/index.js"), resolve(__dirname, "src/stylesheet.scss")],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    output: {
        path: resolve(__dirname, "../wwwroot/bundle"), filename: "vendor.min.js", library: "vendor"
    }
};