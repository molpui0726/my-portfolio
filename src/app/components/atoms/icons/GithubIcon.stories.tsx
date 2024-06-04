import type { Meta, StoryObj } from "@storybook/react";
import { GithubIcon } from "./GithubIcon";

const meta: Meta = {
    title: "components/atoms/icons/GithubIcon",
    component: GithubIcon,
} satisfies Meta<typeof GithubIcon>;

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const GithubIconStory: Story = {
    args: {
        size: "100px",
        color: undefined,
    }
}