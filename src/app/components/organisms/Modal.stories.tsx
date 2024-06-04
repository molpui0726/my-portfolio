import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withActions } from '@storybook/addon-actions/decorator';
import { Modal } from "./Modal";

const meta = {
    title: "components/organisms/Modal",
    component: Modal,
    decorators: [withActions],
} satisfies Meta<typeof Modal>

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        isModalOpen: true,
        src: '/images/robot_and_hogeta.jpeg',
        alt: 'Modal',
        modalTitle: 'Sample Title',
        modalText: 'Sample Text',
    },
};