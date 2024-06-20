import type React from 'react';
import { useState, memo } from 'react';

type InputFieldProps = {
	input?: string | number;
	hint?: string | number;
};

function InputField({ input, hint }: InputFieldProps) {
	const [isInvalid, setIsInvalid] = useState<boolean>(false);

	// パスワードフォーム用のパスワード表示/非表示のフラグ
	// const [show, setShow] = useState<boolean>(false);
	// const handleClick = () => setShow(!show);

	const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value === '') {
			setIsInvalid(true);
		} else {
			setIsInvalid(false);
		}
	};

	return (
		<div className='grid gap-6 mb-6 md:grid-cols-2'>
			<div className='flex gap-4'>
				<label htmlFor={String(input)}>{input}</label>
				<input
					id={String(input)}
					type='text'
					className={`bg-gray-50 w-50% border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 ${isInvalid ? 'border-red-500' : ''}`}
					placeholder={String(hint)}
					onChange={(event) => {
						validate(event);
					}}
				/>
			</div>
		</div>
	);
}

export function MemolizedInputField() {
	memo(InputField);
}
