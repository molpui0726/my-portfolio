import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { GithubIcon } from './GithubIcon';

const meta: Meta = {
	title: 'components/atoms/icons/GithubIcon',
	component: GithubIcon,
	parameters: {
		actions: {
			handles: ['click .btn'],
		},
	},
	decorators: [withActions],
} satisfies Meta<typeof GithubIcon>;

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const GithubIconStory: Story = {};
