import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
    title: "components/organisms/Modal",
    component: Modal,
} satisfies Meta<typeof Modal>
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        open: true,
        title: 'Sample Title',
        src: '/images/robot_and_hogeta.jpeg',
        alt: 'Modal',
        text: 'Sample Text'
    },
};