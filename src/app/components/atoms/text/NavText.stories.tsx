import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { NavText } from './NavText';

const meta: Meta<typeof NavText> = {
	title: 'components/atoms/text/NavText',
	component: NavText,
	parameters: {
		actions: {
			handles: ['click'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof NavText>;

export const Default: Story = {
	args: {
		href: '/home',
		text: 'sampletext',
	},
};
