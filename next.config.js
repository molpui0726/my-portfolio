const { plugin } = require('postcss')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )
        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        config.module.rules.unshift({
            test: /pdf\.worker\.(min\.)?js/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[contenthash].[ext]",
                        publicPath: "/_next/static/worker",
                        outputPath: "static/worker",
                    },
                },
            ],
        });
        // Important: return the modified config
        config.module.rules.push({
            test: /\.node/,
            use: "raw-loader",
        });

        return config
    },

}

module.exports = nextConfig;
