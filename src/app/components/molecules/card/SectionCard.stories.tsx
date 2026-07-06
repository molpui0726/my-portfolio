import { withActions } from 'storybook/actions/decorator';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { SectionCard } from './SectionCard';

const meta: Meta<typeof SectionCard> = {
	title: 'components/molecules/card/SectionCard',
	component: SectionCard,
	parameters: {
		actions: {
			handles: ['mouseover'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof SectionCard>;

export const Default: Story = {
	args: {
		title: 'default title',
		description: 'default description in Storybook',
		linkHref: '/',
	},
};
