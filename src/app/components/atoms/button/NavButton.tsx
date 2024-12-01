'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';

type NavButtonProps = {
	href: string | object;
	children: React.ReactNode;
};

export const NavButton: React.FC<NavButtonProps> = ({ href, children }: NavButtonProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`bg-neutral-950 text-stone-300 text-base px-2 py-1 rounded-full text-transition duration-700 ease-in-out
                        hover:bg-white hover:text-black hover:text-lg link-hover
                        ${isActive ? '!bg-white text-stone-600 text-lg' : ''}`}
		>
			{children}
		</Link>
	);
};
