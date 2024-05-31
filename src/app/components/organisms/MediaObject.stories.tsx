import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import MediaObject from "./MediaObject";

const meta = {
    title: "components/organisms/MediaObject",
    component: MediaObject,
} satisfies Meta<typeof MediaObject>;

export default meta;

type Story = StoryObj<typeof MediaObject>;

export const Default: Story = {
    args: {
        src: '/images/robot_and_hogeta.jpeg',
        alt: 'MediaObject',
        heading: 'Sample Heading',
        text: 'Sample Text'
    },
};