import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { SocialMediaLinkList } from './SocialMediaLinkList';

const meta = {
	title: 'components/molecules/list/SocialMediaLinkList',
	component: SocialMediaLinkList,
	parameters: {
		actions: {
			handles: ['mouseover'],
		},
	},
	decorators: [withActions],
	tags: ['autodocs'],
} satisfies Meta<typeof SocialMediaLinkList>;

export default meta;

type Story = StoryObj<typeof SocialMediaLinkList>;

export const Default: Story = {
	render: () => <SocialMediaLinkList />,
};
