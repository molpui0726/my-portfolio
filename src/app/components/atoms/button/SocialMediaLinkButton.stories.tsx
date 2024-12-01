import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { GithubLinkButton, QiitaLinkButton, XLinkButton } from './SocialMediaLinkButton';

const meta: Meta<typeof GithubButton> = {
	title: 'components/atoms/button/SocialMediaLinkButton',
	component: XLinkButton,
	parameters: {
		actions: {
			handles: ['mouseover'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof XLinkButton>;

// XLinkButton のストーリー
export const XButton: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// hover時のテスト
		await userEvent.hover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).toHaveClass('group');
		// unhover時のテスト
		await userEvent.unhover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).not.toHaveClass('group-hover');
	},
	render: () => <XLinkButton />,
};

// GithubLinkButton のストーリー
export const GithubButton: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// hover時のテスト
		await userEvent.hover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).toHaveClass('group');
		// unhover時のテスト
		await userEvent.unhover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).not.toHaveClass('group-hover');
	},
	render: () => <GithubLinkButton />,
};

// QiitaLinkButton のストーリー
export const QiitaButton: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// hover時のテスト
		await userEvent.hover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).toHaveClass('group');
		// unhover時のテスト
		await userEvent.unhover(canvas.getByRole('link'));
		await expect(canvas.getByRole('link')).not.toHaveClass('group-hover');
	},
	render: () => <QiitaLinkButton />,
};
