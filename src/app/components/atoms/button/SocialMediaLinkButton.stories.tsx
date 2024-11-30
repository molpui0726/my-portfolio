import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { GithubLinkButton, QiitaLinkButton, XLinkButton } from './SocialMediaLinkButton';

const meta: Meta = {
	title: 'components/atoms/button/SocialMediaLinkButton',
	component: XLinkButton,
	parameters: {
		actions: {
			handles: ['mouseover'],
		},
	},
	decorators: [withActions],
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof XLinkButton>;

const commonTests = async (
	canvas: ReturnType<typeof within>,
	expectedLabel: string,
	expectedUsername: string,
) => {
	const link = canvas.getByRole('link');

	// リンクの存在確認
	await expect(link).toBeInTheDocument();

	// テキストの確認
	await expect(link).toHaveTextContent(expectedLabel);

	// ホバー時のテスト
	await userEvent.hover(link);
	const hoverText = canvas.getByText(expectedUsername);
	await expect(hoverText).toBeVisible();
	await expect(canvas.queryByText(expectedLabel)).not.toBeVisible();

	// ホバー解除時のテスト
	await userEvent.unhover(link);
	await expect(canvas.getByText(expectedLabel)).toBeVisible();
	await expect(hoverText).not.toBeVisible();

	// アクセシビリティテスト
	await expect(link).toHaveAttribute('href');
};

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
