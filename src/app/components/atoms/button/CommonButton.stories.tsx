import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { CommonButton } from './CommonButton';

const meta: Meta<typeof CommonButton> = {
	title: 'components/atoms/button/CommonButton',
	component: CommonButton,
	parameters: {
		actions: {
			handles: ['mouseover', 'click'],
		},
	},
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof CommonButton>;

// href 属性をもたない場合のストーリー
export const Default: Story = {
	args: {
		buttonAttributes: { type: 'button' },
		children: 'Common',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// ボタンクリック
		await userEvent.click(button);
	},
};

// href 属性をもつ場合のストーリー
export const WithHref: Story = {
	args: {
		href: '/',
		children: 'With Href',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// 引数の href のリンクを持っているかの確認
		await expect(link).toHaveAttribute('href', WithHref.args?.href);

		// リンククリック
		await userEvent.click(link);
	},
};

// buttonAttributes 属性をもつ場合のストーリー
export const WithAttributes: Story = {
	args: {
		buttonAttributes: {
			type: 'submit',
		},
		children: 'Submit Button',
	},

	// ボタンの type が submit かどうか確認しクリックできるかをテスト
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const withAttributesButton = canvas.getByRole('button');

		// ボタンのタイプが 'submit' かを確認
		await expect(withAttributesButton).toHaveAttribute('type', 'submit');

		// ボタンクリック
		await userEvent.click(withAttributesButton);
	},
};

// 引数に children のみを与えている場合のストーリー
export const WithOnlyChildren: Story = {
	args: {
		children: 'Only Children',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const withOnlyChildrenButton = canvas.getByRole('button');

		// 引数が children のみの場合、ボタンのタイプが初期値で 'button' であることを確認する
		await expect(withOnlyChildrenButton).toHaveAttribute('type', 'button');

		// ボタンが buttonAttributes を持たないことを確認する
		await expect(withOnlyChildrenButton).not.toHaveAttribute('onClick');

		// ボタンをクリック
		await userEvent.click(withOnlyChildrenButton);
	},
};
