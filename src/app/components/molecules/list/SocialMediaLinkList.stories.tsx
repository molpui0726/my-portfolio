import type { Meta, StoryObj } from '@storybook/nextjs';
import { withActions } from 'storybook/actions/decorator';
import { SocialMediaLinkList } from './SocialMediaLinkList';

const meta: Meta<typeof SocialMediaLinkList> = {
	title: 'components/molecules/list/SocialMediaLinkList',
	component: SocialMediaLinkList,
	parameters: {
		actions: {
			handles: ['mouseover'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof SocialMediaLinkList>;

export const Default: Story = {
	render: () => <SocialMediaLinkList />,
};
