import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import NavButton from './NavButton';

const meta = {
	title: 'components/atoms/button/NavButton',
	component: NavButton,
	parameters: {
		actions: {
			handles: ['mouseover', 'click .btn'],
		},
	},
	decorators: [withActions],
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
	args: {
		href: '/',
		children: 'NavButton',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// hover時のテスト
		await userEvent.hover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).toHaveClass('link-hover');
		// unhover時のテスト
		await userEvent.unhover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).not.toHaveClass('link-hover');
	},
};
