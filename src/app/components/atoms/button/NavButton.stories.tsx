import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import NavButton from './NavButton';

const meta = {
    title: "components/button/NavButton",
    component: NavButton,
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
    args: {
        href: '/',
    },
    render: (arg) => <NavButton {...arg}>Button</NavButton>,
};