import type { Preview } from "@storybook/nextjs";
import "tailwindcss/tailwind.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                dark: { name: 'Dark', value:'#000000' },
                light: { name: 'Light', value: '#FFFFFF' }
            }
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    tags: ["autodocs"],

    initialGlobals: {
        backgrounds: {
            value: 'light'
        }
    }
};

export default preview;
