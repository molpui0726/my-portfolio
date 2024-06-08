import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { NavText } from './NavText';

const meta: Meta = {
	title: 'components/atoms/text/NavText',
	component: NavText,
	parameters: {
		actions: {
			handles: ['click'],
		},
	},
	decorators: [withActions],
} satisfies Meta<typeof NavText>;

export default meta;

type Story = StoryObj<typeof NavText>;

export const Default: Story = {
	args: {
		href: '/home',
		text: 'sampletext',
	},
};
