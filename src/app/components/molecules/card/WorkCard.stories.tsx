import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withActions } from '@storybook/addon-actions/decorator';
import { WorkCard } from "./WorkCard";

const meta = {
    title: "components/molecules/card/WordCard",
    component: WorkCard,
    parameters: {
        actions: {
            handles: ["mouseover"],
        },
    },
    decorators: [withActions],
} satisfies Meta<typeof WorkCard>;

export default meta;

type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
    args: {
        src: "/images/robot_and_hogeta.jpeg",
        alt: "sample-alt",
        workTitle: "workTitle",
        techs: ["tech1", "tech2", "tech3"],
    },
};