import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withActions } from '@storybook/addon-actions/decorator';
import NavButton from "./NavButton";

const meta = {
    title: "components/atoms/button/NavButton",
    component: NavButton,
    parameters: {
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
    },
    decorators: [withActions],
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
    args: {
        href: '/',
        children: 'NavButton'
    },
    render: (args) => <NavButton {...args}></NavButton>,
};