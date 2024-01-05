import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WorkCard from "./WorkCard";

const meta = {
    title: "components/molecules/card/WordCard",
    component: WorkCard,
} satisfies Meta<typeof WorkCard>;

export default meta;

type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
    args: {
        src: "/images/robot_and_hogeta.jpeg",
        alt: 'sample-alt',
        workTitle: 'workTitle',
        knowledge: 'knowledge'
    },
    render: (arg) => <WorkCard {...arg}></WorkCard>,
};