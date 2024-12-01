import Link from 'next/link';
import type React from 'react';

export const HomeButton: React.FC = () => {
	return (
		<Link
			href='/'
			className="flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer transition-transform duration-600 ease-in-out
            before:content-[''] before:w-full before:h-full before:rounded-full before:border-4 before:border-transparent before:transition-transform before:duration-300
            hover:scale-75 hover:before:scale-150 hover:before:border-white"
		/>
	);
};
