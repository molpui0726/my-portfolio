import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';
import { MemolizedInputField as InputField } from './InputField';

const meta = {
	title: 'components/atoms/InputField',
	component: InputField,
	decorators: [withActions],
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
	args: {
		input: '',
		hint: '',
	},
};

export const InputText: Story = {
	args: {
		input: 'sample input',
		hint: 'sample hint',
	},
};
