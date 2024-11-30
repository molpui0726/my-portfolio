import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { CommonButton } from './CommonButton';

const meta: Meta<typeof CommonButton> = {
	title: 'components/atoms/button/CommonButton',
	component: CommonButton,
	parameters: {
		actions: {
			handles: ['mouseover', 'click .btn'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof CommonButton>;

export const Default: Story = {
	args: {
		buttonAttributes: { type: 'button' },
		children: 'Common',
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

export const WithHref: Story = {
	args: {
		href: '/',
		children: 'With Href',
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

export const OnlyChildren: Story = {
	args: {
		children: 'Only Children',
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
