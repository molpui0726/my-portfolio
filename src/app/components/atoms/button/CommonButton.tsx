'use client';

import type React from 'react';
import Link from 'next/link';

type CommonButtonProps = {
	buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	href?: string;
	children: React.ReactNode;
};

const className =
	'inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95';

export const CommonButton = ({ buttonAttributes, href, children }: CommonButtonProps) => {
	// 両方が定義されている場合は、エラーメッセージを返す
	if (buttonAttributes && href) {
		console.error("Error: 'buttonAttributes' and 'href' cannot be used simultaneously.");
		return null;
	}

	if (href) {
		return (
			<Link href={href} className={className}>
				{children}
			</Link>
		);
	}

	if (buttonAttributes) {
		return (
			<button {...buttonAttributes} className={className}>
				{children}
			</button>
		);
	}

	// buttonAttributesもhrefもない場合は、type をただの button に
	return (
		<button type='button' className={className}>
			{children}
		</button>
	);
};
