import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
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

export const XTwitterIconStory: Story = {
	args: {
		href: 'https://x.com/Hogeta_KL',
		src: '/images/icons/XTwitter-logo-black.png',
		alt: 'XTwitterIcon',
	},
};
