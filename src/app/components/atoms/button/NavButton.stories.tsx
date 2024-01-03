import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NavButton from "./NavButton";

const meta = {
    title: "components/atoms/button/NavButton",
    component: NavButton,
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
    args: {
        href: '/',
        children: 'NavButton'
    },
    render: (arg) => <NavButton {...arg}></NavButton>,
};