'use client';

import type React from 'react';
import { useCallback, useState } from 'react';

type InputFieldProps = {
	label: string;
	initialValue: string | number;
	hint?: string | number;
	required?: boolean;
	validate?: (value: string | number) => string | null;
	errorMessage?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
	label,
	initialValue = '',
	hint,
	required = false,
	validate,
	errorMessage = 'Error', // エラー文を出力する場合は初期値から更新すること
}) => {
	const [value, setValue] = useState<string | number>(initialValue);
	const [touched, setTouched] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	// パスワードフォーム用のパスワード表示/非表示のフラグ
	// const [show, setShow] = useState<boolean>(false);
	// const handleClick = () => setShow(!show);

	// 入力内容のバリデーション
	const validateInput = useCallback(
		(inputValue: string | number) => {
			if (required && String(inputValue).trim() === '') {
				setError(errorMessage || 'This field is required');
			} else if (validate) {
				const validationError = validate(inputValue);
				setError(validationError);
			} else {
				setError(null);
			}
		},
		[required, validate, errorMessage],
	);

	// 入力内容が変わったときの処理
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = event.target.value;
			setValue(newValue);
			if (touched) {
				validateInput(newValue);
			}
		},
		[touched, validateInput],
	);

	// 入力フィールドからフォーカスを外したときの処理
	const handleBlur = useCallback(() => {
		setTouched(true);
		validateInput(value);
	}, [validateInput, value]);

	return (
		<div className='grid gap-6 mb-6 md:grid-cols-2'>
			<div className='flex flex-col gap-4'>
				<label htmlFor={label} className='text-sm font-medium text-gray-700'>
					{label}
					{required && <span className='text-red-500 ml-1'>*</span>}
				</label>
				<input
					id={String(value)}
					type='text'
					className={`bg-gray-50 w-50% border text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
					${error ? 'border-red-500' : 'border-gray-300'}
					`}
					placeholder={String(hint)}
					value={value}
					onBlur={handleBlur}
					onChange={handleChange}
					aria-invalid={error ? 'true' : 'false'}
					aria-describedby={error ? `${label}-error` : undefined}
				/>
				{error && (
					<p id={`${label}-error`} className='text-xs text-red-500' role='alert'>
						{error}
					</p>
				)}
			</div>
		</div>
	);
};
