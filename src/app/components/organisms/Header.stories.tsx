import type { Meta, StoryObj } from '@storybook/react';
import * as NavButtonStories from '@/components/atoms/button/NavButton.stories';
import Header from './Header';

const meta = {
	title: 'components/organisms/Header',
	component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
	args: {
		...NavButtonStories.Default.args,
	},
};
