import type { Meta, StoryObj } from "@storybook/react";
import { XTwitterIcon } from "./XTwitterIcon";

const meta: Meta = {
    title: "components/atoms/icons/XTwitterIcon",
    component: XTwitterIcon,
} satisfies Meta<typeof XTwitterIcon>;

export default meta;

type Story = StoryObj<typeof XTwitterIcon>;

export const XTwitterIconStory: Story = {
    args: {
        size: "100px",
        color: undefined,
    }
}