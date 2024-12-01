import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                { name: 'Dark', value:'#000000' },
                { name: 'Light', value: '#FFFFFF' },
            ],
            default: 'Light',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    tags: ["autodocs"]
};

export default preview;
