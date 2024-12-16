import Link from 'next/link';
import type React from 'react';

type SectionCardProps = {
	title: string; // 上部に配置する題
	description: string; // 中央部に配置する詳細を表示するテキスト
	linkHref: string; // 下部に配置するテキストから遷移する先のページのパス
};

export const SectionCard: React.FC<SectionCardProps> = ({
	title,
	description,
	linkHref,
}: SectionCardProps) => {
	return (
		<div className='bg-gray-100 p-6 flex flex-col rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
			<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
			<p className='mt-auto text-gray-600 mb-2'>{description}</p>
			<Link
				href={linkHref}
				className='my-auto text-blue-500 hover:text-blue-700 px-4 rounded transition-colors duration-200 hover:underline'
			>
				&gt;&gt; Read More
			</Link>
		</div>
	);
};
