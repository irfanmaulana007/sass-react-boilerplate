const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extract css to files
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer"); // help tailwindcss to work
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

// Init Plugin
const progressPlugin = new webpack.ProgressPlugin();

const copyWebpackPlugin = new CopyWebpackPlugin({
    patterns: [
        {
            from: "./src/assets/**",
            to: "assets",
            globOptions: {
                ignore: ["*.DS_Store"],
            },
        },
    ],
});

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    title: "SASS Boilerplate",
    favicon: "./src/assets/icons/favicon.ico",
    template: "./src/index.html",
    filename: "./index.html",
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "styles.css",
    chunkFilename: "styles.css",
});

const cleanWebpackPlugin = new CleanWebpackPlugin({
    cleanStaleWebpackAssets: true,
    cleanOnceBeforeBuildPatterns: ['./js/build/*','./css/build/*']
});

const dotenv = new Dotenv({
    path: "./.env.local",
});

module.exports = {
    mode: "development",

    // // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'assets'),
            publicPath: '/assets'
        },
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: {
                warnings: true,
                errors: true,
            },
        }
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, "src/assets/"),
            Components: path.resolve(__dirname, "src/components/"),
            Containers: path.resolve(__dirname, "src/containers/"),
            Fakedatas: path.resolve(__dirname, "src/fakedatas/"),
            Helpers: path.resolve(__dirname, "src/helpers/"),
            Services: path.resolve(__dirname, "src/services/"),
            Store: path.resolve(__dirname, "src/store/"),
            Views: path.resolve(__dirname, "src/views/"),
            Root: path.resolve(__dirname, "src/"),
        },
    },
    devtool: 'inline-source-map',
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                // look for .js or .jsx files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg|ico)$/,
                use: {
                    loader: "file-loader"
                }
            },
            {
                // look for .css or .scss files
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "postcss-loader", // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        progressPlugin,
        copyWebpackPlugin,
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        cleanWebpackPlugin,
        dotenv,
    ],
};
