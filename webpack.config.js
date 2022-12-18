'use strict';

let path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin(),
        ];
    }

    return config;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'docs') 
    },
    plugins: [
        new HTMLWebpackPlugin({ 
                filename: 'index.html',    
                template: './index.html',
                minify: {
                    collapseWhitespace: isProd,
                    removeComments: isProd 
                }
        }),
        new HTMLWebpackPlugin({
            filename: 'portfolio.html',
            template: './portfolio.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'project.html',
            template: './project.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'nailstudio.html',
            template: 'pages/nailstudio.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'readbooks.html',
            template: 'pages/readbooks.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'interfaceapp.html',
            template: 'pages/interfaceapp.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'conceptcar.html',
            template: 'pages/conceptcar.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'hrevents.html',
            template: 'pages/hrevents.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'evacuator.html',
            template: 'pages/evacuator.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'creditbank.html',
            template: 'pages/creditbank.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'ipzone.html',
            template: 'pages/ipzone.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'makeupstore.html',
            template: 'pages/makeupstore.html',
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'shoplist.html',
            template: 'pages/shoplist.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'saidingmarket.html',
            template: 'pages/saidingmarket.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'roxlab.html',
            template: 'pages/roxlab.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'portfolioblue.html',
            template: 'pages/portfolioblue.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images/icon'),
                    to: path.resolve(__dirname, 'docs/images/icon')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false, 
                        },
                    },
                    "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            optipng: {
                                
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 70
                            }
                            }
                        },
                    },
                    ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    }
                    ]
            }
        ]
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    }
};