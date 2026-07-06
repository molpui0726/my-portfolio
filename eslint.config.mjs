import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        ignores: [
            ".next/**",
            "node_modules/**",
            "storybook-static/**",
            "out/**",
        ],
    },
    ...compat.extends("next/core-web-vitals", "plugin:storybook/recommended"),
];

export default eslintConfig;
