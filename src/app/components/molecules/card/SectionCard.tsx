import Link from 'next/link';
import type React from 'react';

type SectionCardProps = {
	title: string;
	description: string;
	linkHref: string;
	linkText: string;
};

export const SectionCard: React.FC<SectionCardProps> = ({
	title,
	description,
	linkHref,
	linkText,
}) => {
	return (
		<div className='bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
			<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
			<p className='text-gray-600 mb-4'>{description}</p>
			<Link
				href={linkHref}
				className='inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300'
			>
				{linkText}
			</Link>
		</div>
	);
};
