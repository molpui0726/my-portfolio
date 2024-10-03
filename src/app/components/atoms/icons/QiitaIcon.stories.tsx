import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { QiitaIcon } from './QiitaIcon';

const meta: Meta = {
	title: 'components/atoms/icons/QiitaIcon',
	component: QiitaIcon,
	parameters: {
		actions: {
			handles: ['click .btn'],
		},
	},
	decorators: [withActions],
} satisfies Meta<typeof QiitaIcon>;

export default meta;

type Story = StoryObj<typeof QiitaIcon>;

export const QiitaIconStory: Story = {};
