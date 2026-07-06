// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-onboarding",
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
        "@chromatic-com/storybook",
        "@storybook/addon-docs"
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
