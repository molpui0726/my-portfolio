import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                rules: [
                    // Replaces existing CSS rules to support PostCSS
                    {
                        test: /\.css$/,
                        use: [
                            "style-loader",
                            {
                                loader: "css-loader",
                                options: { importLoaders: 1 },
                            },
                            {
                                // Gets options from `postcss.config.js` in your project root
                                loader: "postcss-loader",
                                options: {
                                    implementation: require.resolve("postcss"),
                                },
                            },
                        ],
                    },
                ],
            },
        },
        "@chromatic-com/storybook"
    ],

    framework: {
        name: "@storybook/nextjs",
        options: {},
    },

    features: { experimentalRSC: true },

    staticDirs: ["../public"],

    docs: {},

    webpackFinal: async (config) => {
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        // This modifies the existing image rule to exclude .svg files
        // since you want to handle those files with @svgr/webpack
        const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
        if (imageRule) {
            imageRule['exclude'] = /\.svg$/;
        }

        // Configure .svg files to be loaded with @svgr/webpack
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;
