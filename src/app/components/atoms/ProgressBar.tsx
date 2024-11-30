'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

export const ProgressBar: React.FC = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = (scrollTop / docHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='fixed top-0 left-0 h-full w-3 bg-gray-200'>
			<div className='bg-black w-full' style={{ height: `${scrollProgress}%` }} />
		</div>
	);
};
