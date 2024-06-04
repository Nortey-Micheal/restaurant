const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    devServer: {
        watchFiles: ["src/index.html","src/index.css"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "LA RATATOUILLE",
            template: "./src/index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|avif|webp)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|twoff)$/i,
                type: "assest/resource",
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};