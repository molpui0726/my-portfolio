import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
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

export const GithubIconStory: Story = {
	args: {
		href: 'https://github.com/YKhm20020',
		src: '/images/icons/github-mark.png',
		alt: 'GithubIcon',
	},
};
