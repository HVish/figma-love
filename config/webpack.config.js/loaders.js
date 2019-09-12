const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const styleRegex = /\.s?css$/;
const styleModuleRegex = /\.module\.s?css$/;

// temporary wrapper function around getCSSModuleLocalIdent until this issue is resolved:
// https://github.com/webpack-contrib/css-loader/pull/965
const getLocalIdentWorkaround = (context, localIdentName, localName, options) => {
    if (options && options.context === null) {
        options.context = undefined;
    }
    return getCSSModuleLocalIdent(context, localIdentName, localName, options);
};

const babelLoader = {
    test: /\.(js|jsx|ts|tsx|mjs)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: [
            [
                require.resolve('babel-plugin-named-asset-import'),
                {
                    loaderMap: {
                        svg: {
                            ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                        },
                    },
                },
            ],
        ],
        cacheDirectory: true,
        cacheCompression: process.env.NODE_ENV === 'production',
        compact: process.env.NODE_ENV === 'production',
    },
};

const styleModuleLoaderClient = {
    test: styleModuleRegex,
    use: [
        require.resolve('css-hot-loader'),
        MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                localsConvention: 'camelCase',
                modules: {
                    // getLocalIdent: getCSSModuleLocalIdent,
                    getLocalIdent: getLocalIdentWorkaround,
                },
                importLoaders: 1,
                sourceMap: generateSourceMap,
                // localIdentName: '[name]__[local]--[hash:base64:5]',
                // getLocalIdent: getCSSModuleLocalIdent,
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
        {
            loader: require.resolve('sass-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const styleLoaderClient = {
    test: styleRegex,
    exclude: styleModuleRegex,
    use: [
        require.resolve('css-hot-loader'),
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
        {
            loader: require.resolve('sass-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const styleModuleLoaderServer = {
    test: styleModuleRegex,
    use: [
        {
            loader: require.resolve('css-loader'),
            options: {
                onlyLocals: true,
                localsConvention: 'camelCase',
                importLoaders: 1,
                modules: {
                    // getLocalIdent: getCSSModuleLocalIdent,
                    getLocalIdent: getLocalIdentWorkaround,
                },
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
        {
            loader: require.resolve('sass-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const styleLoaderServer = {
    test: styleRegex,
    exclude: styleModuleRegex,
    use: [
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        require.resolve('sass-loader'),
    ],
};

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
};

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false,
    },
};

const fileLoaderClient = {
    exclude: [/\.(js|jsx|ts|tsx|s?css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
};

const fileLoaderServer = {
    exclude: [/\.(js|tsx|ts|tsx|s?css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
                emitFile: false,
            },
        },
    ],
};

const client = [
    {
        oneOf: [
            babelLoader,
            styleModuleLoaderClient,
            styleLoaderClient,
            urlLoaderClient,
            fileLoaderClient,
        ],
    },
];
const server = [
    {
        oneOf: [
            babelLoader,
            styleModuleLoaderServer,
            styleLoaderServer,
            urlLoaderServer,
            fileLoaderServer,
        ],
    },
];

module.exports = {
    client,
    server,
};
