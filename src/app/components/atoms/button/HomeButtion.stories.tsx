import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { HomeButton } from './HomeButton';

const meta: Meta<typeof HomeButton> = {
	title: 'components/atoms/button/HomeButton',
	component: HomeButton,
	parameters: {
		actions: {
			handles: ['mouseover', 'click'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof HomeButton>;

// href 属性をもたない場合のストーリー
export const Default: Story = {
	parameters: {
		backgrounds: {
			default: 'Dark',
		},
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// 引数の href のリンクを持っているかの確認
		await expect(link).toHaveAttribute('href', '/');

		// リンククリック
		await userEvent.click(link);
	},
};
