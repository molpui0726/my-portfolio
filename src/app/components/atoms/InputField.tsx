import type React from 'react';
import { useState, memo } from 'react';

type InputFieldProps = {
	input: string | number;
	hint: string | number;
};

const InputField: React.FC<InputFieldProps> = ({ input, hint }) => {
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
				<label htmlFor={input.toString()}>{input}</label>
				<input
					id={input.toString()}
					type='text'
					className={`bg-gray-50 w-50% border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 ${isInvalid ? 'border-red-500' : ''}`}
					placeholder={hint.toString()}
					onChange={(event) => {
						validate(event);
					}}
				/>
			</div>
		</div>
	);
};

export const MemolizedInputField = memo(InputField);
