import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { XTwitterIcon } from './XTwitterIcon';

const meta: Meta = {
	title: 'components/atoms/icons/XTwitterIcon',
	component: XTwitterIcon,
	parameters: {
		actions: {
			handles: ['click .btn'],
		},
	},
	decorators: [withActions],
} satisfies Meta<typeof XTwitterIcon>;

export default meta;

type Story = StoryObj<typeof XTwitterIcon>;

export const XTwitterIconStory: Story = {};
